from flask import Flask
from flask_gzip import Gzip

from jvm.extensions import db, jwt, cors
from jvm.settings import ProdConfig
from jvm.router import router


def create_app(config_object=ProdConfig):
    app = Flask(__name__)
    app.url_map.strict_slashes = False
    app.config.from_object(config_object)
    with app.app_context():
        register_extensions(app)
        register_routes(app)
        db.create_all()
    return app


def register_extensions(app):
    db.init_app(app)
    jwt.init_app(app)
    cors.init_app(app)
    Gzip(app)


def register_routes(app):
    router(app)
