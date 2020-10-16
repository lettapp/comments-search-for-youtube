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

	return od != 3048;
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
class oy
{
	bw(hv)
	{
		this.hv = hv;
	}

	zy(vj, zm)
	{
		if (vj in this && this != zm)
		{
			return this[vj](zm);
		}

		if (this.hw)
		{
			return this.hw.zy(vj, zm);
		}
	}

	get hw()
	{
		return this.hv || this.pv;
	}
}

const mc = function(lg, xr)
{
	return new xr(lg);
}

class li extends oy
{
	constructor(xb)
	{
		super();

		this.kt = xb;

		this.xz('style', 'hidden', 'addEventListener', 'setAttribute', 'querySelector',
			'querySelectorAll', 'children', 'appendChild', 'innerHTML', 'textContent');
	}

	zd(np)
	{
		if (typeof np == 'string')
		{
			np = [np];
		}

		this.kt.classList.add(...np);
	}

	zx(np)
	{
		this.kt.classList.remove(np);
	}

	tf(np)
	{
		this.kt.classList.contains(np) ? this.zx(np)
												: this.zd(np);
	}

	pr()
	{
		this.kt.remove();
	}

	xz(...mn)
	{
		for (let x of mn) {
			if (x in this)
			{
				throw Error('Property already defined');
			}

			if (this.kt[x] instanceof Function)
			{
				this[x] = this.kt[x].bind(this.kt);
			}
			else {
				Object.defineProperty(this, x,
				{
					get() {
						return this.kt[x];
					},
					set(v) {
						this.kt[x] = v;
					}
				});
			}
		}
	}
}

class xo extends li
{
	constructor(ra, gx)
	{
		super(
			typeof ra == 'string' ? di.dy(ra) : ra
		);

		this.pv = null;
		this.me = [];
		this.fw = {};
		this.sn = {};

		if (gx)
		{
			if (gx.ok)
			{
				this.zd(gx.ok);
			}

			if (gx.kp)
			{
				this.textContent = gx.kp;
			}

			if (gx.sl)
			{
				this.jy(...gx.sl);
			}

			if (gx.hy)
			{
				for (let tc in gx.hy)
				{
					this.setAttribute(tc, gx.hy[tc]);
				}
			}

			if (gx.import)
			{
				for (let aq of gx.import)
				{
					this.xz(aq);
				}
			}
		}
	}

	vd(kg, bm)
	{
		if (kg.pv)
		{
			if (kg.pv == this)
				return;

			kg.zl();
		}

		kg.pv = this;
		this.me.push(kg);

		switch (typeof bm)
		{
			case 'string':
				return this.qs(bm).appendChild(kg.kt);

			case 'number':
				return this.kt.prepend(kg.kt);

			default:
				return this.appendChild(kg.kt);
		}
	}

	qs(tq)
	{
		return this.querySelector('#' + tq);
	}

	jy(sl, vj, qr)
	{
		if (typeof qr == 'string')
		{
			qr = [qr];
		}

		for (let ms of qr)
		{
			if (!this.sn[ms])
			{
				this.sn[ms] = new Map;

				this.addEventListener(
					zn.nc(ms, xo.eg), e => this.yr(e)
				);
			}

			this.sn[ms].set(sl, vj)
		}
	}

	kz()
	{
		this.sn = {};
	}

	rv(sl, vj, qr)
	{
		this.kz();

		this.jy(sl, vj, qr);
	}

	fz(ms)
	{
		const sn = this.sn[ms];

		if (sn)
		{
			for (let [sl, vj] of sn)
			{
				sl.zy(vj, this);
			}
		}
	}

	zv()
	{
		this.hidden = true;
	}

	xa()
	{
		this.hidden = false;
	}

	va()
	{
		let i = this.me.length;

		while (i--)
		{
			this.me[i].zl();
		}
	}

	zl()
	{
		this.pv.py(this);
	}

	om(kg)
	{
		this.appendChild(kg.kt);
	}

	py(kg)
	{
		kg.pv = null;

		this.me.splice(
			this.me.indexOf(kg), 1
		);

		kg.kt.remove();
	}

	yr(e)
	{
		e.stopPropagation();

		this[zn.nc(e.type, xo.eg)](e);
	}

	rg()
	{
		this.fz('rg');
	}
}

xo.eg = {
	rg:'click',
	tr:'paste',
	gw:'keyup',
	iy:'keyup',
	hz:'focus',
};

class bt extends xo
{
	constructor(gx)
	{
		super('bt', gx);
	}
}

class uo extends xo
{
	constructor()
	{
		super('uo');

		this.xz('scrollTop', 'scrollHeight', 'offsetHeight');

		this.addEventListener('wheel', e =>
		{
			ml.at(e);

			this.scrollTop += e.deltaY;
		});
	}
}


class st extends uo
{
	constructor(ry)
	{
		super();

		this.ry = ry;

		this.ca;

		this.addEventListener('scroll',
			_ => this.lu()
		);
	}

	my()
	{
	}

	fx()
	{
		this.va();
		this.vg();
		this.wn();

		this.wt();
	}

	lu()
	{
		if (this.dq && this.qz)
		{
			this.wn();
		}
	}

	vg()
	{
		this.ca = this.my(this.ry.zr);
	}

	wn()
	{
		for (let kg of this.ca)
		{
			this.vd(kg);
		}

		this.vg();
	}

