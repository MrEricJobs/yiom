from flask import Flask

from .controller.page_controller import page_bp

app = Flask(__name__, static_folder="../static/resource")

app.register_blueprint(page_bp)
