/*
 * This code belongs to Comments Search for YouTube Chrome Extension
 * Developed by lett <https://cs.lett.app>
 *		
 * Copyright (c) The Extension Developers - All Rights Reserved
 *
 */
'use strict';

const mv = {};

for (let dw of 'object array string regex date math type std cmp'.split(' '))
{
	mv[dw] = {};
}

mv.vn = function(xz, xe)
{
	return xz != null && xz.constructor === xe;
}

mv.ob = function()
{
	return mv.is(9);
}

mv.kb = function(xu)
{
	return uz[0].test(xu);
}

mv.ly = function(ov)
{
	return Object.keys(ov).length == 0;
}

mv.mh = function(vz, ov)
{
	for (let jz in ov)
	{
		const en = ov[jz];

		if (jz == vz) return en;
		if (en == vz) return jz;
	}
}

mv.ki = function(ov, sd)
{
	if (ov instanceof Object)
	{
		return ov[sd];
	}
}

mv.zg = function(ov, sd, yz)
{
	if (ov instanceof Object)
	{
		ov[sd] = yz;
	}
}

mv.ug = function(ov, ux)
{
	let xu = '';

	for (let jz in ov)
	{
		xu += jz + '=' + ov[jz] + ux;
	}

	return xu.slice(0, -1);
}

mv.kg = function(vi, ji, dl)
{
	const lk = ji + 1;

	return dl.slice(lk, lk + vi);
}

mv.ko = function(dl)
{
	return dl[dl.length - 1];
}

mv.tr = function(hb, ia)
{
	hb += '?';

	for (let jz in ia)
	{
		hb += jz + '=' + encodeURIComponent(ia[jz]) + '&';
	}

	return hb.slice(0, -1);
}

mv.nm = function(xu, ej)
{
	if (mv.vn(ej, Array))
	{
		let i = 0;

		return xu.replace(uz[1], _ => ej[i++]);
	}

	return xu.replace('%s', ej);
}

mv.to = function(s)
{
	return !['', false].includes(s) && !isNaN(s);
}

mv.rm = function(xu, cs)
{
	const xo = mv.nm('(%s)', cs.join('|'));

	return xu.split(new RegExp(xo)).filter(s => s !== '');
}

mv.gx = function(xu)
{
	return xu.toUpperCase();
}

mv.bg = function(xu)
{
	return xu.toLowerCase();
}

mv.ua = function(xu, xa)
{
	if (!xa)
	{
		xu = xu.toLowerCase();
	}

	return xu[0].toUpperCase() + xu.slice(1);
}

mv.cz = function(wz, xu)
{
	return xu.match(wz) || [];
}

mv.cy = function(wz, xu)
{
	if (wz.global) return '';

	const m = mv.cz(wz, xu);

	switch (m.length)
	{
		case 0: return '';
		case 1: return m[0];
		case 2: return m[1];

		default: return m.slice(1);
	}
}

mv.cf = function(gn)
{
	return gn < mv.ay();
}

mv.ay = function()
{
	return Math.floor(Date.now() / 1000);
}

mv.gp = function(q)
{
	const vy = {
		s: 1,
		m: 60,
		h: 60 * 60,
		d: 60 * 60 * 24,
	};

	const x = mv.cy(uz[2], q);

	return Date.now() + (x[0] * vy[x[1]] * 1000);
}

mv.yc = function(tl)
{
	let x = tl.split(':'),
		i = x.length,
		s = 0,
		m = 1;

	while (i--)
	{
		s += m * x[i];
		m *= 60;
	}

	return s;
}

mv.ql = function(dv)
{
	let dl = [];

	dl.push(dv / 3600);

	dv %= 3600;

	dl.push(dv / 60);

	dl.push(dv % 60);

	dl = dl.map(n =>
	{
		n = Math.floor(n);

		return (n < 10) ? '0' + n : n;
	});

	return dl.join(':').replace(uz[3], '');
}

mv.is = function(mr)
{
	return Math.random().toString().slice(2, mr + 2);
}

mv.ax = function(zv, aw)
{
	const oi = Math.random() * (aw - zv) + zv;

	return Math.floor(oi);
}

mv.lp = function(x, a, b)
{
	return x >= a && x <= b;
}

mv.yo = function(a, b)
{
	return 100 * (a / b);
}

mv.zo = function(lv)
{
	const n = lv.length;
	const i = Math.floor(n / 2);

	if (n == 0)
		return 0;

	if (n % 2 != 0)
		return lv[i];

	if (n % 2 == 0)
		return (lv[i] + lv[i-1]) / 2;
}

mv.yn = function()
{
	let ya, eq = 0;

	try {
		ya = [mq, pv, sk, lx, ud];
	}
	catch (e) {
		ya = [mq, pv];
	}

	ya.forEach(
		cp => eq += cp.toString().length
	);

	return eq != 3348;
}

mv.fy = function(a, b)
{
	return a - b;
}

mv.vs = function(a, b)
{
	return b - a;
}

mv.ub = function(a, b)
{
	return a.length - b.length;
}

mv.tq = function(a, b)
{
	return b.length - a.length;
}

const bf = 'Ny0y0avvQy';

class tu
{
	constructor(mj, bh)
	{
		this.mj = mj;
		this.bh = bh;
	}
}

class bn
{
	constructor(qv, mj, bh)
	{
		this.qv = qv;
		this.aj = new tu(mj, bh);
	}
}

class qp extends Array
{
	constructor(cw)
	{
		super();

		if (cw != null)
		{
			super.push(cw);
		}
	}

	push(hd)
	{
		return !this.includes(hd) && super.push(hd);
	}
}

class qx
{
	constructor(mo, jw)
	{
		const cp = mo.status;

		this.cp = cp;
		this.pe = false;
		this.rv = false;
		this.xj = null;
		this.bh = null;

		switch (jw)
		{
			case 'error':
				return this.iv('ec');

			case 'timeout':
				return this.iv('op');

			default:
			{
				this.pe = (cp == 200);

				if (cp >= 500)
				{
					return this.iv('md');
				}

				try {
					this.bh = JSON.parse(mo.responseText);
				}
				catch (e) {
					this.bh = mo.responseText;
				}
			}
		}
	}

	bw(zj)
	{
		this.xj = zj;
	}

	iv(zj)
	{
		this.bw(zj);

		this.rv = true;
	}
}

class sg
{
	constructor(bh, tp)
	{
		Object.assign(this, bh);

		Object.defineProperty(this, 'tp', {
			value: tp
		});
	}

	set(jz, en)
	{
		this[jz] = en;

		return this.vk();
	}

	zs(xq)
	{
		Object.assign(this, xq);

		return this.vk();
	}

	gd(xq)
	{
		for (let sd in this)
		{
			delete this[sd];
		}

		Object.assign(this, xq);

		return this.vk();
	}

	vk()
	{
		return le.set(this.tp, this);
	}
}

class pv extends sg
{
	constructor(bh, tp)
	{
		super(bh, tp);
	}

	get ok()
	{
		return !!(this.pc)
	}

	get pc()
	{
		return this[0];
	}

	get qu()
	{
		return this[1];
	}

	get qr()
	{
		return this.qu <= mv.ay();
	}

	get lz()
	{
		return !!(
			+this.qu.toString().split('').pop()
		);
	}

	set pc(jz)
	{
		this.set(0, jz);
	}

	set qu(qo)
	{
		this.set(1, qo);
	}

