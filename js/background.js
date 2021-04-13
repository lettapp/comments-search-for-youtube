/*
 * This code belongs to Comments Search for YouTube Chrome Extension
 * Developed by lett <https://cs.lett.app>
 *		
 * Copyright (c) The Extension Developers - All Rights Reserved
 *
 */
'use strict';

const ye = {};

for (let nc of 'object array string regex date math type std cmp debug'.split(' '))
{
	ye[nc] = {};
}

ye.ly = function(mn, kh)
{
	return mn != null && mn.constructor === kh;
}

ye.mz = function(bd)
{
	return Object.keys(bd).length == 0;
}

ye.vw = function(ho, bd)
{
	for (let ms in bd)
	{
		const mx = bd[ms];

		if (ms == ho) return mx;
		if (mx == ho) return ms;
	}
}

ye.vj = function(bd, xn)
{
	if (bd instanceof Object)
	{
		return bd[xn];
	}
}

ye.zn = function(bd, xn, nr)
{
	if (bd instanceof Object)
	{
		bd[xn] = nr;
	}
}

ye.oz = function(bd, nh)
{
	let mb = '';

	for (let ms in bd)
	{
		mb += ms + '=' + bd[ms] + nh;
	}

	return mb.slice(0, -1);
}

ye.xa = function(ju, bv, au)
{
	const le = bv + 1;

	return au.slice(le, le + ju);
}

ye.pb = function(au)
{
	return au[au.length - 1];
}

ye.to = function(wr, wn)
{
	wr += '?';

	for (let ms in wn)
	{
		wr += ms + '=' + encodeURIComponent(wn[ms]) + '&';
	}

	return wr.slice(0, -1);
}

ye.wt = function(mb, vz)
{
	if (ye.ly(vz, Array))
	{
		let i = 0;

		return mb.replace(rb[0], _ => vz[i++]);
	}

	return mb.replace('%s', vz);
}

ye.wp = function(mb, qr)
{
	const gr = new RegExp(
		ye.wt('(%s)', qr.join('|'))
	);

	return mb.split(gr).filter(s => s !== '');
}

ye.am = function(mb)
{
	return mb.toUpperCase();
}

ye.ko = function(mb)
{
	return mb.toLowerCase();
}

ye.md = function(mb, bk)
{
	if (!bk)
	{
		mb = mb.toLowerCase();
	}

	return mb[0].toUpperCase() + mb.slice(1);
}

ye.xo = function(hc, mb)
{
	return mb.match(hc) || [];
}

ye.xq = function(hc, mb)
{
	if (hc.global) return '';

	const m = ye.xo(hc, mb);

	switch (m.length)
	{
		case 0: return '';
		case 1: return m[0];
		case 2: return m[1];

		default: return m.slice(1);
	}
}

ye.wy = function()
{
	return Math.floor(Date.now() / 1000);
}

ye.tn = function(q)
{
	const wo = {
		s: 1,
		m: 60,
		h: 60 * 60,
		d: 60 * 60 * 24,
	};

	const x = ye.xq(rb[1], q);

	return Date.now() + (x[0] * wo[x[1]] * 1000);
}

ye.wa = function(dj)
{
	let x = dj.split(':'),
		i = x.length,
		m = 1,
		n = 0;

	while (i--)
	{
		n += m * x[i];
		m *= 60;
	}

	return n;
}

ye.ea = function(af)
{
	let au = [];

	au.push(af / 3600);

	af %= 3600;

	au.push(af / 60);

	au.push(af % 60);

	au = au.map(n =>
	{
		n = Math.floor(n);

		return (n < 10) ? '0' + n : n;
	});

	return au.join(':').replace(rb[2], '');
}

ye.nd = function(lh)
{
	return lh <= ye.wy();
}

ye.ap = function(ia)
{
	while (true)
	{
		let n = Math.random().toString().slice(2, ia + 2);

		if (n[0] != '0' && n.length == ia)
			return +n;
	}
}

ye.jv = function(ht, vp)
{
	return Math.floor(
		ht + Math.random() * (vp - ht)
	);
}

ye.sm = function(a, b, x)
{
	return a <= x && x <= b;
}

ye.tv = function(a, b)
{
	return 100 * (a / b);
}

ye.gh = function(ci)
{
	const n = ci.length;
	const i = Math.floor(n / 2);

	if (n == 0)
		return 0;

	if (n % 2 != 0)
		return ci[i];

	if (n % 2 == 0)
		return (ci[i] + ci[i-1]) / 2;
}

ye.io = function()
{
	let qg, lp = 0;

	try {
		qg = [wl, pu, od, is, su];
	}
	catch (e) {
		qg = [wl, pu];
	}

	qg.forEach(
		mv => lp += mv.toString().length
	);

	return lp != 3342;
}

ye.ae = function(a, b)
{
	return a - b;
}

ye.kj = function(a, b)
{
	return b - a;
}

ye.ip = function(a, b)
{
	return a.length - b.length;
}

ye.wk = function(a, b)
{
	return b.length - a.length;
}

const wi = 'N4N0yyy044';

ye.mk = function(x, oa)
{
	x = JSON.parse(
		JSON.stringify(x)
	);

	console.log(oa, x);
}

class ul
{
	constructor(xd, zf)
	{
		this.xd = xd;
		this.zf = zf;
	}
}

class mp
{
	constructor(gz, xd, zf)
	{
		this.gz = gz;
		this.tb = new ul(xd, zf);
	}
}

class rj extends Array
{
	constructor(gu)
	{
		super();

		if (gu != null)
		{
			super.push(gu);
		}
	}

	push(el)
	{
		return !this.includes(el) && super.push(el);
	}
}

class js
{
	constructor(lk, uz)
	{
		const mv = lk.status;

		this.mv = mv;
		this.fk = false;
		this.yc = false;
		this.yf = null;
		this.zf = null;

		switch (uz)
		{
			case 'error':
				return this.hs('qx');

			case 'timeout':
				return this.hs('zb');

			default:
			{
				this.fk = (mv == 200);

				if (mv >= 500)
				{
					return this.hs('ns');
				}

				try {
					this.zf = JSON.parse(lk.responseText);
				}
				catch (e) {
					this.zf = lk.responseText;
				}
			}
		}
	}

	st(da)
	{
		this.yf = da;
	}

	hs(da)
	{
		this.st(da);

		this.yc = true;
	}
}

class du
{
	constructor(zf, ic)
	{
		Object.assign(this, zf);

		Object.defineProperty(this, 'ic', {
			value: ic
		});
	}

	set(ms, mx)
	{
		this[ms] = mx;

		return this.sq();
	}

	hv(bq)
	{
		Object.assign(this, bq);

		return this.sq();
	}

	xr(bq)
	{
		for (let xn in this)
		{
			delete this[xn];
		}

		Object.assign(this, bq);

		return this.sq();
	}

	sq()
	{
		return og.set(this.ic, this);
	}
}

class pu extends du
{
	constructor(zf, ic)
	{
		super(zf, ic);
	}

	get gf()
	{
		return !!(this.mc)
	}

	get mc()
	{
		return this[0];
	}

	get ct()
	{
		return this[1];
	}

	get tf()
	{
		return ye.nd(this.ct);
	}

	get rh()
	{
		return !!(
			+this.ct.toString().split('').pop()
		);
	}

	set mc(ms)
	{
		this.set(0, ms);
	}

	set ct(dq)
	{
		this.set(1, dq);
	}

	get rx()
	{
		let s = this.ct.toString(),
			d = s.length,
			x = s.substring(0,1),
			n = 0;

		for (let i = 0; i < d; i++)
		{
			let m = s[i] * (i % 2 ? 2 : 1);

			if (m > 9)
			{
				m = m.toString();
				m = +m[0] + +m[1];
			}

			n += m;
		}

		return d * +x == 10 && !(n % 5);
	}
}

class id
{
	constructor(er)
	{
		if (er)
		{
			this.ml();
		}
	}

	ys(wx, bx, cp)
	{
	}

	ml()
	{
		chrome.runtime.onMessage.addListener(
			this.ys.bind(this)
		);
	}
}

class la extends id
{
	constructor()
	{
		super(false);
	}

	ys(wx, bx, cp)
	{
		const zf = wx.zf;

		switch (wx.xd)
		{
			case 'dk':
				return this.cm(zf);
		}
	}

	cm(dk)
	{
		if (dk == 'ah')
		{
			ev.le();
		}
	}

	qf()
	{
		return this.zv('qf');
	}

	ku(jx)
	{
		return this.zv('ku', jx);
	}

	ei(mc)
	{
		return this.zv('ei', mc);
	}

	fi(ix)
	{
		return this.zv('fi', ix);
	}

	fc(gi)
	{
		return this.zv('fc', gi);
	}

