/*
 * This code belongs to Comments Search for YouTube Chrome Extension
 * Developed by lett <https://cs.lett.app>
 *		
 * Copyright (c) The Extension Developers - All Rights Reserved
 *
 */
'use strict';

const zn = {};

for (let bu of 'object array string regex date math type std cmp'.split(' '))
{
	zn[bu] = {};
}

zn.pl = function(go, cf)
{
	return go != null && go.constructor === cf;
}

zn.fv = function(gs)
{
	return Object.keys(gs).length == 0;
}

zn.nc = function(ql, gs)
{
	for (let qv in gs)
	{
		const vl = gs[qv];

		if (qv == ql) return vl;
		if (vl == ql) return qv;
	}
}

zn.vz = function(gs, se)
{
	if (gs instanceof Object)
	{
		return gs[se];
	}
}

zn.km = function(gs, se, wh)
{
	if (gs instanceof Object)
	{
		gs[se] = wh;
	}
}

zn.yw = function(gs, am)
{
	let tz = '';

	for (let qv in gs)
	{
		tz += qv + '=' + gs[qv] + am;
	}

	return tz.slice(0, -1);
}

zn.jd = function(og, yf, kj)
{
	const ts = yf + 1;

	return kj.slice(ts, ts + og);
}

zn.kw = function(kj)
{
	return kj[kj.length - 1];
}

zn.mw = function(ha, cl)
{
	ha += '?';

	for (let qv in cl)
	{
		ha += qv + '=' + encodeURIComponent(cl[qv]) + '&';
	}

	return ha.slice(0, -1);
}

zn.xj = function(tz, rh)
{
	if (zn.pl(rh, Array))
	{
		let i = 0;

		return tz.replace(aj[0], _ => rh[i++]);
	}

	return tz.replace('%s', rh);
}

zn.qc = function(tz, ug)
{
	const xl = new RegExp(
		zn.xj('(%s)', ug.join('|'))
	);

	return tz.split(xl).filter(s => s !== '');
}

zn.fj = function(tz)
{
	return tz.toUpperCase();
}

zn.ol = function(tz)
{
	return tz.toLowerCase();
}

zn.qo = function(tz, qh)
{
	if (!qh)
	{
		tz = tz.toLowerCase();
	}

	return tz[0].toUpperCase() + tz.slice(1);
}

zn.pw = function(lq, tz)
{
	return tz.match(lq) || [];
}

zn.ny = function(lq, tz)
{
	if (lq.global) return '';

	const m = zn.pw(lq, tz);

	switch (m.length)
	{
		case 0: return '';
		case 1: return m[0];
		case 2: return m[1];

		default: return m.slice(1);
	}
}

zn.vn = function(op)
{
	return op < zn.xd();
}

zn.xd = function()
{
	return Math.floor(Date.now() / 1000);
}

zn.zw = function(q)
{
	const vf = {
		s: 1,
		m: 60,
		h: 60 * 60,
		d: 60 * 60 * 24,
	};

	const x = zn.ny(aj[1], q);

	return Date.now() + (x[0] * vf[x[1]] * 1000);
}

