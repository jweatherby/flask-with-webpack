from flask import Flask
from flask_webpack import Webpack

webpack = Webpack()

app = Flask(__name__, static_path='/static')

app.config.from_object('backend.config.Config')

webpack.init_app(app)

from backend import views