	wt()
	{
		this.zx('owtyi');

		if (this.ey)
		{
			this.zd('owtyi');
		}
	}

	get ey()
	{
		return this.scrollHeight > this.offsetHeight;
	}

	get dq()
	{
		return this.ca.length;
	}

	get qz()
	{
		return this.scrollTop > .3 * (this.scrollHeight - this.offsetHeight);
	}
}

class mu extends xo
{
	constructor(ip, bl)
	{
		super('mu');

		this.xz('getBoundingClientRect', 'offsetHeight', 'offsetLeft');

		this.ci = ip;

		this.oz(ip, bl);

		this.ho();
		this.jt();
	}

	fi(im)
	{
		for (let k in im)
		{
			this.style[k] = im[k] + (k == 'top' ? 'vh' : 'vw')
		}
	}

	oz(ip, bl)
	{
		const x = window.innerHeight - bl;
		const y = window.innerWidth - ip - 100;

		this.style.top = x + 'px';
		this.style.left = y + 'px';
		this.style.minWidth = ip + 'px';
	}

	ho()
	{
		let bn = this.querySelectorAll('[resize]');

		for (let ez of bn)
		{
			ez.addEventListener('pointerdown',
				e => this.wz(e, 'vo')
			);
		}
	}

	jt()
	{
		this.querySelector('[movable]').addEventListener('pointerdown',
			e => this.wz(e, 'tk')
		);
	}

	wz(e, vj)
	{
		if (e.which == 1)
			this[vj](e);
	}

	jq()
	{
		return this.getBoundingClientRect();
	}

	vo(e)
	{
		const mh = e.target.getAttribute('resize'),
				ak = mh.includes('w'),
				wj = mh.includes('n'),
				wy = mh.includes('e');

		const yb = this.jq(),
				ci = this.ci,
				ji = 56,
				mz = ge.pf,
				sq = window.innerHeight - ji,
				jb = e.clientX,
				kd = e.clientY,
				sv = yb.x,
				yc = yb.y,
				qp = yb.width;

		let io = 0,
				ea = 0,
				dk = sv,
				ja = yc,
				rn = qp;

		let vy = (e) =>
		{
			io = e.clientX - jb;
			ea = e.clientY - kd;

			if (wj)
			{
				ja = yc + ea;

				(ja < 0) && (ja = 0);

				(ja > sq) && (ja = sq);

				this.style.top = ja + 'px';
			}

			if (wy)
			{
				rn = qp + io;

				(e.clientX > mz) && (rn = mz - sv);

				(rn < ci) && (rn = ci);

				this.style.width = rn + 'px';
			}

			if (ak)
			{
				dk = sv + io;
				rn = qp - io;

				if (dk < 0)
				{
					dk = 0;
					rn = qp + sv;
				}

				if (rn < ci)
				{
					dk = sv + (qp - ci);
					rn = ci;
				}

				this.style.width = rn + 'px';
				this.style.left = dk + 'px';
			}
		};

		let xm = () => {
			(io != 0 || ea != 0) && this.bq();
		};

		this.hd(vy, xm);
	}

	tk(e)
	{
		let sv = this.offsetLeft,
			jb = e.clientX,
			io = 0;

		let vy = (e) => {
			io = e.clientX - jb;
			this.style.left = sv + io + 'px';
		};

		let xm = () => {
			(io != 0) && this.bq();
		};

		this.hd(vy, xm);
	}

	hd(vy, xm)
	{
		ml.xg(true);

		document.onpointermove = (e) => vy(e);

		document.onpointerup = (e) => {
			ml.xg(false);
			xm();
			document.onpointerup = document.onpointermove = null;
		};
	}

	bq()
	{
		if (this.hidden) return;

		let yb = this.jq();

		let im = {
			width: zn.ux(yb.width, window.innerWidth),
			left: zn.ux(yb.x, window.innerWidth),
			top: zn.ux(yb.y, window.innerHeight),
		};

		this.fi(im);

		if ('yd' in this.fw)
		{
			this.fw.yd(im);
		}
	}
}

class yn extends mu
{
	constructor(ip, bl)
	{
		super(ip, bl);

		this.addEventListener('wheel', ml.at);
	}
}

class eu extends xo
{
	constructor(gx)
	{
		super('eu', gx);

		this.xz('src');

		if (gx.xi)
		{
			this.addEventListener('error', e => this.src = gx.xi, {once:true});
		}

		this.src = gx.ev;
	}
}

class ay extends xo
{
	constructor(ra, gx)
	{
		super(ra, gx);

		this.pq = [];
		this.la = false;
	}

	gw(e)
	{
		if (e.key == 'Enter')
		{
			this.fz('iy');
		}

		this.fz('gw');
	}

	tr(e)
	{
		setTimeout(
			_ => this.fz('tr'),
		10);
	}

	hz(e)
	{
		this.fz('hz');
	}

	get or()
	{
		if (!this.la)
		{
			const xv = Date.now();

			const qw = this.pq.push(xv);

			if (qw > 3)
			{
				if (xv - this.pq[0] < 2000)
				{
					this.la = true;

					setTimeout(
						_ => this.la = false,
					20 * 1000);
				}
				else {
					this.pq.length = 0;
				}
			}
		}

		return this.la;
	}
}

class fa extends ay
{
	constructor(gx)
	{
		super('fa', gx);

		this.xz('placeholder', 'focus', 'select');

		if (gx && gx.placeholder)
		{
			this.placeholder = gx.placeholder;
		}
	}