	zv(xd, zf, cp = true)
	{
		const wx = new ul(xd, zf);

		return new Promise(jc =>
		{
			jc = cp ? jc : false;

			try {
				chrome.runtime.sendMessage(wx, jc);
			}
			catch (e) {
			}
		});
	}
}

class iq extends id
{
	constructor()
	{
		super(true);
	}

	ys(wx, bx, cp)
	{
		const tj = function(...vz)
		{
			try {
				cp(...vz);
			}
			catch (e) {
			}
		};

		tc.lx.then(_ =>
		{
			const zf = wx.zf;

			switch (wx.xd)
			{
				case 'qf':
					tc.qf().then(tj);
					break;

				case 'ku':
					tc.ku(zf).then(tj);
					break;

				case 'ei':
					tc.ei(zf).then(tj);
					break;

				case 'fi':
					hz.ou.fi(zf).then(tj);
					break;

				case 'fc':
					tc.fc(zf);
					break;
			}
		});

		return !!(cp);
	}
}

class ve
{
	get(ms)
	{
		return new Promise(jc =>
		{
			try {
				chrome.storage.local.get(ms, dl =>
					jc(typeof ms == 'string' ? dl[ms] : dl)
				);
			}
			catch (e) {
			}
		});
	}

	set(ms, mx)
	{
		let zf;

		if (typeof ms == 'object')
		{
			zf = ms;
		}
		else {
			zf = {[ms]:mx};
		}

		return new Promise(dy =>
		{
			try {
				chrome.storage.local.set(zf, dy);
			}
			catch (e) {
			}
		});
	}

	vk()
	{
		return new Promise(dy =>
		{
			try {
				chrome.storage.local.clear(dy);
			}
			catch (e) {
			}
		});
	}
}

class onshv
{
	constructor(Port)
	{
		Port.onMessage.addListener(
			mp => this.sf(mp)
		);

		Port.onDisconnect.addListener(
			_ => this.ac()
		);

		this.Port = Port;

		this.qy = {
		};

		this.gm = false;
	}

	ys(m)
	{
	}

	qs(gz, xd, zf)
	{
		const wj = new mp(gz, xd, zf);

		if (!this.gm)
		{
			this.Port.postMessage(wj);
		}
	}

	sf(x)
	{
		this.lu(x.gz).ys(x.tb);
	}

	lu(gz)
	{
		return this.qy[gz] || this;
	}

	ez(gz, ys, ac)
	{
		return this.qy[gz] = new ro(this, gz, ys, ac);
	}

	ac()
	{
		this.gm = true;

		for (let gz in this.qy)
		{
			this.lu(gz).ac();
		}
	}
}

class wv extends onshv
{
	constructor()
	{
		super(chrome.runtime.connect());
	}

	ys(wx)
	{
		const zf = wx.zf;

		switch (wx.xd)
		{
			case 'oh':
				return ya.qt(zf);
		}
	}

	ez(gz, ys, ac)
	{
		this.qs(null, 'ez', gz);

		return super.ez(gz, ys, ac);
	}

	ac()
	{
		super.ac();

		ev.dn();
	}
}

class ey extends onshv
{
	constructor(et)
	{
		super(et);
	}

	ys(wx)
	{
		switch (wx.xd)
		{
			case 'ez':
				return this.ez(wx.zf);
		}
	}

	ez(gz)
	{
		const nv = super.ez(gz);

		switch (gz)
		{
			case 'cg':
				return new li(nv);
		}
	}
}

class qw
{
	constructor()
	{
		chrome.runtime.onConnect.addListener(
			df => this.db(df)
		);

		this.iw = [];
	}

	db(et)
	{
		this.iw.push(
			new ey(et)
		);
	}

	zs(oc)
	{
		for (let et of this.iw)
		{
			et.qs(null, 'oh', oc);
		}
	}
}

class ro
{
	constructor(et, gz, ys, ac)
	{
		this.et = et;

		this.gz = gz;

		if (ys)
		{
			this.ys = ys;
		}

		if (ac)
		{
			this.ac = ac;
		}
	}

	qs(xd, zf)
	{
		this.et.qs(this.gz, xd, zf);
	}

	ys(m)
	{
	}

	ac()
	{
	}
}

ye.bsl = function(x)
{
	if (typeof x == 'object')
	{
		x = JSON.stringify(x);
	}

	return btoa(x);
}

ye.ilw = function(x)
{
	x = atob(x);

	try {
		return JSON.parse(x);
	}
	catch (e) {
		return x;
	}
}

ye.ksu = function(x)
{
	return ye.ilw(
		ye.nzu(x)
	);
}

ye.wvf = function(ka, yb)
{
	if (yb)
	{
		const ym = Object.create(
			Object.getPrototypeOf(ka)
		);

		return Object.assign(ym, ka);
	}

	return {...ka};
}

ye.ugb = function(rf, nr, au)
{
	let i = au.indexOf(rf);

	if (i >= 0)
	{
		au[i] = nr;
	}
}

ye.rge = function(fw, ol, au)
{
	if (ol != fw)
	{
		const el = au[fw];
		au.splice(fw, 1);
		au.splice(ol, 0, el);
	}
}

ye.jdj = function(fw, au)
{
	ye.rge(fw, Infinity, au);
}

ye.lsn = function(...ep)
{
    ep.sort(
    	(a, b) => a.length - b.length
    );

	return ep.shift().filter(el =>
	{
		for (let ad of ep)
        {
			if (!ad.includes(el))
				return false;
        }

		return true;
    });
}

ye.oqr = function(au)
{
	return au.filter(
		(value, kz) => au.indexOf(value) == kz
	);
}

ye.jpy = function(fg, hd)
{
	return fg.join(hd || '.');
}

ye.skh = function(mb, gy)
{
	if (gy)
	{
		mb = mb.replace(rb[3], '\n');

		mb = mb.replace(rb[4], ' ');
	}
	else {
		mb = mb.replace(rb[5], ' ');

	}

	return mb.trim();
}

ye.myi = function(mb, xki, cp)
{
	return mb.replace(xki, (alv, kxw) =>
	{
		return alv.replace(kxw, cp(kxw));
	});
}

ye.hbg = function(fyv)
{
	return rb[6].test(fyv);
}

ye.qof = function(mb)
{
	return rb[7].test(mb);
}

ye.mwq = function(mb)
{
	return !rb[8].test(mb);
}

ye.vhk = function(mb)
{
	return mb.toLowerCase().replace(rb[9], ye.am);
}

ye.edn = function(mb)
{
	return mb == mb.toUpperCase();
}

ye.kfn = function(mb)
{
	return mb == mb.toLowerCase();
}

ye.zfv = function(mb)
{
	return ye.kfn(mb) || ye.edn(mb);
}

ye.nhf = function(hc, mb)
{
	return ye.xo(hc, mb).length;
}

ye.amr = function(mb)
{
	return ye.nhf(rb[10], mb) + 1;
}

ye.hpg = function(mb)
{
	return mb ? mb.split(' ') : [];
}

ye.sup = function(i, mb)
{
	return mb.substring(0, i) + 'x' + mb.substring(++i);
}

ye.nzu = function(mb)
{
	let s = '';

	for (let i = mb.length - 1; i >= 0; i--)
		s += mb[i];

	return s;
}

ye.rzm = function(s)
{
	return String(s).replace(rb[11], '\\$1').replace(rb[12], '\\x08');
}

ye.ajs = function(xki, vz, tig)
{
	if (vz.constructor === Array)
	{
		vz = vz.map(ye.rzm);
	}
	else {
		vz = ye.rzm(vz);
	}

	xki = ye.wt(xki, vz);

	return new RegExp(xki, tig);
}

ye.cjc = new function()
{
	const wo = Object.entries({
		year: 1 * 60 * 60 * 24 * 30 * 12,
		month: 1 * 60 * 60 * 24 * 30,
		week: 1 * 60 * 60 * 24 * 7,
		day: 1 * 60 * 60 * 24,
		hour: 1 * 60 * 60,
		minute:1 * 60,
		second:1
	});

	const nqf = (dfe) => new Date(dfe).getTime() / 1000;

	return (dfe) =>
	{
		const trh = ye.wy() - nqf(dfe);

		for (let [uhr, ase] of wo)
		{
			let mth = trh / ase;

			if (mth >= 1)
			{
				mth = Math.floor(mth);

				return ye.wt('%s %s%s ago', [mth, uhr, (mth > 1) ? 's' : '']);
			}
		}

		return '';
	};
}

ye.pzl = function(au)
{
	return au.reduce((a, b) => a + b, 0);
}

ye.lui = function(au)
{
	return ye.bdu(
		ye.pzl(au), au.length
	);
}

ye.bdu = function(a, b)
{
	return (b != 0) ? (a / b) : 0;
}

