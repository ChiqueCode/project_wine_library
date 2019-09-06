# Import dependencies
import csv
import os
import pandas as pd
import random
import numpy as np
from flask import (
    Flask,
    render_template,
    request,
    jsonify,
    make_response)

from json import dumps

# Sqlite
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine
from flask import Flask, jsonify, render_template, request
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.sql import func


# Set up Flask
app = Flask(__name__)

# Database Setup
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///db/wine.sqlite"
db = SQLAlchemy(app)

# Reflect an existing database and tables
Base = automap_base()
Base.prepare(db.engine, reflect=True)

# Rename table for reference
Wine = Base.classes.wine_table
Map_wine = Base.classes.map_wine_table
D3 = Base.classes.D3_table

# Home route
@app.route("/")
def index():
    return render_template("index.html")

# Route to the data
@app.route("/data")
def data_func():

 # TODO: Change "sel" to select all

    sel = [
        Wine.country,
        Wine.description,
        Wine.points,
        Wine.price,
        Wine.province,
        Wine.region_1,
        Wine.region_2,
        Wine.variety,
        Wine.winery
    ]

    # Query the records
    wine_results = db.session.query(*sel).all()

    # Creating Pandas DataFrame
    wine_df = pd.DataFrame(wine_results, columns = [
        "country", "description", "points", "price", "province", "region_1", "region_2", "variety", "winery"])

    # Return results in JSON format
    return jsonify(wine_df.to_dict(orient="records"))

# Map route
@app.route("/map")
def map_func():
    return render_template("map.html")
    app.add_url_rule('/', 'map_func', map_func)

# Route to get access the countries, points and price for the leaflet part
@app.route("/country")
def country_func():

    sel = [
        Map_wine.country,
        Map_wine.points,
        Map_wine.price,
        Map_wine.lat,
        Map_wine.lon
    ]

    country_results = db.session.query(*sel).all()

    # Getting the data into Pandas df
    country_df = pd.DataFrame(country_results, columns = [
                              "country", "points", "price", "lat", "lon"])

    # Return the resuts in JSON format
    return jsonify(country_df.to_dict(orient="records"))


@app.route('/d3')
def return_a_json_array():

    sel = [
        D3.country,
        D3.price,
        D3.quality
    ]

    d3_results = db.session.query(*sel).all()
    d3_df = pd.DataFrame(d3_results, columns = [
                              "country", "price", "quality"])

    # Crafting my array
    final_d3_list = d3_df.values.tolist()

    return make_response(dumps(final_d3_list))    


@app.route("/reviews")
def winery_func():
    sel = [Wine.country, func.count(Wine.description)]

    reviews_results = db.session.query(*sel).\
        group_by(Wine.country).\
        order_by(func.count(Wine.description).desc()).\
        limit(5).all()

    reviews_df = pd.DataFrame(reviews_results, columns=[
                              "Country", "Reviews Count"])

    # Format the data for Plotly
    reviews_data = {
        "x": reviews_df["Country"].values.tolist(),
        "y": reviews_df["Reviews Count"].values.tolist(),
        "type": "bar",
        "textfont": {
            "family": "\"Noto Sans SC\", sans-serif",
                "color": "#F2F2F2"
        },
        "hoverlabel": {
            "bgcolor": "#393E40",
            "font": {
                "family": "\"Noto Sans SC\", sans-serif",
                "color": "#F2F2F2"
            }
        },
        "marker": {
            "color": "#5A8C7A"
        }
    }
    return jsonify(reviews_data)


if __name__ == "__main__":
    # app.run() without arguments for Heroku deployment
    # app.run()
    # app.run() with arguments for local dev
    app.run(debug=True, port=8000, host="localhost", threaded=True)
