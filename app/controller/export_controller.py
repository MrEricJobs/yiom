from flask import Blueprint, jsonify, request
from pytube import YouTube

export_bp = Blueprint('ExportController', __name__)


@export_bp.route('/link', methods=['POST'])
def post_write():
    param = request.get_json()
    link = param['link']
    YouTube(link).streams.filter(only_audio=True).first().download()
    return jsonify({'state': 'success'})
