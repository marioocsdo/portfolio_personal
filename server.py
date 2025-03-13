from flask import Flask, send_from_directory

app = Flask(__name__)

@app.route('/<path:filename>')
def serve_file(filename):
    return send_from_directory('.', filename)

app.run(host='0.0.0.0', port=8000)
