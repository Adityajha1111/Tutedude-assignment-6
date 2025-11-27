from flask import Flask, jsonify, request
from flask_cors import CORS
import os


app = Flask(__name__)
CORS(app)


@app.route('/')
def hello():
 return jsonify({"message": "Hello from Flask backend"})


@app.route('/api/echo', methods=['POST'])
def echo():
 data = request.json or {}
 return jsonify({"you_sent": data})


if __name__ == '__main__':
 port = int(os.environ.get('PORT', 8000))
app.run(host='0.0.0.0', port=port)