const eng = {
	nes(wr, ydg, ecx)
	{
		return this.wag('GET', wr, ydg, null, ecx);
	},

	tjq(wr, ydg, tb, ecx)
	{
		return this.wag('POST', wr, ydg, tb, ecx);
	},

	wag(jd, wr, ydg, tb, ecx)
	{
		if (ydg)
		{
			wr = ye.to(wr, ydg);
		}

		if (tb)
		{
			tb = this.qoc(tb);
		}

		return new Promise(jc =>
		{
			let lk = new XMLHttpRequest;

			if (ecx != Infinity)
			{
				let sdq = 0;

				lk.ontimeout = (e) =>
				{
					if (++sdq < 3)
					{
						return this.cml(lk, jd, wr, tb);
					}

					lk.onerror(e);
				}

				lk.timeout = 5000;
			}

			lk.onload = lk.onerror = (e) => jc(
				new js(lk, e.type)
			);

			this.cml(lk, jd, wr, tb);
		});
	},

	cml(lk, jd, wr, tb)
	{
		lk.open(jd, wr);
		lk.send(tb);
	},

	qoc(wn)
	{
		let gnu = new FormData;

		for (let ms in wn)
		{
			gnu.append(ms, wn[ms]);
		}

		return gnu;
	}
}

class ogw
{
	constructor(mdj)
	{
		this.map = {};

		this.wyp = Object.getOwnPropertyNames(Object.prototype);

		this.jhv = mdj;
	}

	get keys()
	{
		return Object.keys(this.map);
	}

	get values()
	{
		return Object.values(this.map);
	}

	get(ms)
	{
		ms = this.vcx(ms);

		return this.dfl(this.map[ms]);
	}

	set(ms, mx)
	{
		ms = this.vcx(ms);

		this.map[ms] = this.dfl(mx);
	}

	gdx(ms)
	{
		return this.vcx(ms) in this.map;
	}

	upd(ms)
	{
		!this.gdx(ms) && this.set(ms);
	}

	vcx(ms)
	{
		if (this.wyp.includes(ms))
		{
			return ms + '*';
		}

		return ms;
	}

	dfl(mx)
	{
		if (mx == undefined && this.jhv)
		{
			return new this.jhv;
		}

		return mx;
	}
}

class mwa
{
	constructor(yxp, ono)
	{
		this.ck = yxp.ck;

		this.tsj = yxp.tsj;

		this.ono = ono;

		this.cxw = [];

		this.weh = new rj;

		this.cbm(yxp);
	}

	cbm(lf)
	{
		if (this.tsj == lf.tsj)
		{
			lf.gnv = true;
		}

		this.weh.push(lf.tsj);

		this.cxw.push(lf);
	}

	ezg(ck)
	{
		return this.weh.includes(ck);
	}

	ce(lag)
	{
		this.yxp.ce(lag);
	}

	abe()
	{
		this.lvq.forEach(qew => qew.hidden = true);
	}

	fsk(ti, uo)
	{
		let xqu = ti;

		while (xqu.bez)
		{
			xqu = xqu.bez;
		}

		this.caq(xqu, uo);

		ti.xp(uo);
	}

	caq(a, b)
	{
		const fw = this.cxw.indexOf(b);
		const ol = this.cxw.indexOf(a) + 1;

		ye.rge(fw, ol, this.cxw);
	}

	get length()
	{
		return this.cxw.length;
	}

	get arg()
	{
		return this.weh.length;
	}

	get yxp()
	{
		return this.cxw[0];
	}

	get evy()
	{
		return this.cxw[1];
	}

	get ihz()
	{
		return this.length > 1;
	}

	get lvq()
	{
		return this.cxw.slice(1);
	}

	get ygk()
	{
		return this.cxw.length - 1;
	}

	get hidden()
	{
		return this.yxp.hidden;
	}

	get ym()
	{
		const ym = ye.wvf(this, true);

		ym.cxw = this.cxw.map(ye.wvf);

		return ym;
	}
}

class muc
{
	constructor(fjv)
	{
		this.yp = muc.mhn(fjv);
		this.jb = muc.iyv(this.yp);
	}

	static iyv(yp)
	{
		return ['he','ar'].includes(yp) ? 'rtl' : 'ltr';
	}

	static mhn(mb)
	{
		const swq = .57 * ye.amr(mb);

		switch (true)
		{
			case swq < ye.nhf(rb[13], mb):
				return 'en';

			case swq < ye.nhf(rb[14], mb):
				return 'ar';

			case swq < ye.nhf(rb[15], mb):
				return 'he';

			default:
				return '';
		}
	}

	static get rze()
	{
		if (!this.xom)
		{
			this.xom = navigator.languages.map(yp => yp.slice(0, 2));
		}

		return this.xom;
	}
}

class vmi
{
	constructor(xim)
	{
		const _ = xim.items[0];

		this.esd = _.snippet.channelId;
		this.jw = _.statistics.commentCount;

		if (this.jw == undefined)
		{
			this.jw = -1;
		}
		else {
			this.jw = +this.jw;
		}
	}
}

class otf
{
	constructor(xim)
	{
		const _ = xim.snippet;

		this.ck = xim.id;
		this.sj = _.videoId;
		this.tsj = _.authorChannelId.value;
		this.dx = _.authorProfileImageUrl;
		this.hri = _.authorDisplayName;
		this.yob = _.textOriginal;
		this.uyw = _.publishedAt;
		this.teo = _.likeCount;
		this.gnv = false;
		this.yj = false;
	}
}

class txl
{
	constructor(otf)
	{
		Object.assign(this, otf);

		this.xvx = '';
		this.whx = '';
		this.yu = {};
		this.children = [];
		this.ti = null;
		this.ctk = null;
		this.cdh = null;
		this.hbk = null;
		this.hidden = false;

		this.qnf();
		this.epb();
		this.amx();
		this.rpb();
		this.mct();
	}

	qnf()
	{
		this.xvx = this.yob.replace(rb[16], '');

		delete this.yob;
	}

	mct()
	{
		this.whx = eqn.jgz(this.xvx);

		this.hbk = new muc(this.whx);

		if (this.hbk.yp == 'en')
		{
			this.whx = eqn.fma(this.whx);
		}
	}

	epb()
	{
		if (!this.xvx.includes('/'))
			return;

		this.xvx = this.xvx.replace(rb[17], (wr) =>
		{
			let x;

			const but = qbg.erm(wr);

			if (but) {
				if (but.sj == this.sj)
				{
					x = new zc(but.sj, but.ug);
				}
				else {
					x = new mo(but.sj, but.ug);
				}
			}
			else {
				x = new fce(wr);
			}

			return this.fwz(x);
		});
	}

	amx()
	{
		if (!this.xvx.includes('#'))
			return;

		this.xvx = this.xvx.replace(rb[18], (djy) =>
		{
			return this.fwz(
				new xvy(djy)
			);
		});
	}

	rpb()
	{
		if (!this.xvx.includes(':'))
			return;

		this.xvx = this.xvx.replace(rb[19], (dj) =>
		{
			const ug = ye.wa(dj);

			return this.fwz(
				new zc(this.sj, ug)
			);
		});
	}

	fwz(el)
	{
		this.yu[el.ck] = el;

		return el.ck;
	}

	ce(lag)
	{
		this.hidden = true;

		for (let uo of this.children)
		{
			uo.ce();
		}
	}

	xp(uo)
	{
		this.children.push(uo);

		uo.ti = this;
	}

	get bez()
	{
		return ye.pb(this.children);
	}

	get kny()
	{
		return this.children.some(uo => !uo.hidden);
	}
}

class ltl
{
	constructor(x)
	{
		this.hidden = x.hidden;
		this.pk = x.pk;
		this.yu = x.yu;
		this.sj = x.sj;
		this.ck = x.ck;
		this.ik = ye.vj(x.ti, 'ck');
		this.tsj = x.tsj;
		this.dx = x.dx;
		this.cdm = x.cdm;
		this.jz = x.jz;
		this.uyw = x.uyw;
		this.gnv = x.gnv;
		this.yj = x.yj;
		this.yp = x.hbk.yp;
		this.jb = x.hbk.jb;
		this.lez = '';
		this.lbs = '';

		this.uyw = ye.cjc(this.uyw);

		this.lez = ye.wt('https://www.youtube.com/channel/%s', this.tsj);

		this.lbs = ye.wt('https://www.youtube.com/watch?v=%s&lc=%s', [this.sj, this.ck]);
	}
}

class zmz
{
	constructor(rw, jf)
	{
		this.ck = ye.ap(8);

		this.rw = rw;

		this.jf = jf;
	}
}

class dhc extends zmz
{
	constructor(sj, ug, xuq)
	{
		super(xuq);

		this.sj = sj;
		this.ug = ug;

		if (xuq == 'zc')
		{
			this.jf = ye.ea(ug);
		}
		else {
			this.jf = 'youtube.com';
		}
	}
}

class zc extends dhc
{
	constructor(sj, ug)
	{
		super(sj, ug, 'zc');
	}
}

class mo extends dhc
{
	constructor(sj, ug)
	{
		super(sj, ug, 'mo');
	}
}