	get value()
	{
		return this.kt.value.trim();
	}

	set value(s)
	{
		this.kt.value = String(s).trim();
	}
}

class zf extends ay
{
	constructor(gx)
	{
		super('zf', gx);

		this.oz();
	}

	oz()
	{
		this.ch = new fa();

		this.vd(this.ch, 'sg');

		this.iv = new yl();

		this.vd(this.iv, 'sg');

		this.xw = this.qs('xw');
	}

	focus()
	{
		this.ch.focus();
	}

	get value()
	{
		return this.ch.value;
	}

	bv(kx, kp)
	{
		this.iv.co(kx);

		this.xw.textContent = kp || '';
	}
}

class kv extends xo
{
	constructor(ra, gx)
	{
		super(ra, gx);

		this.co(gx.kx || 'initial');
	}

	get dt()
	{
		return this.kx == 'disabled';
	}

	get rd()
	{
		return this.kx == 'selected';
	}

	co(kx)
	{
		this.kx = kx;

		this.setAttribute('state', kx);
	}

	yr(e)
	{
		if (!this.dt)
		{
			super.yr(e);
		}
	}
}

class qk extends kv
{
	constructor(gx)
	{
		super('qk', gx);

		this.value = gx.value;

		if (gx.to)
		{
			this.na(gx.to);
		}

		if (gx.hp)
		{
			this.wd(gx.hp);
		}
	}

	na(kp)
	{
		this.textContent = kp;
	}

	wd(ra)
	{
		const hp = di.dy(ra);

		this.appendChild(hp);
	}
}

class eq extends qk
{
	constructor(gx)
	{
		super(gx);

		this.value = gx.value;
	}

	rg()
	{
		if (this.rd)
		{
			this.co('initial');
		}
		else {
			this.co('selected');
		}

		super.rg();
	}
}

class wr extends xo
{
	constructor(gx)
	{
		super('wr', gx);

		if (gx.du)
		{
			this.setAttribute('href', gx.du);
		}
	}
}

class yl extends xo
{
	constructor(gx)
	{
		super('yl', gx);
	}

	co(kx)
	{
		this.setAttribute('state', kx);
	}
}

class tx extends oy
{
	constructor(kg, az)
	{
		super();

		this.kg;

		this.gm;

		this.children = [];

		this.rj(kg, az);
	}

	rj(kg, az)
	{
		kg.bw(this);

		if (az)
		{
			kg.fw = new mc(this, az);
		}

		this.kg = kg;

		this.qu();
	}

	bd(ei, tl)
	{
		this.gm = new ei;

		if (tl)
		{
			this.gm.fw = new mc(this, tl);
		}

		this.ow();
	}

	ow()
	{
	}

	qu()
	{
	}

	no(zm)
	{
		if (this.sc)
		{
			this.sc.no(zm);
		}

	}

	sh(zm)
	{
		if (this.sc)
		{
			this.sc.sh(zm);
		}

	}

	qf(zm)
	{
		if (this.sc)
		{
			this.sc.qf(zm);
		}

	}

	cg(zm)
	{
		if (this.sc)
		{
			this.sc.cg(zm);
		}

	}

	rl(tq)
	{
	}

	xa(et, zm)
	{
		this.kg.appendChild(et.kg.kt);
	}

	mi(et)
	{
		this.zg.ds(et);
	}

	sy()
	{
		this.zg.pj();
	}

	ds(pg, ka)
	{
		pg.bw(this);

		pg.no();

		this.children.push(pg);

		this.kg.vd(pg.kg, ka);

		pg.sh();
	}

	pj()
	{
		this.children.pop().ib();
	}

	get zg()
	{
		let nx = this;

		while (nx.hv)
		{
			nx = nx.hv;
		}

		return nx;
	}

	get sr()
	{
		return this.children.length;
	}

	get sc()
	{
		return zn.kw(this.children);
	}

	ib()
	{
		this.kg.pr();

		for (let pg of this.children)
		{
			pg.ib();
		}
	}
}

class cd extends tx
{
	constructor()
	{
		const kg = new xo('jv');

		super(kg);
	}

	qu()
	{
		this.ai = new qk({
			ok:['sqlhl', 'xkytk'],
			hp:'bp',
			kx:'hidden',
			sl:[this, 'mo', 'rg']
		});

		this.kg.vd(this.ai);
	}

	mo()
	{
		this.pj();

		this.ac();
	}

	pn()
	{
		this.ai.co('hidden');
	}

	ds(pg)
	{
		super.ds(pg, 'dr');

		this.ac();
	}

	ac()
	{
		if (this.sr > 1)
		{
			this.ai.co('initial');
		}
		else {
			this.ai.co('hidden');
		}
	}




}

zn.bx = function(md, lh)
{
	md.currentTime = lh;

	if (md.paused)
	{
		md.play();
	}
}

function openWindow(ha)
{
	let q = {
		width:500,
		height:screen.height,
		left:(screen.width - 500) / 2
	};

	q = zn.yw(q, ',');

	return window.open(ha, '', q);
}

class he
{
	constructor(q)
	{
		Object.assign(this, {
			xe: q,
			nz: yk.nz,
			hm: yk.md.duration,
			ad:yk.md.currentTime
		});
	}
}

class yj
{
	constructor()
	{
		this.rc = navigator.platform.includes('Mac');
	}

	get pf()
	{
		return !this.rc ? document.body.clientWidth : window.innerWidth;
	}
}

