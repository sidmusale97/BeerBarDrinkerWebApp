from flask import Flask
from flask import jsonify
from flask import make_response
from flask import request
import simplejson as json
from BarBeerDrinker import database 
app = Flask(__name__)

@app.route('/api/bar', methods=["GET"])
def get_bars():
    return json.dumps(database.get_bars())

@app.route('/api/bar/<name>', methods=["GET"])
def find_bar(name):
	try:
		if name is None:
			raise ValueError("Bar is not specified.")
		bar = database.find_bar(name)
		if bar is None:
			return make_response("No bar found with the given name.", 404)
		return json.dumps(bar)
	except ValueError as e:
		return make_response(str(e), 400)
	except Exception as e:
		return make_response(str(e), 500)

@app.route('/api/bar/LargeSpender/<name>',methods =["GET"])
def getSpenders(name):
	try:
		if name is None:
			raise ValueError("Bar is not specified.")
		spenderList= database.LargeSpenders(name)
		if (not spenderList):
			return make_response("No bar found with the given name.", 404)
		return json.dumps(spenderList)
	except ValueError as e:
		return make_response(str(e), 400)
	except Exception as e:
		return make_response(str(e), 500)

@app.route('/api/bar/MostPopular/<name>',methods =["GET"])
def getPopular(name):
	try:
		if name is None:
			raise ValueError("Bar is not specified.")
		popList= database.MostPopular(name)
		if (not popList):
			return make_response("No bar found with the given name.", 404)
		return json.dumps(popList)
	except ValueError as e:
		return make_response(str(e), 400)
	except Exception as e:
		return make_response(str(e), 500)

@app.route('/api/bar/TopManf/<name>', methods = ["GET"])
def getManf(name):
	try:
		if name is None:
			raise ValueError("Bar is not specified.")
		topManfs= database.TopManf(name)
		if (not topManfs):
			return make_response("No bar found with the given name.", 404)
		return json.dumps(topManfs)
	except ValueError as e:
		return make_response(str(e), 400)
	except Exception as e:
		return make_response(str(e), 500)

@app.route('/api/bar/TimeDistHour/<name>', methods = ["GET"])
def getTimeDistHour(name):
	try:
		if name is None:
			raise ValueError("Bar is not specified.")
		timedist= database.barTimeDisthourly(name)
		if (not timedist):
			return make_response("No bar found with the given name.", 404)
		return json.dumps(timedist)
	except ValueError as e:
		return make_response(str(e), 400)
	except Exception as e:
		return make_response(str(e), 500)

@app.route('/api/bar/TimeDistWeek/<name>', methods = ["GET"])
def getTimeDistWeek(name):
	try:
		if name is None:
			raise ValueError("Bar is not specified.")
		timedist= database.barTimeDistweekly(name)
		if (not timedist):
			return make_response("No bar found with the given name.", 404)
		return json.dumps(timedist)
	except ValueError as e:
		return make_response(str(e), 400)
	except Exception as e:
		return make_response(str(e), 500)
@app.route('/')
def helo():
    return "Hello"

    