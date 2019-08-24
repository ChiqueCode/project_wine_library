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
    jsonify)

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
    wine_df = pd.DataFrame(wine_results, columns=[
                                 "country", "description", "points", "price", "province", "region_1", "region_2", "variety", "winery"])

    # Return results in JSON format
    return jsonify(wine_df.to_dict(orient="records"))

# Map route
@app.route("/map")
def map_func():
    return render_template("map.html")
    app.add_url_rule('/', 'map_func', map_func)
    

if __name__ == "__main__":
    # app.run() without arguments for Heroku deployment
    # app.run()
    # app.run() with arguments for local dev
    app.run(debug=True, port=8000, host="localhost", threaded=True)