const yk = {
	get gb()
	{
		return ['www', 'music'].includes(this.jf);
	},

	get ew()
	{
		return location.pathname == '/watch';
	},

	get md()
	{
		if (!this.ef)
		{
			this.ef = ml.querySelector('video');
		}

		return this.ef || document.createElement('video');
	},

	get nz()
	{
		return zn.ny(aj[3], location.href);
	},

	get jf()
	{
		return location.host.split('.')[0];
	}
}

class ub
{
	constructor(qm)
	{
		this.xp = document.createElement('div');

		this.bf = {};

		for (let gz of this.iz(qm).children)
		{
			const dm = gz.getAttribute('protoid');

			if (dm) {
				gz.removeAttribute('protoid');
			}
			else {
				throw 'ParseError: Missing protoId for child';
			}

			this.bf[dm] = gz.outerHTML;
		}
	}

	dy(ra, df)
	{
		let cp = this.bf[ra];

		if (df)
		{
			cp = cp.replace(aj[4], (_, qv) => df[qv]);
		}

		return this.iz(cp);
	}

	rk(kp)
	{
		const s = document.createElement('span');

		s.textContent = kp;

		return s;
	}

	iz(cp)
	{
		this.xp.innerHTML = cp;

		return this.xp.children[0];
	}
}

class qg extends li
{
	constructor()
	{
		super(document.documentElement);

		if ('fullscreenElement' in document)
		{
			this.hq = 'fullscreenchange';
			this.ob = 'fullscreenElement';
		}
		else {
			this.hq = 'webkitfullscreenchange';
			this.ob = 'webkitFullscreenElement';
		}

		this.sx();

		document.addEventListener(
			this.hq, _ => this.sx()
		);
	}

	get qx()
	{
		return !!(document[this.ob]);
	}

	lo()
	{
		this.zd('korlo');
	}

	xg(hi)
	{
		hi ? this.zd('zwtmg')
			: this.zx('zwtmg');
	}

	at(e)
	{
		if (e.ctrlKey)
			return;

		e.preventDefault();

		e.stopPropagation();
	}

	sx()
	{
		this.setAttribute('cs-fullscreen', this.qx);
	}
}

class ks
{
	constructor()
	{
		this.ui = {
			ao: '/html/svg/nerdy.svg',
			mg: '/html/svg/hybrid.svg',
			wc: '/html/svg/coin.webp',
		}
	}

	ym()
	{
		return ia.get('1').then(qe => {
			vq = new nr(qe);
		});
	}

	hj(tq)
	{
		return chrome.runtime.getURL(this.ui[tq]);
	}

	yq()
	{
		ir.cb(
			zn.vb()
		);
	}
}

class uz extends tx
{
	constructor(kx)
	{
		const kg = new yn(460, 480);

		super(kg, ns);

		this.bd(wp);

		this.nq = false;

		uw.rw(this, [
			'hb', 'gt', 'cw', 'nv'
		]);

		switch (true)
		{
			case (kx.te):
				return this.ds(new oq);

			case (kx.pm):
				return this.ds(new ih);

			default:
				return this.eh();
		}
	}

	qu()
	{
		this.kg.vd(new qk({
			ok:['sqlhl', 'bxcje'],
			hp:'dx',
			sl:[this, 'ko', 'rg']
		}));

		document.body.appendChild(this.kg.kt);
	}

	ow()
	{
		this.gm.jq.then(
			im => im && this.kg.fi(im)
		);
	}

	rl(tq)
	{
		switch (tq)
		{
			case 'hb':
				return this.ts('tw');

			case 'gt':
				return this.ts('sa');

			case 'cw':
				return this.ko();

			case 'nv':
				return this.hr();
		}
	}

	eh()
	{
		this.ds(new qt);
	}

	hr()
	{
		this.pj();

		this.eh();
	}

	ts(zm)
	{
		this.sc.no(zm);

		this.kg.xa();

		this.sc.sh(zm);

		this.nq = true;
	}

	ko(zm)
	{
		this.sc.qf(zm);

		this.kg.zv();
	}

	mf()
	{
		this.ds(new su);
	}
}

class wp
{
	get jq()
	{
		return ia.get('appPosition');
	}

	wq(ok)
	{
		(ok.width > 100) && (ok.width = 100);

		(ok.left < 0) && (ok.left = 0);

		if (ok.left + ok.width > 100)
		{
			ok.left = 100 - ok.width;
		}

		ia.set('appPosition', ok);
	}
}

const ns = function(lg)
{
	return {
		yd(im)
		{
			lg.gm.wq(im);
		}
	}
}

class dc
{
	static ot(qv)
	{
		return qv == 'Enter';
	}

	static uf(qv)
	{
		return ['Control','Meta'].includes(qv);
	}
}

class ul
{
	constructor()
	{
		window.addEventListener('keydown', e => this.ij(e), true);
	}

	ij(e)
	{
		this.jl(e);

		const qi = this.qi;

		if (this.er)
		{
			if (qi == 'KeyS')
			{
				e.preventDefault();

				return uw.un('hb');
			}

			if (qi == 'KeyE' && yk.ew)
			{
				e.preventDefault();

				return uw.un('gt');
			}

			if (qi == 'KeyX' && ml.qx)
			{
				return uw.un('cw');
			}
		}

		if (qi == 'Escape')
		{
			return uw.un('cw');
		}
	}