class fce extends zmz
{
	constructor(wr)
	{
		super('uw');

		this.wr = wr;

		this.dum = wr.startsWith('https');

		this.jf = qbg.oec(wr) || wr;
	}
}

class xvy extends zmz
{
	constructor(gas)
	{
		super('uw', gas);

		this.wr = 'https://www.youtube.com/results?search_query=' + encodeURIComponent(gas);
	}
}

class dsc extends zmz
{
	constructor(hms, esd)
	{
		super('uw', hms);

		this.wr = 'https://www.youtube.com/channel/' + esd;
	}
}

class knf
{
	constructor(mb)
	{
		this.ugx = '';
		this.bkz = '';
		this.edi = [];
		this.aqu = false;
		this.opk = false;

		this.jgz(mb);
		this.quy();
		this.vxf();
	}

	get iwd()
	{
		return this.ugx;
	}

	get length()
	{
		return this.ugx.length;
	}

	get mdn()
	{
		return ye.edn(this.bkz);
	}

	toLowerCase()
	{
		this.ugx = this.ugx.toLowerCase();
	}

	maq(fyv)
	{
		return this.edi.includes(fyv);
	}

	ufy(ama)
	{
		for (let fyv of ama)
		{
			if (this.maq(fyv)) return 1;
		}

		return 0;
	}

	charAt(i)
	{
		return (i < 0) ? this.ugx[this.length + i] : this.ugx[i];
	}

	ubq(n)
	{
		this.ugx = this.ugx.slice(0, -n);
	}

	replace(hc, cp)
	{
		this.ugx = this.ugx.replace(hc, cp);
	}

	jgz(mb)
	{
		this.ugx = ye.skh(mb, 'ovj');

		this.replace(rb[20], m => ('“”„').includes(m) ? '"' : "'");

		this.replace(rb[21], m =>
		{
			if (m[0] === m[1])
			{
				const x = m[0];

				if (x == '.') return '..';

				if (ye.mwq(x))
				{
					return m.length > 3 && !rb[22].test(x) ? x.repeat(3) : m;
				}

				return x;
			}

			return [...m][0];
		});
	}

	quy()
	{
		let wqa = ye.oqr([...this.ugx]).join('');

		this.bkz = wqa.slice(0, 16);

		this.edi = ye.xo(rb[23], wqa);

		this.aqu = this.edi.some(this.msq);
	}

	vxf()
	{
		if (!this.aqu) return;

		for (let i = 0, k = 0, n = this.edi.length; i < n; i++)
		{
			k = i + 1;

			if (k != n)
			{
				let x = this.edi[i] + this.edi[k];

				this.replace(ye.ajs('(%s)+', x, 'g'), x);
			}
		}
	}

	msq(fyv)
	{
		return fyv.charCodeAt(0) > 255;
	}

	zjn(fyv)
	{
		return fyv == '\u{200D}';
	}
}

class mzy
{
	constructor(ci)
	{
		ci.sort(ye.ae);

		const ijb = ci.length / 2;

		const jda = ci.slice(0, Math.floor(ijb));
		const nxp = ci.slice(Math.round(ijb));

		this.ujn = ye.gh(jda);
		this.bmf = ye.gh(nxp);
		this.tvr = this.bmf - this.ujn;

		this.ci = ci;
	}

	ile(n)
	{
		const ht = this.ujn - 1.5 * this.tvr;
		const vp = this.bmf + 1.5 * this.tvr;

		return n < ht || vp < n;
	}

	dmq()
	{
		return this.ci.filter(
			n => this.ile(n)
		);
	}

	hcn()
	{
		return this.ci.filter(
			n => !this.ile(n)
		);
	}
}







class wl
{
	constructor()
	{
		this.ck = chrome.runtime.id;

		this.avz = chrome.runtime.getManifest().version;

		this.lx = new Promise(jc => this.foc = jc);

		this.lx.then(
			_ => this.zj()
		);

		this.lv();

		chrome.runtime.onInstalled.addListener(
			but => this.fxy(but)
		);

		chrome.browserAction.onClicked.addListener(
			_ => odu.spx('ah')
		);

		chrome.alarms.onAlarm.addListener(
			but => this.ipk('fpv', but)
		);

		chrome.runtime.onMessageExternal.addListener(
			wx => this.ipk('tvo', wx)
		);
	}

	async lv()
	{
		if (await this.rwt == this.avz)
		{
			const az = await og.get(['0', '1']);

			this.fku = new du(az[0], 0);

			on = new pu(az[1], 1);

			this.foc(1);
		}
	}

	async qf()
	{
		const ciz = await this.ku('/html/view.html');

		const we = (
			this.avz < this.qlg
		);

		const jq = (
			!on.gf || !on.rh
		);

		return {
			zt: {
				we, jq
			},
			aj: ciz
		};
	}

	async ei(mc)
	{
		if (rb[24].test(mc))
		{
			const dpi = await hz.fj.cri(mc);

			if (dpi)
			{
				const uye = await hz.ou.vxr(mc);

				if (uye)
				{
					on.xr(uye).then(
						_ => iw.zs('ry')
					);

					return true;
				}
			}
		}

		return false;
	}

	iqo(msf)
	{
		on.ct = msf;

		iw.zs('zd');
	}

	fc(gi)
	{
		let mc = on.mc;

		if (mc)
		{
			if (gi)
			{
				mc = ye.sup(19, mc);

				on.mc = mc;
			}

			hz.fj.zfp(mc);
		}
	}

	async ku(jx)
	{
		const uqi = await eng.nes(chrome.runtime.getURL(jx));

		return uqi.zf;
	}

	async pvu(but)
	{
		this.prt();

		if (but.reason == 'install')
		{
			await this.svt();
		}
		else {
			if (but.previousVersion < '')
			{

			}
		}

		await this.xwd();

		await this.lv();
	}

	async fxy(but)
	{
		await this.pvu(but);

		switch (but.reason)
		{
			case 'install':
				this.czw();
				break;

			case 'update':
				this.hbm();
				break;
		}

		odu.crj();
	}

	czw()
	{

	}

	hbm()
	{

	}

	async ipk(slt, zf)
	{
		await this.lx;

		switch (slt)
		{
			case 'fpv':
				return this.ykt(zf);

			case 'tvo':
				return this.nxd(zf);
		}
	}

	ykt(fpv)
	{
		const olf = fpv.name;

		switch (olf)
		{
			case 'gsa':
				this.gsa();
		}
	}

	nxd(wx)
	{
		return new yqp().ys(wx);
	}

	zj()
	{
		this.fc(
			on.gf && (ye.io() || !on.rx)
		);
	}

	get rwt()
	{
		return og.get('schemaVersion');
	}

	xwd()
	{
		return og.set('schemaVersion', this.avz);
	}

	get qlg()
	{
		return this.fku.latestVersion;
	}

	ztz(v)
	{
		this.fku.set('latestVersion', v);
	}

	svt()
	{
		return og.set({
			0: {
				latestVersion: this.avz
			},
			1: {},
		});
	}

	prt()
	{
		chrome.alarms.clearAll();

		chrome.alarms.create('gsa', {periodInMinutes:240});
	}

	async gsa()
	{
		const v = await hz.ou.uwq();

		if (v) {
			this.ztz(v);
		}
	}
}

class yqp
{
	ys(wx)
	{
		wx = ye.ilw(wx);

		switch (wx.issuer)
		{
			case 'authServer':
				return this.hmu(wx.data);
		}
	}

	hmu(zf)
	{
		if (zf.id == 'pa')
		{
			tc.iqo(zf.token);
		}
	}
}

class utl
{
	constructor()
	{
		this.ou = new uix;

		this.fj = new rbj;
	}
}

class uix
{
	constructor()
	{
		this.mbv = 'https://api.lett.app';
	}

	async vxr(mc)
	{
		const uqi = await this.get('/cs/preflight', {
			key:mc,
			sas:wi,
		});

		if (uqi.fk)
		{
			try {
				const zmc = uqi.zf.shift();

				return [
					mc, +ye.ksu(zmc)
				];
			}
			catch (e) {
				return null;
			}
		}
	}

	async uwq()
	{
		const uqi = await this.get('/cs/update');

		if (uqi.fk)
		{
			return uqi.zf.version;
		}
	}

	async fi(ix)
	{
		const wn = {
			apiKey:on.mc,
			amount:ix,
		};

		const uqi = await this.get('/donate/accept', wn, Infinity);

		if (uqi.fk)
		{
			return uqi.zf.url;
		}
	}

	async get(qdu, wn, ecx)
	{
		if (qdu[0] == '/')
		{
			qdu = this.mbv + qdu;
		}

		const uqi = await eng.nes(qdu, wn, ecx);

		if (!uqi.fk && !uqi.yc)
		{
			uqi.st(uqi.zf.error);
		}

		return uqi;
	}
}

