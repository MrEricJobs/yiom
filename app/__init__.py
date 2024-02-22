from flask import Flask

from .controller.page_controller import page_bp
from .controller.export_controller import export_bp

app = Flask(__name__, static_folder="../static/resource")

app.register_blueprint(page_bp)
app.register_blueprint(export_bp, url_prefix='/export')