	jl(e)
	{
		this.qi = e.code;

		this.er = !e.shiftKey && (e.ctrlKey + e.altKey + e.metaKey == 1);
	}

	get nf()
	{
		return this.qi == 'KeyV';
	}
}

class dz
{
	constructor()
	{
		this.jr = {};
	}

	un(iq)
	{
		let le = this.gk(iq);

		for (let wv of le)
		{
			wv.rl(iq);
		}
	}

	rw(wv, uw)
	{
		if (typeof uw == 'string')
		{
			uw = [uw];
		}

		for (let tq of uw)
		{
			this.gk(tq).push(wv);
		}
	}

	gk(iq)
	{
		return this.jr[iq] || (this.jr[iq] = new ou);
	}
}

class hx extends tx
{
	constructor()
	{
		const kg = new xo('es');

		super(kg);
	}

	wl()
	{
		ir.mr();

		this.sy();
	}
}

class oq extends tx
{
	constructor()
	{
		super(
			new xo('fu')
		);
	}

	qu()
	{
		this.kg.vd(
			new eu({
				ev:pz.hj('wc')
			}), 'fq'
		);

		const ep = new qk({
			ok:'bkrah',
			to:'Update Now',
			sl:[this, 'mv', 'rg']
		});

		this.kg.vd(ep, 'qy');
	}

	mv()
	{
		window.open('https://cs.lett.app/update');
	}
}

class qd extends tx
{
	constructor()
	{
		const kg = new xo('xc');

		super(kg);
	}

	qu()
	{
		this.kg.vd(new qk({
			ok:['xkytk', 'sqlhl'],
			hp:'bp',
			sl:[this, 'sy', 'rg']
		}));
	}
}

class su extends tx
{
	constructor()
	{
		const kg = new xo('dl');

		super(kg);
	}
}

class ih extends tx
{
	constructor()
	{
		const kg = new xo('xo');

		super(kg);

		uw.rw(this, [
			'ej', 'wx'
		]);
	}

	qu()
	{
		switch (true)
		{
			case (!vq.ah):
				return this.ds(new ft);

			case (!vq.ys):
				return this.ds(new ig);
		}
	}

	async rl(tq)
	{
		await pz.ym();

		switch (tq)
		{
			case 'ej':
				return this.vc();

			case 'wx':
				return this.fr();
		}
	}

	vc()
	{
		if (!vq.ys)
			return this.ds(new ig);

		this.ti();
	}

	fr()
	{
		!mp.nq && this.ti();
	}

	vk()
	{
		this.ti();
	}

	ti()
	{
		uw.un('nv');
	}
}

class ft extends tx
{
	constructor()
	{
		const kg = new xo('wo');

		super(kg);
	}

	qu()
	{
		this.ty = new zf({
			sl:[this, 'ie', ['tr', 'iy']]
		});

		this.kg.vd(this.ty, 'iw');

		this.kg.vd(
			new eu({
				ev:pz.hj('ao')
			}), 'fq'
		);

		this.kg.vd(
			new wr({kp:'Need help?', du:'https://cs.lett.app/api-key'}), 'tv'
		);
	}

	sh()
	{
		this.ty.focus();
	}

	ie(zm)
	{
		zm.bv('loading');

		if (!this.mx)
		{
			this.mx = true;

			ir.ie(zm.value).then(gi =>
			{
				!gi && zm.bv('error', 'try again');

				this.mx = false;
			});
		}
	}
}

class ig extends cd
{
	constructor()
	{
		super();

		this.ds(new xh);
	}

	kf()
	{
		this.ds(new oi);
	}
}

class xh extends tx
{
	constructor()
	{
		const kg = new xo('gj');

		super(kg);
	}

	qu()
	{
		const tn = [];

		tn.push(
			new qk({
				ok:'bkrah',
				to:'Remind me later',
				sl:[this, 'vk', 'rg']
			})
		);

		tn.push(
			new qk({
				ok:'bkrah',
				to:'Donate',
				sl:[this, 'kf', 'rg']
			})
		);

		vq.ab && tn[0].rv(this, 'uc', 'rg');

		for (let uk of tn)
		{
			this.kg.vd(uk, 'qy');
		}

		this.kg.vd(
			new eu({
				ev:pz.hj('mg')
			}), 'fq'
		);
	}

	uc(zm)
	{
		zm.zd('cmrob');

		setTimeout(
			_ => zm.zx('cmrob'),
		500);
	}
}

class oi extends tx
{
	constructor()
	{
		const kg = new xo('gd');

		super(kg);

		this.vr;

		this.ki;
		this.fn;

		uw.rw(this, ['wx']);
	}

	rl(tq)
	{
		switch (tq)
		{
			case 'wx':
				return this.fr();
		}
	}

	qu()
	{
		this.iv = new yl({
			ok:'vqutv'
		});

		this.kg.vd(this.iv);

		this.kg.vd(
			new eu({
				ev:pz.hj('wc')
			}), 'fq'
		);

		this.zh = new gp();

		const rt = new bt({ok:'wsonx'});

		for (let pu of [5,10,15,20])
		{
			const is = new qk({
				ok:'lujpj',
				kp:pu,
				value:pu,
				sl:[this, 'yh', 'rg']
			});

			rt.vd(is);
		}

		this.zh.jx(rt);

		this.kg.vd(this.zh, 'zh');

		this.zu = new gp();

		this.zu.lb(
			new bt({kp:'Please select amount in USD'})
		);

		this.kg.vd(this.zu, 'zu');

		this.mb = new qk({
			ok:['bkrah', 'fyrtj'],
			to:'Donate with PayPal',
			sl:[this, 'wf', 'rg']
		});

		this.kg.vd(this.mb, 'qy');
	}

