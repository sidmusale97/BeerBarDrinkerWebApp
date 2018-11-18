from sqlalchemy import create_engine
from sqlalchemy import sql

from BarBeerDrinker import config

engine = create_engine(config.database_uri)

def get_bars():
    with engine.connect() as con:
        rs = con.execute("SELECT name, license, state, phone, address FROM bars;")
        return [dict(row) for row in rs]

def get_bar_names():
	with engine.connect() as con:
		rs = con.execute("SELECT name FROM bars;")
		return [dict(row) for row in rs]

def find_bar(name):
	with engine.connect() as con:
		query = sql.text("select name, license, state, phone, address FROM bars where name = :name;")
		rs = con.execute(query, name = name)
		result = rs.first()
		if result is None:
			return None
		return [dict(result)]

def LargeSpenders(bar):
	with engine.connect() as con:
		query = sql.text('select d.name, sum(t.total) as total from drinkers d join has h on d.name = h.drinker join transactions t on t.billID = h.billID join bills b on b.billID = h.billID  where b.bar = :bar group by h.drinker order by sum(t.total) desc')
		rs = con.execute(query, bar = bar)
		if rs is None:
			return None
		return [dict(row) for row in rs]
def MostPopular(bar):
	with engine.connect() as con:
		query = sql.text('select i.name, sum(quantity) as quantity FROM hasItems h join bills b on b.billID = h.billID join items i on i.itemID = h.itemID where b.bar = :bar group by h.itemID order by sum(quantity) desc')
		rs = con.execute(query, bar = bar)
		if rs is None:
			return None
		return [dict(row) for row in rs]