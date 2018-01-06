# coding=utf-8
import flask
from flask import Flask

APP = Flask(__name__)

@APP.route('/')
def home():
    ''' Throw the page '''
    return flask.render_template('index.html')