	qf()
	{
		this.pd();
	}

	yh(zm)
	{
		const cr = this.vr;
		const vs = zm;

		if (cr != vs)
		{
			vs.co('selected');

			if (cr)
			{
				cr.co('initial');
			}

			this.vr = vs;
		}
	}

	wf()
	{
		if (this.be || !this.vr)
			return;

		this.be = true;

		this.iv.co('loading');

		ir.gh(this.vr.value).then(ha =>
		{
			if (ha) {
				this.gn(ha);

				this.iv.co('waiting');
			}
			else {
				this.iv.co('error');
			}

			this.be = false;
		});
	}

	gn(ha)
	{
		this.pd();

		this.ki = openWindow(ha);

		this.fn = setInterval(
			_ => this.ki.closed && this.pd(),
		500);
	}

	pd()
	{
		if (this.ki)
		{
			this.ki.close();

			this.iv.co('initial');

			clearInterval(this.fn);
		}
	}

	fr()
	{
		this.pd();

		setTimeout(_ => {
			this.zy('pn', this);
			this.da();
		}, 900);
	}

	da()
	{
		this.zh.jx(
			new bt({ok:'ixgcs',kp:'Thank You!'}), true
		);

		this.zu.lb(
			new bt({kp:'Your Payment was Received'}), true
		);

		setTimeout(_ => {
			this.mb.zd('oewfm');
			this.mb.textContent = 'Done';
			this.mb.rv(this, 'ti', 'rg');
		}, 200);
	}

	ti()
	{
		this.zy('ti', this);
	}

	ib()
	{
		super.ib();

		this.pd();
	}
}

class gp extends bt
{
	constructor()
	{
		super();

		this.oz();
	}

	oz()
	{
		this.tu = new bt({
			ok:'ozaba'
		});

		this.vd(this.tu);
	}

	jx(cv, os)
	{
		this.vp(cv, 0, os);
	}

	lb(cv, os)
	{
		this.vp(cv, null, os);
	}

	vp(cv, cu, os)
	{
		this.tu.vd(cv, cu);

		if (os)
		{
			this.os(cu != null);
		}
	}

	os(th)
	{
		let gc, zt = this.tu;

		if (th)
		{
			zt.style.transform = 'translateY(-100%)';

			gc = 'translateY(0)';
		}
		else {
			gc = 'translateY(-100%)';
		}

		setTimeout(_ => {
			zt.style.transition = 'transform 300ms';

			setTimeout(
				_ => zt.style.transform = gc,
			10);

			setTimeout(_ => {
				zt.style.transition = null;
			}, 300);
		}, 10);
	}
}

class zo extends tx
{
	constructor(lp)
	{
		const kg = new uo;

		super(kg);

		this.dp(lp).then(
			bk => this.gx(bk)
		);
	}

	qu()
	{
		this.kg.zd('qgtco');
	}

	gx(bk)
	{
		this.kg.innerHTML = bk;
	}

	dp(lp)
	{
		const sb = zn.xj('/html/policies/%s.html', lp);

		return ir.dp(sb);
	}
}

class qt extends tx
{
	constructor()
	{
		const kg = new xo('za');

		super(kg);

		this.bd(fo, jc);

		uw.rw(this, 'gt');
	}

	qu()
	{
		this.lk = new fa({
			placeholder:'type keywords here..',
		});
		this.lk.jy(this, 'rs', ['hz']);
		this.lk.jy(this, 'kr', ['iy', 'tr']);

		this.gy = new qk({
			ok:'apcso',
			to:'0',
			kx:'disabled',
			sl:[this, 'zj', 'rg']
		});

		this.hc = new lw(this);

		this.nw = new ta();
		this.nw.fw = new nt(this);

		this.pb = new xo(this.kg.qs('ps'));
		this.pb.vd(this.lk);
		this.pb.vd(this.gy);

		this.de = new xo(this.kg.qs('tb'));
		this.de.vd(this.nw);
		this.de.vd(this.hc);
	}

	no()
	{
		if (this.rm)
		{
			this.zp();

			if (this.gm.an)
			{
				this.ox('');
				this.nw.sp();
			}
		}
	}

	sh(zm)
	{
		this.lk.focus();

		if (zm == 'tw')
		{
			this.lk.select();
		}
	}

	qf()
	{
		if (this.hc.gl)
		{
			this.hc.cx.sy();
		}
	}

	rl(tq)
	{
		if (tq == 'gt')
			return this.gf();
	}

	px(kg)
	{
		this.de.om(kg);
	}

	rs()
	{
		if (this.rm)
		{
			this.zp();
		}
	}

	kr()
	{
		let q = this.lj();

		switch (true)
		{
			case (!q):
				return;

			case (!yk.ew):
				return this.nw.hf('ke');

			case (this.gm.fk):
			{
				if (!this.gm.rb)
					return;

				if (q == this.gm.zs)
				{
					return this.nw.hf('cm');
				}
			}
		}

		this.uv(q);
	}

	fm()
	{
		if (!yk.ew)
			return this.nw.hf('ke');

		this.tp(':all');
	}

	get zr()
	{
		return this.gm.zr;
	}