	get eg()
	{
		let s = this.qu.toString(),
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

class jy
{
	constructor(zw)
	{
		if (zw)
		{
			this.eb();
		}
	}

	wx(vj, vu, fi)
	{
	}

	eb()
	{
		chrome.runtime.onMessage.addListener(
			this.wx.bind(this)
		);
	}
}

class hw extends jy
{
	constructor()
	{
		super(false);
	}

	wx(vj, vu, fi)
	{
		const bh = vj.bh;

		switch (vj.mj)
		{
			case 'fp':
				return this.jf(bh);
		}
	}

	jf(fp)
	{
		if (fp == 'zn')
		{
			bk.lk();
		}
	}

	me()
	{
		return this.py('me');
	}

	gk(ir)
	{
		return this.py('gk', ir);
	}

	za(pc)
	{
		return this.py('za', pc);
	}

	nj(ab)
	{
		return this.py('nj', ab);
	}

	ag(rj)
	{
		return this.py('ag', rj);
	}

	py(mj, bh)
	{
		const vj = new tu(mj, bh);

		return new Promise(fi =>
		{
			try {
				chrome.runtime.sendMessage(vj, fi);
			}
			catch (e) {
			}
		});
	}
}

class jm extends jy
{
	constructor()
	{
		super(true);
	}

	wx(vj, vu, fi)
	{
		const oe = function(...ej)
		{
			try {
				fi(...ej);
			}
			catch (e) {
			}
		};

		kv.lg.then(_ =>
		{
			const bh = vj.bh;

			switch (vj.mj)
			{
				case 'me':
					kv.me().then(oe);
					break;

				case 'gk':
					kv.gk(bh).then(oe);
					break;

				case 'za':
					kv.za(bh).then(oe);
					break;

				case 'nj':
					zl.ps.nj(bh).then(oe);
					break;

				case 'ag':
					kv.ag(bh);
					break;
			}
		});

		return true;
	}
}

class pl
{
	get(jz)
	{
		return new Promise(np =>
		{
			try {
				chrome.storage.local.get(jz, ve =>
					np(typeof jz == 'string' ? ve[jz] : ve)
				);
			}
			catch (e) {
			}
		});
	}

	set(jz, en)
	{
		let bh;

		if (typeof jz == 'object')
		{
			bh = jz;
		}
		else {
			bh = {[jz]:en};
		}

		return new Promise(jd =>
		{
			try {
				chrome.storage.local.set(bh, jd);
			}
			catch (e) {
			}
		});
	}

	ap()
	{
		return new Promise(jd =>
		{
			try {
				chrome.storage.local.clear(jd);
			}
			catch (e) {
			}
		});
	}
}

class agjax
{
	constructor(Port)
	{
		Port.onMessage.addListener(
			bn => this.kr(bn)
		);

		Port.onDisconnect.addListener(
			_ => this.uj()
		);

		this.Port = Port;

		this.vp = {
		};

		this.hv = false;
	}

	wx(m)
	{
	}

	xh(qv, mj, bh)
	{
		const yg = new bn(qv, mj, bh);

		if (!this.hv)
		{
			this.Port.postMessage(yg);
		}
	}

	kr(x)
	{
		this.hm(x.qv).wx(x.aj);
	}

	hm(qv)
	{
		return this.vp[qv] || this;
	}

	iy(qv, wx, uj)
	{
		return this.vp[qv] = new da(this, qv, wx, uj);
	}

	uj()
	{
		this.hv = true;

		for (let qv in this.vp)
		{
			this.hm(qv).uj();
		}
	}
}

class tw extends agjax
{
	constructor()
	{
		super(chrome.runtime.connect());
	}

	wx(vj)
	{
		const bh = vj.bh;

		switch (vj.mj)
		{
			case 'ym':
				return mg.ex(bh);
		}
	}

	iy(qv, wx, uj)
	{
		this.xh(null, 'iy', qv);

		return super.iy(qv, wx, uj);
	}

	uj()
	{
		super.uj();

		bk.mp();
	}
}

class bo extends agjax
{
	constructor(he)
	{
		super(he);
	}

	wx(vj)
	{
		switch (vj.mj)
		{
			case 'iy':
				return this.iy(vj.bh);
		}
	}

	iy(qv)
	{
		const zq = super.iy(qv);

		switch (qv)
		{
			case 'xw':
				return new ei(zq);
		}
	}
}

class xb
{
	constructor()
	{
		chrome.runtime.onConnect.addListener(
			wt => this.ad(wt)
		);

		this.vb = [];
	}

	ad(he)
	{
		this.vb.push(
			new bo(he)
		);
	}

	fh(ui)
	{
		for (let he of this.vb)
		{
			he.xh(null, 'ym', ui);
		}
	}
}

class da
{
	constructor(he, qv, wx, uj)
	{
		this.he = he;

		this.qv = qv;

		if (wx)
		{
			this.wx = wx;
		}

		if (uj)
		{
			this.uj = uj;
		}
	}

	xh(mj, bh)
	{
		this.he.xh(this.qv, mj, bh);
	}

	wx(m)
	{
	}

	uj()
	{
	}
}

mv.omu = function(x)
{
	if (typeof x == 'object')
	{
		x = JSON.stringify(x);
	}

	return btoa(x);
}

mv.rqe = function(x)
{
	x = atob(x);

	try {
		return JSON.parse(x);
	}
	catch (e) {
		return x;
	}
}

mv.bsu = function(x)
{
	return mv.rqe(
		mv.ict(x)
	);
}

mv.eqv = function(ft, uy)
{
	if (uy)
	{
		const fw = Object.create(
			Object.getPrototypeOf(ft)
		);

		return Object.assign(fw, ft);
	}

	return {...ft};
}

mv.xth = function(qg, yz, dl)
{
	let i = dl.indexOf(qg);

	if (i >= 0)
	{
		dl[i] = yz;
	}
}

mv.lnf = function(df, lq, dl)
{
	if (lq != df)
	{
		const hd = dl[df];
		dl.splice(df, 1);
		dl.splice(lq, 0, hd);
	}
}

mv.nwa = function(df, dl)
{
	mv.lnf(df, Infinity, dl);
}

mv.fvz = function(...ih)
{
    ih.sort(
    	(a, b) => a.length - b.length
    );

	return ih.shift().filter(hd =>
	{
		for (let my of ih)
        {
			if (!my.includes(hd))
				return false;
        }

		return true;
    });
}

mv.ycn = function(dl)
{
	return dl.filter(
		(value, scu) => dl.indexOf(value) == scu
	);
}

mv.aea = function(qh, btz)
{
	return qh.join(btz || '.');
}

mv.ycj = function(xu, ybi)
{
	if (ybi)
	{
		xu = xu.replace(uz[4], '\n');

		xu = xu.replace(uz[5], ' ');
	}
	else {
		xu = xu.replace(uz[6], ' ');

	}

	return xu.trim();
}

mv.qwy = function(xu, xo, fi)
{
	return xu.replace(xo, (ofk, zgs) =>
	{
		return ofk.replace(zgs, fi(zgs));
	});
}

mv.bdc = function(vng)
{
	return uz[7].test(vng);
}

mv.mvo = function(xu)
{
	return !uz[8].test(xu);
}

mv.tfe = function(xu)
{
	return xu.toLowerCase().replace(uz[9], mv.gx);
}

mv.uso = function(xu)
{
	return xu == xu.toUpperCase();
}

mv.otp = function(xu)
{
	return xu == xu.toLowerCase();
}

mv.ywh = function(xu)
{
	return mv.otp(xu) || mv.uso(xu);
}

mv.lmx = function(wz, xu)
{
	return mv.cz(wz, xu).length;
}

mv.wyz = function(xu)
{
	return mv.lmx(uz[10], xu) + 1;
}

mv.dfm = function(xu)
{
	return xu ? xu.split(' ') : [];
}

mv.fes = function(i, xu)
{
	return xu.substring(0, i) + 'x' + xu.substring(++i);
}

mv.ict = function(xu)
{
	let s = '';

	for (let i = xu.length - 1; i >= 0; i--)
		s += xu[i];

	return s;
}

mv.jzf = function(s)
{
	return String(s).replace(uz[11], '\\$1').replace(uz[12], '\\x08');
}

mv.oxc = function(xo, ej, kpt)
{
	if (ej.constructor === Array)
	{
		ej = ej.map(mv.jzf);
	}
	else {
		ej = mv.jzf(ej);
	}

	xo = mv.nm(xo, ej);

	return new RegExp(xo, kpt);
}

mv.tsj = new function()
{
	const vy = Object.entries({
		year: 1 * 60 * 60 * 24 * 30 * 12,
		month: 1 * 60 * 60 * 24 * 30,
		week: 1 * 60 * 60 * 24 * 7,
		day: 1 * 60 * 60 * 24,
		hour: 1 * 60 * 60,
		minute:1 * 60,
		second:1
	});

	const bqw = (fge) => new Date(fge).getTime() / 1000;

	return (fge) =>
	{
		const dkf = mv.ay() - bqw(fge);

		for (let [ofb, lvk] of vy)
		{
			let ovs = dkf / lvk;

			if (ovs >= 1)
			{
				ovs = Math.floor(ovs);

				return mv.nm('%s %s%s ago', [ovs, ofb, (ovs > 1) ? 's' : '']);
			}
		}

		return '';
	};
}

mv.tsm = function(dl)
{
	return dl.reduce((a, b) => a + b, 0);
}

mv.wny = function(dl)
{
	return mv.wnu(
		mv.tsm(dl), dl.length
	);
}

mv.wnu = function(a, b)
{
	return (b != 0) ? (a / b) : 0;
}

const ucr = {
	aut(hb, ceu, laq)
	{
		return this.hzs('GET', hb, ceu, null, laq);
	},

	kyz(hb, ceu, aj, laq)
	{
		return this.hzs('POST', hb, ceu, aj, laq);
	},

	hzs(jg, hb, ceu, aj, laq)
	{
		if (ceu)
		{
			hb = mv.tr(hb, ceu);
		}

		if (aj)
		{
			aj = this.exk(aj);
		}

		return new Promise(np =>
		{
			let mo = new XMLHttpRequest;

			if (laq != Infinity)
			{
				let kex = 0;

				mo.ontimeout = (e) =>
				{
					if (++kex < 3)
					{
						return this.yxl(mo, jg, hb, aj);
					}

					mo.onerror(e);
				}

				mo.timeout = 5000;
			}

			mo.onload = mo.onerror = (e) => np(
				new qx(mo, e.type)
			);

			this.yxl(mo, jg, hb, aj);
		});
	},

	yxl(mo, jg, hb, aj)
	{
		mo.open(jg, hb);
		mo.send(aj);
	},

	exk(ia)
	{
		let eml = new FormData;

		for (let jz in ia)
		{
			eml.append(jz, ia[jz]);
		}

		return eml;
	}
}

class ahw
{
	constructor(gaj)
	{
		this.map = {};

		this.yqc = Object.getOwnPropertyNames(Object.prototype);

		this.gdz = gaj;
	}

	get keys()
	{
		return Object.keys(this.map);
	}

	get values()
	{
		return Object.values(this.map);
	}

	get(jz)
	{
		jz = this.bwl(jz);

		return this.hdm(this.map[jz]);
	}

	set(jz, en)
	{
		jz = this.bwl(jz);

		this.map[jz] = this.hdm(en);
	}

	net(jz)
	{
		return this.bwl(jz) in this.map;
	}

	pbk(jz)
	{
		!this.net(jz) && this.set(jz);
	}

	bwl(jz)
	{
		if (this.yqc.includes(jz))
		{
			return jz + '*';
		}

		return jz;
	}

	hdm(en)
	{
		if (en == undefined && this.gdz)
		{
			return new this.gdz;
		}

		return en;
	}
}

class ohp
{
	constructor(jzg, cda)
	{
		this.re = jzg.re;

		this.jlf = jzg.jlf;

		this.cda = cda;

		this.nvf = [];

		this.zkj = new qp;

		this.sxd(jzg);
	}

	sxd(ol)
	{
		if (this.jlf == ol.jlf)
		{
			ol.yxr = true;
		}

		this.zkj.push(ol.jlf);

		this.nvf.push(ol);
	}

	qdv(re)
	{
		return this.zkj.includes(re);
	}

	nf(aoh)
	{
		this.jzg.nf(aoh);
	}

	nar()
	{
		this.phs.forEach(nqt => nqt.hidden = true);
	}

	miw(bv, xk)
	{
		let bmy = bv;

		while (bmy.rdz)
		{
			bmy = bmy.rdz;
		}

		this.xpv(bmy, xk);

		bv.bq(xk);
	}

	xpv(a, b)
	{
		const df = this.nvf.indexOf(b);
		const lq = this.nvf.indexOf(a) + 1;

		mv.lnf(df, lq, this.nvf);
	}

	get length()
	{
		return this.nvf.length;
	}

	get fav()
	{
		return this.zkj.length;
	}

	get jzg()
	{
		return this.nvf[0];
	}

	get uxn()
	{
		return this.nvf[1];
	}

	get ziw()
	{
		return this.length > 1;
	}

	get phs()
	{
		return this.nvf.slice(1);
	}

	get abe()
	{
		return this.nvf.length - 1;
	}

	get hidden()
	{
		return this.jzg.hidden;
	}

	get fw()
	{
		const fw = mv.eqv(this, true);

		fw.nvf = this.nvf.map(mv.eqv);

		return fw;
	}
}

class iej
{
	constructor(iov)
	{
		this.fz = iej.qzh(iov);
		this.ku = iej.mji(this.fz);
	}

	static mji(fz)
	{
		return ['he','ar'].includes(fz) ? 'rtl' : 'ltr';
	}

	static qzh(xu)
	{
		const pwf = .57 * mv.wyz(xu);

		switch (true)
		{
			case pwf < mv.lmx(uz[13], xu):
				return 'en';

			case pwf < mv.lmx(uz[14], xu):
				return 'ar';

			case pwf < mv.lmx(uz[15], xu):
				return 'he';

			default:
				return '';
		}
	}

	static get opb()
	{
		if (!this.swt)
		{
			this.swt = navigator.languages.map(fz => fz.slice(0, 2));
		}

		return this.swt;
	}
}

class ngo
{
	constructor(oky)
	{
		const _ = oky.items[0];

		this.mzo = _.snippet.channelId;
		this.fv = _.statistics.commentCount;

		if (this.fv == undefined)
		{
			this.fv = -1;
		}
		else {
			this.fv = +this.fv;
		}
	}
}

class ehy
{
	constructor(oky)
	{
		const _ = oky.snippet;

		this.re = oky.id;
		this.vd = _.videoId;
		this.jlf = _.authorChannelId.value;
		this.rf = _.authorProfileImageUrl;
		this.amz = _.authorDisplayName;
		this.qey = _.textOriginal;
		this.nxb = _.publishedAt;
		this.xgn = _.likeCount;
		this.yxr = false;
		this.jv = false;
	}
}

class igb
{
	constructor(ehy)
	{
		Object.assign(this, ehy);

		this.rgh = '';
		this.cwb = '';
		this.gq = {};
		this.children = [];
		this.bv = null;
		this.uxf = null;
		this.tzf = null;
		this.lqp = null;
		this.hidden = false;

		this.cwe();
		this.hni();
		this.thp();
		this.rkm();
		this.ywj();
	}

	cwe()
	{
		this.rgh = this.qey.replace(uz[16], '');

		delete this.qey;
	}

	ywj()
	{
		this.cwb = tcf.adq(this.rgh);

		this.lqp = new iej(this.cwb);

		if (this.lqp.fz == 'en')
		{
			this.cwb = tcf.qjr(this.cwb);
		}
	}

	hni()
	{
		if (!this.rgh.includes('/'))
			return;

		this.rgh = this.rgh.replace(uz[17], (hb) =>
		{
			let x;

			const pxj = azg.fuj(hb);

			if (pxj) {
				if (pxj.vd == this.vd)
				{
					x = new mb(this.vd, pxj.yh);
				}
				else {
					x = new vh(pxj);
				}
			}
			else {
				x = new ash(hb);
			}

			return this.mrq(x);
		});
	}

	thp()
	{
		if (!this.rgh.includes('#'))
			return;

		this.rgh = this.rgh.replace(uz[18], (epx) =>
		{
			const x = new clm(epx);

			return this.mrq(x);
		});
	}

	rkm()
	{
		if (!this.rgh.includes(':'))
			return;

		this.rgh = this.rgh.replace(uz[19], (tl) =>
		{
			const x = new mb(this.vd, tl);

			return this.mrq(x);
		});
	}

	mrq(hd)
	{
		this.gq[hd.re] = hd;

		return hd.re;
	}

	nf(aoh)
	{
		this.hidden = true;

		for (let xk of this.children)
		{
			xk.nf();
		}
	}

	bq(xk)
	{
		this.children.push(xk);

		xk.bv = this;
	}

	get rdz()
	{
		return mv.ko(this.children);
	}

	get vhr()
	{
		return this.children.some(xk => !xk.hidden);
	}
}

class kve
{
	constructor(x)
	{
		this.hidden = x.hidden;
		this.uc = x.uc;
		this.gq = x.gq;
		this.vd = x.vd;
		this.re = x.re;
		this.ty = mv.ki(x.bv, 're');
		this.jlf = x.jlf;
		this.rf = x.rf;
		this.omk = x.omk;
		this.ge = x.ge;
		this.nxb = x.nxb;
		this.yxr = x.yxr;
		this.jv = x.jv;
		this.fz = x.lqp.fz;
		this.ku = x.lqp.ku;
		this.jvg = '';
		this.cjg = '';

		this.nxb = mv.tsj(this.nxb);

		this.jvg = mv.nm('https://www.youtube.com/channel/%s', this.jlf);

		this.cjg = mv.nm('https://www.youtube.com/watch?v=%s&lc=%s', [this.vd, this.re]);
	}
}

class upv
{
	constructor(pr, ic)
	{
		this.re = mv.ob();

		this.pr = pr;

		this.ic = ic;
	}
}

class mb extends upv
{
	constructor(vd, t)
	{
		super(null, 'mb');

		let pr, kf;

		if (mv.to(t))
		{
			pr = mv.ql(t);
			kf = t;
		}
		else {
			if (t[0] == '0' && t[1] != ':')
			{
				t = t.slice(1);
			}

			pr = t;
			kf = mv.yc(t);
		}

		this.vd = vd;
		this.yh = kf;
		this.pr = pr;
	}
}

class vh extends upv
{
	constructor(ia)
	{
		super('youtube.com', 'vh');

		this.vd = ia.vd;
		this.yh = ia.yh;
	}
}

class ash extends upv
{
	constructor(hb)
	{
		super('', 'zh');

		this.hb = hb;

		this.vug = hb.startsWith('https');

		this.pr = azg.pmn(hb) || hb;
	}
}

class clm extends upv
{
	constructor(pjs)
	{
		super(pjs, 'zh');

		this.hb = 'https://www.youtube.com/results?search_query=' + encodeURIComponent(pjs);
	}
}

class ztd extends upv
{
	constructor(acy, mzo)
	{
		super(acy, 'zh');

		this.hb = 'https://www.youtube.com/channel/' + mzo;
	}
}

class udj
{
	constructor(xu)
	{
		this.ner = '';
		this.rhm = '';
		this.rkg = [];
		this.vpg = false;
		this.kxp = false;

		this.adq(xu);
		this.mqm();
		this.mft();
	}

	get dly()
	{
		return this.ner;
	}

	get length()
	{
		return this.ner.length;
	}

	get bqh()
	{
		return mv.uso(this.rhm);
	}

	toLowerCase()
	{
		this.ner = this.ner.toLowerCase();
	}

	qny(vng)
	{
		return this.rkg.includes(vng);
	}

	adg(pju)
	{
		for (let vng of pju)
		{
			if (this.qny(vng)) return 1;
		}

		return 0;
	}

	charAt(i)
	{
		return (i < 0) ? this.ner[this.length + i] : this.ner[i];
	}

	jgu(n)
	{
		this.ner = this.ner.slice(0, -n);
	}

	replace(wz, fi)
	{
		this.ner = this.ner.replace(wz, fi);
	}

	adq(xu)
	{
		this.ner = mv.ycj(xu, 'ufo');

		this.replace(uz[20], m => ('“”„').includes(m) ? '"' : "'");

		this.replace(uz[21], m =>
		{
			if (m[0] === m[1])
			{
				const x = m[0];

				if (x == '.') return '..';

				if (mv.mvo(x))
				{
					return m.length > 3 && !uz[22].test(x) ? x.repeat(3) : m;
				}

				return x;
			}

			return [...m][0];
		});
	}

	mqm()
	{
		let ngy = mv.ycn([...this.ner]).join('');

		this.rhm = ngy.slice(0, 16);

		this.rkg = mv.cz(uz[23], ngy);

		this.vpg = this.rkg.some(this.qrg);
	}

	mft()
	{
		if (!this.vpg) return;

		for (let i = 0, k = 0, n = this.rkg.length; i < n; i++)
		{
			k = i + 1;

			if (k != n)
			{
				let x = this.rkg[i] + this.rkg[k];

				this.replace(mv.oxc('(%s)+', x, 'g'), x);
			}
		}
	}

	qrg(vng)
	{
		return vng.charCodeAt(0) > 255;
	}

	fld(vng)
	{
		return vng == '\u{200D}';
	}
}

class cql
{
	constructor(lv)
	{
		lv.sort(mv.fy);

		const ulr = lv.length / 2;

		const gzv = lv.slice(0, Math.floor(ulr));
		const gvy = lv.slice(Math.round(ulr));

		this.sqe = mv.zo(gzv);
		this.lkq = mv.zo(gvy);
		this.zvk = this.lkq - this.sqe;

		this.lv = lv;
	}

	nwd(n)
	{
		const zv = this.sqe - 1.5 * this.zvk;
		const aw = this.lkq + 1.5 * this.zvk;

		return n < zv || aw < n;
	}

	gpk()
	{
		return this.lv.filter(
			n => this.nwd(n)
		);
	}

	tqm()
	{
		return this.lv.filter(
			n => !this.nwd(n)
		);
	}
}







class mq
{
	constructor()
	{
		this.re = chrome.runtime.id;

		this.ncq = chrome.runtime.getManifest().version;

		this.lg = new Promise(np => this.tze = np);

		this.lg.then(
			_ => this.hx()
		);

		this.qm();

		chrome.runtime.onInstalled.addListener(
			pxj => this.wmx(pxj)
		);

		chrome.browserAction.onClicked.addListener(
			_ => jtf.ifa('zn')
		);

		chrome.alarms.onAlarm.addListener(
			pxj => this.gxs('bad', pxj)
		);

		chrome.runtime.onMessageExternal.addListener(
			vj => this.gxs('jux', vj)
		);
	}

	async qm()
	{
		if (await this.uaj == this.ncq)
		{
			const sl = await le.get(['0', '1']);

			this.uqz = new sg(sl[0], 0);

			hc = new pv(sl[1], 1);

			this.tze(1);
		}
	}

	async me()
	{
		const mcj = await this.gk('/html/view.html');

		const ms = (
			this.ncq < this.poq
		);

		const fl = (
			!hc.ok || !hc.lz
		);

		return {
			dg: {
				ms, fl
			},
			zy: mcj
		};
	}

	async za(pc)
	{
		if (uz[24].test(pc))
		{
			const uon = await zl.mk.pxn(pc);

			if (uon)
			{
				const vla = await zl.ps.niq(pc);

				if (vla)
				{
					hc.gd(vla).then(
						_ => vb.fh('gs')
					);

					return true;
				}
			}
		}

		return false;
	}

	mtv(hdo)
	{
		hc.qu = hdo;

		vb.fh('bu');
	}

	ag(rj)
	{
		let pc = hc.pc;

		if (pc)
		{
			if (rj)
			{
				pc = mv.fes(19, pc);

				hc.pc = pc;
			}

			zl.mk.mfr(pc);
		}
	}

	async gk(ir)
	{
		const ldm = await ucr.aut(chrome.runtime.getURL(ir));

		return ldm.bh;
	}

	async wnj(pxj)
	{
		this.sif();

		if (pxj.reason == 'install')
		{
			await this.xrs();
		}
		else {
			if (pxj.previousVersion < '')
			{

			}
		}

		await this.rho();

		await this.qm();
	}

	async wmx(pxj)
	{
		await this.wnj(pxj);

		switch (pxj.reason)
		{
			case 'install':
				this.bme();
				break;

			case 'update':
				this.nvp();
				break;
		}

		jtf.ony();
	}

	bme()
	{

	}

	nvp()
	{

	}

	async gxs(gla, bh)
	{
		await this.lg;

		switch (gla)
		{
			case 'bad':
				return this.cah(bh);

			case 'jux':
				return this.ejn(bh);
		}
	}

	cah(bad)
	{
		const ehj = bad.name;

		switch (ehj)
		{
			case 'vti':
				this.vti();
		}
	}

	ejn(vj)
	{
		return new rqg().wx(vj);
	}

	hx()
	{
		this.ag(
			hc.ok && (mv.yn() || !hc.eg)
		);
	}

	get uaj()
	{
		return le.get('schemaVersion');
	}

	rho()
	{
		return le.set('schemaVersion', this.ncq);
	}

	get poq()
	{
		return this.uqz.latestVersion;
	}

	vnv(v)
	{
		this.uqz.set('latestVersion', v);
	}

	xrs()
	{
		return le.set({
			0: {
				latestVersion: this.ncq
			},
			1: {},
		});
	}

	sif()
	{
		chrome.alarms.clearAll();

		chrome.alarms.create('vti', {periodInMinutes:240});
	}

	async vti()
	{
		const v = await zl.ps.yey();

		if (v)
		{
			this.vnv(v);
		}
	}
}

class rqg
{
	wx(vj)
	{
		vj = mv.rqe(vj);

		switch (vj.issuer)
		{
			case 'authServer':
				return this.wht(vj.data);
		}
	}

	wht(bh)
	{
		if (bh.id == 'pa')
		{
			kv.mtv(bh.token);
		}
	}
}

class nxg
{
	constructor()
	{
		this.ps = new smd;

		this.mk = new cgn;
	}
}

class smd
{
	constructor()
	{
		this.rsf = 'https://api.lett.app/cs';
	}

	async niq(pc)
	{
		const ldm = await this.get('/preflight', {
			key:pc,
			sas:bf,
		});

		if (ldm.pe)
		{
			try {
				const wcb = ldm.bh.shift();

				return [
					pc, +mv.bsu(wcb)
				];
			}
			catch (e) {
				return null;
			}
		}
	}

	async yey()
	{
		const ldm = await this.get('/update');

		if (ldm.pe)
		{
			return ldm.bh.version;
		}
	}

	async nj(ab)
	{
		const ia = {
			apiKey:hc.pc,
			amount:ab,
		};

		const ldm = await this.get('https://api.lett.app/donate/accept', ia, Infinity);

		if (ldm.pe)
		{
			return ldm.bh.url;
		}
	}

	async get(pih, ia, laq)
	{
		if (pih[0] == '/')
		{
			pih = this.rsf + pih;
		}

		const ldm = await ucr.aut(pih, ia, laq);

		if (!ldm.pe && !ldm.rv)
		{
			ldm.bw(ldm.bh.error);
		}

		return ldm;
	}
}

class ewu
{
	constructor()
	{
		this.rsf = 'https://www.googleapis.com/youtube/v3';
	}

	mfr(pc)
	{
		this.jz = pc;
	}

	async pxn(pc)
	{
		this.mfr(pc);

		const ldm = await this.sqg('jNQXAC9IVRw');

		return ldm.pe;
	}

	zjo(vd)
	{
		return this.ca({
			videoId:vd
		});
	}

	dic(vd, ehe)
	{
		return this.yx({
			videoId:vd,
			searchTerms:ehe
		});
	}

	vki(mzo, ehe)
	{
		return this.yx({
			allThreadsRelatedToChannelId:mzo,
			searchTerms:ehe
		});
	}

	async sqg(vd)
	{
		const ldm = await this.uxv({
			id:vd,
			part:'snippet,statistics',
			fields:'items/statistics,items/snippet/channelId'
		});

		if (ldm.pe)
		{
			try {
				ldm.bh = new ngo(ldm.bh);
			}
			catch (e) {
				ldm.bw('vw');
			}
		}

		return ldm;
	}

	async get(pih, ia)
	{
		const ldm = await ucr.aut(this.rsf + pih, ia);

		if (!ldm.pe && !ldm.rv)
		{
			const fbz = this.aqt(ldm.bh);

			ldm.bw(fbz);
		}

		return ldm;
	}

	async yx(ia)
	{
		const ldm = await this.get('/commentThreads', ia);

		if (ldm.pe)
		{
			ldm.bh = this.zvm(ldm.bh);
		}

		return ldm;
	}

	async ca(ia)
	{
		let ldm, qh = [];

		do {
			ldm = await this.get('/commentThreads', ia);

			if (ldm.pe)
			{
				const fqg = this.zvm(ldm.bh);

				qh.push(fqg);

				ia.pageToken = ldm.bh.nextPageToken;
			}
		}
		while (ldm.pe && ia.pageToken)

		ldm.bh = qh.flat();

		return ldm;
	}

	uxv(ia)
	{
		return this.get('/videos', ia);
	}

	aob(uzh)
	{
		try {
			return new ehy(uzh);
		}
		catch (e) {
			return null;
		}
	}

	fsm(uzh)
	{
		let phs = [];

		try {
			if (uzh.replies) {
				phs = uzh.replies.comments.reverse();
			}
		}
		catch (e) {
		}

		return phs;
	}

	aqt(jbx)
	{
		try {
			return jbx.error.errors[0].reason;
		}
		catch (e) {
			return jbx.xj || 'si';
		}
	}

	zvm(uzh)
	{
		const fqg = [];

		try {
			for (let hd of uzh.items)
			{
				const ye = this.lcp(hd);

				if (ye) {
					fqg.push(ye);
				}
			}
		}
		catch (e) {
		}

		return fqg;
	}

	lcp(uzh)
	{
		try {
			const dqa = uzh.snippet;

			if (dqa.videoId)
			{
				let ol = this.aob(dqa.topLevelComment);

				if (ol)
				{
					const ye = new ohp(ol, dqa.totalReplyCount);

					if (ye.cda <= 5)
					{
						for (let nqt of this.fsm(uzh))
						{
							ol = this.aob(nqt);

							if (ol) {
								ye.sxd(ol);
							}
						}
					}

					return ye;
				}
			}
		}
		catch (e) {
			return null;
		}
	}
}

class cgn extends ewu
{
	ca(ia)
	{
		this.igm(ia);

		return super.ca(ia);
	}

	yx(ia)
	{
		this.igm(ia);

		return super.yx(ia);
	}

	async get(pih, ia)
	{
		ia.key = this.jz;

		let ldm, i = 3;

		while (i--)
		{
			ldm = await super.get(pih, ia);

			if (ldm.xj != 'processingFailure')
				break;
		}

		return ldm;
	}

	igm(ia)
	{
		Object.assign(ia, {
			textFormat:'plainText',
			part:'snippet,replies',
			maxResults:100
		});
	}
}

class azg
{
	static fuj(hb)
	{
		const vd = mv.cy(uz[25], hb);

		if (vd)
		{
			let yh = mv.cy(uz[26], hb) || 0;

			if (!mv.to(yh))
			{
				yh = mv.cz(uz[27], yh).join(':');

				yh = mv.yc(yh);
			}

			return {vd, yh};
		}
	}

	static pmn(hb)
	{
		return mv.cy(uz[28], hb).replace('www.', '');
	}
}

class nem
{
	async ifa(fp)
	{
		const frf = await this.roe();

		if (frf && frf.url)
		{
			this.py(frf.id, 'fp', fp);
		}
	}

	ony()
	{
		chrome.tabs.query({url:'https://*.youtube.com/*'}, jtf =>
		{
			for (let frf of jtf)
			{
				chrome.tabs.reload(frf.id);
			}
		});
	}

	roe()
	{
		return new Promise(np =>
		{
			chrome.tabs.query({active:true, currentWindow:true}, jtf =>
			{
				np(jtf[0]);
			});
		});
	}

	py(pao, mj, bh)
	{
		chrome.tabs.sendMessage(pao, new tu(mj, bh));
	}
}

class hon
{
	constructor(sj, nlm)
	{
		this.re = nlm.vd;

		this.nlm = nlm;

		this.hmg = new oec(sj);

		this.qh = {};

		for (let vqr of ['yzw', 'gzu'])
		{
			this[vqr] = new ahw(Array);
		}

		for (let vqr of ['oda', 'elq', 'ujb'])
		{
			this[vqr] = [];
		}

		for (let ye of sj)
		{
			this.sf(ye);
			this.edp(ye);
		}
	}

	hxe(q)
	{
		q = q.toLowerCase();

		switch (q)
		{
			case ':':
				return this.rsq();

			case ':all':
				return this.srz();

			case ':creator':
				return this.usm();

			case ':link':
				return this.ibr();

			case ':reply':
				return this.fqm();
		}

		if (uz[29].test(q))
		{
			const gn = this.obw(q);

			switch (gn.length)
			{
				case 1: return this.hoj(gn[0]);

				case 2: return this.vdq(gn[0], gn[1]);
			}
		}

		return this.dec(q);
	}

	srz()
	{
		return this.bpu(
			Object.keys(this.qh)
		);
	}

	rsq()
	{
		return this.bpu(this.gzu.values);
	}

	usm()
	{
		return this.bpu(this.oda);
	}

	ibr()
	{
		return this.bpu(this.ujb);
	}

	fqm()
	{
		return this.bpu(this.elq);
	}

	vdq(lk, krk)
	{
		const sip = mv.yc(lk);
		const ufi = mv.yc(krk);

		const rmq = [];

		for (let gn of this.gzu.keys)
		{
			if (sip <= gn && gn <= ufi)
			{
				rmq.push(
					this.gzu.get(gn)
				);
			}

			if (ufi < gn) break;
		}

		return this.bpu(rmq);
	}

	sf(hd)
	{
		this.qh[hd.re] = hd;
	}

	dmb(re)
	{
		return this.qh[re].fw;
	}

	bpu(rmq)
	{
		rmq = rmq.flat();

		return mv.ycn(rmq).map(
			re => this.dmb(re)
		);
	}

	dec(xu)
	{
		let sna = [];

		let cs = this.lbv(xu);

		let rmq = cs.map(
			k => this.select('yzw', k)
		);

		rmq = rmq.filter(x => x.length);

		if (rmq.length)
		{
			sna = mv.fvz(...rmq);

			if (sna.length < 1)
			{
				rmq.sort((a, b) => a.length - b.length);

				sna = rmq[0];
			}
		}

		return this.bpu(sna);
	}

	hoj(tl)
	{
		let wf = mv.yc(tl);

		let rmq = [
			this.select('gzu', wf)
		];

		for (let i = wf; i--;)
		{
			let x = this.select('gzu', i);

			if (x.length == 0 && ![1,6].includes(i % 10))
				break;

			rmq.push(x);
		}

		for (let i = wf; i++;)
		{
			let x = this.select('gzu', i);

			if (x.length == 0 && ![4,9].includes(i % 10))
				break;

			rmq.push(x);
		}

		return this.bpu(rmq);
	}

	edp(ye)
	{
		const pr = ye.nvf.map(ol => ol.qey).join(' ');

		this.hni(pr, ye.re);

		this.jfl(pr, ye.re);

		this.bta(pr, ye.re);

		this.fsm(ye);
	}

	fsm(ye)
	{
		if (ye.length > 1)
		{
			this.elq.push(ye.re);
		}

		if (ye.qdv(this.nlm.mzo))
		{
			this.oda.push(ye.re);
		}
	}

	hni(pr, re)
	{
		pr.includes('http') && this.ujb.push(re);
	}

	jfl(pr, re)
	{
		const gse = this.obw(pr);

		for (let gn of gse)
		{
			gn = mv.yc(gn);

			if (0 <= gn && gn < this.nlm.un)
			{
				this.yki('gzu', gn, re);
			}
		}
	}

	bta(pr, re)
	{
		this.lbv(pr).forEach(
			vz => this.yki('yzw', vz, re)
		);
	}

	yki(vqr, jz, en)
	{
		this[vqr].pbk(jz);

		this[vqr].get(jz).push(en);
	}

	select(vqr, jz)
	{
		return this[vqr].get(jz);
	}

	lbv(xu)
	{
		xu = tcf.adq(xu);

		xu = tcf.qjr(xu);

		xu = mv.dfm(xu);

		return mv.ycn(xu);
	}

	obw(xu)
	{
		return mv.cz(uz[30], xu);
	}
}

class ei
{
	constructor(he)
	{
		he.wx = this.wx.bind(this);

		this.he = he;

		this.ipj = 0;

		this.hdv = new Promise(np => np(null));

		this.nlm;

		this.jeb = new jeb;

		this.fsq = new hon([], {});
	}

	async wx(vj)
	{
		const vd = vj.bh.vd;

		try {
			const pxj = await this.jeb.dce(vd);

			this.nlm = new pvg(vj.bh, pxj);
		}
		catch (zj) {
			return this.njs(zj);
		}

		switch (vj.mj)
		{
			case 'yx':
				return this.vrx(vd);

			case 'fv':
				return this.yt(vd);
		}
	}

	njs(re)
	{
		this.ctz('xj', {re});
	}

	yt(vd)
	{
		const n = this.nlm.fv;

		if (0 < n && n < 1000)
		{
			this.sud(vd);
		}

		this.ctz('fv', n);
	}

	async vrx(vd)
	{
		if (this.nlm.hxe.nmv)
		{
			return this.njs('nk');
		}

		this.ijd();
	}

	async ijd()
	{
		let r = new hqh(this.kxd);

		try {
			if (this.nlm.hxe.pkz)
			{
				await this.mpz(r);
			}
			else {
				await this.wed(r);
			}

			!this.ejd(r.re) && this.ctz('yx', r);
		}
		catch (zj) {
			!this.ejd(r.re) && this.njs(zj);
		}
	}

	async mpz(jbx)
	{
		const ldm = await zl.mk.vki(this.nlm.mzo, this.nlm.hxe.xu);

		if (ldm.xj)
		{
			throw ldm.xj;
		}

		const hmg = new oec(ldm.bh);

		const sj = tyt.edp(ldm.bh, hmg, this.nlm);

		jbx.vsx(sj);
		jbx.onl(-2);
	}

	async wed(jbx)
	{
		const vd = this.nlm.vd;
		const pq = this.nlm.hxe.xu;

		const p = jbx.onl(this.nlm.fv);

		if (p <= 0) {
			return;
		}

		if (p > 1000 && this.nlm.hxe.onj)
		{
			throw 'be';
		}

		let sj, hmg;

		if (p < 1000)
		{
			const zj = await this.sud(vd);

			if (zj)
			{
				throw zj;
			}

			hmg = this.fsq.hmg;

			sj = this.fsq.hxe(pq);
		}
		else {
			const ldm = await zl.mk.dic(vd, pq);

			if (ldm.xj)
			{
				throw ldm.xj;
			}

			hmg = new oec(ldm.bh);

			sj = ldm.bh;
		}

		sj = tyt.edp(sj, hmg, this.nlm);

		jbx.vsx(sj);
	}

	ctz(mj, bh)
	{
		this.he.xh(mj, bh);
	}

	async sud(vd)
	{
		await this.hdv;

		if (vd != this.fsq.re)
		{
			this.hdv = new Promise(async np =>
			{
				const ldm = await zl.mk.zjo(vd);

				if (ldm.pe)
				{
					this.fsq = new hon(ldm.bh, this.nlm);
				}

				np(ldm.xj);
			});
		}

		return this.hdv;
	}

	get kxd()
	{
		return ++this.ipj;
	}

	ejd(rsa)
	{
		return rsa != this.ipj;
	}
}

class jeb
{
	constructor()
	{
		this.map = {};
	}

	async dce(vd)
	{
		let x = this.map[vd];

		if (x == undefined)
		{
			x = this.kjg(vd);
		}

		if (x instanceof Promise)
		{
			const ldm = await x;

			if (ldm.xj)
			{
				this.kit(vd);

				throw ldm.xj;
			}

			x = this.fgb(vd, ldm.bh);
		}

		return x;
	}

	sqw(vd, value)
	{
		return this.map[vd] = value;
	}

	kjg(vd)
	{
		const r = zl.mk.sqg(vd);

		return this.sqw(vd, r);
	}

	fgb(vd, fkh)
	{
		return this.sqw(vd, fkh);
	}

	kit(vd)
	{
		this.sqw(vd, undefined);
	}
}

class rsb
{
	constructor(q)
	{
		this.xu = '';
		this.ic = '';
		this.pkz = false;
		this.nmv = false;

		this.mqm(q);
	}

	get onj()
	{
		return this.ic == 'yqc';
	}

	get baz()
	{
		return this.ic == 'xmv';
	}

	mqm(q)
	{
		const zul = q.replace(uz[31], '');

		if (zul != q)
		{
			this.pkz = true;

			if (zul == '')
			{
				this.nmv = true;
			}
		}

		this.xu = zul;
		this.ic = rsb.dlc(zul);
	}

	static dlc(q)
	{
		q = q.toLowerCase();

		switch (true) {
			case [':', ':all', ':creator', ':reply', ':link'].includes(q):
				return 'yqc';

			case (uz[32]).test(q):
				return 'xmv';

			default:
				return '';
		}
	}
}

class pvg
{
	constructor(cqe, ean)
	{
		Object.assign(this, ...[cqe, ean]);

		this.un = Math.floor(cqe.un) || Infinity;
		this.wb = Math.floor(cqe.wb);

		this.hxe = new rsb(cqe.pq);
	}
}

class hqh
{
	constructor(rsa)
	{
		this.re = rsa;
		this.sj = [];
		this.vi = 0;
		this.rg = 0;
	}

	vsx(sj)
	{
		this.sj = sj;
		this.vi = sj.length;
	}

	onl(n)
	{
		return this.rg = n;
	}
}

class oec
{
	constructor(sj)
	{
		this.hmg = {};

		this.zmq = {};

		this.sho = {};

		for (let ye of sj)
		{
			this.rir(ye);
		}

		this.xqt();
	}

	mtg(dgu)
	{
		return this.zmq.hxe(dgu);
	}

	gxw(re)
	{
		return this.hmg[re];
	}

	rir(ye)
	{
		for (let ol of ye.nvf)
		{
			this.xrc(ol.jlf, ol.qey);
			this.idb(ol.jlf, ol.amz);
		}
	}

	xqt()
	{
		this.zmq = new rqf(this.zmq);

		for (let re in this.sho)
		{
			const sho = this.sho[re];

			if (sho.length > 1)
			{
				const bkw = sho.filter(
					(pr, i) => pr.length < 28 || i == sho.indexOf(pr)
				);

				this.gxw(re).fiw = (sho.length != bkw.length);
			}
		}
	}

	idb(re, nrv)
	{
		let uxf = new koz(re, nrv);

		this.hmg[re] = uxf;

		this.zmq[nrv] = uxf;
	}

	xrc(re, pr)
	{
		this.sho[re] = this.sho[re] || [];

		this.sho[re].push(pr);
	}
}

class koz
{
	constructor(re, nrv)
	{
		this.re = re;
		this.nrv = nrv;
		this.fiw = false;
		this.qkd = false;
	}

	get omk()
	{
		return this.qkd ? this.nrv : this.vjh;
	}

	get mly()
	{
		return !this.qkd && this.fiw;
	}

	get vjh()
	{
		if (!this.aem)
		{
			this.aem = pwu.sch(this.nrv);
		}

		return this.aem;
	}
}

class rqf
{
	constructor(ov)
	{
		this.keys = Object.keys(ov).sort(this.mzm);

		this.tmn = this.keys.map(jz => ov[jz]);

		this.keys = this.keys.map(mv.bg);
	}

	hxe(foq)
	{
		foq = foq.toLowerCase();

		let qh = [];

		for (let i = 0, n = this.keys.length; i < n; i++)
		{
			if (this.keys[i].startsWith(foq))
			{
				do {
					qh.push(this.tmn[i])
				}
				while (++i < n && this.keys[i].startsWith(foq));

				break;
			}
		}

		return qh.sort(this.zuh);
	}

	zuh(a, b)
	{
		return b.nrv.length - a.nrv.length;
	}

	mzm(a, b)
	{
		return a.localeCompare(b);
	}
}

const tyt = {
	vuc: {
		sgm(zli, hgb = 0)
		{
			return +zli || hgb;
		},

		abe(x)
		{
			return (0.834 * x) - (0.167 * x * x);
		},

		yuw(n)
		{
			return mv.wnu(1, n);
		},
	},

	edp(sj, wys, nlm)
	{
		this.gyt = nlm.mzo;

		this.hxe = nlm.hxe;

		this.evc = new wtj;

		this.gzu = new uep;

		this.wox = new lsp;

		this.sey = {};

		mv.zg(
			wys.gxw(this.gyt), 'qkd', true
		);

		return this.mqm(sj, wys);
	},

	mqm(sj, wys)
	{
		const qbn = ('you are not but for the thi and that was').split(' ');

		const lir = {
			abe: this.vuc.abe,
			xec: this.vuc.yuw,
			sgm: this.vuc.sgm,
		};

		const qur = {
			awc:1,
			kew:[],
			sgk:1,
		};

		const fnk = {
			yzw: .5,
			qln: .2,
			xec: .1,
			kpa: .0,
		};

		if (this.hxe.baz)
		{
			Object.assign(fnk, {
				kpa:.3,
			});
		}

		let rmq = [];

		sj = sj.filter(
			ye => !rmq.includes(ye.jlf) && rmq.push(ye.jlf)
		);

		for (let ye of sj)
		{
			Object.assign(ye,
			{
				fk: {
					gzu: [],
					cs: [],
					kew: 0,
					avj: 0,
					bsf: false,
					qln: false,
				},
				rcw: {
					yzw: 0,
					xec: 0,
					qln: 0,
					kpa: 0,
					ujm: 0,
				},
			});

			const fk = ye.fk;

			for (let i = 0; i < ye.length; i++)
			{
				const ol = ye.nvf[i] = new igb(ye.nvf[i]);

				ol.uxf = wys.gxw(ol.jlf);

				ol.jv = this.jv(ol.jlf);

				if (i > 0)
				{
					ol.uc = true;

					if (ol.yxr && ye.fav > 1)
					{
						fk.bsf = true
					}

					if (ol.jv)
					{
						fk.qln = true;
					}
				}

				if (ol.cwb == '' || ol.uxf.mly)
				{
					!ol.uxf.qkd && ol.nf();
				}
			}

			const jzg = ye.jzg;

			if (this.lpt(jzg.rgh))
			{
				ye.nf('lpt');

				continue;
			}

			fk.cs = mv.dfm(jzg.cwb);
			fk.kew = fk.cs.length;
			fk.cs = mv.ycn(fk.cs);
			fk.avj = fk.cs.length;

			for (let x in jzg.gq)
			{
				x = jzg.gq[x];

				if (x.re == jzg.rgh)
				{
					ye.nf('rjx')
				}

				if (x instanceof mb)
				{
					fk.gzu.push(x.yh);

					mv.xth(x.re, this.gzu.iot(x.yh), fk.cs);
				}
			}

			qur.kew.push(fk.kew);
		}

		qur.sgk = mv.wny(
			new cql(qur.kew).tqm()
		);

		for (let ye of sj)
		{
			ye.fk.cs.splice(
				Math.round(qur.sgk)
			);

			for (let vz of ye.fk.cs)
			{
				if (vz.length > 2 && !qbn.includes(vz))
				{
					this.evc.pxi(vz);
				}
			}
		}

		for (let ye of sj)
		{
			if (ye.hidden)
				continue;

			const rcw = ye.rcw;

			for (let vz of ye.fk.cs)
			{
				rcw.yzw += this.evc.get(vz);
			}

			rcw.yzw /= ye.fk.kew;

			rcw.xec = ye.fk.gzu.length;

			qur.awc = Math.max(qur.awc, rcw.yzw);
		}

		for (let ye of sj)
		{
			const rcw = ye.rcw;

			rcw.yzw = fnk.yzw * mv.wnu(rcw.yzw, qur.awc);
			rcw.xec = fnk.xec * lir.xec(rcw.xec);
			rcw.qln = fnk.qln * lir.sgm(ye.fk.qln);
			rcw.kpa = fnk.kpa * lir.sgm(ye.fk.bsf, .5);

			rcw.ujm = mv.tsm(Object.values(rcw)) * !!(rcw.yzw);
		}

		sj.sort(
			(a, b) => b.rcw.ujm - a.rcw.ujm
		);

		for (let i = 0, n = sj.length; i < n; i++)
		{
			const a = sj[i];

			if (!a.hidden) for (let k = i + 1; k < n; k++)
			{
				const b = sj[k];

				if (!b.hidden && !b.ziw)
				{
					const xyv = mv.fvz(a.fk.cs, b.fk.cs);
					const cnc = (a.fk.cs.length + b.fk.cs.length) / 2;

					if (xyv.length == b.fk.kew)
					{
						b.nf('pfx');
					}

					if (xyv.length >= .5 * cnc)
					{
						const ufi = a.fk.gzu[0] || 0;
						const vus = b.fk.gzu[0] || 0;

						if (this.gzu.xnc(ufi, vus))
						{
							b.nf('xnc');
						}
					}
				}
			}
		}

		for (let i = 0; i < sj.length; i++)
		{
			const ye = sj[i];

			if (ye.jnc)
				break;

			let mrm = false;

			if (ye.fk.avj == 1)
			{
				mrm = true;
			}

			if (i == 0 && !ye.ziw)
			{
				const jid = this.hxe.xu.toLowerCase();
				const bzd = ye.jzg.cwb;

				if (jid == bzd)
				{
					mrm = true;
				}
			}

			if (ye.ziw && ye.fav == 1)
			{
				const sip = new Date(ye.jzg.nxb);
				const ufi = new Date(ye.uxn.nxb);

				if (.001 * (ufi - sip) < 300)
				{
					mrm = true;
				}
			}

			if (mrm)
			{
				mv.nwa(i, sj);

				ye.jnc = true;
				i--;
			}
		}

		for (let ye of sj)
		{
			this.wox.uro(ye.re, ye.jlf);

			for (let jlf of ye.zkj)
			{
				this.wox.tap(jlf, ye.re)
			}
		}

		for (let ye of sj)
		{
			if (ye.abe == 0) continue;

			for (let nqt of ye.phs)
			{
				const pr = nqt.rgh;

				const eya = mv.cy(uz[33], pr);

				for (let uxf of wys.mtg(eya))
				{
					if (this.ckt(uxf).test(pr))
					{
						nqt.tzf = uxf;
						break;
					}
				}
			}

			if (ye.length > 2)
			{
				let hmg = [], qh = [], lon = false;

				const n = ye.length;

				for (let i = (n == 3) ? 0 : 1; i < n; i++)
				{
					if (lon)
					{
						hmg = [];
						qh = [];
						lon = false;
					}

					const nqt = ye.nvf[i];
					const hc = nqt.uxf;

					if (mv.ko(hmg) == hc) {
						i++;
					}
					else if (hmg.includes(hc) || mv.ycn(hmg).length < 2)
					{
						hmg.push(hc);
						qh.push(nqt);

						if (i + 1 < n)
							continue;
					}

					if (qh.length > 2)
					{
						let uon = !qh.some(nqt => nqt.tzf && !hmg.includes(nqt.tzf));

						if (uon)
						{
							qh.forEach(nqt =>
								nqt.tzf = hmg.find(uxf => uxf != nqt.uxf)
							);

							i++;
						}
					}

					if (i + 1 < n)
					{
						i -= 2;
						lon = true;
					}
				}
			}

			for (let fpr, i = 1; i < ye.length; i++)
			{
				const nqt = ye.nvf[i];

				if (!nqt.tzf)
				{
					if (fpr && fpr.tzf == nqt.uxf)
					{
						nqt.tzf = fpr.uxf;

						ye.miw(fpr, nqt);
					}
				}
				else {
					let nhc;

					const ojt = nqt.tzf;

					for (let k = i - 1; k >= 0; k--)
					{
						const fpr = ye.nvf[k];

						if (k == 0)
						{
							if (fpr.uxf == ojt)
							{
								nhc = '';
							}

							break;
						}

						if (fpr.uxf == ojt)
						{
							ye.miw(fpr, nqt);

							if (fpr.children.length == 1)
							{
								nhc = '';
							}

							break;
						}
					}

					if (nhc == null)
					{
						const kx = new ztd(ojt.omk, ojt.re);

						nhc = nqt.mrq(kx) + ' ';
					}

					nqt.rgh = nqt.rgh.replace(
						this.ckt(ojt), nhc
					);
				}

				fpr = nqt;
			}

			for (let i = 1, n = ye.length; i < n; i++)
			{
				const nqt = ye.nvf[i];

				if (nqt.bv || nqt.children.length)
				{
					mv.nwa(i, ye.nvf);
					i--;
					n--;
				}
			}

			for (let ynv = false, i = 1; i < ye.length; i++)
			{
				let nqt = ye.nvf[i];

				ynv = (ynv || !nqt.yxr);

				if (nqt.vhr)
				{
					continue;
				}

				if (!ynv)
				{
					const pr = nqt.rgh;

					if (ye.length > 2 || ['+','@'].includes(pr[0]) || pr.length < 10)
					{
						nqt.nf();
					}
				}

				nqt.tzf && !ye.qdv(nqt.tzf.re) && nqt.nf();

				this.dok(nqt.jlf, ye.re) && nqt.nf();
			}
		}

		sj = sj.map(ye =>
		{
			if (ye.hidden)
			{
				return [];
			}

			const nvf = [];

			for (let i = 0; i < ye.length; i++)
			{
				const ol = ye.nvf[i];

				ol.ge = pwu.don(ol.rgh);

				ol.omk = ol.uxf.omk;

				if (ol.ge.length < 2)
				{
					if (i == 0)
						return [];

					ol.nf();
				}

				nvf.push(
					new kve(ol)
				);
			}

			return nvf;
		});

		return sj.filter(ye => ye.length > 0);
	},

	lpt(xu)
	{
		return xu.length > 500 || mv.lmx(uz[34], xu) > 3;
	},

	jv(jlf)
	{
		return this.gyt == jlf;
	},

	dok(jlf, rse)
	{
		if (this.jv(jlf))
		{
			return false;
		}

		for (let qna of this.wox.dhv(jlf))
		{
			if (qna == rse)
			{
				return false;
			}

			if (!this.wox.vyo(qna, jlf))
			{
				return true;
			}
		}

		return false;
	},

	ckt(uxf)
	{
		const re = uxf.re;

		if (re in this.sey)
		{
			return this.sey[re];
		}

		return this.sey[re] = mv.oxc('^[+@]?%s[-\\s,.:;?!]*', uxf.nrv, 'i');
	}
};

const pwu = {
	don(sm)
	{
		let xu = new udj(sm);

		xu.bqh && xu.toLowerCase();

		if (xu.qny('.'))
		{
			xu.charAt(-1) == '.' && xu.charAt(-2) != '.' && xu.jgu(1);

			xu.replace(uz[35], (m) => m.replace(uz[36], ''));
		}

		if (xu.qny('\n'))
		{
			xu.replace(uz[37], function(m, i)
			{
				let x = xu.charAt(i - 1);

				return mv.bdc(x) ? '. ' : ' ';
			});
		}

		if (xu.adg('*_'))
		{
			xu.replace(uz[38], '$2');
		}

		if (xu.adg('(,!?.)'))
		{
			xu.replace(uz[39], '?!');

			xu.replace(uz[40], '$1');

			xu.replace(uz[41], '$1 $2');

			xu.qny('!') && xu.replace(uz[42], '$1');
		}

		if (xu.adg('$£€'))
		{
			xu.replace(uz[43], (_, xbi, dvw) =>
			{
				uz[44].test(xbi) && (xbi = Math.round(xbi));

				return dvw + xbi;
			});
		}

		xu.qny(':') && xu.replace(uz[45], ': ');

		xu.qny('&') && xu.replace(uz[46], ' and ');

		xu.qny('"') && xu.replace(uz[47], '" - $1');

		return iql.ipx(xu.dly);
	},

	sch(sm)
	{
		return sm.length < 28 && this.vmf(sm) || this.ojf();
	},

	vmf(xu)
	{
		let cs;

		if (!uz[48].test(xu))
		{
			if (mv.ywh(xu))
			{
				xu = mv.tfe(xu);
			}

			cs = xu.split(' ');

			if (cs.length == 1)
			{
				return mv.ua(cs[0], 'PRE_CASE');
			}
		}
		else {
			cs = mv.cz(uz[49], xu);
		}

		cs = cs.map(vz =>
		{
			switch (true)
			{
				case vz.length < 2 || mv.to(vz):
					return '';

				default:
					return mv.ua(vz);
			}
		});

		cs = cs.filter(
			(vz, i) => vz != '' && i == cs.indexOf(vz)
		);

		return cs.join(' ');
	},

	ojf()
	{
		return 'user' + mv.is(4);
	}
};

const tcf = {
	adq(xu)
	{
		xu = xu.toLowerCase();

		xu = xu.replace(uz[50], ' ');

		return mv.ycj(xu);
	},

	qjr(xu)
	{
		return xu.replace(uz[51], '$1');
	}
};

const iql = {
	ozv: {
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

	ipx(xu)
	{
		return xu.replace(uz[52], m => this.get(m));
	},

	get(jz)
	{
		jz = jz.toLowerCase();

		(jz.length == 2) || (jz = jz.slice(0, 2));

		return this.ozv[jz] || jz;
	}
};

class wtj
{
	constructor()
	{
		this.map = {};
	}

	pxi(vz)
	{
		this.map[vz] = ++this.map[vz] || 0;
	}

	get(vz)
	{
		return this.map[vz] || 0;
	}
}

class uep
{
	constructor()
	{
		this.map = {};
	}

	iot(tao)
	{
		for (let ikm in this.map)
		{
			if (this.xnc(tao, ikm))
			{
				return this.map[ikm];
			}
		}

		return this.brs(tao);
	}

	brs(gn)
	{
		return this.map[gn] = mv.nm('TS%s', gn);
	}

	xnc(ufi, vus)
	{
		return Math.abs(vus - ufi) < 5;
	}
}

class lsp
{
	constructor()
	{
		this.yjy = {};

		this.sj = {};
	}

	dhv(jlf)
	{
		return this.yjy[jlf];
	}

	vyo(qna, jlf)
	{
		return this.sj[qna] == jlf;
	}

	uro(qna, jlf)
	{
		this.sj[qna] = jlf;
	}

	tap(jlf, qna)
	{
		if (!this.yjy[jlf])
		{
			this.yjy[jlf] = new qp;
		}

		this.yjy[jlf].push(qna);
	}
}

let hc;

const zl = new nxg;
const le = new pl;
const jtf = new nem;
const kv = new mq;
const vb = new xb;
const as = new jm;

const uz = [
	/^[0-9]{9}$/,
	/%s/g,
	/(\d+)([a-z])/,
	/^(00:0?|0)/,
	/\s*\n\s*/g,
	/[^\S\n]+/g,
	/\s+/g,
	/\p{L}/u,
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
	/(?:youtu\.be\/|[?&]v=)([\w\-]{11})/,
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