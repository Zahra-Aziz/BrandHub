BrandHub is an online application that connects the world of shopping with all the brands
at one place. One can search their favorite clothing items, make comparisons and choose
the best products on one platform! This app is all about saving the time that you spend on browsing and searching for items of
your choice. This project combines various technical challenges such as Web scraping,
image detection, object detection, data analysis and recommendation engine.

MANUAL:
CleanData.ipynb file cleans the data of all products and stores a cleaned data string back in MongoDB for all products. This string is later used for Search By Text
TopBottom.ipynb is our model that detects whether an image is a top or bottom. This file trains our data
Topbottom1.py predicts whether a given image is a top or bottom. It uses the model trained TopBottom.ipynb
WebScraping.ipynb scrapes all the websites and stores their data in MongoDB
