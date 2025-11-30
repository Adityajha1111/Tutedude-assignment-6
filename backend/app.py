from flask import Flask, jsonify, request

app = Flask(__name__)

@app.route('/')
def home():
    return jsonify({"message": "Hello from Flask Backend"})

@app.route('/api/sum', methods=['POST'])
def calc_sum():
    data = request.json
    return jsonify({"result": data["a"] + data["b"]})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
