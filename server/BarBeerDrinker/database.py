from sqlalchemy import create_engine
from sqlalchemy import sql

from BarBeerDrinker import config

engine = create_engine(config.database_uri)

def get_bars():
    with engine.connect() as con:
        rs = con.execute("SELECT name, license, state, phone, address FROM bars;")
        return [dict(row) for row in rs]

def get_drinkers():
    with engine.connect() as con:
        rs = con.execute("SELECT name,state, phone, address FROM drinkers;")
        return [dict(row) for row in rs]

def get_bar_names():
	with engine.connect() as con:
		rs = con.execute("SELECT name FROM bars;")
		return [dict(row) for row in rs]

def get_beers():
	with engine.connect() as con:
		rs = con.execute("SELECT name, manf FROM beers;")
		return [dict(row) for row in rs]

def find_bar(name):
	with engine.connect() as con:
		query = sql.text("select name, license, state, phone, address FROM bars where name = :name;")
		rs = con.execute(query, name = name)
		result = rs.first()
		if result is None:
			return None
		return [dict(result)]

def find_beer(name):
	with engine.connect() as con:
		query = sql.text("select name from beers where name = :name;")
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
		query = sql.text('select i.name, sum(quantity) as quantity FROM hasItems h join bills b on b.billID = h.billID join items i on i.itemID = h.itemID where b.bar = :bar and i.name in (select name from beers) group by h.itemID order by sum(quantity) desc')
		rs = con.execute(query, bar = bar)
		if rs is None:
			return None
		return [dict(row) for row in rs]

def TopManf(bar):
	with engine.connect() as con:
		query = sql.text('select beers.manf, sum(quantity) as quantity FROM hasItems h join bills b on b.billID = h.billID join items i on i.itemID = h.itemID join beers on beers.name = i.name where b.bar = :bar group by beers.manf order by sum(quantity) desc')
		rs = con.execute(query, bar = bar)
		if rs is None:
			return None
		return [dict(row) for row in rs]


def barSellsMost(beer):
	with engine.connect() as con:
		query = sql.text('select bi1.bar, hasItems.quantity from (select s1.bar, bills.billID, i1.itemID from bills, (select * from sells where beer = :beer)s1,(select items.itemID from beers join items on items.name = beers.name)i1 where s1.bar = bills.bar)bi1, hasItems where bi1.billId = hasItems.billID and bi1.itemID = hasItems.itemID group by bi1.bar order by quantity desc')
		rs = con.execute(query, beer = beer)
		if rs is None:
			return None
		return [dict(row) for row in rs]

def barTimeDisthourly(bar):
	with engine.connect() as con:
		query = sql.text('select hour(time) as hour, sum(h.quantity) as quantity from bills b join hasItems h on b.billID = h.billID where b.bar = :bar group by hour(time) order by hour(time) asc')
		rs = con.execute(query, bar = bar)
		if rs is None:
			return None
		return [dict(row) for row in rs]

def biggestConsumers(beer):
	with engine.connect() as con:
		query = sql.text('select drinker, count(*) as How_many_times from has, (select billID from hasItems where itemID = (select itemID from items where name = :beer))bid where has.billID = bid.billID group by drinker order by How_many_times desc limit 10')
		rs = con.execute(query, beer = beer)
		if rs is None:
			return None
		return [dict(row) for row in rs]

def barTimeDistweekly(bar):
	with engine.connect() as con:
		query = sql.text('select dayofweek(time) as day, sum(h.quantity) as quantity from bills b join hasItems h on b.billID = h.billID where b.bar = :bar group by dayofweek(time) order by dayofweek(time) asc')
		rs = con.execute(query, bar = bar)

		if rs is None:
			return None
		return [dict(row) for row in rs]


def timeBeer(beer):
	with engine.connect() as con:
		query = sql.text('select month(b.time) as month, sum(h.quantity) as quantity from bills b join hasItems h on b.billID = h.billID join items i on i.itemID = h.itemID where i.name = :beer group by month(b.time) order by month asc')
		rs = con.execute(query, beer = beer)
		if rs is None:
			return None
		return [dict(row) for row in rs]



def drinkerTransactions(drinker):
		with engine.connect() as con:
			query = sql.text('select b.bar,t.total,t.tip , b.time from transactions t join has h on t.billID = h.billID join drinkers d on h.drinker = d.name join bills b on b.billID = t.billID where drinker = :drinker order by time')
			rs = con.execute(query, drinker = drinker)
			if rs is None:
				return None
			return [dict(row) for row in rs]

def drinkerFavItems(drinker):
	with engine.connect() as con:
			query = sql.text('select sum(hi.quantity) as quantity, i.name as item from hasItems hi join has h on h.billId = hi.billID join drinkers d on d.name = h.drinker join items i on i.itemID = hi.itemID where drinker = :drinker group by i.name order by sum(hi.quantity) desc')
			rs = con.execute(query, drinker = drinker)
			if rs is None:
				return None
			return [dict(row) for row in rs]

def drinkerMonthlySpending(drinker):
	with engine.connect() as con:
			query = sql.text('select month(b.time) as month,sum(t.total) as total from transactions t join bills b on t.billID = b.billID join has h on h.billID = t.billID  where h.drinker  = :drinker group by month(b.time) order by month(b.time) asc')
			rs = con.execute(query, drinker = drinker)
			if rs is None:
				return None
			return [dict(row) for row in rs]