class ism
{
	constructor()
	{
		this.mbv = 'https://www.googleapis.com/youtube/v3';
	}

	zfp(mc)
	{
		this.ms = mc;
	}

	async cri(mc)
	{
		this.zfp(mc);

		const uqi = await this.ktq('jNQXAC9IVRw');

		return uqi.fk;
	}

	fmu(sj)
	{
		return this.yz({
			videoId:sj
		});
	}

	hkf(sj, okh)
	{
		return this.kp({
			videoId:sj,
			searchTerms:okh
		});
	}

	pzw(esd, okh)
	{
		return this.kp({
			allThreadsRelatedToChannelId:esd,
			searchTerms:okh
		});
	}

	async ktq(sj)
	{
		const uqi = await this.drb({
			id:sj,
			part:'snippet,statistics',
			fields:'items/statistics,items/snippet/channelId'
		});

		if (uqi.fk)
		{
			try {
				uqi.zf = new vmi(uqi.zf);
			}
			catch (e) {
				uqi.st('ma');
			}
		}

		return uqi;
	}

	async get(qdu, wn)
	{
		const uqi = await eng.nes(this.mbv + qdu, wn);

		if (!uqi.fk && !uqi.yc)
		{
			const afx = this.fxr(uqi.zf);

			uqi.st(afx);
		}

		return uqi;
	}

	async kp(wn)
	{
		const uqi = await this.get('/commentThreads', wn);

		if (uqi.fk)
		{
			uqi.zf = this.qax(uqi.zf);
		}

		return uqi;
	}

	async yz(wn)
	{
		let uqi, fg = [];

		do {
			uqi = await this.get('/commentThreads', wn);

			if (uqi.fk)
			{
				const vtk = this.qax(uqi.zf);

				fg.push(vtk);

				wn.pageToken = uqi.zf.nextPageToken;
			}
		}
		while (uqi.fk && wn.pageToken)

		uqi.zf = fg.flat();

		return uqi;
	}

	drb(wn)
	{
		return this.get('/videos', wn);
	}

	sfi(dgl)
	{
		try {
			return new otf(dgl);
		}
		catch (e) {
			return null;
		}
	}

	pzr(dgl)
	{
		let lvq = [];

		try {
			if (dgl.replies) {
				lvq = dgl.replies.comments.reverse();
			}
		}
		catch (e) {
		}

		return lvq;
	}

	fxr(hpe)
	{
		try {
			return hpe.error.errors[0].reason;
		}
		catch (e) {
			return hpe.yf || 'yi';
		}
	}

	qax(dgl)
	{
		const vtk = [];

		try {
			for (let el of dgl.items)
			{
				const kt = this.cux(el);

				if (kt) {
					vtk.push(kt);
				}
			}
		}
		catch (e) {
		}

		return vtk;
	}

	cux(dgl)
	{
		try {
			const kxr = dgl.snippet;

			if (kxr.videoId)
			{
				let lf = this.sfi(kxr.topLevelComment);

				if (lf)
				{
					const kt = new mwa(lf, kxr.totalReplyCount);

					if (kt.ono <= 5)
					{
						for (let qew of this.pzr(dgl))
						{
							lf = this.sfi(qew);

							if (lf) {
								kt.cbm(lf);
							}
						}
					}

					return kt;
				}
			}
		}
		catch (e) {
			return null;
		}
	}
}

class rbj extends ism
{
	yz(wn)
	{
		return super.yz(
			this.tlr(wn)
		);
	}

	kp(wn)
	{
		return super.kp(
			this.tlr(wn)
		);
	}

	async get(qdu, wn)
	{
		wn.key = this.ms;

		let uqi, i = 3;

		while (i--)
		{
			uqi = await super.get(qdu, wn);

			if (uqi.yf != 'processingFailure')
				break;
		}

		return uqi;
	}

	tlr(wn)
	{
		return Object.assign(wn, {
			textFormat:'plainText',
			part:'snippet,replies',
			maxResults:100
		});
	}
}

class qbg
{
	static erm(wr)
	{
		const sj = ye.xq(rb[25], wr);

		if (sj)
		{
			let ug = ye.xq(rb[26], wr) || 0;

			if (!ye.qof(ug))
			{
				ug = ye.xo(rb[27], ug).join(':');

				ug = ye.wa(ug);
			}

			ug = Number(ug);

			return {sj, ug};
		}
	}

	static oec(wr)
	{
		return ye.xq(rb[28], wr).replace('www.', '');
	}
}

class wdr
{
	async spx(dk)
	{
		const wvy = await this.mgr();

		if (wvy && wvy.url)
		{
			this.zv(wvy.id, 'dk', dk);
		}
	}

	crj()
	{
		chrome.tabs.query({url:'https://*.youtube.com/*'}, odu =>
		{
			for (let wvy of odu)
			{
				chrome.tabs.reload(wvy.id);
			}
		});
	}

	mgr()
	{
		return new Promise(jc =>
		{
			chrome.tabs.query({active:true, currentWindow:true}, odu =>
			{
				jc(odu[0]);
			});
		});
	}

	zv(esp, xd, zf)
	{
		chrome.tabs.sendMessage(esp, new ul(xd, zf));
	}
}

class wmb
{
	constructor(ib, xuq)
	{
		this.ck = xuq.sj;

		this.xuq = xuq;

		this.qdf = new bxz(ib);

		this.fg = {};

		for (let mwy of ['vjo', 'rfc'])
		{
			this[mwy] = new ogw(Array);
		}

		for (let mwy of ['snm', 'fli', 'ita'])
		{
			this[mwy] = [];
		}

		for (let kt of ib)
		{
			this.cf(kt);
			this.ywt(kt);
		}
	}

	ixv(q)
	{
		q = q.toLowerCase();

		switch (q)
		{
			case ':':
				return this.gvo();

			case ':all':
				return this.ehq();

			case ':creator':
				return this.lft();

			case ':link':
				return this.kyk();

			case ':reply':
				return this.ghs();
		}

		if (rb[29].test(q))
		{
			const lh = this.knh(q);

			switch (lh.length)
			{
				case 1: return this.uth(lh[0]);

				case 2: return this.kwq(lh[0], lh[1]);
			}
		}

		return this.inu(q);
	}

	ehq()
	{
		return this.fdx(
			Object.keys(this.fg)
		);
	}

	gvo()
	{
		return this.fdx(this.rfc.values);
	}

	lft()
	{
		return this.fdx(this.snm);
	}

	kyk()
	{
		return this.fdx(this.ita);
	}

	ghs()
	{
		return this.fdx(this.fli);
	}

	kwq(le, huq)
	{
		const kve = ye.wa(le);
		const yqy = ye.wa(huq);

		const ibd = [];

		for (let lh of this.rfc.keys)
		{
			if (kve <= lh && lh <= yqy)
			{
				ibd.push(
					this.rfc.get(lh)
				);
			}

			if (yqy < lh) break;
		}

		return this.fdx(ibd);
	}

	cf(el)
	{
		this.fg[el.ck] = el;
	}

	mre(ck)
	{
		return this.fg[ck].ym;
	}

	fdx(ibd)
	{
		ibd = ibd.flat();

		return ye.oqr(ibd).map(
			ck => this.mre(ck)
		);
	}

	inu(mb)
	{
		let vry = [];

		let qr = this.rqb(mb);

		let ibd = qr.map(
			k => this.select('vjo', k)
		);

		ibd = ibd.filter(x => x.length);

		if (ibd.length)
		{
			vry = ye.lsn(...ibd);

			if (vry.length < 1)
			{
				ibd.sort((a, b) => a.length - b.length);

				vry = ibd[0];
			}
		}

		return this.fdx(vry);
	}

	uth(dj)
	{
		let tk = ye.wa(dj);

		let ibd = [
			this.select('rfc', tk)
		];

		for (let i = tk; i--;)
		{
			let x = this.select('rfc', i);

			if (x.length == 0 && ![1,6].includes(i % 10))
				break;

			ibd.push(x);
		}

		for (let i = tk; i++;)
		{
			let x = this.select('rfc', i);

			if (x.length == 0 && ![4,9].includes(i % 10))
				break;

			ibd.push(x);
		}

		return this.fdx(ibd);
	}

	ywt(kt)
	{
		const jf = kt.cxw.map(lf => lf.yob).join(' ');

		this.epb(jf, kt.ck);

		this.riv(jf, kt.ck);

		this.dct(jf, kt.ck);

		this.pzr(kt);
	}

	pzr(kt)
	{
		if (kt.length > 1)
		{
			this.fli.push(kt.ck);
		}

		if (kt.ezg(this.xuq.esd))
		{
			this.snm.push(kt.ck);
		}
	}

	epb(jf, ck)
	{
		jf.includes('http') && this.ita.push(ck);
	}

	riv(jf, ck)
	{
		const sme = this.knh(jf);

		for (let lh of sme)
		{
			lh = ye.wa(lh);

			if (0 <= lh && lh < this.xuq.sa)
			{
				this.tyt('rfc', lh, ck);
			}
		}
	}