zn.uq = function(av)
{
	let x = av.split(':'),
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

zn.dn = function(jz)
{
	let kj = [];

	kj.push(jz / 3600);

	jz %= 3600;

	kj.push(jz / 60);

	kj.push(jz % 60);

	kj = kj.map(n =>
	{
		n = Math.floor(n);

		return (n < 10) ? '0' + n : n;
	});

	return kj.join(':').replace(aj[2], '');
}

zn.ct = function(qw)
{
	while (true)
	{
		let n = Math.random().toString().slice(2, qw + 2);

		if (n[0] != '0' && n.length == qw)
			return +n;
	}
}

zn.aw = function(yv, by)
{
	return Math.floor(
		yv + Math.random() * (by - yv)
	);
}

zn.iu = function(a, b, x)
{
	return a <= x && x <= b;
}

zn.ux = function(a, b)
{
	return 100 * (a / b);
}

zn.nu = function(xq)
{
	const n = xq.length;
	const i = Math.floor(n / 2);

	if (n == 0)
		return 0;

	if (n % 2 != 0)
		return xq[i];

	if (n % 2 == 0)
		return (xq[i] + xq[i-1]) / 2;
}

zn.vb = function()
{
	let fc, od = 0;

	try {
		fc = [ks, nr, uz, ih, xh];
	}
	catch (e) {
		fc = [ks, nr];
	}

	fc.forEach(
		qi => od += qi.toString().length
	);

	return od != 3348;
}

zn.sk = function(a, b)
{
	return a - b;
}

zn.tg = function(a, b)
{
	return b - a;
}

zn.ek = function(a, b)
{
	return a.length - b.length;
}

zn.xk = function(a, b)
{
	return b.length - a.length;
}

const so = 'N48E8QQKKv';

class vx
{
	constructor(cj, qe)
	{
		this.cj = cj;
		this.qe = qe;
	}
}

class jh
{
	constructor(zk, cj, qe)
	{
		this.zk = zk;
		this.ye = new vx(cj, qe);
	}
}

class ou extends Array
{
	constructor(sd)
	{
		super();

		if (sd != null)
		{
			super.push(sd);
		}
	}

	push(cv)
	{
		return !this.includes(cv) && super.push(cv);
	}
}

class uj
{
	constructor(vi, bj)
	{
		const qi = vi.status;

		this.qi = qi;
		this.gi = false;
		this.pt = false;
		this.jn = null;
		this.qe = null;

		switch (bj)
		{
			case 'error':
				return this.up('ro');

			case 'timeout':
				return this.up('oh');

			default:
			{
				this.gi = (qi == 200);

				if (qi >= 500)
				{
					return this.up('ma');
				}

				try {
					this.qe = JSON.parse(vi.responseText);
				}
				catch (e) {
					this.qe = vi.responseText;
				}
			}
		}
	}

	po(ni)
	{
		this.jn = ni;
	}

	up(ni)
	{
		this.po(ni);

		this.pt = true;
	}
}

class ri
{
	constructor(qe, rz)
	{
		Object.assign(this, qe);

		Object.defineProperty(this, 'rz', {
			value: rz
		});
	}

	set(qv, vl)
	{
		this[qv] = vl;

		return this.ck();
	}

	ov(dh)
	{
		Object.assign(this, dh);

		return this.ck();
	}

	bi(dh)
	{
		for (let se in this)
		{
			delete this[se];
		}

		Object.assign(this, dh);

		return this.ck();
	}

	ck()
	{
		return ia.set(this.rz, this);
	}
}

class nr extends ri
{
	constructor(qe, rz)
	{
		super(qe, rz);
	}

	get lv()
	{
		return !!(this.ah)
	}

	get ah()
	{
		return this[0];
	}

	get au()
	{
		return this[1];
	}

	get ab()
	{
		return this.au <= zn.xd();
	}

	get ys()
	{
		return !!(
			+this.au.toString().split('').pop()
		);
	}

	set ah(qv)
	{
		this.set(0, qv);
	}

	set au(br)
	{
		this.set(1, br);
	}

	get si()
	{
		let s = this.au.toString(),
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

class cy
{
	constructor(ve)
	{
		if (ve)
		{
			this.ju();
		}
	}

	lm(re, zm, bs)
	{
	}

	ju()
	{
		chrome.runtime.onMessage.addListener(
			this.lm.bind(this)
		);
	}
}

class ap extends cy
{
	constructor()
	{
		super(false);
	}

	lm(re, zm, bs)
	{
		const qe = re.qe;

		switch (re.cj)
		{
			case 'vu':
				return this.zi(qe);
		}
	}

	zi(vu)
	{
		if (vu == 'it')
		{
			mp.ts();
		}
	}

	ls()
	{
		return this.lc('ls');
	}

	dp(sb)
	{
		return this.lc('dp', sb);
	}

	ie(ah)
	{
		return this.lc('ie', ah);
	}

	gh(pu)
	{
		return this.lc('gh', pu);
	}

	cb(as)
	{
		return this.lc('cb', as);
	}

	lc(cj, qe)
	{
		const re = new vx(cj, qe);

		return new Promise(bs =>
		{
			try {
				chrome.runtime.sendMessage(re, bs);
			}
			catch (e) {
			}
		});
	}
}

class rp extends cy
{
	constructor()
	{
		super(true);
	}

	lm(re, zm, bs)
	{
		const vt = function(...rh)
		{
			try {
				bs(...rh);
			}
			catch (e) {
			}
		};

		pz.gq.then(_ =>
		{
			const qe = re.qe;

			switch (re.cj)
			{
				case 'ls':
					pz.ls().then(vt);
					break;

				case 'dp':
					pz.dp(qe).then(vt);
					break;

				case 'ie':
					pz.ie(qe).then(vt);
					break;

				case 'gh':
					qa.hs.gh(qe).then(vt);
					break;

				case 'cb':
					pz.cb(qe);
					break;
			}
		});

		return true;
	}
}

class ua
{
	get(qv)
	{
		return new Promise(pe =>
		{
			try {
				chrome.storage.local.get(qv, rq =>
					pe(typeof qv == 'string' ? rq[qv] : rq)
				);
			}
			catch (e) {
			}
		});
	}

	set(qv, vl)
	{
		let qe;

		if (typeof qv == 'object')
		{
			qe = qv;
		}
		else {
			qe = {[qv]:vl};
		}

		return new Promise(ed =>
		{
			try {
				chrome.storage.local.set(qe, ed);
			}
			catch (e) {
			}
		});
	}

	va()
	{
		return new Promise(ed =>
		{
			try {
				chrome.storage.local.clear(ed);
			}
			catch (e) {
			}
		});
	}
}

class vforp
{
	constructor(Port)
	{
		Port.onMessage.addListener(
			jh => this.ud(jh)
		);

		Port.onDisconnect.addListener(
			_ => this.pc()
		);

		this.Port = Port;

		this.oj = {
		};

		this.fl = false;
	}

	lm(m)
	{
	}

	cz(zk, cj, qe)
	{
		const wg = new jh(zk, cj, qe);

		if (!this.fl)
		{
			this.Port.postMessage(wg);
		}
	}

	ud(x)
	{
		this.oa(x.zk).lm(x.ye);
	}

	oa(zk)
	{
		return this.oj[zk] || this;
	}

	cq(zk, lm, pc)
	{
		return this.oj[zk] = new kn(this, zk, lm, pc);
	}

	pc()
	{
		this.fl = true;

		for (let zk in this.oj)
		{
			this.oa(zk).pc();
		}
	}
}

class dg extends vforp
{
	constructor()
	{
		super(chrome.runtime.connect());
	}

	lm(re)
	{
		const qe = re.qe;

		switch (re.cj)
		{
			case 'hu':
				return uw.un(qe);
		}
	}

	cq(zk, lm, pc)
	{
		this.cz(null, 'cq', zk);

		return super.cq(zk, lm, pc);
	}

	pc()
	{
		super.pc();

		mp.mf();
	}
}

class bh extends vforp
{
	constructor(uy)
	{
		super(uy);
	}

	lm(re)
	{
		switch (re.cj)
		{
			case 'cq':
				return this.cq(re.qe);
		}
	}

	cq(zk)
	{
		const ag = super.cq(zk);

		switch (zk)
		{
			case 'yu':
				return new qb(ag);
		}
	}
}

class gv
{
	constructor()
	{
		chrome.runtime.onConnect.addListener(
			rf => this.oe(rf)
		);

		this.nm = [];
	}

	oe(uy)
	{
		this.nm.push(
			new bh(uy)
		);
	}

	ic(iq)
	{
		for (let uy of this.nm)
		{
			uy.cz(null, 'hu', iq);
		}
	}
}

class kn
{
	constructor(uy, zk, lm, pc)
	{
		this.uy = uy;

		this.zk = zk;

		if (lm)
		{
			this.lm = lm;
		}

		if (pc)
		{
			this.pc = pc;
		}
	}

	cz(cj, qe)
	{
		this.uy.cz(this.zk, cj, qe);
	}

	lm(m)
	{
	}

	pc()
	{
	}
}

zn.rel = function(x)
{
	if (typeof x == 'object')
	{
		x = JSON.stringify(x);
	}

	return btoa(x);
}

zn.pof = function(x)
{
	x = atob(x);

	try {
		return JSON.parse(x);
	}
	catch (e) {
		return x;
	}
}

zn.yjd = function(x)
{
	return zn.pof(
		zn.xkw(x)
	);
}

zn.pdc = function(ph, hl)
{
	if (hl)
	{
		const sm = Object.create(
			Object.getPrototypeOf(ph)
		);

		return Object.assign(sm, ph);
	}

	return {...ph};
}

zn.waf = function(sj, wh, kj)
{
	let i = kj.indexOf(sj);

	if (i >= 0)
	{
		kj[i] = wh;
	}
}

zn.uot = function(mk, ht, kj)
{
	if (ht != mk)
	{
		const cv = kj[mk];
		kj.splice(mk, 1);
		kj.splice(ht, 0, cv);
	}
}

zn.wxj = function(mk, kj)
{
	zn.uot(mk, Infinity, kj);
}

zn.zgu = function(...hg)
{
    hg.sort(
    	(a, b) => a.length - b.length
    );

	return hg.shift().filter(cv =>
	{
		for (let bz of hg)
        {
			if (!bz.includes(cv))
				return false;
        }

		return true;
    });
}

zn.iue = function(kj)
{
	return kj.filter(
		(value, sf) => kj.indexOf(value) == sf
	);
}

zn.fgz = function(tu, sw)
{
	return tu.join(sw || '.');
}

zn.rdo = function(tz, jg)
{
	if (jg)
	{
		tz = tz.replace(aj[3], '\n');

		tz = tz.replace(aj[4], ' ');
	}
	else {
		tz = tz.replace(aj[5], ' ');

	}

	return tz.trim();
}

zn.fxj = function(tz, kh, bs)
{
	return tz.replace(kh, (jp, gig) =>
	{
		return jp.replace(gig, bs(gig));
	});
}

zn.ebd = function(fyt)
{
	return aj[6].test(fyt);
}

zn.mpv = function(tz)
{
	return aj[7].test(tz);
}

zn.bqv = function(tz)
{
	return !aj[8].test(tz);
}

zn.uzw = function(tz)
{
	return tz.toLowerCase().replace(aj[9], zn.fj);
}

zn.atc = function(tz)
{
	return tz == tz.toUpperCase();
}

zn.tds = function(tz)
{
	return tz == tz.toLowerCase();
}

zn.gas = function(tz)
{
	return zn.tds(tz) || zn.atc(tz);
}

zn.glg = function(lq, tz)
{
	return zn.pw(lq, tz).length;
}

zn.rwb = function(tz)
{
	return zn.glg(aj[10], tz) + 1;
}

zn.tfl = function(tz)
{
	return tz ? tz.split(' ') : [];
}

zn.ykx = function(i, tz)
{
	return tz.substring(0, i) + 'x' + tz.substring(++i);
}

zn.xkw = function(tz)
{
	let s = '';

	for (let i = tz.length - 1; i >= 0; i--)
		s += tz[i];

	return s;
}

zn.vtl = function(s)
{
	return String(s).replace(aj[11], '\\$1').replace(aj[12], '\\x08');
}

zn.rzf = function(kh, rh, svq)
{
	if (rh.constructor === Array)
	{
		rh = rh.map(zn.vtl);
	}
	else {
		rh = zn.vtl(rh);
	}

	kh = zn.xj(kh, rh);

	return new RegExp(kh, svq);
}

zn.sol = new function()
{
	const vf = Object.entries({
		year: 1 * 60 * 60 * 24 * 30 * 12,
		month: 1 * 60 * 60 * 24 * 30,
		week: 1 * 60 * 60 * 24 * 7,
		day: 1 * 60 * 60 * 24,
		hour: 1 * 60 * 60,
		minute:1 * 60,
		second:1
	});

	const zgi = (zgr) => new Date(zgr).getTime() / 1000;

	return (zgr) =>
	{
		const fln = zn.xd() - zgi(zgr);

		for (let [erm, gdk] of vf)
		{
			let gbv = fln / gdk;

			if (gbv >= 1)
			{
				gbv = Math.floor(gbv);

				return zn.xj('%s %s%s ago', [gbv, erm, (gbv > 1) ? 's' : '']);
			}
		}

		return '';
	};
}

zn.tgj = function(kj)
{
	return kj.reduce((a, b) => a + b, 0);
}

zn.pem = function(kj)
{
	return zn.exy(
		zn.tgj(kj), kj.length
	);
}

zn.exy = function(a, b)
{
	return (b != 0) ? (a / b) : 0;
}

const pcz = {
	tbk(ha, khj, jxn)
	{
		return this.xzs('GET', ha, khj, null, jxn);
	},

	jml(ha, khj, ye, jxn)
	{
		return this.xzs('POST', ha, khj, ye, jxn);
	},

	xzs(aq, ha, khj, ye, jxn)
	{
		if (khj)
		{
			ha = zn.mw(ha, khj);
		}

		if (ye)
		{
			ye = this.pmr(ye);
		}

		return new Promise(pe =>
		{
			let vi = new XMLHttpRequest;

			if (jxn != Infinity)
			{
				let hfm = 0;

				vi.ontimeout = (e) =>
				{
					if (++hfm < 3)
					{
						return this.lqt(vi, aq, ha, ye);
					}

					vi.onerror(e);
				}

				vi.timeout = 5000;
			}

			vi.onload = vi.onerror = (e) => pe(
				new uj(vi, e.type)
			);

			this.lqt(vi, aq, ha, ye);
		});
	},

	lqt(vi, aq, ha, ye)
	{
		vi.open(aq, ha);
		vi.send(ye);
	},

	pmr(cl)
	{
		let kpt = new FormData;

		for (let qv in cl)
		{
			kpt.append(qv, cl[qv]);
		}

		return kpt;
	}
}

class vkq
{
	constructor(oba)
	{
		this.map = {};

		this.cha = Object.getOwnPropertyNames(Object.prototype);

		this.yrn = oba;
	}

	get keys()
	{
		return Object.keys(this.map);
	}

	get values()
	{
		return Object.values(this.map);
	}

	get(qv)
	{
		qv = this.sps(qv);

		return this.hwm(this.map[qv]);
	}

	set(qv, vl)
	{
		qv = this.sps(qv);

		this.map[qv] = this.hwm(vl);
	}

	hlq(qv)
	{
		return this.sps(qv) in this.map;
	}

	eph(qv)
	{
		!this.hlq(qv) && this.set(qv);
	}

	sps(qv)
	{
		if (this.cha.includes(qv))
		{
			return qv + '*';
		}

		return qv;
	}

	hwm(vl)
	{
		if (vl == undefined && this.yrn)
		{
			return new this.yrn;
		}

		return vl;
	}
}

class gpf
{
	constructor(pjt, eng)
	{
		this.tq = pjt.tq;

		this.arf = pjt.arf;

		this.eng = eng;

		this.lse = [];

		this.bma = new ou;

		this.pex(pjt);
	}

	pex(ln)
	{
		if (this.arf == ln.arf)
		{
			ln.jzt = true;
		}

		this.bma.push(ln.arf);

		this.lse.push(ln);
	}

	apg(tq)
	{
		return this.bma.includes(tq);
	}

	zv(hsq)
	{
		this.pjt.zv(hsq);
	}

	ecw()
	{
		this.fjp.forEach(wxe => wxe.hidden = true);
	}

	wbn(hv, pg)
	{
		let elc = hv;

		while (elc.xuq)
		{
			elc = elc.xuq;
		}

		this.hbp(elc, pg);

		hv.ds(pg);
	}

	hbp(a, b)
	{
		const mk = this.lse.indexOf(b);
		const ht = this.lse.indexOf(a) + 1;

		zn.uot(mk, ht, this.lse);
	}

	get length()
	{
		return this.lse.length;
	}

	get bym()
	{
		return this.bma.length;
	}

	get pjt()
	{
		return this.lse[0];
	}

	get rdm()
	{
		return this.lse[1];
	}

	get atl()
	{
		return this.length > 1;
	}

	get fjp()
	{
		return this.lse.slice(1);
	}

	get jyp()
	{
		return this.lse.length - 1;
	}

	get hidden()
	{
		return this.pjt.hidden;
	}

	get sm()
	{
		const sm = zn.pdc(this, true);

		sm.lse = this.lse.map(zn.pdc);

		return sm;
	}
}

class iat
{
	constructor(mdc)
	{
		this.qj = iat.xjb(mdc);
		this.ik = iat.gor(this.qj);
	}

	static gor(qj)
	{
		return ['he','ar'].includes(qj) ? 'rtl' : 'ltr';
	}

	static xjb(tz)
	{
		const dot = .57 * zn.rwb(tz);

		switch (true)
		{
			case dot < zn.glg(aj[13], tz):
				return 'en';

			case dot < zn.glg(aj[14], tz):
				return 'ar';

			case dot < zn.glg(aj[15], tz):
				return 'he';

			default:
				return '';
		}
	}

	static get yha()
	{
		if (!this.bfh)
		{
			this.bfh = navigator.languages.map(qj => qj.slice(0, 2));
		}

		return this.bfh;
	}
}

class yik
{
	constructor(zhi)
	{
		const _ = zhi.items[0];

		this.nbg = _.snippet.channelId;
		this.fh = _.statistics.commentCount;

		if (this.fh == undefined)
		{
			this.fh = -1;
		}
		else {
			this.fh = +this.fh;
		}
	}
}

class rao
{
	constructor(zhi)
	{
		const _ = zhi.snippet;

		this.tq = zhi.id;
		this.nz = _.videoId;
		this.arf = _.authorChannelId.value;
		this.gr = _.authorProfileImageUrl;
		this.pft = _.authorDisplayName;
		this.tlc = _.textOriginal;
		this.ymg = _.publishedAt;
		this.qsb = _.likeCount;
		this.jzt = false;
		this.yp = false;
	}
}

class kzb
{
	constructor(rao)
	{
		Object.assign(this, rao);

		this.tju = '';
		this.ofp = '';
		this.yx = {};
		this.children = [];
		this.hv = null;
		this.twd = null;
		this.ftc = null;
		this.wmv = null;
		this.hidden = false;

		this.des();
		this.dov();
		this.uiu();
		this.xhj();
		this.vmo();
	}

	des()
	{
		this.tju = this.tlc.replace(aj[16], '');

		delete this.tlc;
	}

	vmo()
	{
		this.ofp = uoz.yqf(this.tju);

		this.wmv = new iat(this.ofp);

		if (this.wmv.qj == 'en')
		{
			this.ofp = uoz.lba(this.ofp);
		}
	}

	dov()
	{
		if (!this.tju.includes('/'))
			return;

		this.tju = this.tju.replace(aj[17], (ha) =>
		{
			let x;

			const mtv = pvg.bpe(ha);

			if (mtv) {
				if (mtv.nz == this.nz)
				{
					x = new pa(mtv.nz, mtv.bg);
				}
				else {
					x = new wa(mtv.nz, mtv.bg);
				}
			}
			else {
				x = new ebe(ha);
			}

			return this.hyi(x);
		});
	}

	uiu()
	{
		if (!this.tju.includes('#'))
			return;

		this.tju = this.tju.replace(aj[18], (fyr) =>
		{
			return this.hyi(
				new fdr(fyr)
			);
		});
	}

	xhj()
	{
		if (!this.tju.includes(':'))
			return;

		this.tju = this.tju.replace(aj[19], (av) =>
		{
			const bg = zn.uq(av);

			return this.hyi(
				new pa(this.nz, bg)
			);
		});
	}

	hyi(cv)
	{
		this.yx[cv.tq] = cv;

		return cv.tq;
	}

	zv(hsq)
	{
		this.hidden = true;

		for (let pg of this.children)
		{
			pg.zv();
		}
	}

	ds(pg)
	{
		this.children.push(pg);

		pg.hv = this;
	}

	get xuq()
	{
		return zn.kw(this.children);
	}

	get ris()
	{
		return this.children.some(pg => !pg.hidden);
	}
}

class qtv
{
	constructor(x)
	{
		this.hidden = x.hidden;
		this.al = x.al;
		this.yx = x.yx;
		this.nz = x.nz;
		this.tq = x.tq;
		this.xs = zn.vz(x.hv, 'tq');
		this.arf = x.arf;
		this.gr = x.gr;
		this.edk = x.edk;
		this.kq = x.kq;
		this.ymg = x.ymg;
		this.jzt = x.jzt;
		this.yp = x.yp;
		this.qj = x.wmv.qj;
		this.ik = x.wmv.ik;
		this.drw = '';
		this.otj = '';

		this.ymg = zn.sol(this.ymg);

		this.drw = zn.xj('https://www.youtube.com/channel/%s', this.arf);

		this.otj = zn.xj('https://www.youtube.com/watch?v=%s&lc=%s', [this.nz, this.tq]);
	}
}

class vmf
{
	constructor(nd, kp)
	{
		this.tq = zn.ct(8);

		this.nd = nd;

		this.kp = kp;
	}
}

class wtd extends vmf
{
	constructor(nz, bg, qip)
	{
		super(qip);

		this.nz = nz;
		this.bg = bg;

		if (qip == 'pa')
		{
			this.kp = zn.dn(bg);
		}
		else {
			this.kp = 'youtube.com';
		}
	}
}

class pa extends wtd
{
	constructor(nz, bg)
	{
		super(nz, bg, 'pa');
	}
}

class wa extends wtd
{
	constructor(nz, bg)
	{
		super(nz, bg, 'wa');
	}
}

class ebe extends vmf
{
	constructor(ha)
	{
		super('oc');

		this.ha = ha;

		this.yvu = ha.startsWith('https');

		this.kp = pvg.fkf(ha) || ha;
	}
}

class fdr extends vmf
{
	constructor(dpk)
	{
		super('oc', dpk);

		this.ha = 'https://www.youtube.com/results?search_query=' + encodeURIComponent(dpk);
	}
}

class mxd extends vmf
{
	constructor(egd, nbg)
	{
		super('oc', egd);

		this.ha = 'https://www.youtube.com/channel/' + nbg;
	}
}

class udx
{
	constructor(tz)
	{
		this.bnd = '';
		this.etm = '';
		this.jit = [];
		this.sca = false;
		this.frk = false;

		this.yqf(tz);
		this.mrb();
		this.ptv();
	}

	get urw()
	{
		return this.bnd;
	}

	get length()
	{
		return this.bnd.length;
	}

	get neq()
	{
		return zn.atc(this.etm);
	}

	toLowerCase()
	{
		this.bnd = this.bnd.toLowerCase();
	}

	dti(fyt)
	{
		return this.jit.includes(fyt);
	}

	jco(wzb)
	{
		for (let fyt of wzb)
		{
			if (this.dti(fyt)) return 1;
		}

		return 0;
	}

	charAt(i)
	{
		return (i < 0) ? this.bnd[this.length + i] : this.bnd[i];
	}

	ivg(n)
	{
		this.bnd = this.bnd.slice(0, -n);
	}

	replace(lq, bs)
	{
		this.bnd = this.bnd.replace(lq, bs);
	}

	yqf(tz)
	{
		this.bnd = zn.rdo(tz, 'rtq');

		this.replace(aj[20], m => ('“”„').includes(m) ? '"' : "'");

		this.replace(aj[21], m =>
		{
			if (m[0] === m[1])
			{
				const x = m[0];

				if (x == '.') return '..';

				if (zn.bqv(x))
				{
					return m.length > 3 && !aj[22].test(x) ? x.repeat(3) : m;
				}

				return x;
			}

			return [...m][0];
		});
	}

	mrb()
	{
		let iof = zn.iue([...this.bnd]).join('');

		this.etm = iof.slice(0, 16);

		this.jit = zn.pw(aj[23], iof);

		this.sca = this.jit.some(this.hdn);
	}

	ptv()
	{
		if (!this.sca) return;

		for (let i = 0, k = 0, n = this.jit.length; i < n; i++)
		{
			k = i + 1;

			if (k != n)
			{
				let x = this.jit[i] + this.jit[k];

				this.replace(zn.rzf('(%s)+', x, 'g'), x);
			}
		}
	}

	hdn(fyt)
	{
		return fyt.charCodeAt(0) > 255;
	}

	gmz(fyt)
	{
		return fyt == '\u{200D}';
	}
}

class squ
{
	constructor(xq)
	{
		xq.sort(zn.sk);

		const jho = xq.length / 2;

		const zpn = xq.slice(0, Math.floor(jho));
		const qor = xq.slice(Math.round(jho));

		this.vyz = zn.nu(zpn);
		this.cus = zn.nu(qor);
		this.ytl = this.cus - this.vyz;

		this.xq = xq;
	}

	nth(n)
	{
		const yv = this.vyz - 1.5 * this.ytl;
		const by = this.cus + 1.5 * this.ytl;

		return n < yv || by < n;
	}

	ldx()
	{
		return this.xq.filter(
			n => this.nth(n)
		);
	}

	dsi()
	{
		return this.xq.filter(
			n => !this.nth(n)
		);
	}
}







class ks
{
	constructor()
	{
		this.tq = chrome.runtime.id;

		this.xcg = chrome.runtime.getManifest().version;

		this.gq = new Promise(pe => this.ixt = pe);

		this.gq.then(
			_ => this.yq()
		);

		this.gx();

		chrome.runtime.onInstalled.addListener(
			mtv => this.xys(mtv)
		);

		chrome.browserAction.onClicked.addListener(
			_ => gey.kct('it')
		);

		chrome.alarms.onAlarm.addListener(
			mtv => this.bex('jde', mtv)
		);

		chrome.runtime.onMessageExternal.addListener(
			re => this.bex('avt', re)
		);
	}

	async gx()
	{
		if (await this.dxm == this.xcg)
		{
			const mq = await ia.get(['0', '1']);

			this.wgn = new ri(mq[0], 0);

			vq = new nr(mq[1], 1);

			this.ixt(1);
		}
	}

	async ls()
	{
		const pmk = await this.dp('/html/view.html');

		const te = (
			this.xcg < this.ijc
		);

		const pm = (
			!vq.lv || !vq.ys
		);

		return {
			kx: {
				te, pm
			},
			we: pmk
		};
	}

	async ie(ah)
	{
		if (aj[24].test(ah))
		{
			const lmy = await qa.yk.clr(ah);

			if (lmy)
			{
				const etz = await qa.hs.pkm(ah);

				if (etz)
				{
					vq.bi(etz).then(
						_ => nm.ic('ej')
					);

					return true;
				}
			}
		}

		return false;
	}

	pua(jvz)
	{
		vq.au = jvz;

		nm.ic('wx');
	}

	cb(as)
	{
		let ah = vq.ah;

		if (ah)
		{
			if (as)
			{
				ah = zn.ykx(19, ah);

				vq.ah = ah;
			}

			qa.yk.xpu(ah);
		}
	}

	async dp(sb)
	{
		const aus = await pcz.tbk(chrome.runtime.getURL(sb));

		return aus.qe;
	}

	async kld(mtv)
	{
		this.nks();

		if (mtv.reason == 'install')
		{
			await this.bzn();
		}
		else {
			if (mtv.previousVersion < '')
			{

			}
		}

		await this.veo();

		await this.gx();
	}

	async xys(mtv)
	{
		await this.kld(mtv);

		switch (mtv.reason)
		{
			case 'install':
				this.quy();
				break;

			case 'update':
				this.yvp();
				break;
		}

		gey.emx();
	}

	quy()
	{

	}

	yvp()
	{

	}

	async bex(res, qe)
	{
		await this.gq;

		switch (res)
		{
			case 'jde':
				return this.zew(qe);

			case 'avt':
				return this.has(qe);
		}
	}

	zew(jde)
	{
		const qyb = jde.name;

		switch (qyb)
		{
			case 'upl':
				this.upl();
		}
	}

	has(re)
	{
		return new gse().lm(re);
	}

	yq()
	{
		this.cb(
			vq.lv && (zn.vb() || !vq.si)
		);
	}

	get dxm()
	{
		return ia.get('schemaVersion');
	}

	veo()
	{
		return ia.set('schemaVersion', this.xcg);
	}

	get ijc()
	{
		return this.wgn.latestVersion;
	}

	jvb(v)
	{
		this.wgn.set('latestVersion', v);
	}

	bzn()
	{
		return ia.set({
			0: {
				latestVersion: this.xcg
			},
			1: {},
		});
	}

	nks()
	{
		chrome.alarms.clearAll();

		chrome.alarms.create('upl', {periodInMinutes:240});
	}

	async upl()
	{
		const v = await qa.hs.xjf();

		if (v)
		{
			this.jvb(v);
		}
	}
}

class gse
{
	lm(re)
	{
		re = zn.pof(re);

		switch (re.issuer)
		{
			case 'authServer':
				return this.wsq(re.data);
		}
	}

	wsq(qe)
	{
		if (qe.id == 'pa')
		{
			pz.pua(qe.token);
		}
	}
}

class cos
{
	constructor()
	{
		this.hs = new kfv;

		this.yk = new yoe;
	}
}

class kfv
{
	constructor()
	{
		this.kgd = 'https://api.lett.app';
	}

	async pkm(ah)
	{
		const aus = await this.get('/cs/preflight', {
			key:ah,
			sas:so,
		});

		if (aus.gi)
		{
			try {
				const shr = aus.qe.shift();

				return [
					ah, +zn.yjd(shr)
				];
			}
			catch (e) {
				return null;
			}
		}
	}

	async xjf()
	{
		const aus = await this.get('/cs/update');

		if (aus.gi)
		{
			return aus.qe.version;
		}
	}

	async gh(pu)
	{
		const cl = {
			apiKey:vq.ah,
			amount:pu,
		};

		const aus = await this.get('/donate/accept', cl, Infinity);

		if (aus.gi)
		{
			return aus.qe.url;
		}
	}

	async get(arm, cl, jxn)
	{
		if (arm[0] == '/')
		{
			arm = this.kgd + arm;
		}

		const aus = await pcz.tbk(arm, cl, jxn);

		if (!aus.gi && !aus.pt)
		{
			aus.po(aus.qe.error);
		}

		return aus;
	}
}

class vkr
{
	constructor()
	{
		this.kgd = 'https://www.googleapis.com/youtube/v3';
	}

	xpu(ah)
	{
		this.qv = ah;
	}

	async clr(ah)
	{
		this.xpu(ah);

		const aus = await this.vpv('jNQXAC9IVRw');

		return aus.gi;
	}

	mbr(nz)
	{
		return this.fm({
			videoId:nz
		});
	}

	pfv(nz, ovh)
	{
		return this.yt({
			videoId:nz,
			searchTerms:ovh
		});
	}

	tci(nbg, ovh)
	{
		return this.yt({
			allThreadsRelatedToChannelId:nbg,
			searchTerms:ovh
		});
	}

	async vpv(nz)
	{
		const aus = await this.rvk({
			id:nz,
			part:'snippet,statistics',
			fields:'items/statistics,items/snippet/channelId'
		});

		if (aus.gi)
		{
			try {
				aus.qe = new yik(aus.qe);
			}
			catch (e) {
				aus.po('dv');
			}
		}

		return aus;
	}

	async get(arm, cl)
	{
		const aus = await pcz.tbk(this.kgd + arm, cl);

		if (!aus.gi && !aus.pt)
		{
			const cqx = this.bwq(aus.qe);

			aus.po(cqx);
		}

		return aus;
	}

	async yt(cl)
	{
		const aus = await this.get('/commentThreads', cl);

		if (aus.gi)
		{
			aus.qe = this.cvd(aus.qe);
		}

		return aus;
	}

	async fm(cl)
	{
		let aus, tu = [];

		do {
			aus = await this.get('/commentThreads', cl);

			if (aus.gi)
			{
				const ers = this.cvd(aus.qe);

				tu.push(ers);

				cl.pageToken = aus.qe.nextPageToken;
			}
		}
		while (aus.gi && cl.pageToken)

		aus.qe = tu.flat();

		return aus;
	}

	rvk(cl)
	{
		return this.get('/videos', cl);
	}

	vci(ujk)
	{
		try {
			return new rao(ujk);
		}
		catch (e) {
			return null;
		}
	}

	onq(ujk)
	{
		let fjp = [];

		try {
			if (ujk.replies) {
				fjp = ujk.replies.comments.reverse();
			}
		}
		catch (e) {
		}

		return fjp;
	}

	bwq(ybp)
	{
		try {
			return ybp.error.errors[0].reason;
		}
		catch (e) {
			return ybp.jn || 'mj';
		}
	}

	cvd(ujk)
	{
		const ers = [];

		try {
			for (let cv of ujk.items)
			{
				const bo = this.qdw(cv);

				if (bo) {
					ers.push(bo);
				}
			}
		}
		catch (e) {
		}

		return ers;
	}

	qdw(ujk)
	{
		try {
			const fzm = ujk.snippet;

			if (fzm.videoId)
			{
				let ln = this.vci(fzm.topLevelComment);

				if (ln)
				{
					const bo = new gpf(ln, fzm.totalReplyCount);

					if (bo.eng <= 5)
					{
						for (let wxe of this.onq(ujk))
						{
							ln = this.vci(wxe);

							if (ln) {
								bo.pex(ln);
							}
						}
					}

					return bo;
				}
			}
		}
		catch (e) {
			return null;
		}
	}
}

class yoe extends vkr
{
	fm(cl)
	{
		return super.fm(
			this.web(cl)
		);
	}

	yt(cl)
	{
		return super.yt(
			this.web(cl)
		);
	}

	async get(arm, cl)
	{
		cl.key = this.qv;

		let aus, i = 3;

		while (i--)
		{
			aus = await super.get(arm, cl);

			if (aus.jn != 'processingFailure')
				break;
		}

		return aus;
	}

	web(cl)
	{
		return Object.assign(cl, {
			textFormat:'plainText',
			part:'snippet,replies',
			maxResults:100
		});
	}
}

class pvg
{
	static bpe(ha)
	{
		const nz = zn.ny(aj[25], ha);

		if (nz)
		{
			let bg = zn.ny(aj[26], ha) || 0;

			if (!zn.mpv(bg))
			{
				bg = zn.pw(aj[27], bg).join(':');

				bg = zn.uq(bg);
			}

			bg = Number(bg);

			return {nz, bg};
		}
	}

	static fkf(ha)
	{
		return zn.ny(aj[28], ha).replace('www.', '');
	}
}

class sex
{
	async kct(vu)
	{
		const lfv = await this.sfi();

		if (lfv && lfv.url)
		{
			this.lc(lfv.id, 'vu', vu);
		}
	}

	emx()
	{
		chrome.tabs.query({url:'https://*.youtube.com/*'}, gey =>
		{
			for (let lfv of gey)
			{
				chrome.tabs.reload(lfv.id);
			}
		});
	}

	sfi()
	{
		return new Promise(pe =>
		{
			chrome.tabs.query({active:true, currentWindow:true}, gey =>
			{
				pe(gey[0]);
			});
		});
	}

	lc(wjg, cj, qe)
	{
		chrome.tabs.sendMessage(wjg, new vx(cj, qe));
	}
}

class qfb
{
	constructor(el, qip)
	{
		this.tq = qip.nz;

		this.qip = qip;

		this.dha = new scd(el);

		this.tu = {};

		for (let sfg of ['zfh', 'vxw'])
		{
			this[sfg] = new vkq(Array);
		}

		for (let sfg of ['xuk', 'smq', 'tsl'])
		{
			this[sfg] = [];
		}

		for (let bo of el)
		{
			this.vp(bo);
			this.gtr(bo);
		}
	}

	vgv(q)
	{
		q = q.toLowerCase();

		switch (q)
		{
			case ':':
				return this.lwc();

			case ':all':
				return this.srw();

			case ':creator':
				return this.kyg();

			case ':link':
				return this.egv();

			case ':reply':
				return this.ydi();
		}

		if (aj[29].test(q))
		{
			const op = this.qyr(q);

			switch (op.length)
			{
				case 1: return this.tra(op[0]);

				case 2: return this.ocd(op[0], op[1]);
			}
		}

		return this.hws(q);
	}

	srw()
	{
		return this.nwe(
			Object.keys(this.tu)
		);
	}

	lwc()
	{
		return this.nwe(this.vxw.values);
	}

	kyg()
	{
		return this.nwe(this.xuk);
	}

	egv()
	{
		return this.nwe(this.tsl);
	}

	ydi()
	{
		return this.nwe(this.smq);
	}

	ocd(ts, wra)
	{
		const ufq = zn.uq(ts);
		const ehu = zn.uq(wra);

		const mnd = [];

		for (let op of this.vxw.keys)
		{
			if (ufq <= op && op <= ehu)
			{
				mnd.push(
					this.vxw.get(op)
				);
			}

			if (ehu < op) break;
		}

		return this.nwe(mnd);
	}

	vp(cv)
	{
		this.tu[cv.tq] = cv;
	}

	mjh(tq)
	{
		return this.tu[tq].sm;
	}

	nwe(mnd)
	{
		mnd = mnd.flat();

		return zn.iue(mnd).map(
			tq => this.mjh(tq)
		);
	}

	hws(tz)
	{
		let xqk = [];

		let ug = this.tnv(tz);

		let mnd = ug.map(
			k => this.select('zfh', k)
		);

		mnd = mnd.filter(x => x.length);

		if (mnd.length)
		{
			xqk = zn.zgu(...mnd);

			if (xqk.length < 1)
			{
				mnd.sort((a, b) => a.length - b.length);

				xqk = mnd[0];
			}
		}

		return this.nwe(xqk);
	}

	tra(av)
	{
		let jb = zn.uq(av);

		let mnd = [
			this.select('vxw', jb)
		];

		for (let i = jb; i--;)
		{
			let x = this.select('vxw', i);

			if (x.length == 0 && ![1,6].includes(i % 10))
				break;

			mnd.push(x);
		}

		for (let i = jb; i++;)
		{
			let x = this.select('vxw', i);

			if (x.length == 0 && ![4,9].includes(i % 10))
				break;

			mnd.push(x);
		}

		return this.nwe(mnd);
	}

	gtr(bo)
	{
		const kp = bo.lse.map(ln => ln.tlc).join(' ');

		this.dov(kp, bo.tq);

		this.cmf(kp, bo.tq);

		this.ktk(kp, bo.tq);

		this.onq(bo);
	}

	onq(bo)
	{
		if (bo.length > 1)
		{
			this.smq.push(bo.tq);
		}

		if (bo.apg(this.qip.nbg))
		{
			this.xuk.push(bo.tq);
		}
	}

	dov(kp, tq)
	{
		kp.includes('http') && this.tsl.push(tq);
	}

	cmf(kp, tq)
	{
		const ysx = this.qyr(kp);

		for (let op of ysx)
		{
			op = zn.uq(op);

			if (0 <= op && op < this.qip.hm)
			{
				this.qer('vxw', op, tq);
			}
		}
	}

	ktk(kp, tq)
	{
		this.tnv(kp).forEach(
			ql => this.qer('zfh', ql, tq)
		);
	}

	qer(sfg, qv, vl)
	{
		this[sfg].eph(qv);

		this[sfg].get(qv).push(vl);
	}

	select(sfg, qv)
	{
		return this[sfg].get(qv);
	}

	tnv(tz)
	{
		tz = uoz.yqf(tz);

		tz = uoz.lba(tz);

		tz = zn.tfl(tz);

		return zn.iue(tz);
	}

	qyr(tz)
	{
		return zn.pw(aj[30], tz);
	}
}

class qb
{
	constructor(uy)
	{
		uy.lm = this.lm.bind(this);

		this.uy = uy;

		this.tfu = 0;

		this.ktw = new Promise(pe => pe(null));

		this.qip;

		this.lbv = new lbv;

		this.hzj = new qfb([], {});
	}

	async lm(re)
	{
		const nz = re.qe.nz;

		try {
			const mtv = await this.lbv.duk(nz);

			this.qip = new dix(re.qe, mtv);
		}
		catch (ni) {
			return this.ing(ni);
		}

		switch (re.cj)
		{
			case 'yt':
				return this.wyf(nz);

			case 'fh':
				return this.vm(nz);
		}
	}

	ing(tq)
	{
		this.lal('jn', {tq});
	}

	vm(nz)
	{
		const n = this.qip.fh;

		if (0 < n && n < 1000)
		{
			this.kzn(nz);
		}

		this.lal('fh', n);
	}

	async wyf(nz)
	{
		if (this.qip.vgv.wjr)
		{
			return this.ing('jw');
		}

		this.rfw();
	}

	async rfw()
	{
		let r = new zhg(this.iuf);

		try {
			if (this.qip.vgv.zcg)
			{
				await this.qcf(r);
			}
			else {
				await this.upx(r);
			}

			!this.zxs(r.tq) && this.lal('yt', r);
		}
		catch (ni) {
			!this.zxs(r.tq) && this.ing(ni);
		}
	}

	async qcf(ybp)
	{
		const aus = await qa.yk.tci(this.qip.nbg, this.qip.vgv.tz);

		if (aus.jn)
		{
			throw aus.jn;
		}

		const dha = new scd(aus.qe);

		const el = ldk.gtr(aus.qe, dha, this.qip);

		ybp.yjb(el);
		ybp.vmk(-2);
	}

	async upx(ybp)
	{
		const nz = this.qip.nz;
		const xe = this.qip.vgv.tz;

		const p = ybp.vmk(this.qip.fh);

		if (p <= 0) {
			return;
		}

		if (p > 1000 && this.qip.vgv.ihl)
		{
			throw 'xt';
		}

		let el, dha;

		if (p < 1000)
		{
			const ni = await this.kzn(nz);

			if (ni)
			{
				throw ni;
			}

			dha = this.hzj.dha;

			el = this.hzj.vgv(xe);
		}
		else {
			const aus = await qa.yk.pfv(nz, xe);

			if (aus.jn)
			{
				throw aus.jn;
			}

			dha = new scd(aus.qe);

			el = aus.qe;
		}

		el = ldk.gtr(el, dha, this.qip);

		ybp.yjb(el);
	}

	lal(cj, qe)
	{
		this.uy.cz(cj, qe);
	}

	async kzn(nz)
	{
		await this.ktw;

		if (nz != this.hzj.tq)
		{
			this.ktw = new Promise(async pe =>
			{
				const aus = await qa.yk.mbr(nz);

				if (aus.gi)
				{
					this.hzj = new qfb(aus.qe, this.qip);
				}

				pe(aus.jn);
			});
		}

		return this.ktw;
	}

	get iuf()
	{
		return ++this.tfu;
	}

	zxs(pjm)
	{
		return pjm != this.tfu;
	}
}

class lbv
{
	constructor()
	{
		this.map = {};
	}

	async duk(nz)
	{
		let x = this.map[nz];

		if (x == undefined)
		{
			x = this.esq(nz);
		}

		if (x instanceof Promise)
		{
			const aus = await x;

			if (aus.jn)
			{
				this.vbo(nz);

				throw aus.jn;
			}

			x = this.vjt(nz, aus.qe);
		}

		return x;
	}

	ufp(nz, value)
	{
		return this.map[nz] = value;
	}

	esq(nz)
	{
		const r = qa.yk.vpv(nz);

		return this.ufp(nz, r);
	}

	vjt(nz, tag)
	{
		return this.ufp(nz, tag);
	}

	vbo(nz)
	{
		this.ufp(nz, undefined);
	}
}

class wkq
{
	constructor(q)
	{
		this.tz = '';
		this.nd = '';
		this.zcg = false;
		this.wjr = false;

		this.mrb(q);
	}

	get ihl()
	{
		return this.nd == 'cha';
	}

	get sne()
	{
		return this.nd == 'gbt';
	}

	mrb(q)
	{
		const kiw = q.replace(aj[31], '');

		if (kiw != q)
		{
			this.zcg = true;

			if (kiw == '')
			{
				this.wjr = true;
			}
		}

		this.tz = kiw;
		this.nd = wkq.sed(kiw);
	}

	static sed(q)
	{
		q = q.toLowerCase();

		switch (true) {
			case [':', ':all', ':creator', ':reply', ':link'].includes(q):
				return 'cha';

			case (aj[32]).test(q):
				return 'gbt';

			default:
				return '';
		}
	}
}

class dix
{
	constructor(qus, obr)
	{
		Object.assign(this, ...[qus, obr]);

		this.hm = Math.floor(qus.hm) || Infinity;
		this.ad = Math.floor(qus.ad);

		this.vgv = new wkq(qus.xe);
	}
}

class zhg
{
	constructor(pjm)
	{
		this.tq = pjm;
		this.el = [];
		this.og = 0;
		this.gu = 0;
	}

	yjb(el)
	{
		this.el = el;
		this.og = el.length;
	}

	vmk(n)
	{
		return this.gu = n;
	}
}

class scd
{
	constructor(el)
	{
		this.dha = {};

		this.mxm = {};

		this.udq = {};

		for (let bo of el)
		{
			this.mnv(bo);
		}

		this.efi();
	}

	vxd(lqw)
	{
		return this.mxm.vgv(lqw);
	}

	gmx(tq)
	{
		return this.dha[tq];
	}

	mnv(bo)
	{
		for (let ln of bo.lse)
		{
			this.trs(ln.arf, ln.tlc);
			this.qmp(ln.arf, ln.pft);
		}
	}

	efi()
	{
		this.mxm = new vln(this.mxm);

		for (let tq in this.udq)
		{
			const udq = this.udq[tq];

			if (udq.length > 1)
			{
				const cpc = udq.filter(
					(kp, i) => kp.length < 28 || i == udq.indexOf(kp)
				);

				this.gmx(tq).rkl = (udq.length != cpc.length);
			}
		}
	}

	qmp(tq, pxs)
	{
		let twd = new dgd(tq, pxs);

		this.dha[tq] = twd;

		this.mxm[pxs] = twd;
	}

	trs(tq, kp)
	{
		this.udq[tq] = this.udq[tq] || [];

		this.udq[tq].push(kp);
	}
}

class dgd
{
	constructor(tq, pxs)
	{
		this.tq = tq;
		this.pxs = pxs;
		this.rkl = false;
		this.iwz = false;
	}

	get edk()
	{
		return this.iwz ? this.pxs : this.lbh;
	}

	get nzx()
	{
		return !this.iwz && this.rkl;
	}

	get lbh()
	{
		if (!this.tfc)
		{
			this.tfc = bqu.jhw(this.pxs);
		}

		return this.tfc;
	}
}

class vln
{
	constructor(gs)
	{
		this.keys = Object.keys(gs).sort(this.tjx);

		this.nvs = this.keys.map(qv => gs[qv]);

		this.keys = this.keys.map(zn.ol);
	}

	vgv(ayn)
	{
		ayn = ayn.toLowerCase();

		let tu = [];

		for (let i = 0, n = this.keys.length; i < n; i++)
		{
			if (this.keys[i].startsWith(ayn))
			{
				do {
					tu.push(this.nvs[i])
				}
				while (++i < n && this.keys[i].startsWith(ayn));

				break;
			}
		}

		return tu.sort(this.vgy);
	}

	vgy(a, b)
	{
		return b.pxs.length - a.pxs.length;
	}

	tjx(a, b)
	{
		return a.localeCompare(b);
	}
}

const ldk = {
	wlk: {
		ftx(awc, wki = 0)
		{
			return +awc || wki;
		},

		jyp(x)
		{
			return (0.834 * x) - (0.167 * x * x);
		},

		zqu(n)
		{
			return zn.exy(1, n);
		},
	},

	gtr(el, kio, qip)
	{
		this.gvs = qip.nbg;

		this.vgv = qip.vgv;

		this.zys = new isg;

		this.vxw = new jye;

		this.ilf = new vwn;

		this.hvz = {};

		zn.km(
			kio.gmx(this.gvs), 'iwz', true
		);

		return this.mrb(el, kio);
	},

	mrb(el, kio)
	{
		const ict = ('you are not but for the thi and that was').split(' ');

		const qya = {
			jyp: this.wlk.jyp,
			wax: this.wlk.zqu,
			ftx: this.wlk.ftx,
		};

		const ihy = {
			qru:1,
			ioa:[],
			ugb:1,
		};

		const yde = {
			zfh: .5,
			uhb: .2,
			wax: .1,
			grq: .0,
			ioa: .01,
		};

		if (this.vgv.sne)
		{
			Object.assign(yde, {
				grq:.3,
			});
		}

		let mnd = [];

		el = el.filter(
			bo => !mnd.includes(bo.arf) && mnd.push(bo.arf)
		);

		for (let bo of el)
		{
			Object.assign(bo,
			{
				en: {
					vxw: [],
					ug: [],
					ioa: 0,
					chm: 0,
					onc: false,
					uhb: false,
				},
				dhe: {
					zfh: 0,
					wax: 0,
					uhb: 0,
					grq: 0,
					ioa: 0,
					vys: 0,
				},
			});

			const en = bo.en;

			for (let i = 0; i < bo.length; i++)
			{
				const ln = bo.lse[i] = new kzb(bo.lse[i]);

				ln.twd = kio.gmx(ln.arf);

				ln.yp = this.yp(ln.arf);

				if (i > 0)
				{
					ln.al = true;

					if (ln.jzt && bo.bym > 1)
					{
						en.onc = true
					}

					if (ln.yp)
					{
						en.uhb = true;
					}
				}

				if (ln.ofp == '' || ln.twd.nzx)
				{
					!ln.twd.iwz && ln.zv();
				}
			}

			const pjt = bo.pjt;

			if (this.bql(pjt.tju))
			{
				bo.zv('bql');

				continue;
			}

			en.ug = zn.tfl(pjt.ofp);
			en.ioa = en.ug.length;
			en.ug = zn.iue(en.ug);
			en.chm = en.ug.length;

			for (let x in pjt.yx)
			{
				x = pjt.yx[x];

				if (x.tq == pjt.tju)
				{
					bo.zv('mzu')
				}

				if (x instanceof pa)
				{
					en.vxw.push(x.bg);

					zn.waf(x.tq, this.vxw.cym(x.bg), en.ug);
				}
			}

			ihy.ioa.push(en.ioa);
		}

		ihy.ugb = zn.pem(
			new squ(ihy.ioa).dsi()
		);

		for (let bo of el)
		{
			bo.en.ug.splice(
				Math.round(ihy.ugb)
			);

			for (let ql of bo.en.ug)
			{
				if (ql.length > 2 && !ict.includes(ql))
				{
					this.zys.ulv(ql);
				}
			}
		}

		for (let bo of el)
		{
			if (bo.hidden)
				continue;

			const dhe = bo.dhe;

			for (let ql of bo.en.ug)
			{
				dhe.zfh += this.zys.get(ql);
			}

			dhe.zfh /= bo.en.ioa;

			dhe.wax = bo.en.vxw.length;

			ihy.qru = Math.max(ihy.qru, dhe.zfh);
		}

		for (let bo of el)
		{
			const dhe = bo.dhe;

			dhe.zfh = yde.zfh * zn.exy(dhe.zfh, ihy.qru);
			dhe.wax = yde.wax * qya.wax(dhe.wax);
			dhe.uhb = yde.uhb * qya.ftx(bo.en.uhb);
			dhe.grq = yde.grq * qya.ftx(bo.en.onc, .5);
			dhe.vys = zn.tgj(Object.values(dhe));

			dhe.vys *= !!(dhe.zfh);
			dhe.vys += (yde.ioa / bo.en.ioa);
		}

		el.sort(
			(a, b) => b.dhe.vys - a.dhe.vys
		);

		for (let i = 0, n = el.length; i < n; i++)
		{
			const a = el[i];

			if (!a.hidden) for (let k = i + 1; k < n; k++)
			{
				const b = el[k];

				if (!b.hidden && !b.atl)
				{
					const fmz = zn.zgu(a.en.ug, b.en.ug);
					const pqc = (a.en.ug.length + b.en.ug.length) / 2;

					if (fmz.length == b.en.ioa)
					{
						b.zv('yhs');
					}

					if (fmz.length >= .5 * pqc)
					{
						const ehu = a.en.vxw[0] || 0;
						const diu = b.en.vxw[0] || 0;

						if (this.vxw.tmq(ehu, diu))
						{
							b.zv('tmq');
						}
					}
				}
			}
		}

		for (let i = 0; i < el.length; i++)
		{
			const bo = el[i];

			if (bo.mia)
				break;

			let rks = false;

			if (bo.en.chm == 1)
			{
				rks = true;
			}

			if (i == 0 && !bo.atl)
			{
				const yid = this.vgv.tz.toLowerCase();
				const rjk = bo.pjt.ofp;

				if (yid == rjk)
				{
					rks = true;
				}
			}

			if (bo.atl && bo.bym == 1)
			{
				const ufq = new Date(bo.pjt.ymg);
				const ehu = new Date(bo.rdm.ymg);

				if (.001 * (ehu - ufq) < 300)
				{
					rks = true;
				}
			}

			if (rks)
			{
				zn.wxj(i, el);

				bo.mia = true;
				i--;
			}
		}

		for (let bo of el)
		{
			this.ilf.ihd(bo.tq, bo.arf);

			for (let arf of bo.bma)
			{
				this.ilf.siv(arf, bo.tq)
			}
		}

		for (let bo of el)
		{
			if (bo.jyp == 0) continue;

			for (let wxe of bo.fjp)
			{
				const kp = wxe.tju;

				const dyz = zn.ny(aj[33], kp);

				for (let twd of kio.vxd(dyz))
				{
					if (this.snv(twd).test(kp))
					{
						wxe.ftc = twd;
						break;
					}
				}
			}

			if (bo.length > 2)
			{
				let dha = [], tu = [], vit = false;

				const n = bo.length;

				for (let i = (n == 3) ? 0 : 1; i < n; i++)
				{
					if (vit)
					{
						dha = [];
						tu = [];
						vit = false;
					}

					const wxe = bo.lse[i];
					const vq = wxe.twd;

					if (zn.kw(dha) == vq) {
						i++;
					}
					else if (dha.includes(vq) || zn.iue(dha).length < 2)
					{
						dha.push(vq);
						tu.push(wxe);

						if (i + 1 < n)
							continue;
					}

					if (tu.length > 2)
					{
						let lmy = !tu.some(wxe => wxe.ftc && !dha.includes(wxe.ftc));

						if (lmy)
						{
							tu.forEach(wxe =>
								wxe.ftc = dha.find(twd => twd != wxe.twd)
							);

							i++;
						}
					}

					if (i + 1 < n)
					{
						i -= 2;
						vit = true;
					}
				}
			}

			for (let axe, i = 1; i < bo.length; i++)
			{
				const wxe = bo.lse[i];

				if (!wxe.ftc)
				{
					if (axe && axe.ftc == wxe.twd)
					{
						wxe.ftc = axe.twd;

						bo.wbn(axe, wxe);
					}
				}
				else {
					let oef;

					const apu = wxe.ftc;

					for (let k = i - 1; k >= 0; k--)
					{
						const axe = bo.lse[k];

						if (k == 0)
						{
							if (axe.twd == apu)
							{
								oef = '';
							}

							break;
						}

						if (axe.twd == apu)
						{
							bo.wbn(axe, wxe);

							if (axe.children.length == 1)
							{
								oef = '';
							}

							break;
						}
					}

					if (oef == null)
					{
						const du = new mxd(apu.edk, apu.tq);

						oef = wxe.hyi(du) + ' ';
					}

					wxe.tju = wxe.tju.replace(
						this.snv(apu), oef
					);
				}

				axe = wxe;
			}

			for (let i = 1, n = bo.length; i < n; i++)
			{
				const wxe = bo.lse[i];

				if (wxe.hv || wxe.children.length)
				{
					zn.wxj(i, bo.lse);
					i--;
					n--;
				}
			}

			for (let gzh = false, i = 1; i < bo.length; i++)
			{
				let wxe = bo.lse[i];

				gzh = (gzh || !wxe.jzt);

				if (wxe.ris)
				{
					continue;
				}

				if (!gzh)
				{
					const kp = wxe.tju;

					if (bo.length > 2 || ['+','@'].includes(kp[0]) || kp.length < 10)
					{
						wxe.zv();
					}
				}

				wxe.ftc && !bo.apg(wxe.ftc.tq) && wxe.zv();

				this.fki(wxe.arf, bo.tq) && wxe.zv();
			}
		}

		el = el.map(bo =>
		{
			if (bo.hidden)
			{
				return [];
			}

			const lse = [];

			for (let i = 0; i < bo.length; i++)
			{
				const ln = bo.lse[i];

				ln.kq = bqu.rgu(ln.tju);

				ln.edk = ln.twd.edk;

				if (ln.kq.length < 2)
				{
					if (i == 0)
						return [];

					ln.zv();
				}

				lse.push(
					new qtv(ln)
				);
			}

			return lse;
		});

		return el.filter(bo => bo.length > 0);
	},

	bql(tz)
	{
		return tz.length > 500 || zn.glg(aj[34], tz) > 3;
	},

	yp(arf)
	{
		return this.gvs == arf;
	},

	fki(arf, lrw)
	{
		if (this.yp(arf))
		{
			return false;
		}

		for (let pcn of this.ilf.ngw(arf))
		{
			if (pcn == lrw)
			{
				return false;
			}

			if (!this.ilf.zoc(pcn, arf))
			{
				return true;
			}
		}

		return false;
	},

	snv(twd)
	{
		const tq = twd.tq;

		if (tq in this.hvz)
		{
			return this.hvz[tq];
		}

		return this.hvz[tq] = zn.rzf('^[+@]?%s[-\\s,.:;?!]*', twd.pxs, 'i');
	}
};

const bqu = {
	rgu(ch)
	{
		let tz = new udx(ch);

		tz.neq && tz.toLowerCase();

		if (tz.dti('.'))
		{
			tz.charAt(-1) == '.' && tz.charAt(-2) != '.' && tz.ivg(1);

			tz.replace(aj[35], (m) => m.replace(aj[36], ''));
		}

		if (tz.dti('\n'))
		{
			tz.replace(aj[37], function(m, i)
			{
				let x = tz.charAt(i - 1);

				return zn.ebd(x) ? '. ' : ' ';
			});
		}

		if (tz.jco('*_'))
		{
			tz.replace(aj[38], '$2');
		}

		if (tz.jco('(,!?.)'))
		{
			tz.replace(aj[39], '?!');

			tz.replace(aj[40], '$1');

			tz.replace(aj[41], '$1 $2');

			tz.dti('!') && tz.replace(aj[42], '$1');
		}

		if (tz.jco('$£€'))
		{
			tz.replace(aj[43], (_, ykg, ort) =>
			{
				aj[44].test(ykg) && (ykg = Math.round(ykg));

				return ort + ykg;
			});
		}

		tz.dti(':') && tz.replace(aj[45], ': ');

		tz.dti('&') && tz.replace(aj[46], ' and ');

		tz.dti('"') && tz.replace(aj[47], '" - $1');

		return khd.paf(tz.urw);
	},

	jhw(ch)
	{
		return ch.length < 28 && this.kvt(ch) || this.jng();
	},

	kvt(tz)
	{
		let ug;

		if (!aj[48].test(tz))
		{
			if (zn.gas(tz))
			{
				tz = zn.uzw(tz);
			}

			ug = tz.split(' ');

			if (ug.length == 1)
			{
				return zn.qo(ug[0], 'PRE_CASE');
			}
		}
		else {
			ug = zn.pw(aj[49], tz);
		}

		ug = ug.map(ql =>
		{
			switch (true)
			{
				case ql.length < 2 || zn.mpv(ql):
					return '';

				default:
					return zn.qo(ql);
			}
		});

		ug = ug.filter(
			(ql, i) => ql != '' && i == ug.indexOf(ql)
		);

		return ug.join(' ');
	},

	jng()
	{
		return 'user' + zn.ct(4);
	}
};

const uoz = {
	yqf(tz)
	{
		tz = tz.toLowerCase();

		tz = tz.replace(aj[50], ' ');

		return zn.rdo(tz);
	},

	lba(tz)
	{
		return tz.replace(aj[51], '$1');
	}
};

const khd = {
	ikr: {
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

	paf(tz)
	{
		return tz.replace(aj[52], m => this.get(m));
	},

	get(qv)
	{
		qv = qv.toLowerCase();

		(qv.length == 2) || (qv = qv.slice(0, 2));

		return this.ikr[qv] || qv;
	}
};

class isg
{
	constructor()
	{
		this.map = {};
	}

	ulv(ql)
	{
		this.map[ql] = ++this.map[ql] || 0;
	}

	get(ql)
	{
		return this.map[ql] || 0;
	}
}

class jye
{
	constructor()
	{
		this.map = {};
	}

	cym(ehu)
	{
		for (let diu in this.map)
		{
			if (this.tmq(ehu, diu))
			{
				return this.map[diu];
			}
		}

		return this.ufy(ehu);
	}

	ufy(op)
	{
		return this.map[op] = zn.xj('TS%s', op);
	}

	tmq(ehu, diu)
	{
		return Math.abs(diu - ehu) < 5;
	}
}

class vwn
{
	constructor()
	{
		this.pjr = {};

		this.el = {};
	}

	ngw(arf)
	{
		return this.pjr[arf];
	}

	zoc(pcn, arf)
	{
		return this.el[pcn] == arf;
	}

	ihd(pcn, arf)
	{
		this.el[pcn] = arf;
	}

	siv(arf, pcn)
	{
		if (!this.pjr[arf])
		{
			this.pjr[arf] = new ou;
		}

		this.pjr[arf].push(pcn);
	}
}

let vq;

const qa = new cos;
const ia = new ua;
const gey = new sex;
const pz = new ks;
const nm = new gv;
const ir = new rp;

const aj = [
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