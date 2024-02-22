from flask import Blueprint, send_file

page_bp = Blueprint('PageController', __name__)

@page_bp.route('/')
def main():
    return send_file("view/index.html")

@page_bp.route('/music')
def music():
    return send_file("view/music.html")