	dct(jf, ck)
	{
		this.rqb(jf).forEach(
			ho => this.tyt('vjo', ho, ck)
		);
	}

	tyt(mwy, ms, mx)
	{
		this[mwy].upd(ms);

		this[mwy].get(ms).push(mx);
	}

	select(mwy, ms)
	{
		return this[mwy].get(ms);
	}

	rqb(mb)
	{
		mb = eqn.jgz(mb);

		mb = eqn.fma(mb);

		mb = ye.hpg(mb);

		return ye.oqr(mb);
	}

	knh(mb)
	{
		return ye.xo(rb[30], mb);
	}
}

class li
{
	constructor(et)
	{
		et.ys = this.ys.bind(this);

		this.et = et;

		this.pst = 0;

		this.hdr = new Promise(jc => jc(null));

		this.xuq;

		this.hbs = new hbs;

		this.rit = new wmb([], {});
	}

	async ys(wx)
	{
		const sj = wx.zf.sj;

		try {
			const but = await this.hbs.zji(sj);

			this.xuq = new lhe(wx.zf, but);
		}
		catch (da) {
			return this.etx(da);
		}

		switch (wx.xd)
		{
			case 'kp':
				return this.pun(sj);

			case 'jw':
				return this.oi(sj);
		}
	}

	etx(ck)
	{
		this.heb('yf', {ck});
	}

	oi(sj)
	{
		const n = this.xuq.jw;

		if (0 < n && n < 1000)
		{
			this.znh(sj);
		}

		this.heb('jw', n);
	}

	async pun(sj)
	{
		if (this.xuq.ixv.fhi)
		{
			return this.etx('fl');
		}

		this.rsw();
	}

	async rsw()
	{
		let r = new hlk(this.mqz);

		try {
			if (this.xuq.ixv.owo)
			{
				await this.ohs(r);
			}
			else {
				await this.xfw(r);
			}

			!this.lyz(r.ck) && this.heb('kp', r);
		}
		catch (da) {
			!this.lyz(r.ck) && this.etx(da);
		}
	}

	async ohs(hpe)
	{
		const uqi = await hz.fj.pzw(this.xuq.esd, this.xuq.ixv.mb);

		if (uqi.yf)
		{
			throw uqi.yf;
		}

		const qdf = new bxz(uqi.zf);

		const ib = hgk.ywt(uqi.zf, qdf, this.xuq);

		hpe.kfb(ib);
		hpe.ybj(-2);
	}

	async xfw(hpe)
	{
		const sj = this.xuq.sj;
		const pv = this.xuq.ixv.mb;

		const p = hpe.ybj(this.xuq.jw);

		if (p <= 0) {
			return;
		}

		if (p > 1000 && this.xuq.ixv.cmu)
		{
			throw 'cq';
		}

		let ib, qdf;

		if (p < 1000)
		{
			const da = await this.znh(sj);

			if (da)
			{
				throw da;
			}

			qdf = this.rit.qdf;

			ib = this.rit.ixv(pv);
		}
		else {
			const uqi = await hz.fj.hkf(sj, pv);

			if (uqi.yf)
			{
				throw uqi.yf;
			}

			qdf = new bxz(uqi.zf);

			ib = uqi.zf;
		}

		ib = hgk.ywt(ib, qdf, this.xuq);

		hpe.kfb(ib);
	}

	heb(xd, zf)
	{
		this.et.qs(xd, zf);
	}

	async znh(sj)
	{
		await this.hdr;

		if (sj != this.rit.ck)
		{
			this.hdr = new Promise(async jc =>
			{
				const uqi = await hz.fj.fmu(sj);

				if (uqi.fk)
				{
					this.rit = new wmb(uqi.zf, this.xuq);
				}

				jc(uqi.yf);
			});
		}

		return this.hdr;
	}

	get mqz()
	{
		return ++this.pst;
	}

	lyz(qli)
	{
		return qli != this.pst;
	}
}

class hbs
{
	constructor()
	{
		this.map = {};
	}

	async zji(sj)
	{
		let x = this.map[sj];

		if (x == undefined)
		{
			x = this.rsl(sj);
		}

		if (x instanceof Promise)
		{
			const uqi = await x;

			if (uqi.yf)
			{
				this.abk(sj);

				throw uqi.yf;
			}

			x = this.xgt(sj, uqi.zf);
		}

		return x;
	}

	kmt(sj, value)
	{
		return this.map[sj] = value;
	}

	rsl(sj)
	{
		const r = hz.fj.ktq(sj);

		return this.kmt(sj, r);
	}

	xgt(sj, xgc)
	{
		return this.kmt(sj, xgc);
	}

	abk(sj)
	{
		this.kmt(sj, undefined);
	}
}

class iab
{
	constructor(q)
	{
		this.mb = '';
		this.rw = '';
		this.owo = false;
		this.fhi = false;

		this.quy(q);
	}

	get cmu()
	{
		return this.rw == 'wyp';
	}

	get yxc()
	{
		return this.rw == 'box';
	}

	quy(q)
	{
		const iki = q.replace(rb[31], '');

		if (iki != q)
		{
			this.owo = true;

			if (iki == '')
			{
				this.fhi = true;
			}
		}

		this.mb = iki;
		this.rw = iab.tdf(iki);
	}

	static tdf(q)
	{
		q = q.toLowerCase();

		switch (true) {
			case [':', ':all', ':creator', ':reply', ':link'].includes(q):
				return 'wyp';

			case (rb[32]).test(q):
				return 'box';

			default:
				return '';
		}
	}
}

class lhe
{
	constructor(amc, nby)
	{
		Object.assign(this, ...[amc, nby]);

		this.sa = Math.floor(amc.sa) || Infinity;
		this.mq = Math.floor(amc.mq);

		this.ixv = new iab(amc.pv);
	}
}

class hlk
{
	constructor(qli)
	{
		this.ck = qli;
		this.ib = [];
		this.ju = 0;
		this.lq = 0;
	}

	kfb(ib)
	{
		this.ib = ib;
		this.ju = ib.length;
	}

	ybj(n)
	{
		return this.lq = n;
	}
}

class bxz
{
	constructor(ib)
	{
		this.qdf = {};

		this.waw = {};

		this.kie = {};

		for (let kt of ib)
		{
			this.gjg(kt);
		}

		this.dwf();
	}

	ece(mtq)
	{
		return this.waw.ixv(mtq);
	}

	wnk(ck)
	{
		return this.qdf[ck];
	}

	gjg(kt)
	{
		for (let lf of kt.cxw)
		{
			this.kno(lf.tsj, lf.yob);
			this.swk(lf.tsj, lf.hri);
		}
	}

	dwf()
	{
		this.waw = new ioa(this.waw);

		for (let ck in this.kie)
		{
			const kie = this.kie[ck];

			if (kie.length > 1)
			{
				const qtr = kie.filter(
					(jf, i) => jf.length < 28 || i == kie.indexOf(jf)
				);

				this.wnk(ck).nhb = (kie.length != qtr.length);
			}
		}
	}

	swk(ck, esv)
	{
		let ctk = new hfq(ck, esv);

		this.qdf[ck] = ctk;

		this.waw[esv] = ctk;
	}

	kno(ck, jf)
	{
		this.kie[ck] = this.kie[ck] || [];

		this.kie[ck].push(jf);
	}
}

class hfq
{
	constructor(ck, esv)
	{
		this.ck = ck;
		this.esv = esv;
		this.nhb = false;
		this.iep = false;
	}

	get cdm()
	{
		return this.iep ? this.esv : this.wjk;
	}

	get cnd()
	{
		return !this.iep && this.nhb;
	}

	get wjk()
	{
		if (!this.cld)
		{
			this.cld = zgp.jho(this.esv);
		}

		return this.cld;
	}
}

class ioa
{
	constructor(bd)
	{
		this.keys = Object.keys(bd).sort(this.ugc);

		this.ruj = this.keys.map(ms => bd[ms]);

		this.keys = this.keys.map(ye.ko);
	}

	ixv(dph)
	{
		dph = dph.toLowerCase();

		let fg = [];

		for (let i = 0, n = this.keys.length; i < n; i++)
		{
			if (this.keys[i].startsWith(dph))
			{
				do {
					fg.push(this.ruj[i])
				}
				while (++i < n && this.keys[i].startsWith(dph));

				break;
			}
		}

		return fg.sort(this.ghw);
	}

	ghw(a, b)
	{
		return b.esv.length - a.esv.length;
	}

	ugc(a, b)
	{
		return a.localeCompare(b);
	}
}

