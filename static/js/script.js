const dataset = [
  ['US', 235.0, 96.0],
 ['US', 90.0, 96.0],
 ['US', 65.0, 96.0],
 ['US', 65.0, 95.0],
 ['US', 60.0, 95.0],
 ['US', 48.0, 95.0],
 ['US', 48.0, 95.0],
 ['US', 185.0, 95.0],
 ['US', 90.0, 95.0],
 ['US', 75.0, 95.0],
 ['US', 24.0, 95.0],
 ['US', 60.0, 95.0],
 ['US', 45.0, 95.0],
 ['US', 62.0, 94.0],
 ['US', 105.0, 94.0],
 ['US', 60.0, 94.0],
 ['US', 60.0, 94.0],
 ['US', 37.0, 90.0],
 ['US', 42.0, 90.0],
 ['US', 55.0, 90.0],
 ['US', 60.0, 90.0],
 ['US', 40.0, 90.0],
 ['US', 18.0, 90.0],
 ['US', 69.0, 90.0],
 ['US', 25.0, 90.0],
 ['US', 30.0, 90.0],
 ['US', 36.0, 91.0],
 ['US', 85.0, 91.0],
 ['US', 50.0, 91.0],
 ['US', 60.0, 91.0],
 ['US', 85.0, 91.0],
 ['US', 45.0, 91.0],
 ['US', 19.0, 91.0],
 ['US', 54.0, 91.0],
 ['US', 38.0, 91.0],
 ['US', 28.0, 91.0],
 ['US', 42.0, 91.0],
 ['US', 22.0, 91.0],
 ['US', 65.0, 91.0],
 ['US', 50.0, 91.0],
 ['US', 10.0, 86.0],
 ['US', 13.0, 86.0],
 ['US', 18.0, 86.0],
 ['US', 36.0, 86.0],
 ['US', 24.0, 86.0],
 ['US', 50.0, 86.0],
 ['US', 48.0, 86.0],
 ['US', 20.0, 86.0],
 ['US', 17.0, 86.0],
 ['US', 12.0, 86.0],
 ['US', 10.0, 86.0],
 ['US', 13.0, 86.0],
 ['US', 45.0, 86.0],
 ['US', 125.0, 86.0],
 ['US', 25.0, 86.0],
 ['US', 59.0, 91.0],
 ['US', 49.0, 91.0],
 ['US', 42.0, 91.0],
 ['US', 93.0, 91.0],
 ['US', 32.0, 91.0],
 ['US', 20.0, 91.0],
 ['US', 100.0, 90.0],
 ['US', 50.0, 90.0],
 ['US', 45.0, 90.0],
 ['US', 26.0, 90.0],
 ['US', 16.0, 90.0],
 ['US', 30.0, 90.0],
 ['US', 42.0, 90.0],
 ['US', 38.0, 90.0],
 ['US', 48.0, 90.0],
 ['US', 28.0, 90.0],
 ['US', 25.0, 90.0],
 ['US', 26.0, 90.0],
 ['US', 24.0, 90.0],
 ['US', 55.0, 90.0],
 ['US', 36.0, 90.0],
 ['US', 40.0, 90.0],
 ['US', 28.0, 90.0],
 ['US', 50.0, 89.0],
 ['US', 24.0, 89.0],
 ['US', 42.0, 89.0],
 ['US', 35.0, 89.0],
 ['US', 16.0, 89.0],
 ['US', 23.0, 89.0],
 ['US', 36.0, 89.0],
 ['US', 25.0, 89.0],
 ['US', 42.0, 89.0],
 ['US', 49.0, 89.0],
 ['US', 29.0, 89.0],
 ['US', 25.0, 88.0],
 ['US', 25.0, 88.0],
 ['US', 49.0, 88.0],
 ['US', 20.0, 88.0],
 ['US', 34.0, 88.0],
 ['US', 38.0, 88.0],
 ['US', 38.0, 88.0],
 ['US', 10.0, 87.0],
 ['US', 18.0, 87.0],
 ['US', 18.0, 87.0],
 ['France', 66.0, 95.0],
 ['France', 90.0, 95.0],
 ['France', 22.0, 90.0],
 ['France', 60.0, 90.0],
 ['France', 69.0, 90.0],
 ['France', 68.0, 90.0],
 ['France', 42.0, 90.0],
 ['France', 28.0, 90.0],
 ['France', 45.0, 91.0],
 ['France', 38.0, 91.0],
 ['France', 85.0, 91.0],
 ['France', 45.0, 91.0],
 ['France', 14.0, 86.0],
 ['France', 15.0, 86.0],
 ['France', 10.0, 86.0],
 ['France', 20.0, 86.0],
 ['France', 15.0, 86.0],
 ['France', 18.0, 90.0],
 ['France', 15.0, 90.0],
 ['France', 20.0, 89.0],
 ['France', 16.0, 89.0],
 ['France', 20.0, 87.0],
 ['France', 25.0, 87.0],
 ['France', 20.0, 87.0],
 ['France', 20.0, 87.0],
 ['France', 25.0, 87.0],
 ['France', 18.0, 87.0],
 ['France', 20.0, 87.0],
 ['France', 39.0, 93.0],
 ['France', 65.0, 93.0],
 ['France', 42.0, 93.0],
 ['France', 61.0, 93.0],
 ['France', 48.0, 93.0],
 ['France', 120.0, 93.0],
 ['France', 35.0, 92.0],
 ['France', 48.0, 92.0],
 ['France', 55.0, 92.0],
 ['France', 16.0, 88.0],
 ['France', 16.0, 88.0],
 ['France', 15.0, 88.0],
 ['France', 13.0, 88.0],
 ['France', 23.0, 88.0],
 ['France', 92.0, 92.0],
 ['France', 94.0, 92.0],
 ['France', 30.0, 92.0],
 ['France', 60.0, 91.0],
 ['France', 16.0, 91.0],
 ['France', 40.0, 91.0],
 ['France', 100.0, 91.0],
 ['France', 35.0, 94.0],
 ['France', 44.0, 94.0],
 ['France', 20.0, 94.0],
 ['France', 44.0, 94.0],
 ['France', 100.0, 94.0],
 ['France', 70.0, 94.0],
 ['France', 54.0, 91.0],
 ['France', 33.0, 90.0],
 ['France', 70.0, 90.0],
 ['France', 27.0, 90.0],
 ['France', 22.0, 90.0],
 ['France', 30.0, 90.0],
 ['France', 80.0, 90.0],
 ['France', 27.0, 90.0],
 ['France', 20.0, 90.0],
 ['France', 10.0, 86.0],
 ['France', 15.0, 86.0],
 ['France', 11.0, 89.0],
 ['France', 19.0, 89.0],
 ['France', 28.0, 89.0],
 ['France', 15.0, 89.0],
 ['France', 29.0, 92.0],
 ['France', 63.0, 92.0],
 ['France', 18.0, 92.0],
 ['France', 50.0, 90.0],
 ['France', 45.0, 90.0],
 ['France', 59.0, 90.0],
 ['France', 24.0, 90.0],
 ['France', 20.0, 90.0],
 ['France', 20.0, 90.0],
 ['France', 25.0, 94.0],
 ['France', 40.0, 94.0],
 ['France', 25.0, 93.0],
 ['France', 36.0, 93.0],
 ['France', 25.0, 91.0],
 ['France', 60.0, 91.0],
 ['France', 25.0, 90.0],
 ['France', 13.0, 90.0],
 ['France', 45.0, 90.0],
 ['France', 27.0, 88.0],
 ['France', 35.0, 88.0],
 ['France', 26.0, 88.0],
 ['France', 25.0, 88.0],
 ['France', 28.0, 88.0],
 ['France', 25.0, 88.0],
 ['France', 18.0, 88.0],
 ['France', 20.0, 88.0],
 ['France', 24.0, 90.0],
 ['France', 9.0, 85.0],
 ['France', 16.0, 85.0],
 ['Italy', 80.0, 95.0],
 ['Italy', 135.0, 90.0],
 ['Italy', 29.0, 90.0],
 ['Italy', 23.0, 90.0],
 ['Italy', 29.0, 90.0],
 ['Italy', 39.0, 90.0],
 ['Italy', 30.0, 90.0],
 ['Italy', 90.0, 90.0],
 ['Italy', 50.0, 90.0],
 ['Italy', 100.0, 90.0],
 ['Italy', 60.0, 90.0],
 ['Italy', 75.0, 91.0],
 ['Italy', 59.0, 91.0],
 ['Italy', 85.0, 91.0],
 ['Italy', 80.0, 91.0],
 ['Italy', 22.0, 86.0],
 ['Italy', 45.0, 86.0],
 ['Italy', 45.0, 90.0],
 ['Italy', 18.0, 90.0],
 ['Italy', 25.0, 89.0],
 ['Italy', 22.0, 89.0],
 ['Italy', 40.0, 89.0],
 ['Italy', 57.0, 89.0],
 ['Italy', 49.0, 93.0],
 ['Italy', 58.0, 93.0],
 ['Italy', 80.0, 93.0],
 ['Italy', 58.0, 93.0],
 ['Italy', 43.0, 93.0],
 ['Italy', 69.0, 92.0],
 ['Italy', 34.0, 88.0],
 ['Italy', 56.0, 88.0],
 ['Italy', 46.0, 88.0],
 ['Italy', 49.0, 88.0],
 ['Italy', 27.0, 92.0],
 ['Italy', 33.0, 92.0],
 ['Italy', 60.0, 92.0],
 ['Italy', 25.0, 91.0],
 ['Italy', 23.0, 91.0],
 ['Italy', 85.0, 94.0],
 ['Italy', 38.0, 94.0],
 ['Italy', 29.0, 94.0],
 ['Italy', 75.0, 91.0],
 ['Italy', 90.0, 91.0],
 ['Italy', 115.0, 91.0],
 ['Italy', 60.0, 91.0],
 ['Italy', 85.0, 91.0],
 ['Italy', 22.0, 90.0],
 ['Italy', 19.0, 90.0],
 ['Italy', 60.0, 90.0],
 ['Italy', 60.0, 90.0],
 ['Italy', 75.0, 90.0],
 ['Italy', 95.0, 90.0],
 ['Italy', 60.0, 90.0],
 ['Italy', 70.0, 90.0],
 ['Italy', 90.0, 90.0],
 ['Italy', 30.0, 90.0],
 ['Italy', 32.0, 90.0],
 ['Italy', 35.0, 90.0],
 ['Italy', 75.0, 87.0],
 ['Italy', 98.0, 87.0],
 ['Italy', 28.0, 87.0],
 ['Italy', 17.0, 87.0],
 ['Italy', 52.0, 87.0],
 ['Italy', 58.0, 87.0],
 ['Italy', 60.0, 87.0],
 ['Italy', 15.0, 86.0],
 ['Italy', 43.0, 89.0],
 ['Italy', 55.0, 89.0],
 ['Italy', 30.0, 89.0],
 ['Italy', 45.0, 89.0],
 ['Italy', 30.0, 89.0],
 ['Italy', 45.0, 92.0],
 ['Italy', 50.0, 92.0],
 ['Italy', 22.0, 90.0],
 ['Italy', 35.0, 94.0],
 ['Italy', 26.0, 91.0],
 ['Italy', 41.0, 91.0],
 ['Italy', 21.0, 91.0],
 ['Italy', 75.0, 90.0],
 ['Italy', 75.0, 90.0],
 ['Italy', 75.0, 90.0],
 ['Italy', 30.0, 90.0],
 ['Italy', 42.0, 90.0],
 ['Italy', 18.0, 90.0],
 ['Italy', 35.0, 90.0],
 ['Italy', 88.0, 90.0],
 ['Italy', 45.0, 90.0],
 ['Italy', 74.0, 90.0],
 ['Italy', 80.0, 88.0],
 ['Italy', 77.0, 88.0],
 ['Italy', 62.0, 90.0],
 ['Italy', 80.0, 90.0],
 ['Italy', 60.0, 90.0],
 ['Italy', 25.0, 90.0],
 ['Italy', 9.0, 85.0],
 ['Italy', 10.0, 85.0],
 ['Italy', 23.0, 89.0],
 ['Italy', 28.0, 89.0],
 ['Italy', 45.0, 89.0],
 ['Italy', 110.0, 89.0],
 ['Spain', 110.0, 96.0],
 ['Spain', 73.0, 95.0],
 ['Spain', 65.0, 95.0],
 ['Spain', 110.0, 95.0],
 ['Spain', 80.0, 95.0],
 ['Spain', 79.0, 95.0],
 ['Spain', 220.0, 95.0],
 ['Spain', 17.0, 90.0],
 ['Spain', 26.0, 90.0],
 ['Spain', 22.0, 90.0],
 ['Spain', 17.0, 90.0],
 ['Spain', 17.0, 90.0],
 ['Spain', 17.0, 89.0],
 ['Spain', 44.0, 89.0],
 ['Spain', 44.0, 89.0],
 ['Spain', 30.0, 89.0],
 ['Spain', 25.0, 88.0],
 ['Spain', 22.0, 87.0],
 ['Spain', 18.0, 87.0],
 ['Spain', 30.0, 88.0],
 ['Spain', 17.0, 88.0],
 ['Spain', 68.0, 94.0],
 ['Spain', 22.0, 91.0],
 ['Spain', 32.0, 91.0],
 ['Spain', 35.0, 90.0],
 ['Spain', 28.0, 90.0],
 ['Spain', 26.0, 90.0],
 ['Spain', 49.0, 90.0],
 ['Spain', 18.0, 87.0],
 ['Spain', 27.0, 87.0],
 ['Spain', 25.0, 87.0],
 ['Spain', 15.0, 87.0],
 ['Spain', 16.0, 87.0],
 ['Spain', 15.0, 87.0],
 ['Spain', 28.0, 87.0],
 ['Spain', 23.0, 89.0],
 ['Spain', 25.0, 89.0],
 ['Spain', 12.0, 89.0],
 ['Spain', 18.0, 89.0],
 ['Spain', 20.0, 90.0],
 ['Spain', 17.0, 90.0],
 ['Spain', 64.0, 93.0],
 ['Spain', 91.0, 93.0],
 ['Spain', 20.0, 90.0],
 ['Spain', 11.0, 88.0],
 ['Spain', 35.0, 90.0],
 ['Spain', 26.0, 90.0],
 ['Spain', 50.0, 85.0],
 ['Spain', 26.0, 89.0],
 ['Spain', 21.0, 90.0],
 ['Spain', 35.0, 90.0],
 ['Spain', 25.0, 90.0],
 ['Spain', 36.0, 90.0],
 ['Spain', 26.0, 90.0],
 ['Spain', 30.0, 90.0],
 ['Spain', 30.0, 93.0],
 ['Spain', 61.0, 93.0],
 ['Spain', 50.0, 89.0],
 ['Spain', 35.0, 90.0],
 ['Spain', 24.0, 90.0],
 ['Spain', 25.0, 88.0],
 ['Spain', 15.0, 87.0],
 ['Spain', 15.0, 90.0],
 ['Spain', 20.0, 90.0],
 ['Spain', 30.0, 90.0],
 ['Spain', 37.0, 93.0],
 ['Spain', 44.0, 93.0],
 ['Spain', 136.0, 93.0],
 ['Spain', 30.0, 85.0],
 ['Spain', 15.0, 87.0],
 ['Spain', 10.0, 87.0],
 ['Spain', 34.0, 89.0],
 ['Spain', 25.0, 88.0],
 ['Spain', 22.0, 88.0],
 ['Spain', 14.0, 88.0],
 ['Spain', 8.0, 88.0],
 ['Spain', 16.0, 88.0],
 ['Spain', 30.0, 88.0],
 ['Spain', 26.0, 90.0],
 ['Spain', 32.0, 90.0],
 ['Spain', 50.0, 90.0],
 ['Spain', 90.0, 90.0],
 ['Spain', 33.0, 90.0],
 ['Spain', 32.0, 90.0],
 ['Spain', 55.0, 90.0],
 ['Spain', 9.0, 84.0],
 ['Spain', 14.0, 84.0],
 ['Spain', 15.0, 87.0],
 ['Spain', 15.0, 88.0],
 ['Spain', 15.0, 88.0],
 ['Spain', 16.0, 88.0],
 ['Spain', 30.0, 88.0],
 ['Spain', 25.0, 88.0],
 ['Spain', 15.0, 88.0],
 ['Spain', 32.0, 90.0],
 ['Spain', 77.0, 92.0],
 ['Spain', 30.0, 92.0],
 ['Spain', 10.0, 90.0],
 ['Spain', 18.0, 87.0],
 ['Spain', 20.0, 87.0],
 ['Spain', 27.0, 87.0],
 ['Chile', 20.0, 89.0],
 ['Chile', 19.0, 89.0],
 ['Chile', 30.0, 89.0],
 ['Chile', 61.0, 89.0],
 ['Chile', 19.0, 89.0],
 ['Chile', 30.0, 92.0],
 ['Chile', 20.0, 89.0],
 ['Chile', 20.0, 89.0],
 ['Chile', 20.0, 89.0],
 ['Chile', 25.0, 89.0],
 ['Chile', 17.0, 89.0],
 ['Chile', 24.0, 90.0],
 ['Chile', 30.0, 92.0],
 ['Chile', 100.0, 92.0],
 ['Chile', 17.0, 89.0],
 ['Chile', 22.0, 89.0],
 ['Chile', 26.0, 89.0],
 ['Chile', 20.0, 89.0],
 ['Chile', 100.0, 91.0],
 ['Chile', 30.0, 91.0],
 ['Chile', 100.0, 91.0],
 ['Chile', 27.0, 90.0],
 ['Chile', 85.0, 92.0],
 ['Chile', 13.0, 88.0],
 ['Chile', 23.0, 91.0],
 ['Chile', 20.0, 91.0],
 ['Chile', 22.0, 91.0],
 ['Chile', 20.0, 88.0],
 ['Chile', 12.0, 88.0],
 ['Chile', 44.0, 88.0],
 ['Chile', 20.0, 88.0],
 ['Chile', 35.0, 88.0],
 ['Chile', 15.0, 90.0],
 ['Chile', 22.0, 90.0],
 ['Chile', 85.0, 91.0],
 ['Chile', 60.0, 90.0],
 ['Chile', 25.0, 90.0],
 ['Chile', 25.0, 90.0],
 ['Chile', 28.0, 88.0],
 ['Chile', 15.0, 88.0],
 ['Chile', 71.0, 91.0],
 ['Chile', 45.0, 91.0],
 ['Chile', 19.0, 91.0],
 ['Chile', 75.0, 91.0],
 ['Chile', 30.0, 91.0],
 ['Chile', 30.0, 90.0],
 ['Chile', 15.0, 88.0],
 ['Chile', 18.0, 88.0],
 ['Chile', 20.0, 88.0],
 ['Chile', 20.0, 88.0],
 ['Chile', 40.0, 91.0],
 ['Chile', 35.0, 91.0],
 ['Chile', 17.0, 89.0],
 ['Chile', 20.0, 89.0],
 ['Chile', 20.0, 88.0],
 ['Chile', 24.0, 89.0],
 ['Chile', 20.0, 89.0],
 ['Chile', 49.0, 90.0],
 ['Chile', 25.0, 89.0],
 ['Chile', 235.0, 89.0],
 ['Chile', 95.0, 89.0],
 ['Chile', 14.0, 87.0],
 ['Chile', 20.0, 87.0],
 ['Chile', 24.0, 87.0],
 ['Chile', 28.0, 89.0],
 ['Chile', 22.0, 89.0],
 ['Chile', 24.0, 89.0],
 ['Chile', 22.0, 89.0],
 ['Chile', 17.0, 89.0],
 ['Chile', 10.0, 87.0],
 ['Chile', 25.0, 87.0],
 ['Chile', 40.0, 89.0],
 ['Chile', 25.0, 90.0],
 ['Chile', 50.0, 90.0],
 ['Chile', 25.0, 87.0],
 ['Chile', 15.0, 87.0],
 ['Chile', 12.0, 87.0],
 ['Chile', 19.0, 87.0],
 ['Chile', 20.0, 89.0],
 ['Chile', 30.0, 90.0],
 ['Chile', 12.0, 87.0],
 ['Chile', 24.0, 87.0],
 ['Chile', 50.0, 88.0],
 ['Chile', 30.0, 90.0],
 ['Chile', 24.0, 90.0],
 ['Chile', 20.0, 87.0],
 ['Chile', 13.0, 87.0],
 ['Chile', 12.0, 87.0],
 ['Chile', 27.0, 88.0],
 ['Chile', 15.0, 88.0],
 ['Chile', 16.0, 88.0],
 ['Chile', 25.0, 87.0],
 ['Chile', 15.0, 87.0],
 ['Chile', 14.0, 87.0],
 ['Chile', 14.0, 87.0],
 ['Chile', 14.0, 87.0],
 ['Chile', 15.0, 88.0],
 ['Chile', 15.0, 89.0],
 ['Chile', 22.0, 87.0],
 ['Chile', 13.0, 87.0],
 ['Argentina', 30.0, 91.0],
 ['Argentina', 25.0, 91.0],
 ['Argentina', 12.0, 86.0],
 ['Argentina', 15.0, 86.0],
 ['Argentina', 26.0, 88.0],
 ['Argentina', 15.0, 87.0],
 ['Argentina', 15.0, 88.0],
 ['Argentina', 50.0, 94.0],
 ['Argentina', 10.0, 86.0],
 ['Argentina', 23.0, 86.0],
 ['Argentina', 15.0, 86.0],
 ['Argentina', 14.0, 86.0],
 ['Argentina', 25.0, 88.0],
 ['Argentina', 26.0, 86.0],
 ['Argentina', 39.0, 86.0],
 ['Argentina', 14.0, 85.0],
 ['Argentina', 13.0, 85.0],
 ['Argentina', 30.0, 85.0],
 ['Argentina', 15.0, 85.0],
 ['Argentina', 40.0, 93.0],
 ['Argentina', 11.0, 85.0],
 ['Argentina', 12.0, 85.0],
 ['Argentina', 18.0, 88.0],
 ['Argentina', 29.0, 88.0],
 ['Argentina', 12.0, 88.0],
 ['Argentina', 38.0, 93.0],
 ['Argentina', 35.0, 85.0],
 ['Argentina', 13.0, 85.0],
 ['Argentina', 11.0, 87.0],
 ['Argentina', 38.0, 87.0],
 ['Argentina', 18.0, 87.0],
 ['Argentina', 21.0, 88.0],
 ['Argentina', 28.0, 88.0],
 ['Argentina', 30.0, 90.0],
 ['Argentina', 24.0, 90.0],
 ['Argentina', 16.0, 85.0],
 ['Argentina', 12.0, 84.0],
 ['Argentina', 12.0, 84.0],
 ['Argentina', 17.0, 84.0],
 ['Argentina', 17.0, 84.0],
 ['Argentina', 18.0, 87.0],
 ['Argentina', 12.0, 87.0],
 ['Argentina', 15.0, 88.0],
 ['Argentina', 50.0, 92.0],
 ['Argentina', 30.0, 90.0],
 ['Argentina', 11.0, 84.0],
 ['Argentina', 11.0, 84.0],
 ['Argentina', 15.0, 83.0],
 ['Argentina', 12.0, 83.0],
 ['Argentina', 20.0, 87.0],
 ['Argentina', 19.0, 87.0],
 ['Argentina', 18.0, 88.0],
 ['Argentina', 25.0, 88.0],
 ['Argentina', 23.0, 83.0],
 ['Argentina', 8.0, 82.0],
 ['Argentina', 12.0, 81.0],
 ['Argentina', 18.0, 81.0],
 ['Argentina', 19.0, 86.0],
 ['Argentina', 32.0, 87.0],
 ['Argentina', 40.0, 92.0],
 ['Argentina', 40.0, 92.0],
 ['Argentina', 21.0, 86.0],
 ['Argentina', 38.0, 92.0],
 ['Argentina', 20.0, 90.0],
 ['Argentina', 15.0, 87.0],
 ['Argentina', 39.0, 87.0],
 ['Argentina', 12.0, 87.0],
 ['Argentina', 28.0, 87.0],
 ['Argentina', 22.0, 89.0],
 ['Argentina', 13.0, 86.0],
 ['Argentina', 11.0, 86.0],
 ['Argentina', 16.0, 86.0],
 ['Argentina', 25.0, 89.0],
 ['Argentina', 35.0, 89.0],
 ['Argentina', 14.0, 86.0],
 ['Argentina', 15.0, 86.0],
 ['Argentina', 17.0, 87.0],
 ['Argentina', 14.0, 87.0],
 ['Argentina', 19.0, 87.0],
 ['Argentina', 30.0, 91.0],
 ['Argentina', 49.0, 91.0],
 ['Argentina', 20.0, 89.0],
 ['Argentina', 15.0, 89.0],
 ['Argentina', 23.0, 87.0],
 ['Argentina', 12.0, 86.0],
 ['Argentina', 45.0, 91.0],
 ['Argentina', 15.0, 85.0],
 ['Argentina', 14.0, 85.0],
 ['Argentina', 22.0, 85.0],
 ['Argentina', 13.0, 85.0],
 ['Argentina', 100.0, 89.0],
 ['Argentina', 11.0, 86.0],
 ['Argentina', 30.0, 91.0],
 ['Argentina', 13.0, 85.0],
 ['Argentina', 15.0, 85.0],
 ['Argentina', 13.0, 86.0],
 ['Argentina', 13.0, 88.0],
 ['Argentina', 21.0, 88.0],
 ['Argentina', 15.0, 88.0],
 ['Argentina', 25.0, 88.0],
 ['Australia', 36.0, 91.0],
 ['Australia', 20.0, 90.0],
 ['Australia', 42.0, 88.0],
 ['Australia', 65.0, 90.0],
 ['Australia', 65.0, 90.0],
 ['Australia', 25.0, 88.0],
 ['Australia', 25.0, 90.0],
 ['Australia', 33.0, 90.0],
 ['Australia', 125.0, 98.0],
 ['Australia', 17.0, 90.0],
 ['Australia', 25.0, 90.0],
 ['Australia', 34.0, 89.0],
 ['Australia', 150.0, 96.0],
 ['Australia', 42.0, 87.0],
 ['Australia', 34.0, 89.0],
 ['Australia', 20.0, 89.0],
 ['Australia', 20.0, 89.0],
 ['Australia', 200.0, 95.0],
 ['Australia', 95.0, 95.0],
 ['Australia', 185.0, 95.0],
 ['Australia', 35.0, 89.0],
 ['Australia', 16.0, 89.0],
 ['Australia', 90.0, 94.0],
 ['Australia', 13.0, 89.0],
 ['Australia', 65.0, 94.0],
 ['Australia', 55.0, 94.0],
 ['Australia', 50.0, 94.0],
 ['Australia', 120.0, 93.0],
 ['Australia', 120.0, 93.0],
 ['Australia', 54.0, 93.0],
 ['Australia', 100.0, 93.0],
 ['Australia', 185.0, 93.0],
 ['Australia', 75.0, 93.0],
 ['Australia', 42.0, 86.0],
 ['Australia', 50.0, 93.0],
 ['Australia', 83.0, 93.0],
 ['Australia', 45.0, 93.0],
 ['Australia', 20.0, 88.0],
 ['Australia', 15.0, 88.0],
 ['Australia', 20.0, 88.0],
 ['Australia', 15.0, 88.0],
 ['Australia', 43.0, 92.0],
 ['Australia', 43.0, 92.0],
 ['Australia', 24.0, 92.0],
 ['Australia', 29.0, 92.0],
 ['Australia', 30.0, 92.0],
 ['Australia', 31.0, 92.0],
 ['Australia', 12.0, 88.0],
 ['Australia', 13.0, 88.0],
 ['Australia', 17.0, 87.0],
 ['Australia', 24.0, 92.0],
 ['Australia', 75.0, 92.0],
 ['Australia', 40.0, 92.0],
 ['Australia', 25.0, 92.0],
 ['Australia', 49.0, 92.0],
 ['Australia', 40.0, 87.0],
 ['Australia', 65.0, 87.0],
 ['Australia', 39.0, 92.0],
 ['Australia', 125.0, 92.0],
 ['Australia', 20.0, 87.0],
 ['Australia', 35.0, 91.0],
 ['Australia', 65.0, 91.0],
 ['Australia', 20.0, 87.0],
 ['Australia', 35.0, 91.0],
 ['Australia', 65.0, 91.0],
 ['Australia', 30.0, 91.0],
 ['Australia', 12.0, 87.0],
 ['Australia', 18.0, 91.0],
 ['Australia', 25.0, 91.0],
 ['Australia', 40.0, 91.0],
 ['Australia', 14.0, 87.0],
 ['Australia', 120.0, 91.0],
 ['Australia', 25.0, 91.0],
 ['Australia', 25.0, 91.0],
 ['Australia', 65.0, 91.0],
 ['Australia', 9.0, 86.0],
 ['Australia', 72.0, 91.0],
 ['Australia', 17.0, 91.0],
 ['Australia', 37.0, 91.0],
 ['Australia', 20.0, 91.0],
 ['Australia', 29.0, 91.0],
 ['Australia', 20.0, 91.0],
 ['Australia', 45.0, 91.0],
 ['Australia', 28.0, 91.0],
 ['Australia', 13.0, 85.0],
 ['Australia', 15.0, 90.0],
 ['Australia', 25.0, 90.0],
 ['Australia', 15.0, 90.0],
 ['Australia', 52.0, 90.0],
 ['Australia', 25.0, 90.0],
 ['Australia', 30.0, 90.0],
 ['Australia', 15.0, 90.0],
 ['Australia', 150.0, 97.0],
 ['Australia', 225.0, 96.0],
 ['Australia', 150.0, 96.0],
 ['Australia', 125.0, 95.0],
 ['Australia', 100.0, 95.0],
 ['Portugal', 23.0, 91.0],
 ['Portugal', 15.0, 91.0],
 ['Portugal', 12.0, 86.0],
 ['Portugal', 10.0, 86.0],
 ['Portugal', 12.0, 86.0],
 ['Portugal', 7.0, 86.0],
 ['Portugal', 20.0, 89.0],
 ['Portugal', 55.0, 93.0],
 ['Portugal', 41.0, 93.0],
 ['Portugal', 40.0, 92.0],
 ['Portugal', 35.0, 92.0],
 ['Portugal', 95.0, 92.0],
 ['Portugal', 18.0, 91.0],
 ['Portugal', 130.0, 91.0],
 ['Portugal', 30.0, 91.0],
 ['Portugal', 14.0, 91.0],
 ['Portugal', 42.0, 91.0],
 ['Portugal', 15.0, 86.0],
 ['Portugal', 10.0, 86.0],
 ['Portugal', 12.0, 86.0],
 ['Portugal', 15.0, 86.0],
 ['Portugal', 13.0, 86.0],
 ['Portugal', 30.0, 86.0],
 ['Portugal', 45.0, 89.0],
 ['Portugal', 23.0, 92.0],
 ['Portugal', 70.0, 92.0],
 ['Portugal', 40.0, 92.0],
 ['Portugal', 23.0, 92.0],
 ['Portugal', 19.0, 91.0],
 ['Portugal', 16.0, 91.0],
 ['Portugal', 33.0, 90.0],
 ['Portugal', 19.0, 90.0],
 ['Portugal', 11.0, 85.0],
 ['Portugal', 10.0, 85.0],
 ['Portugal', 18.0, 89.0],
 ['Portugal', 7.0, 89.0],
 ['Portugal', 17.0, 89.0],
 ['Portugal', 11.0, 92.0],
 ['Portugal', 44.0, 92.0],
 ['Portugal', 18.0, 89.0],
 ['Portugal', 7.0, 89.0],
 ['Portugal', 17.0, 89.0],
 ['Portugal', 60.0, 89.0],
 ['Portugal', 18.0, 89.0],
 ['Portugal', 18.0, 90.0],
 ['Portugal', 30.0, 90.0],
 ['Portugal', 10.0, 85.0],
 ['Portugal', 9.0, 85.0],
 ['Portugal', 7.0, 85.0],
 ['Portugal', 12.0, 85.0],
 ['Portugal', 28.0, 85.0],
 ['Portugal', 11.0, 85.0],
 ['Portugal', 7.0, 85.0],
 ['Portugal', 8.0, 85.0],
 ['Portugal', 10.0, 85.0],
 ['Portugal', 9.0, 85.0],
 ['Portugal', 35.0, 91.0],
 ['Portugal', 17.0, 91.0],
 ['Portugal', 22.0, 91.0],
 ['Portugal', 28.0, 91.0],
 ['Portugal', 75.0, 91.0],
 ['Portugal', 30.0, 91.0],
 ['Portugal', 26.0, 91.0],
 ['Portugal', 16.0, 91.0],
 ['Portugal', 35.0, 88.0],
 ['Portugal', 13.0, 90.0],
 ['Portugal', 17.0, 92.0],
 ['Portugal', 53.0, 92.0],
 ['Portugal', 25.0, 92.0],
 ['Portugal', 35.0, 92.0],
 ['Portugal', 25.0, 92.0],
 ['Portugal', 15.0, 85.0],
 ['Portugal', 15.0, 85.0],
 ['Portugal', 15.0, 85.0],
 ['Portugal', 10.0, 85.0],
 ['Portugal', 7.0, 85.0],
 ['Portugal', 14.0, 85.0],
 ['Portugal', 10.0, 85.0],
 ['Portugal', 12.0, 89.0],
 ['Portugal', 20.0, 88.0],
 ['Portugal', 40.0, 91.0],
 ['Portugal', 22.0, 91.0],
 ['Portugal', 100.0, 90.0],
 ['Portugal', 10.0, 85.0],
 ['Portugal', 7.0, 85.0],
 ['Portugal', 14.0, 85.0],
 ['Portugal', 18.0, 84.0],
 ['Portugal', 13.0, 84.0],
 ['Portugal', 12.0, 84.0],
 ['Portugal', 10.0, 84.0],
 ['Portugal', 10.0, 84.0],
 ['Portugal', 10.0, 84.0],
 ['Portugal', 23.0, 92.0],
 ['Portugal', 32.0, 92.0],
 ['Portugal', 58.0, 91.0],
 ['Portugal', 22.0, 91.0],
 ['Portugal', 22.0, 91.0],
 ['Portugal', 18.0, 90.0],
 ['Portugal', 15.0, 90.0],
 ['Portugal', 20.0, 88.0],
 ['New Zealand', 57.0, 94.0],
 ['New Zealand', 57.0, 94.0],
 ['New Zealand', 46.0, 93.0],
 ['New Zealand', 33.0, 93.0],
 ['New Zealand', 40.0, 93.0],
 ['New Zealand', 63.0, 92.0],
 ['New Zealand', 49.0, 92.0],
 ['New Zealand', 25.0, 92.0],
 ['New Zealand', 34.0, 92.0],
 ['New Zealand', 65.0, 92.0],
 ['New Zealand', 61.0, 92.0],
 ['New Zealand', 29.0, 92.0],
 ['New Zealand', 28.0, 92.0],
 ['New Zealand', 35.0, 91.0],
 ['New Zealand', 30.0, 91.0],
 ['New Zealand', 46.0, 91.0],
 ['New Zealand', 20.0, 91.0],
 ['New Zealand', 23.0, 91.0],
 ['New Zealand', 20.0, 91.0],
 ['New Zealand', 26.0, 90.0],
 ['New Zealand', 24.0, 90.0],
 ['New Zealand', 15.0, 90.0],
 ['New Zealand', 19.0, 90.0],
 ['New Zealand', 21.0, 90.0],
 ['New Zealand', 17.0, 90.0],
 ['New Zealand', 26.0, 90.0],
 ['New Zealand', 15.0, 90.0],
 ['New Zealand', 19.0, 90.0],
 ['New Zealand', 21.0, 90.0],
 ['New Zealand', 20.0, 90.0],
 ['New Zealand', 16.0, 90.0],
 ['New Zealand', 25.0, 90.0],
 ['New Zealand', 14.0, 90.0],
 ['New Zealand', 18.0, 90.0],
 ['New Zealand', 20.0, 90.0],
 ['New Zealand', 34.0, 90.0],
 ['New Zealand', 25.0, 90.0],
 ['New Zealand', 17.0, 90.0],
 ['New Zealand', 60.0, 93.0],
 ['New Zealand', 51.0, 93.0],
 ['New Zealand', 49.0, 93.0],
 ['New Zealand', 22.0, 90.0],
 ['New Zealand', 30.0, 90.0],
 ['New Zealand', 15.0, 90.0],
 ['New Zealand', 24.0, 90.0],
 ['New Zealand', 35.0, 90.0],
 ['New Zealand', 45.0, 93.0],
 ['New Zealand', 16.0, 89.0],
 ['New Zealand', 65.0, 89.0],
 ['New Zealand', 19.0, 89.0],
 ['New Zealand', 39.0, 92.0],
 ['New Zealand', 85.0, 92.0],
 ['New Zealand', 19.0, 89.0],
 ['New Zealand', 16.0, 89.0],
 ['New Zealand', 17.0, 89.0],
 ['New Zealand', 19.0, 89.0],
 ['New Zealand', 45.0, 92.0],
 ['New Zealand', 85.0, 92.0],
 ['New Zealand', 18.0, 89.0],
 ['New Zealand', 22.0, 89.0],
 ['New Zealand', 25.0, 89.0],
 ['New Zealand', 61.0, 92.0],
 ['New Zealand', 44.0, 92.0],
 ['New Zealand', 20.0, 89.0],
 ['New Zealand', 20.0, 89.0],
 ['New Zealand', 14.0, 89.0],
 ['New Zealand', 30.0, 89.0],
 ['New Zealand', 17.0, 89.0],
 ['New Zealand', 50.0, 91.0],
 ['New Zealand', 50.0, 91.0],
 ['New Zealand', 22.0, 89.0],
 ['New Zealand', 62.0, 91.0],
 ['New Zealand', 14.0, 88.0],
 ['New Zealand', 20.0, 88.0],
 ['New Zealand', 15.0, 88.0],
 ['New Zealand', 12.0, 88.0],
 ['New Zealand', 15.0, 88.0],
 ['New Zealand', 55.0, 92.0],
 ['New Zealand', 22.0, 88.0],
 ['New Zealand', 20.0, 88.0],
 ['New Zealand', 22.0, 92.0],
 ['New Zealand', 99.0, 92.0],
 ['New Zealand', 40.0, 92.0],
 ['New Zealand', 13.0, 88.0],
 ['New Zealand', 13.0, 88.0],
 ['New Zealand', 35.0, 92.0],
 ['New Zealand', 23.0, 92.0],
 ['New Zealand', 25.0, 92.0],
 ['New Zealand', 19.0, 87.0],
 ['New Zealand', 44.0, 92.0],
 ['New Zealand', 19.0, 87.0],
 ['New Zealand', 90.0, 91.0],
 ['New Zealand', 32.0, 87.0],
 ['New Zealand', 30.0, 91.0],
 ['New Zealand', 32.0, 91.0],
 ['New Zealand', 60.0, 91.0],
 ['New Zealand', 33.0, 91.0],
 ['New Zealand', 39.0, 91.0],
 ['New Zealand', 28.0, 91.0],
 ['New Zealand', 16.0, 87.0],
 ['Austria', 21.0, 93.0],
 ['Austria', 19.0, 93.0],
 ['Austria', 25.0, 93.0],
 ['Austria', 27.0, 93.0],
 ['Austria', 19.0, 93.0],
 ['Austria', 17.0, 92.0],
 ['Austria', 18.0, 92.0],
 ['Austria', 17.0, 92.0],
 ['Austria', 18.0, 92.0],
 ['Austria', 22.0, 92.0],
 ['Austria', 15.0, 92.0],
 ['Austria', 25.0, 92.0],
 ['Austria', 15.0, 92.0],
 ['Austria', 25.0, 92.0],
 ['Austria', 24.0, 92.0],
 ['Austria', 17.0, 92.0],
 ['Austria', 14.0, 92.0],
 ['Austria', 22.0, 92.0],
 ['Austria', 20.0, 92.0],
 ['Austria', 20.0, 92.0],
 ['Austria', 28.0, 92.0],
 ['Austria', 17.0, 92.0],
 ['Austria', 20.0, 92.0],
 ['Austria', 25.0, 92.0],
 ['Austria', 43.0, 92.0],
 ['Austria', 15.0, 92.0],
 ['Austria', 18.0, 92.0],
 ['Austria', 22.0, 91.0],
 ['Austria', 15.0, 91.0],
 ['Austria', 18.0, 91.0],
 ['Austria', 13.0, 91.0],
 ['Austria', 17.0, 91.0],
 ['Austria', 17.0, 91.0],
 ['Austria', 17.0, 91.0],
 ['Austria', 21.0, 91.0],
 ['Austria', 20.0, 91.0],
 ['Austria', 20.0, 91.0],
 ['Austria', 28.0, 91.0],
 ['Austria', 20.0, 91.0],
 ['Austria', 18.0, 91.0],
 ['Austria', 20.0, 91.0],
 ['Austria', 21.0, 91.0],
 ['Austria', 16.0, 91.0],
 ['Austria', 24.0, 91.0],
 ['Austria', 20.0, 91.0],
 ['Austria', 21.0, 91.0],
 ['Austria', 16.0, 91.0],
 ['Austria', 24.0, 91.0],
 ['Austria', 23.0, 91.0],
 ['Austria', 23.0, 91.0],
 ['Austria', 14.0, 91.0],
 ['Austria', 23.0, 91.0],
 ['Austria', 16.0, 91.0],
 ['Austria', 25.0, 91.0],
 ['Austria', 19.0, 91.0],
 ['Austria', 32.0, 91.0],
 ['Austria', 15.0, 91.0],
 ['Austria', 17.0, 91.0],
 ['Austria', 17.0, 91.0],
 ['Austria', 14.0, 90.0],
 ['Austria', 43.0, 90.0],
 ['Austria', 15.0, 90.0],
 ['Austria', 15.0, 90.0],
 ['Austria', 18.0, 90.0],
 ['Austria', 14.0, 90.0],
 ['Austria', 43.0, 90.0],
 ['Austria', 15.0, 90.0],
 ['Austria', 15.0, 90.0],
 ['Austria', 18.0, 90.0],
 ['Austria', 20.0, 90.0],
 ['Austria', 18.0, 90.0],
 ['Austria', 19.0, 90.0],
 ['Austria', 23.0, 90.0],
 ['Austria', 20.0, 90.0],
 ['Austria', 19.0, 90.0],
 ['Austria', 15.0, 90.0],
 ['Austria', 23.0, 90.0],
 ['Austria', 15.0, 90.0],
 ['Austria', 14.0, 90.0],
 ['Austria', 19.0, 90.0],
 ['Austria', 25.0, 90.0],
 ['Austria', 14.0, 90.0],
 ['Austria', 18.0, 90.0],
 ['Austria', 15.0, 90.0],
 ['Austria', 16.0, 90.0],
 ['Austria', 17.0, 90.0],
 ['Austria', 27.0, 90.0],
 ['Austria', 19.0, 90.0],
 ['Austria', 22.0, 90.0],
 ['Austria', 12.0, 90.0],
 ['Austria', 14.0, 90.0],
 ['Austria', 18.0, 90.0],
 ['Austria', 20.0, 90.0],
 ['Austria', 14.0, 90.0],
 ['Austria', 15.0, 90.0],
 ['Austria', 15.0, 90.0],
 ['Austria', 15.0, 90.0],
 ['Austria', 14.0, 90.0],
 ['Austria', 17.0, 90.0],
 ['Austria', 19.0, 90.0],
 ['Germany', 23.0, 91.0],
 ['Germany', 39.0, 91.0],
 ['Germany', 25.0, 90.0],
 ['Germany', 31.0, 90.0],
 ['Germany', 40.0, 90.0],
 ['Germany', 26.0, 89.0],
 ['Germany', 22.0, 90.0],
 ['Germany', 17.0, 90.0],
 ['Germany', 31.0, 90.0],
 ['Germany', 36.0, 91.0],
 ['Germany', 23.0, 91.0],
 ['Germany', 25.0, 91.0],
 ['Germany', 21.0, 91.0],
 ['Germany', 28.0, 91.0],
 ['Germany', 25.0, 91.0],
 ['Germany', 38.0, 91.0],
 ['Germany', 22.0, 91.0],
 ['Germany', 26.0, 91.0],
 ['Germany', 23.0, 91.0],
 ['Germany', 23.0, 91.0],
 ['Germany', 30.0, 90.0],
 ['Germany', 30.0, 90.0],
 ['Germany', 25.0, 89.0],
 ['Germany', 60.0, 90.0],
 ['Germany', 17.0, 91.0],
 ['Germany', 20.0, 91.0],
 ['Germany', 24.0, 91.0],
 ['Germany', 30.0, 90.0],
 ['Germany', 19.0, 90.0],
 ['Germany', 23.0, 90.0],
 ['Germany', 22.0, 90.0],
 ['Germany', 45.0, 89.0],
 ['Germany', 18.0, 91.0],
 ['Germany', 22.0, 90.0],
 ['Germany', 25.0, 90.0],
 ['Germany', 23.0, 90.0],
 ['Germany', 25.0, 90.0],
 ['Germany', 31.0, 90.0],
 ['Germany', 35.0, 90.0],
 ['Germany', 18.0, 90.0],
 ['Germany', 60.0, 90.0],
 ['Germany', 12.0, 88.0],
 ['Germany', 25.0, 90.0],
 ['Germany', 20.0, 90.0],
 ['Germany', 34.0, 90.0],
 ['Germany', 36.0, 90.0],
 ['Germany', 22.0, 90.0],
 ['Germany', 18.0, 90.0],
 ['Germany', 26.0, 90.0],
 ['Germany', 18.0, 90.0],
 ['Germany', 16.0, 90.0],
 ['Germany', 30.0, 90.0],
 ['Germany', 30.0, 90.0],
 ['Germany', 23.0, 88.0],
 ['Germany', 40.0, 90.0],
 ['Germany', 21.0, 90.0],
 ['Germany', 25.0, 90.0],
 ['Germany', 25.0, 90.0],
 ['Germany', 33.0, 90.0],
 ['Germany', 18.0, 90.0],
 ['Germany', 28.0, 90.0],
 ['Germany', 18.0, 90.0],
 ['Germany', 24.0, 90.0],
 ['Germany', 16.0, 88.0],
 ['Germany', 12.0, 88.0],
 ['Germany', 68.0, 90.0],
 ['Germany', 42.0, 90.0],
 ['Germany', 24.0, 90.0],
 ['Germany', 18.0, 90.0],
 ['Germany', 20.0, 90.0],
 ['Germany', 17.0, 90.0],
 ['Germany', 23.0, 89.0],
 ['Germany', 25.0, 88.0],
 ['Germany', 30.0, 90.0],
 ['Germany', 66.0, 90.0],
 ['Germany', 17.0, 90.0],
 ['Germany', 23.0, 90.0],
 ['Germany', 20.0, 90.0],
 ['Germany', 28.0, 90.0],
 ['Germany', 12.0, 90.0],
 ['Germany', 25.0, 90.0],
 ['Germany', 37.0, 90.0],
 ['Germany', 14.0, 90.0],
 ['Germany', 38.0, 90.0],
 ['Germany', 27.0, 90.0],
 ['Germany', 23.0, 89.0],
 ['Germany', 19.0, 89.0],
 ['Germany', 17.0, 89.0],
 ['Germany', 18.0, 88.0],
 ['Germany', 13.0, 88.0],
 ['Germany', 14.0, 88.0],
 ['Germany', 35.0, 90.0],
 ['Germany', 33.0, 90.0],
 ['Germany', 18.0, 90.0],
 ['Germany', 23.0, 90.0],
 ['Germany', 32.0, 90.0],
 ['Germany', 15.0, 90.0],
 ['Germany', 20.0, 89.0],
 ['Germany', 14.0, 89.0],
 ['Germany', 13.0, 89.0],
 ['Greece', 24.0, 89.0],
 ['Greece', 21.0, 89.0],
 ['Greece', 18.0, 89.0],
 ['Greece', 17.0, 89.0],
 ['Greece', 17.0, 89.0],
 ['Greece', 20.0, 90.0],
 ['Greece', 20.0, 90.0],
 ['Greece', 13.0, 89.0],
 ['Greece', 19.0, 88.0],
 ['Greece', 28.0, 90.0],
 ['Greece', 12.0, 88.0],
 ['Greece', 20.0, 89.0],
 ['Greece', 25.0, 87.0],
 ['Greece', 20.0, 89.0],
 ['Greece', 30.0, 89.0],
 ['Greece', 21.0, 89.0],
 ['Greece', 17.0, 87.0],
 ['Greece', 25.0, 87.0],
 ['Greece', 18.0, 88.0],
 ['Greece', 13.0, 87.0],
 ['Greece', 10.0, 87.0],
 ['Greece', 33.0, 87.0],
 ['Greece', 15.0, 87.0],
 ['Greece', 25.0, 87.0],
 ['Greece', 30.0, 87.0],
 ['Greece', 20.0, 88.0],
 ['Greece', 23.0, 88.0],
 ['Greece', 17.0, 86.0],
 ['Greece', 13.0, 86.0],
 ['Greece', 11.0, 88.0],
 ['Greece', 30.0, 87.0],
 ['Greece', 30.0, 87.0],
 ['Greece', 13.0, 85.0],
 ['Greece', 13.0, 85.0],
 ['Greece', 16.0, 85.0],
 ['Greece', 12.0, 84.0],
 ['Greece', 39.0, 91.0],
 ['Greece', 35.0, 91.0],
 ['Greece', 22.0, 91.0],
 ['Greece', 25.0, 90.0],
 ['Greece', 16.0, 90.0],
 ['Greece', 17.0, 90.0],
 ['Greece', 50.0, 90.0],
 ['Greece', 14.0, 89.0],
 ['Greece', 35.0, 87.0],
 ['Greece', 23.0, 86.0],
 ['Greece', 15.0, 87.0],
 ['Greece', 35.0, 87.0],
 ['Greece', 30.0, 87.0],
 ['Greece', 16.0, 87.0],
 ['Greece', 30.0, 87.0],
 ['Greece', 14.0, 87.0],
 ['Greece', 22.0, 86.0],
 ['Greece', 9.0, 86.0],
 ['Greece', 20.0, 86.0],
 ['Greece', 14.0, 86.0],
 ['Greece', 15.0, 86.0],
 ['Greece', 20.0, 86.0],
 ['Greece', 19.0, 86.0],
 ['Greece', 15.0, 86.0],
 ['Greece', 50.0, 86.0],
 ['Greece', 12.0, 86.0],
 ['Greece', 9.0, 86.0],
 ['Greece', 20.0, 86.0],
 ['Greece', 80.0, 86.0],
 ['Greece', 15.0, 85.0],
 ['Greece', 16.0, 85.0],
 ['Greece', 10.0, 85.0],
 ['Greece', 15.0, 85.0],
 ['Greece', 14.0, 85.0],
 ['Greece', 44.0, 85.0],
 ['Greece', 13.0, 85.0],
 ['Greece', 15.0, 85.0],
 ['Greece', 25.0, 85.0],
 ['Greece', 27.0, 85.0],
 ['Greece', 18.0, 90.0],
 ['Greece', 25.0, 89.0],
 ['Greece', 40.0, 89.0],
 ['Greece', 15.0, 89.0],
 ['Greece', 37.0, 89.0],
 ['Greece', 19.0, 89.0],
 ['Greece', 20.0, 89.0],
 ['Greece', 22.0, 89.0],
 ['Greece', 40.0, 88.0],
 ['Greece', 20.0, 88.0],
 ['Greece', 22.0, 88.0],
 ['Greece', 19.0, 88.0],
 ['Greece', 16.0, 88.0],
 ['Greece', 12.0, 88.0],
 ['Greece', 60.0, 88.0],
 ['Greece', 20.0, 88.0],
 ['Greece', 30.0, 87.0],
 ['Greece', 22.0, 87.0],
 ['Greece', 12.0, 87.0],
 ['Greece', 28.0, 87.0],
 ['Greece', 17.0, 87.0],
 ['Greece', 19.0, 87.0],
 ['Greece', 22.0, 87.0],
 ['Greece', 50.0, 86.0],
 ['Greece', 12.0, 86.0]
];

