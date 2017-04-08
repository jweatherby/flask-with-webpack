import os

BASE_DIR = os.path.dirname(os.path.dirname(__file__))
APP_ROOT = os.path.dirname(__file__)

class Config(object):

    DEBUG = True
    WEBPACK_MANIFEST_PATH = os.path.join(APP_ROOT, 'static', 'manifest.json')
