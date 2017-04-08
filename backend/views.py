from flask import (
    render_template, jsonify, redirect, request,
    send_from_directory
)
from backend import app


@app.route("/oauth/")
def social():
    # api.post('user deetz')
    # app.set_session('')
    # app.return_cookie
    return redirect("/", code=302)


@app.route("/uploader/", methods=["POST"])
def images():
    return jsonify({'hello': 'uploader'})


@app.route("/api/", defaults={'path': ''})
@app.route("/api/<path:path>", methods=['GET', 'POST', 'PUT', 'DELETE'])
def api(path):
    # need csrf validation here
    return jsonify({'hello': 'api'})


# Any sort of route exceptions will be added here
# i.e. need specific api data
# Everything else will be routed to the index
# Hopefully, we'll only ever have to load initial data and
# retrieve everything else client side.
@app.route("/", defaults={'path': ''})
@app.route("/<path:path>")
def index(path):
    # get info from api according to path passed
    api_resp = None
    # resp = api.get('...')
    return render_template('index.html', initial_data=api_resp)