var url = "/d3";

// d3.json(url, function(dataset) {
//   console.log(dataset);
// })

  // var svg = d3
  //  .select("chart")

  // Constracting an SVG element
  const width = 800;
  const height = 500;
  const padding = 60;
  const marginTop = 120;

  // legend svg
  // TODO: Get rid of the legend 
  const legendRectSize = 18;
  const legendSpacing = 8;

  // currency save in const with dollars formatting
  const formatCurrency = d3.format("$,");

  // Min and max for y axis for Price values
  const maxPrice = d3.max(dataset, d => d[1]);
  const minPrice = d3.min(dataset, d => d[1]);

  const yScale = d3
    .scaleLinear()
    .domain([minPrice, maxPrice])
    .range([height - padding, marginTop]);

  const maxQuality = d3.max(dataset, d => d[2]); // was d[3]
  const minQuality = d3.min(dataset, d => d[2]); // was d[3]

  const xScale = d3
    .scaleLinear()
    .domain([minQuality, maxQuality])
    .range([padding, width - padding]);

  var maxQualityBadName = d3.max(dataset, d => d[2]);
  var minQualityBadName = d3.min(dataset, d => d[2]);
  // console.log(maxQuality);

  const rScale = d3
    .scaleLinear()
    .domain([minQualityBadName, maxQualityBadName])

    // .range is the size of the circle
    .range([3, 3]);

  const xAxis = d3.axisBottom(xScale);
  const yAxis = d3.axisLeft(yScale);

  const tip = d3
    .tip()
    .attr("class", "d3-tip")
    // .offset is for the bindpopup distance from a circle
    .offset([-10, 0])
    .html(d => {
      return (
        "<div class='tip-name'>" +
        d[0] +
        "</div><div class='tip-gdp'>Price per bottle of Wine:<br>" +
        formatCurrency(d[1]) +
        "</div><div class='tip-gdp'>Quality of Wine: " +
        d[2] +
        "</div>"
      );
    });

  const svg = d3
    .select("body")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .attr("class", "chart")
    .attr("id", "chart");

  svg.call(tip);

  const color = d3.scaleOrdinal(d3.schemeCategory20);

  svg
    .selectAll("circle")
    .data(dataset)
    .enter()
    .append("circle")
    .attr("cx", d => xScale(d[2]))
    .attr("cy", d => yScale(d[1]))
    .attr("r", d => rScale(d[2]))

    // This is where the circle get filled based on country
    .attr("fill", d => color(d[0])) // was d[4] before for continent
    .attr("id", d => d[0])
    .attr("class", d => `circle ${d[0]}`) // was d[4] before for continent
    .on("mouseover", d => {
      // only show tooltips for visible plots
      if (!document.getElementById(d[0]).classList.contains("hidden")) {
        tip.show(d);
      }
    })
    .on("mouseout", tip.hide);

  // TODO: Break down the code below

  svg
    .append("g")
    .attr("transform", `translate(0, ${height - padding})`)
    .call(xAxis);

  // add titles to the axes
  svg
    .append("text")
    .attr("text-anchor", "middle")
    .attr(
      "transform",
      "translate(" + padding / 2 + "," + height / 2 + ")rotate(-90)"
    )
    .text("Price per Bottle of Wine");

  svg
    .append("text")
    .attr("text-anchor", "middle")
    .attr(
      "transform",
      "translate(" + width / 2 + "," + (height - padding / 3) + ")"
    )
    .text("Quality of Wine");

  svg
    .append("g")
    .attr("transform", `translate(${padding}, 0)`)
    .call(yAxis);

  const legend = svg
    .selectAll(".legend")
    .data(color.domain())
    .enter()
    .append("g")
    .attr("class", "legend")
    .attr("id", d => d)
    .attr("transform", function(d, i) {
      var height = legendRectSize + legendSpacing;
      var offset = (height * color.domain().length) / 2;
      // var horz = -2 * legendRectSize;
      let row = i <= 5 ? 1 : 2;
      let horz = i <= 5 ? 30 + (i * width) / 6 : 30 + ((i - 6) * width) / 6;
      const vert = height * row;
      return "translate(" + horz + "," + vert + ")";
    })
    .on("click", d => {
      const allCircles = Array.from(document.getElementsByClassName("circle"));
      const otherCountries = allCircles.filter(el => !el.classList.contains(d));
      const countryMatches = Array.from(document.getElementsByClassName(d));
      otherCountries.forEach(el => {
        el.classList.remove("visible");
        el.classList.add("hidden");
      });
      countryMatches.forEach(el => {
        el.classList.remove("hidden");
        el.classList.add("visible");
      });
      document.getElementById("btn").classList.add("btn-show");
      document.getElementById("btn").classList.remove("btn-hide");
    });

  legend
    .append("circle")
    .attr("r", legendRectSize / 2)
    .style("fill", color)
    .style("stroke", color);

  legend
    .append("text")
    .attr("x", legendRectSize)
    .attr("y", legendRectSize - legendSpacing * 1.5)
    .text(function(d) {
      return d;
    });

  const showAll = () => {
    const allCircles = Array.from(document.getElementsByClassName("circle"));
    allCircles.forEach(el => {
      el.classList.remove("hidden");
      el.classList.add("visible");
    });
    document.getElementById("btn").classList.add("btn-hide");
    document.getElementById("btn").classList.remove("btn-show");
  };

// document.getElementById("btn").addEventListener("click", showAll);