	zj()
	{
		this.mi(new qd);
	}

	uv(q)
	{
		this.gm.search(q);
		this.nw.hf('ax');
	}

	zp()
	{
		this.gm.vm();
	}

	gf()
	{
		let q = zn.dn(yk.md.currentTime);

		this.tp(q);
	}

	lj()
	{
		return this.lk.value;
	}

	ox(q)
	{
		this.lk.value = q;
	}

	tp(q)
	{
		this.ox(q);
		this.uv(q);
	}

	get rm()
	{
		if (yk.ew && yk.nz != this.ze)
		{
			return !!(this.ze = yk.nz);
		}

		return false;
	}
}

class fo
{
	constructor()
	{
		this.uy = uy.cq('yu', this.jk.bind(this));

		this.zs = '';
		this.lr = 0;
		this.ne = 0;
		this.ut = 500;
		this.rb = false;
		this.an = false;
		this.kc = [];
		this.nl = 25;
	}

	jk(re)
	{
		const qe = re.qe;

		switch (re.cj)
		{
			case 'yt':
				return this.rx(qe);

			case 'fh':
				return this.eb(qe);

			case 'jn':
				return this.ku(qe);
		}
	}

	get fk()
	{
		return this.rb || this.hn('ne') < 500;
	}

	get zr()
	{
		return this.kc.splice(0, this.nl);
	}

	vm()
	{
		this.uy.cz('fh', new he(''));
	}

	search(q)
	{
		this.yz(q);

		this.uy.cz('yt', new he(q));
	}

	ku(jn)
	{
		this.db();

		this.fw.ku(jn.tq);
	}

	rx(r)
	{
		this.db();

		let ld = this.ut - this.hn('lr');

		(r.og == 0) && (ld = 200);

		this.kc = r.el;
		this.an = (r.og == 0);

		setTimeout(
			_ => this.fw.rx(r.og, r.gu),
		ld);
	}

	eb(n)
	{
		this.fw.eb(n);
	}

	xy(em)
	{
		this[em] = Date.now();
	}

	hn(em)
	{
		return Date.now() - this[em];
	}

	yz(q)
	{
		this.zs = q;

		this.rb = true;

		this.xy('lr');
	}

	db()
	{
		this.rb = false;

		this.xy('ne');
	}
}

class ta extends xo
{
	constructor()
	{
		super('xo', {
			ok:'ufkgy'
		});

		this.ga = {
			ue: 'no results match your query',
			ax: 'Searching...',
			cm: 'Searching still...',
			ke: 'You are not watching any video',
			jw: 'Invalid request',
			kl: 'This video has zero comments',
			pk: 'Comments are disabled for this video.',
			ro: 'check your internet connection',
			ma: 'service down for maintenance',
			oh: 'request timeout, try again',
			xt: 'feature not supported for this video',
			dv: 'invalid response from server, try again',
			mj: 'something is not working properly, if this persists please let us know',

			accessNotConfigured: 'the provided API key is not valid',
			rateLimitExceeded: 'max allocated requests per day exceeded',
			processingFailure: 'comments server is not responding',
			videoNotFound: 'video not found',
			forbidden: 'your query could not be processed',
			commentsDisabled: 'Comments are disabled for this video.'
		};
	}

	hf(ba)
	{
		this.lx(ba);
	}

	ar(...rh)
	{
		this.wk(...rh);
	}

	bc(nj, rh)
	{
		this.wk(
			zn.xj(nj, rh)
		);
	}

	sp()
	{
		this.innerHTML = '';
	}

	lx(tq)
	{
		let lf = this.ga[tq];

		if (!lf)
		{
			lf = this.ga.mj;
		}

		this.wk(lf);
	}

	wk(...lt)
	{
		const pi = document.createDocumentFragment();

		for (let wu of lt)
		{
			let cs = null;

			if (typeof wu == 'string')
			{
				cs = document.createTextNode(wu);
			}
			else {
				cs = wu.kt;
			}

			pi.appendChild(cs);
		}

		this.sp();
		this.appendChild(pi);

		this.fw.id();
	}
}

class lw extends st
{
	constructor(ry)
	{
		super(ry);

		this.gl = false;
	}

	fg(zm)
	{
		this.cx.um(zm.nz, zm.bg);

		zm.uh.mt(this.cx);
	}

	vw(zm)
	{
		zn.bx(yk.md, zm.bg);
	}

	my(zc)
	{
		const nk = [];

		for (let bo of zc)
		{
			for (let i = 0; i < bo.length; i++)
			{
				const ln = bo[i];

				if (ln.xs && !ln.hidden)
				{
					bo[i-1].ur = true;

					for (let k = i - 1; k > 0; k--)
					{
						if (bo[k].tq == ln.xs)
						{
							bo[k].ur = true;
						}
					}
				}
			}

			let sz = new xo('jo');

			for (let ln of bo)
			{
				sz.vd(
					new ix(ln)
				);
			}

			nk.push(sz);
		}

		return nk;
	}

	get cx()
	{
		if (!this.gl)
		{
			this.ly = new ng;
			this.gl = true;
		}

		return this.ly;
	}
}