const hgk = {
	hgq: {
		lpw(zco, hoj = 0)
		{
			return +zco || hoj;
		},

		ygk(x)
		{
			return (0.834 * x) - (0.167 * x * x);
		},

		nsz(n)
		{
			return ye.bdu(1, n);
		},
	},

	ywt(ib, jrf, xuq)
	{
		this.ewb = xuq.esd;

		this.ixv = xuq.ixv;

		this.oht = new mgc;

		this.rfc = new wyu;

		this.teb = new ofb;

		this.fmg = {};

		ye.zn(
			jrf.wnk(this.ewb), 'iep', true
		);

		return this.quy(ib, jrf);
	},

	quy(ib, jrf)
	{
		const age = ('you are not but for the thi and that was').split(' ');

		const unv = {
			ygk: this.hgq.ygk,
			nen: this.hgq.nsz,
			lpw: this.hgq.lpw,
		};

		const rgm = {
			fcr: 0,
			qbd: 1,
			upg: [],
		};

		const hxc = {
			vjo: .5,
			ugq: .2,
			nen: .1,
			ref: .0,
			rvi: .01,
		};

		if (this.ixv.yxc)
		{
			Object.assign(hxc, {
				ref:.3,
			});
		}

		let ibd = [];

		ib = ib.filter(
			kt => !ibd.includes(kt.tsj) && ibd.push(kt.tsj)
		);

		for (let kt of ib)
		{
			Object.assign(kt,
			{
				my: {
					rfc: [],
					qr: [],
					rvi: 0,
					myn: 0,
					goc: false,
					ugq: false,
				},
				wjh: {
					vjo: 0,
					nen: 0,
					ugq: 0,
					ref: 0,
					rvi: 0,
					lnx: 0,
				},
			});

			const my = kt.my;

			for (let i = 0; i < kt.length; i++)
			{
				const lf = kt.cxw[i] = new txl(kt.cxw[i]);

				lf.ctk = jrf.wnk(lf.tsj);

				lf.yj = this.yj(lf.tsj);

				if (i > 0)
				{
					lf.pk = true;

					if (lf.gnv && kt.arg > 1)
					{
						my.goc = true
					}

					if (lf.yj)
					{
						my.ugq = true;
					}
				}

				if (lf.whx == '' || lf.ctk.cnd)
				{
					!lf.ctk.iep && lf.ce();
				}
			}

			const yxp = kt.yxp;

			if (this.kho(yxp.xvx))
			{
				kt.ce('kho');

				continue;
			}

			my.qr = ye.hpg(yxp.whx);
			my.rvi = my.qr.length;
			my.qr = ye.oqr(my.qr);
			my.myn = my.qr.length;

			for (let x in yxp.yu)
			{
				x = yxp.yu[x];

				if (x.ck == yxp.xvx)
				{
					kt.ce('nip')
				}

				if (x instanceof zc)
				{
					my.rfc.push(x.ug);

					ye.ugb(x.ck.toString(), this.rfc.ebm(x.ug), my.qr);
				}
			}

			rgm.upg.push(my.rvi);
		}

		rgm.qbd = ye.lui(
			new mzy(rgm.upg).hcn()
		);

		for (let kt of ib)
		{
			kt.my.qr.splice(
				Math.round(rgm.qbd)
			);

			for (let ho of kt.my.qr)
			{
				if (ho.length > 2 && !age.includes(ho))
				{
					this.oht.kbv(ho);
				}
			}
		}

		for (let kt of ib)
		{
			if (kt.hidden)
				continue;

			const wjh = kt.wjh;

			for (let ho of kt.my.qr)
			{
				wjh.vjo += this.oht.get(ho);
			}

			wjh.vjo /= kt.my.rvi;

			wjh.nen = kt.my.rfc.length;

			rgm.fcr = Math.max(rgm.fcr, wjh.vjo);
		}

		for (let kt of ib)
		{
			const wjh = kt.wjh;

			wjh.vjo = hxc.vjo * ye.bdu(wjh.vjo, rgm.fcr);
			wjh.nen = hxc.nen * unv.nen(wjh.nen);
			wjh.ugq = hxc.ugq * unv.lpw(kt.my.ugq);
			wjh.ref = hxc.ref * unv.lpw(kt.my.goc, .5);

			wjh.lnx = ye.pzl(Object.values(wjh));

			wjh.lnx *= !!(wjh.vjo);
			wjh.lnx += ye.bdu(hxc.rvi, kt.my.rvi);
		}

		ib.sort(
			(a, b) => b.wjh.lnx - a.wjh.lnx
		);

		for (let i = 0, n = ib.length; i < n; i++)
		{
			const a = ib[i];

			if (!a.hidden) for (let k = i + 1; k < n; k++)
			{
				const b = ib[k];

				if (!b.hidden && !b.ihz)
				{
					const bph = ye.lsn(a.my.qr, b.my.qr);
					const uax = (a.my.qr.length + b.my.qr.length) / 2;

					if (bph.length == b.my.rvi)
					{
						b.ce('oel');
					}

					if (bph.length >= .5 * uax)
					{
						const yqy = a.my.rfc[0] || 0;
						const imz = b.my.rfc[0] || 0;

						if (this.rfc.rjk(yqy, imz))
						{
							b.ce('rjk');
						}
					}
				}
			}
		}

		for (let i = 0; i < ib.length; i++)
		{
			const kt = ib[i];

			if (kt.gxs)
				break;

			let ubo = false;

			if (kt.my.myn == 1)
			{
				ubo = true;
			}

			if (i == 0 && !kt.ihz)
			{
				const dcs = this.ixv.mb.toLowerCase();
				const tck = kt.yxp.whx;

				if (dcs == tck)
				{
					ubo = true;
				}
			}

			if (kt.ihz && kt.arg == 1)
			{
				const kve = new Date(kt.yxp.uyw);
				const yqy = new Date(kt.evy.uyw);

				if (.001 * (yqy - kve) < 300)
				{
					ubo = true;
				}
			}

			if (ubo)
			{
				ye.jdj(i, ib);

				kt.gxs = true;
				i--;
			}
		}

		for (let kt of ib)
		{
			this.teb.plv(kt.ck, kt.tsj);

			for (let tsj of kt.weh)
			{
				this.teb.xoc(tsj, kt.ck)
			}
		}

		for (let kt of ib)
		{
			if (kt.ygk == 0) continue;

			for (let qew of kt.lvq)
			{
				const jf = qew.xvx;

				const pev = ye.xq(rb[33], jf);

				for (let ctk of jrf.ece(pev))
				{
					if (this.kty(ctk).test(jf))
					{
						qew.cdh = ctk;
						break;
					}
				}
			}

			if (kt.length > 2)
			{
				let qdf = [], fg = [], jcj = false;

				const n = kt.length;

				for (let i = (n == 3) ? 0 : 1; i < n; i++)
				{
					if (jcj)
					{
						qdf = [];
						fg = [];
						jcj = false;
					}

					const qew = kt.cxw[i];
					const on = qew.ctk;

					if (ye.pb(qdf) == on) {
						i++;
					}
					else if (qdf.includes(on) || ye.oqr(qdf).length < 2)
					{
						qdf.push(on);
						fg.push(qew);

						if (i + 1 < n)
							continue;
					}

					if (fg.length > 2)
					{
						let dpi = !fg.some(qew => qew.cdh && !qdf.includes(qew.cdh));

						if (dpi)
						{
							fg.forEach(qew =>
								qew.cdh = qdf.find(ctk => ctk != qew.ctk)
							);

							i++;
						}
					}

					if (i + 1 < n)
					{
						i -= 2;
						jcj = true;
					}
				}
			}

			for (let nil, i = 1; i < kt.length; i++)
			{
				const qew = kt.cxw[i];

				if (!qew.cdh)
				{
					if (nil && nil.cdh == qew.ctk)
					{
						qew.cdh = nil.ctk;

						kt.fsk(nil, qew);
					}
				}
				else {
					let omq;

					const rek = qew.cdh;

					for (let k = i - 1; k >= 0; k--)
					{
						const nil = kt.cxw[k];

						if (k == 0)
						{
							if (nil.ctk == rek)
							{
								omq = '';
							}

							break;
						}

						if (nil.ctk == rek)
						{
							kt.fsk(nil, qew);

							if (nil.children.length == 1)
							{
								omq = '';
							}

							break;
						}
					}

					if (omq == null)
					{
						const bc = new dsc(rek.cdm, rek.ck);

						omq = qew.fwz(bc) + ' ';
					}

					qew.xvx = qew.xvx.replace(
						this.kty(rek), omq
					);
				}

				nil = qew;
			}

			for (let i = 1, n = kt.length; i < n; i++)
			{
				const qew = kt.cxw[i];

				if (qew.ti || qew.children.length)
				{
					ye.jdj(i, kt.cxw);
					i--;
					n--;
				}
			}

			for (let erd = false, i = 1; i < kt.length; i++)
			{
				let qew = kt.cxw[i];

				erd = (erd || !qew.gnv);

				if (qew.kny)
				{
					continue;
				}

				if (!erd)
				{
					const jf = qew.xvx;

					if (kt.length > 2 || ['+','@'].includes(jf[0]) || jf.length < 10)
					{
						qew.ce();
					}
				}

				qew.cdh && !kt.ezg(qew.cdh.ck) && qew.ce();

				this.tob(qew.tsj, kt.ck) && qew.ce();
			}
		}

		ib = ib.map(kt =>
		{
			const cxw = [];

			if (kt.hidden) {
				return [];
			}

			for (let i = 0; i < kt.length; i++)
			{
				const lf = kt.cxw[i];

				lf.jz = zgp.gpq(lf.xvx);

				lf.cdm = lf.ctk.cdm;

				if (lf.jz.length < 2)
				{
					if (i == 0) {
						return [];
					}

					lf.ce();
				}

				cxw.push(
					new ltl(lf)
				);
			}

			return cxw;
		});

		return ib.filter(kt => kt.length > 0);
	},

	kho(mb)
	{
		return mb.length > 500 || ye.nhf(rb[34], mb) > 3;
	},

	yj(tsj)
	{
		return this.ewb == tsj;
	},

	tob(tsj, yzj)
	{
		if (this.yj(tsj))
		{
			return false;
		}

		for (let pyq of this.teb.tph(tsj))
		{
			if (pyq == yzj)
			{
				return false;
			}

			if (!this.teb.bsz(pyq, tsj))
			{
				return true;
			}
		}

		return false;
	},

	kty(ctk)
	{
		const ck = ctk.ck;

		if (ck in this.fmg)
		{
			return this.fmg[ck];
		}

		return this.fmg[ck] = ye.ajs('^[+@]?%s[-\\s,.:;?!]*', ctk.esv, 'i');
	}
};

