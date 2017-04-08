from flask import Flask
from flask_webpack import Webpack

app = Flask(__name__,
    static_path='/static')

app.config.from_object('backend.config.Config')

from backend import views