const jc = function(lg)
{
	return {
		eb(n)
		{
			if (0 < n && n < 1000)
			{
				lg.gy.co('normal')
			}
			else {
				lg.gy.co('disabled');
			}

			if (n <= 0) switch (n)
			{
				case 0:
					n = 'zero';
					break;

				case -1:
					n = 'off';
					break;

				case -2:
					n = 'global';
					break;
			}

			lg.gy.na(n);
		},

		rx(og, p)
		{
			this.eb(p);

			if (og > 0)
			{
				lg.hc.fx();

				return lg.px(lg.hc);
			}

			if (p <= 0) switch (p)
			{
				case 0:
					return lg.nw.hf('kl');

				case -1:
					return lg.nw.hf('pk');

				case -2:
					return lg.nw.hf('ue');
			}

			if (0 < p && p < 600)
			{
				if (p < 100)
				{
					const vj = new wr({
						kp:zn.xj('%s comments', p),
						sl:[lg, 'fm', 'rg']
					});

					return lg.nw.ar('Nothing found in ', vj);
				}

				return lg.nw.bc('Nothing found in %s comments', p);
			}

			lg.nw.hf('ue');
		},

		ku(ni)
		{
			lg.nw.hf(ni);
		}
	}
}

const nt = function(lg)
{
	return {
		id()
		{
			lg.px(lg.nw);
		}
	}
}

class ng extends xo
{
	constructor()
	{
		super('ng');

		this.td = this.children[0];

		this.td.onload = () => {
			try {
				const yi = this.td.contentDocument.body;

				this.md = yi.querySelector('video');

				yi.querySelector('.ytp-pause-overlay').hidden = true;
			}
			catch (e) {
			}
		}

		this.ze;
		this.ec;
	}

	um(nz, bg)
	{
		if (nz != this.ze) {
			this.td.src = zn.xj(
				'https://www.youtube.com/embed/%s?start=%s&autoplay=1&iv_load_policy=3&modestbranding=1', [nz, bg]
			);
		}
		else if (this.md) {
			zn.bx(this.md, bg);
		}

		this.ze = nz;
		this.ec = bg;
	}

	sy()
	{
		if (this.pv)
		{
			this.zl();
		}
	}
}

class ix extends xo
{
	constructor(ln)
	{
		const dj = di.dy('ix', ln);

		super(dj);

		this.oz(ln);
	}

	oz(ln)
	{
		this.ex(ln);
		this.yo(ln);

		if (ln.al)
		{
			if (ln.ur)
				this.zd('hxtlf');

			if (ln.hidden)
				this.zd('konqm');
		}

		if (ln.yp)
		{
			this.zd('kdnec');

			this.vd(
				new xo('js', {ok:'fvzms'}), 'en'
			);
		}
	}

	eo()
	{
		return this;
	}

	mt(cx)
	{
		this.vd(cx, 'ij');
	}

	ex(ln)
	{
		const dw = ln.gr;

		const xu = dw.replace(
			aj[5], zn.xj('s%s-', ln.al ? 48 : 80)
		);

		this.vd(new eu({
			ev:xu,
			xi:dw,
		}), 'nb');
	}

	yo(ln)
	{
		const vh = new bt({
			ok:'gnieb',
			hy: {
				dir:ln.ik,
				lang:ln.qj
			}
		});

		let ug = Object.keys(ln.yx);

		if (ug.length)
		{
			ug = zn.qc(ln.kq, ug);

			for (let x of ug)
			{
				if (x in ln.yx)
				{
					vh.vd(
						this.fp(ln.yx[x])
					);
				}
				else {
					vh.appendChild(
						di.rk(x)
					);
				}
			}
		}
		else {
			vh.textContent = ln.kq;
		}

		if (ln.al && !ln.yp)
		{
			vh.zd('wurba');

			vh.addEventListener('click',
				e => vh.zx('wurba')
			);
		}

		this.vd(vh, 'ij');
	}

	fp(x)
	{
		let a;

		if (x.nd == 'pa' && x.nz != yk.nz)
		{
			x.nd = 'wa';
		}

		switch (x.nd)
		{
			case 'pa':
				a = new jm(x.kp, x.bg);
				a.jy(this, 'vw', 'rg');
				return a;

			case 'wa':
				a = new hk(x.kp, x.nz, x.bg);
				a.jy(this, 'fg', 'rg');
				return a;

			case 'oc':
				return new wr({
					kp:x.kp,
					du:x.ha
				});
		}
	}
}

class hk extends wr
{
	constructor(kp, nz, bg)
	{
		super({
			ok:'poahq',
			kp:kp
		});

		this.nz = nz;
		this.bg = bg;
	}

	get uh()
	{
		return this.zy('eo');
	}
}

class jm extends wr
{
	constructor(kp, bg)
	{
		super({
			ok:'poahq',
			kp:kp
		});

		this.bg = bg;
	}
}

let pz;
let ia;
let ge;
let uy;
let ir;
let uw;
let vq;
let mp;
let qn;
let ml;
let di;

if (yk.gb)
{
	pz = new ks;
	ia = new ua;
	ge = new yj;
	uy = new dg;
	ir = new ap;
	uw = new dz;
	ml = new qg;

	ir.ls().then(async mq =>
	{
		if (mq.kx.pm)
		{
			await pz.ym();
		}

		di = new ub(mq.we);

		mp = new uz(mq.kx);

		qn = new ul;

		ir.ju();

		pz.yq();
	});

	ge.rc && ml.lo();
}

const aj = [
	/%s/g,
	/(\d+)([a-z])/,
	/^(00:0?|0)/,
	/[?&]v=([\w\-]+)/,
	/{([A-Za-z\d]+)}/g,
	/\bs\d+\-/,
];