const zgp = {
	gpq(lg)
	{
		let mb = new knf(lg);

		mb.mdn && mb.toLowerCase();

		if (mb.maq('.'))
		{
			mb.charAt(-1) == '.' && mb.charAt(-2) != '.' && mb.ubq(1);

			mb.replace(rb[35], (m) => m.replace(rb[36], ''));
		}

		if (mb.maq('\n'))
		{
			mb.replace(rb[37], function(m, i)
			{
				let x = mb.charAt(i - 1);

				return ye.hbg(x) ? '. ' : ' ';
			});
		}

		if (mb.ufy('*_'))
		{
			mb.replace(rb[38], '$2');
		}

		if (mb.ufy('(,!?.)'))
		{
			mb.replace(rb[39], '?!');

			mb.replace(rb[40], '$1');

			mb.replace(rb[41], '$1 $2');

			mb.maq('!') && mb.replace(rb[42], '$1');
		}

		if (mb.ufy('$£€'))
		{
			mb.replace(rb[43], (_, uzu, vfa) =>
			{
				rb[44].test(uzu) && (uzu = Math.round(uzu));

				return vfa + uzu;
			});
		}

		mb.maq(':') && mb.replace(rb[45], ': ');

		mb.maq('&') && mb.replace(rb[46], ' and ');

		mb.maq('"') && mb.replace(rb[47], '" - $1');

		return tfw.krm(mb.iwd);
	},

	jho(lg)
	{
		return lg.length < 28 && this.bcs(lg) || this.nmg();
	},

	bcs(mb)
	{
		let qr;

		if (!rb[48].test(mb))
		{
			if (ye.zfv(mb))
			{
				mb = ye.vhk(mb);
			}

			qr = mb.split(' ');

			if (qr.length == 1)
			{
				return ye.md(qr[0], 'PRE_CASE');
			}
		}
		else {
			qr = ye.xo(rb[49], mb);
		}

		qr = qr.map(ho =>
		{
			switch (true)
			{
				case ho.length < 2 || ye.qof(ho):
					return '';

				default:
					return ye.md(ho);
			}
		});

		qr = qr.filter(
			(ho, i) => ho != '' && i == qr.indexOf(ho)
		);

		return qr.join(' ');
	},

	nmg()
	{
		return 'user' + ye.ap(4);
	}
};

const eqn = {
	jgz(mb)
	{
		mb = mb.toLowerCase();

		mb = mb.replace(rb[50], ' ');

		return ye.skh(mb);
	},

	fma(mb)
	{
		return mb.replace(rb[51], '$1');
	}
};

const tfw = {
	pbo: {
		':p':'\u{1F60B}',
		';p':'\u{1F60B}',
		':d':'\u{1F604}',
		';d':'\u{1F604}',
		':o':'\u{1F62F}',
		':v':'\u{0270C}',
		':x':'\u{1F635}',
		'xo':'\u{1F635}',
		'xd':'\u{1F606}',
		':)':'\u{1F642}',
		';)':'\u{1F609}',
		':(':'\u{1F641}',
		':|':'\u{1F610}',
		'-_':'\u{1F611}',
		'^_':'\u{1F60A}',
		'+_':'\u{1F915}',
		':/':'\u{1F615}',
		':\\':'\u{1F615}',
		'<3':'\u2764\ufe0f',
	},

	krm(mb)
	{
		return mb.replace(rb[52], m => this.get(m));
	},

	get(ms)
	{
		ms = ms.toLowerCase();

		(ms.length == 2) || (ms = ms.slice(0, 2));

		return this.pbo[ms] || ms;
	}
};

class mgc
{
	constructor()
	{
		this.map = {};
	}

	kbv(ho)
	{
		this.map[ho] = ++this.map[ho] || 0;
	}

	get(ho)
	{
		return this.map[ho] || 0;
	}
}

class wyu
{
	constructor()
	{
		this.map = {};
	}

	ebm(yqy)
	{
		for (let imz in this.map)
		{
			if (this.rjk(yqy, imz))
			{
				return this.map[imz];
			}
		}

		return this.eua(yqy);
	}

	eua(lh)
	{
		return this.map[lh] = ye.wt('TS%s', lh);
	}

	rjk(yqy, imz)
	{
		return Math.abs(imz - yqy) < 5;
	}
}

class ofb
{
	constructor()
	{
		this.cnk = {};

		this.ib = {};
	}

	tph(tsj)
	{
		return this.cnk[tsj];
	}

	bsz(pyq, tsj)
	{
		return this.ib[pyq] == tsj;
	}

	plv(pyq, tsj)
	{
		this.ib[pyq] = tsj;
	}

	xoc(tsj, pyq)
	{
		if (!this.cnk[tsj])
		{
			this.cnk[tsj] = new rj;
		}

		this.cnk[tsj].push(pyq);
	}
}

let on;

const hz = new utl;
const og = new ve;
const odu = new wdr;
const tc = new wl;
const iw = new qw;
const fv = new iq;

const rb = [
	/%s/g,
	/(\d+)([a-z])/,
	/^(00:0?|0)/,
	/\s*\n\s*/g,
	/[^\S\n]+/g,
	/\s+/g,
	/\p{L}/u,
	/^\d+$/,
	/[^\p{L}\p{N}]/u,
	/(^|\s)[a-z]/g,
	/\s/g,
	/([-()\[\]{}+?*.$\^|,:#<!\\])/g,
	/\x08/g,
	/[a-z]+/g,
	/[\u{0621}-\u{064A}]+/gu,
	/[א-ת]+/g,
	/^\u200b/,
	/https?:[^\s]+/g,
	/#[a-zA-Z0-9]\w{2,}/g,
	/\b\d\d?(:\d\d)+/g,
	/[`´‘’׳״“”„׳]/g,
	/(.)\1+/gu,
	/\p{N}/u,
	/[^\p{L}\p{N}]/gu,
	/^[A-Za-z0-9_-]{32,}$/,
	/youtu(?:\.be\/|be\.com\/watch\?v=)([\w\-]{11})/,
	/[?&](?:time_continue|t)=([\dms]+)/,
	/\d+/g,
	/\/\/([^\/]+)/,
	/^\d\d?:.*\d\d$/,
	/\d\d?(:\d\d)+/g,
	/^global:\s*/i,
	/^(wh(o|y|at|en|ere)|how)|\?$/,
	/[@+]?(.{2})/,
	/^.{0,3}\n/gm,
	/(\.[a-z]){2,}\.?/gi,
	/\./g,
	/\n/g,
	/([*_])(.+?)\1/g,
	/[?!]{2,}/,
	/ ([!?),.])/g,
	/([)!?,.])(\p{L})/gu,
	/([?!])[,.]+/g,
	/(\d[\d,.]*)([$£€])/g,
	/\.\d{2}$/,
	/ : /g,
	/ & /g,
	/\"\. ([a-z])/i,
	/[^A-Za-z0-9\s]/,
	/([A-Za-z0-9]+)/g,
	/[^\p{L}\p{N}\s]/gu,
	/([a-z]{3,})(ing|ed|e?s)\b/g,
	/<3+|([+^-])_\1|[;:]([xvopd]+\b|[|()\\/])|\b(xd|xo)+\b/gi,
];