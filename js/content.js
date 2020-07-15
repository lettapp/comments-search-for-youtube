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

	return eq != 3048;
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
class hs
{
	vl(bv)
	{
		this.bv = bv;
	}

	gz(iz, vu)
	{
		if (iz in this && this != vu)
		{
			return this[iz](vu);
		}

		if (this.fj)
		{
			return this.fj.gz(iz, vu);
		}
	}

	get fj()
	{
		return this.bv || this.yf;
	}
}

const mi = function(zr, kn)
{
	return new kn(zr);
}

class qb extends hs
{
	constructor(cv)
	{
		super();

		this.el = cv;

		this.uh('style', 'hidden', 'addEventListener', 'setAttribute', 'querySelector',
			'querySelectorAll', 'children', 'appendChild', 'innerHTML', 'textContent');
	}

	ep(cx)
	{
		if (typeof cx == 'string')
		{
			cx = [cx];
		}

		this.el.classList.add(...cx);
	}

	ew(cx)
	{
		this.el.classList.remove(cx);
	}

	hr(cx)
	{
		this.el.classList.contains(cx) ? this.ew(cx)
												: this.ep(cx);
	}

	ne()
	{
		this.el.remove();
	}

	uh(...rh)
	{
		for (let x of rh) {
			if (x in this)
			{
				throw Error('Property already defined');
			}

			if (this.el[x] instanceof Function)
			{
				this[x] = this.el[x].bind(this.el);
			}
			else {
				Object.defineProperty(this, x,
				{
					get() {
						return this.el[x];
					},
					set(v) {
						this.el[x] = v;
					}
				});
			}
		}
	}
}

class qt extends qb
{
	constructor(xd, qm)
	{
		super(
			typeof xd == 'string' ? vf.ch(xd) : xd
		);

		this.yf = null;
		this.ga = [];
		this.ra = {};
		this.ma = {};

		if (qm)
		{
			if (qm.wj)
			{
				this.ep(qm.wj);
			}

			if (qm.pr)
			{
				this.textContent = qm.pr;
			}

			if (qm.em)
			{
				this.ct(...qm.em);
			}

			if (qm.rc)
			{
				for (let sp in qm.rc)
				{
					this.setAttribute(sp, qm.rc[sp]);
				}
			}

			if (qm.import)
			{
				for (let jg of qm.import)
				{
					this.uh(jg);
				}
			}
		}
	}

	st(im, yv)
	{
		if (im.yf)
		{
			if (im.yf == this)
				return;

			im.ng();
		}

		im.yf = this;
		this.ga.push(im);

		switch (typeof yv)
		{
			case 'string':
				return this.oz(yv).appendChild(im.el);

			case 'number':
				return this.el.prepend(im.el);

			default:
				return this.appendChild(im.el);
		}
	}

	oz(re)
	{
		return this.querySelector('#' + re);
	}

	ct(em, iz, at)
	{
		if (typeof at == 'string')
		{
			at = [at];
		}

		for (let xn of at)
		{
			if (!this.ma[xn])
			{
				this.ma[xn] = new Map;

				this.addEventListener(
					mv.mh(xn, qt.zb), e => this.so(e)
				);
			}

			this.ma[xn].set(em, iz)
		}
	}

	ox()
	{
		this.ma = {};
	}

	nb(em, iz, at)
	{
		this.ox();

		this.ct(em, iz, at);
	}

	ai(xn)
	{
		const ma = this.ma[xn];

		if (ma)
		{
			for (let [em, iz] of ma)
			{
				em.gz(iz, this);
			}
		}
	}

	nf()
	{
		this.hidden = true;
	}

	jo()
	{
		this.hidden = false;
	}

	ap()
	{
		let i = this.ga.length;

		while (i--)
		{
			this.ga[i].ng();
		}
	}

	ng()
	{
		this.yf.ry(this);
	}

	wv(im)
	{
		this.appendChild(im.el);
	}

	ry(im)
	{
		im.yf = null;

		this.ga.splice(
			this.ga.indexOf(im), 1
		);

		im.el.remove();
	}

	so(e)
	{
		e.stopPropagation();

		this[mv.mh(e.type, qt.zb)](e);
	}

	ak()
	{
		this.ai('ak');
	}
}

qt.zb = {
	ak:'click',
	vr:'paste',
	zd:'keyup',
	ta:'keyup',
	wp:'focus',
};

class lo extends qt
{
	constructor(qm)
	{
		super('lo', qm);
	}
}

class pz extends qt
{
	constructor()
	{
		super('pz');

		this.uh('scrollTop', 'scrollHeight', 'offsetHeight');

		this.addEventListener('wheel', e =>
		{
			wh.ja(e);

			this.scrollTop += e.deltaY;
		});
	}
}


class ed extends pz
{
	constructor(dx)
	{
		super();

		this.dx = dx;

		this.cq;

		this.addEventListener('scroll',
			_ => this.tz()
		);
	}

	gl()
	{
	}

	tm()
	{
		this.ap();
		this.id();
		this.tc();

		this.rw();
	}

	tz()
	{
		if (this.ah && this.fm)
		{
			this.tc();
		}
	}

	id()
	{
		this.cq = this.gl(this.dx.pn);
	}

	tc()
	{
		for (let im of this.cq)
		{
			this.st(im);
		}

		this.id();
	}

	rw()
	{
		this.ew('npvei');

		if (this.jt)
		{
			this.ep('npvei');
		}
	}

	get jt()
	{
		return this.scrollHeight > this.offsetHeight;
	}

	get ah()
	{
		return this.cq.length;
	}

	get fm()
	{
		return this.scrollTop > .3 * (this.scrollHeight - this.offsetHeight);
	}
}

class sn extends qt
{
	constructor(pa, gt)
	{
		super('sn');

		this.uh('getBoundingClientRect', 'offsetHeight', 'offsetLeft');

		this.tk = pa;

		this.fx(pa, gt);

		this.oj();
		this.ju();
	}

	yw(cu)
	{
		for (let k in cu)
		{
			this.style[k] = cu[k] + (k == 'top' ? 'vh' : 'vw')
		}
	}

	fx(pa, gt)
	{
		const x = window.innerHeight - gt;
		const y = window.innerWidth - pa - 100;

		this.style.top = x + 'px';
		this.style.left = y + 'px';
		this.style.minWidth = pa + 'px';
	}

	oj()
	{
		let te = this.querySelectorAll('[resize]');

		for (let ur of te)
		{
			ur.addEventListener('pointerdown',
				e => this.up(e, 'ik')
			);
		}
	}

	ju()
	{
		this.querySelector('[movable]').addEventListener('pointerdown',
			e => this.up(e, 'an')
		);
	}

	up(e, iz)
	{
		if (e.which == 1)
			this[iz](e);
	}

	cd()
	{
		return this.getBoundingClientRect();
	}

	ik(e)
	{
		const rp = e.target.getAttribute('resize'),
				iu = rp.includes('w'),
				ke = rp.includes('n'),
				bt = rp.includes('e');

		const xp = this.cd(),
				tk = this.tk,
				it = 56,
				tv = jn.yp,
				jp = window.innerHeight - it,
				wf = e.clientX,
				lh = e.clientY,
				kw = xp.x,
				se = xp.y,
				ys = xp.width;

		let ph = 0,
				fn = 0,
				gf = kw,
				kt = se,
				cg = ys;

		let sr = (e) =>
		{
			ph = e.clientX - wf;
			fn = e.clientY - lh;

			if (ke)
			{
				kt = se + fn;

				(kt < 0) && (kt = 0);

				(kt > jp) && (kt = jp);

				this.style.top = kt + 'px';
			}

			if (bt)
			{
				cg = ys + ph;

				(e.clientX > tv) && (cg = tv - kw);

				(cg < tk) && (cg = tk);

				this.style.width = cg + 'px';
			}

			if (iu)
			{
				gf = kw + ph;
				cg = ys - ph;

				if (gf < 0)
				{
					gf = 0;
					cg = ys + kw;
				}

				if (cg < tk)
				{
					gf = kw + (ys - tk);
					cg = tk;
				}

				this.style.width = cg + 'px';
				this.style.left = gf + 'px';
			}
		};

		let dy = () => {
			(ph != 0 || fn != 0) && this.rz();
		};

		this.oa(sr, dy);
	}

	an(e)
	{
		let kw = this.offsetLeft,
			wf = e.clientX,
			ph = 0;

		let sr = (e) => {
			ph = e.clientX - wf;
			this.style.left = kw + ph + 'px';
		};

		let dy = () => {
			(ph != 0) && this.rz();
		};

		this.oa(sr, dy);
	}

	oa(sr, dy)
	{
		wh.rl(true);

		document.onpointermove = (e) => sr(e);

		document.onpointerup = (e) => {
			wh.rl(false);
			dy();
			document.onpointerup = document.onpointermove = null;
		};
	}

	rz()
	{
		if (this.hidden) return;

		let xp = this.cd();

		let cu = {
			width: mv.yo(xp.width, window.innerWidth),
			left: mv.yo(xp.x, window.innerWidth),
			top: mv.yo(xp.y, window.innerHeight),
		};

		this.yw(cu);

		if ('rt' in this.ra)
		{
			this.ra.rt(cu);
		}
	}
}

class ce extends sn
{
	constructor(pa, gt)
	{
		super(pa, gt);

		this.addEventListener('wheel', wh.ja);
	}
}

class gw extends qt
{
	constructor(qm)
	{
		super('gw', qm);

		this.uh('src');

		if (qm.og)
		{
			this.addEventListener('error', e => this.src = qm.og, {once:true});
		}

		this.src = qm.jr;
	}
}

class uw extends qt
{
	constructor(xd, qm)
	{
		super(xd, qm);

		this.dh = [];
		this.rk = false;
	}

	zd(e)
	{
		if (e.key == 'Enter')
		{
			this.ai('ta');
		}

		this.ai('zd');
	}

	vr(e)
	{
		setTimeout(
			_ => this.ai('vr'),
		10);
	}

	wp(e)
	{
		this.ai('wp');
	}

	get zi()
	{
		if (!this.rk)
		{
			const ib = Date.now();

			const mr = this.dh.push(ib);

			if (mr > 3)
			{
				if (ib - this.dh[0] < 2000)
				{
					this.rk = true;

					setTimeout(
						_ => this.rk = false,
					20 * 1000);
				}
				else {
					this.dh.length = 0;
				}
			}
		}

		return this.rk;
	}
}

class kd extends uw
{
	constructor(qm)
	{
		super('kd', qm);

		this.uh('placeholder', 'focus', 'select');

		if (qm && qm.placeholder)
		{
			this.placeholder = qm.placeholder;
		}
	}

	get value()
	{
		return this.el.value.trim();
	}

	set value(s)
	{
		this.el.value = String(s).trim();
	}
}

class zf extends uw
{
	constructor(qm)
	{
		super('zf', qm);

		this.fx();
	}

	fx()
	{
		this.sm = new kd();

		this.st(this.sm, 'hz');

		this.ao = new pd();

		this.st(this.ao, 'hz');

		this.nq = this.oz('nq');
	}

	focus()
	{
		this.sm.focus();
	}

	get value()
	{
		return this.sm.value;
	}

	et(dg, pr)
	{
		this.ao.qz(dg);

		this.nq.textContent = pr || '';
	}
}

class yk extends qt
{
	constructor(xd, qm)
	{
		super(xd, qm);

		this.qz(qm.dg || 'initial');
	}

	get pw()
	{
		return this.dg == 'disabled';
	}

	get pg()
	{
		return this.dg == 'selected';
	}

	qz(dg)
	{
		this.dg = dg;

		this.setAttribute('state', dg);
	}

	so(e)
	{
		if (!this.pw)
		{
			super.so(e);
		}
	}
}

class nu extends yk
{
	constructor(qm)
	{
		super('nu', qm);

		this.value = qm.value;

		if (qm.hy)
		{
			this.vo(qm.hy);
		}

		if (qm.wn)
		{
			this.cl(qm.wn);
		}
	}

	vo(pr)
	{
		this.textContent = pr;
	}

	cl(xd)
	{
		const wn = vf.ch(xd);

		this.appendChild(wn);
	}
}

class dr extends nu
{
	constructor(qm)
	{
		super(qm);

		this.value = qm.value;
	}

	ak()
	{
		if (this.pg)
		{
			this.qz('initial');
		}
		else {
			this.qz('selected');
		}

		super.ak();
	}
}

class jb extends qt
{
	constructor(qm)
	{
		super('jb', qm);

		if (qm.kx)
		{
			this.setAttribute('href', qm.kx);
		}
	}
}

class pd extends qt
{
	constructor(qm)
	{
		super('pd', qm);
	}

	qz(dg)
	{
		this.setAttribute('state', dg);
	}
}

class mu extends hs
{
	constructor(im, rn)
	{
		super();

		this.im;

		this.ri;

		this.children = [];

		this.qf(im, rn);
	}

	qf(im, rn)
	{
		im.vl(this);

		if (rn)
		{
			im.ra = new mi(this, rn);
		}

		this.im = im;

		this.eo();
	}

	sv(po, la)
	{
		this.ri = new po;

		if (la)
		{
			this.ri.ra = new mi(this, la);
		}

		this.mf();
	}

	mf()
	{
	}

	eo()
	{
	}

	ix(vu)
	{
		if (this.qc)
		{
			this.qc.ix(vu);
		}

	}

	tn(vu)
	{
		if (this.qc)
		{
			this.qc.tn(vu);
		}

	}

	dc(vu)
	{
		if (this.qc)
		{
			this.qc.dc(vu);
		}

	}

	nz(vu)
	{
		if (this.qc)
		{
			this.qc.nz(vu);
		}

	}

	ut(re)
	{
	}

	jo(ac, vu)
	{
		this.im.appendChild(ac.im.el);
	}

	wa(ac)
	{
		this.ti.bq(ac);
	}

	db()
	{
		this.ti.lw();
	}

	bq(xk, fa)
	{
		xk.vl(this);

		xk.ix();

		this.children.push(xk);

		this.im.st(xk.im, fa);

		xk.tn();
	}

	lw()
	{
		this.children.pop().lt();
	}

	get ti()
	{
		let fc = this;

		while (fc.bv)
		{
			fc = fc.bv;
		}

		return fc;
	}

	get pf()
	{
		return this.children.length;
	}

	get qc()
	{
		return mv.ko(this.children);
	}

	lt()
	{
		this.im.ne();

		for (let xk of this.children)
		{
			xk.lt();
		}
	}
}

class cm extends mu
{
	constructor()
	{
		const im = new qt('ka');

		super(im);
	}

	eo()
	{
		this.pi = new nu({
			wj:['ilxqf', 'mdjot'],
			wn:'js',
			dg:'hidden',
			em:[this, 'wl', 'ak']
		});

		this.im.st(this.pi);
	}

	wl()
	{
		this.lw();

		this.hj();
	}

	br()
	{
		this.pi.qz('hidden');
	}

	bq(xk)
	{
		super.bq(xk, 'we');

		this.hj();
	}

	hj()
	{
		if (this.pf > 1)
		{
			this.pi.qz('initial');
		}
		else {
			this.pi.qz('hidden');
		}
	}




}

mv.nd = function(wg, kf)
{
	wg.currentTime = kf;

	if (wg.paused)
	{
		wg.play();
	}
}

function openWindow(hb)
{
	let q = {
		width:500,
		height:screen.height,
		left:(screen.width - 500) / 2
	};

	q = mv.ug(q, ',');

	return window.open(hb, '', q);
}

class bl
{
	constructor(q)
	{
		Object.assign(this, {
			pq: q,
			vd: mk.vd,
			un: mk.wg.duration,
			wb:mk.wg.currentTime
		});
	}
}

class hn
{
	constructor()
	{
		this.wo = navigator.platform.includes('Mac');
	}

	get yp()
	{
		return !this.wo ? document.body.clientWidth : window.innerWidth;
	}
}

const mk = {
	get xt()
	{
		return ['www', 'music'].includes(this.qa);
	},

	get tb()
	{
		return location.pathname == '/watch';
	},

	get wg()
	{
		if (!this.rq)
		{
			this.rq = wh.querySelector('video');
		}

		return this.rq || document.createElement('video');
	},

	get vd()
	{
		return mv.cy(uz[4], location.href);
	},

	get qa()
	{
		return location.host.split('.')[0];
	}
}

class pu
{
	constructor(ns)
	{
		this.fe = document.createElement('div');

		this.bm = {};

		for (let wy of this.qy(ns).children)
		{
			const tj = wy.getAttribute('protoid');

			if (tj) {
				wy.removeAttribute('protoid');
			}
			else {
				throw 'ParseError: Missing protoId for child';
			}

			this.bm[tj] = wy.outerHTML;
		}
	}

	ch(xd, gb)
	{
		let yu = this.bm[xd];

		if (gb)
		{
			yu = yu.replace(uz[5], (_, jz) => gb[jz]);
		}

		return this.qy(yu);
	}

	hp(pr)
	{
		const s = document.createElement('span');

		s.textContent = pr;

		return s;
	}

	qy(yu)
	{
		this.fe.innerHTML = yu;

		return this.fe.children[0];
	}
}

class cb extends qb
{
	constructor()
	{
		super(document.documentElement);

		if ('fullscreenElement' in document)
		{
			this.dk = 'fullscreenchange';
			this.go = 'fullscreenElement';
		}
		else {
			this.dk = 'webkitfullscreenchange';
			this.go = 'webkitFullscreenElement';
		}

		this.xi();

		document.addEventListener(
			this.dk, _ => this.xi()
		);
	}

	get xs()
	{
		return !!(document[this.go]);
	}

	mx()
	{
		this.ep('qiqbo');
	}

	rl(ue)
	{
		ue ? this.ep('clwou')
			: this.ew('clwou');
	}

	ja(e)
	{
		if (e.ctrlKey)
			return;

		e.preventDefault();

		e.stopPropagation();
	}

	xi()
	{
		this.setAttribute('cs-fullscreen', this.xs);
	}
}

class mq
{
	constructor()
	{
		this.ie = {
			lj: '/html/svg/nerdy.svg',
			kh: '/html/svg/hybrid.svg',
			rb: '/html/svg/coin.webp',
		}
	}

	uo()
	{
		return le.get('1').then(bh => {
			hc = new pv(bh);
		});
	}

	ig(re)
	{
		return chrome.runtime.getURL(this.ie[re]);
	}

	hx()
	{
		as.ag(
			mv.yn()
		);
	}
}

class sk extends mu
{
	constructor(dg)
	{
		const im = new ce(460, 480);

		super(im, aq);

		this.sv(wu);

		this.ea = false;

		mg.mz(this, [
			'or', 'qj', 'ba', 'vc'
		]);

		switch (true)
		{
			case (dg.ms):
				return this.bq(new jq);

			case (dg.fl):
				return this.bq(new lx);

			default:
				return this.ln();
		}
	}

	eo()
	{
		this.im.st(new nu({
			wj:['ilxqf', 'jmqon'],
			wn:'jh',
			em:[this, 'hf', 'ak']
		}));

		document.body.appendChild(this.im.el);
	}

	mf()
	{
		this.ri.cd.then(
			cu => cu && this.im.yw(cu)
		);
	}

	ut(re)
	{
		switch (re)
		{
			case 'or':
				return this.lk('mt');

			case 'qj':
				return this.lk('ci');

			case 'ba':
				return this.hf();

			case 'vc':
				return this.zk();
		}
	}

	ln()
	{
		this.bq(new dq);
	}

	zk()
	{
		this.lw();

		this.ln();
	}

	lk(vu)
	{
		this.qc.ix(vu);

		this.im.jo();

		this.qc.tn(vu);

		this.ea = true;
	}

	hf(vu)
	{
		this.qc.dc(vu);

		this.im.nf();
	}

	mp()
	{
		this.bq(new qk);
	}
}

class wu
{
	get cd()
	{
		return le.get('appPosition');
	}

	uf(wj)
	{
		(wj.width > 100) && (wj.width = 100);

		(wj.left < 0) && (wj.left = 0);

		if (wj.left + wj.width > 100)
		{
			wj.left = 100 - wj.width;
		}

		le.set('appPosition', wj);
	}
}

const aq = function(zr)
{
	return {
		rt(cu)
		{
			zr.ri.uf(cu);
		}
	}
}

class ev
{
	static er(jz)
	{
		return jz == 'Enter';
	}

	static iq(jz)
	{
		return ['Control','Meta'].includes(jz);
	}
}

class di
{
	constructor()
	{
		window.addEventListener('keydown', e => this.pb(e), true);
	}

	pb(e)
	{
		this.al(e);

		const cp = this.cp;

		if (this.by)
		{
			if (cp == 'KeyS')
			{
				e.preventDefault();

				return mg.ex('or');
			}

			if (cp == 'KeyE' && mk.tb)
			{
				e.preventDefault();

				return mg.ex('qj');
			}

			if (cp == 'KeyX' && wh.xs)
			{
				return mg.ex('ba');
			}
		}

		if (cp == 'Escape')
		{
			return mg.ex('ba');
		}
	}

	al(e)
	{
		this.cp = e.code;

		this.by = !e.shiftKey && (e.ctrlKey + e.altKey + e.metaKey == 1);
	}

	get fr()
	{
		return this.cp == 'KeyV';
	}
}

class yr
{
	constructor()
	{
		this.qd = {};
	}

	ex(ui)
	{
		let pj = this.gu(ui);

		for (let ky of pj)
		{
			ky.ut(ui);
		}
	}

	mz(ky, mg)
	{
		if (typeof mg == 'string')
		{
			mg = [mg];
		}

		for (let re of mg)
		{
			this.gu(re).push(ky);
		}
	}

	gu(ui)
	{
		return this.qd[ui] || (this.qd[ui] = new qp);
	}
}

class es extends mu
{
	constructor()
	{
		const im = new qt('fs');

		super(im);
	}

	zp()
	{
		as.dn();

		this.db();
	}
}

class jq extends mu
{
	constructor()
	{
		super(
			new qt('ou')
		);
	}

	eo()
	{
		this.im.st(
			new gw({
				jr:kv.ig('rb')
			}), 'sw'
		);

		const qn = new nu({
			wj:'zkimn',
			hy:'Update Now',
			em:[this, 'gm', 'ak']
		});

		this.im.st(qn, 'tf');
	}

	gm()
	{
		window.open('https://cs.lett.app/update');
	}
}

class nl extends mu
{
	constructor()
	{
		const im = new qt('tg');

		super(im);
	}

	eo()
	{
		this.im.st(new nu({
			wj:['mdjot', 'ilxqf'],
			wn:'js',
			em:[this, 'db', 'ak']
		}));
	}
}

class qk extends mu
{
	constructor()
	{
		const im = new qt('xg');

		super(im);
	}
}

class lx extends mu
{
	constructor()
	{
		const im = new qt('qt');

		super(im);

		mg.mz(this, [
			'gs', 'bu'
		]);
	}

	eo()
	{
		switch (true)
		{
			case (!hc.pc):
				return this.bq(new hi);

			case (!hc.lz):
				return this.bq(new om);
		}
	}

	async ut(re)
	{
		await kv.uo();

		switch (re)
		{
			case 'gs':
				return this.uq();

			case 'bu':
				return this.od();
		}
	}

	uq()
	{
		if (!hc.lz)
			return this.bq(new om);

		this.bj();
	}

	od()
	{
		!bk.ea && this.bj();
	}

	wr()
	{
		this.bj();
	}

	bj()
	{
		mg.ex('vc');
	}
}

class hi extends mu
{
	constructor()
	{
		const im = new qt('jl');

		super(im);
	}

	eo()
	{
		this.oy = new zf({
			em:[this, 'za', ['vr', 'ta']]
		});

		this.im.st(this.oy, 'na');

		this.im.st(
			new gw({
				jr:kv.ig('lj')
			}), 'sw'
		);

		this.im.st(
			new jb({pr:'Need help?', kx:'https://cs.lett.app/api-key'}), 'fq'
		);
	}

	tn()
	{
		this.oy.focus();
	}

	za(vu)
	{
		vu.et('loading');

		if (!this.ae)
		{
			this.ae = true;

			as.za(vu.value).then(pe =>
			{
				!pe && vu.et('error', 'try again');

				this.ae = false;
			});
		}
	}
}

class om extends cm
{
	constructor()
	{
		super();

		this.bq(new ud);
	}

	kz()
	{
		this.bq(new nv);
	}
}

class ud extends mu
{
	constructor()
	{
		const im = new qt('ip');

		super(im);
	}

	eo()
	{
		const gy = [];

		gy.push(
			new nu({
				wj:'zkimn',
				hy:'Remind me later',
				em:[this, 'wr', 'ak']
			})
		);

		gy.push(
			new nu({
				wj:'zkimn',
				hy:'Donate',
				em:[this, 'kz', 'ak']
			})
		);

		hc.qr && gy[0].nb(this, 'rd', 'ak');

		for (let lb of gy)
		{
			this.im.st(lb, 'tf');
		}

		this.im.st(
			new gw({
				jr:kv.ig('kh')
			}), 'sw'
		);
	}

	rd(vu)
	{
		vu.ep('zlinw');

		setTimeout(
			_ => vu.ew('zlinw'),
		500);
	}
}

class nv extends mu
{
	constructor()
	{
		const im = new qt('jk');

		super(im);

		this.ws;

		this.ze;
		this.nh;

		mg.mz(this, ['bu']);
	}

	ut(re)
	{
		switch (re)
		{
			case 'bu':
				return this.od();
		}
	}

	eo()
	{
		this.ao = new pd({
			wj:'kbjdx'
		});

		this.im.st(this.ao);

		this.im.st(
			new gw({
				jr:kv.ig('rb')
			}), 'sw'
		);

		this.sz = new gc();

		const hu = new lo({wj:'cwpng'});

		for (let ab of [5,10,15,20])
		{
			const nw = new nu({
				wj:'lgmbg',
				pr:ab,
				value:ab,
				em:[this, 'xr', 'ak']
			});

			hu.st(nw);
		}

		this.sz.uv(hu);

		this.im.st(this.sz, 'sz');

		this.ow = new gc();

		this.ow.mn(
			new lo({pr:'Please select amount in USD'})
		);

		this.im.st(this.ow, 'ow');

		this.co = new nu({
			wj:['zkimn', 'jlzpm'],
			hy:'Donate with PayPal',
			em:[this, 'yb', 'ak']
		});

		this.im.st(this.co, 'tf');
	}

	dc()
	{
		this.kj();
	}

	xr(vu)
	{
		const du = this.ws;
		const qs = vu;

		if (du != qs)
		{
			qs.qz('selected');

			if (du)
			{
				du.qz('initial');
			}

			this.ws = qs;
		}
	}

	yb()
	{
		if (this.ml || !this.ws)
			return;

		this.ml = true;

		this.ao.qz('loading');

		as.nj(this.ws.value).then(hb =>
		{
			if (hb) {
				this.vg(hb);

				this.ao.qz('waiting');
			}
			else {
				this.ao.qz('error');
			}

			this.ml = false;
		});
	}

	vg(hb)
	{
		this.kj();

		this.ze = openWindow(hb);

		this.nh = setInterval(
			_ => this.ze.closed && this.kj(),
		500);
	}

	kj()
	{
		if (this.ze)
		{
			this.ze.close();

			this.ao.qz('initial');

			clearInterval(this.nh);
		}
	}

	od()
	{
		this.kj();

		setTimeout(_ => {
			this.gz('br', this);
			this.lc();
		}, 900);
	}

	lc()
	{
		this.sz.uv(
			new lo({wj:'siqjr',pr:'Thank You!'}), true
		);

		this.ow.mn(
			new lo({pr:'Your Payment was Received'}), true
		);

		setTimeout(_ => {
			this.co.ep('mtvzq');
			this.co.textContent = 'Done';
			this.co.nb(this, 'bj', 'ak');
		}, 200);
	}

	bj()
	{
		this.gz('bj', this);
	}

	lt()
	{
		super.lt();

		this.kj();
	}
}

class gc extends lo
{
	constructor()
	{
		super();

		this.fx();
	}

	fx()
	{
		this.qh = new lo({
			wj:'rgeyf'
		});

		this.st(this.qh);
	}

	uv(hd, um)
	{
		this.sf(hd, 0, um);
	}

	mn(hd, um)
	{
		this.sf(hd, null, um);
	}

	sf(hd, dz, um)
	{
		this.qh.st(hd, dz);

		if (um)
		{
			this.um(dz != null);
		}
	}

	um(dp)
	{
		let yi, bx = this.qh;

		if (dp)
		{
			bx.style.transform = 'translateY(-100%)';

			yi = 'translateY(0)';
		}
		else {
			yi = 'translateY(-100%)';
		}

		setTimeout(_ => {
			bx.style.transition = 'transform 300ms';

			setTimeout(
				_ => bx.style.transform = yi,
			10);

			setTimeout(_ => {
				bx.style.transition = null;
			}, 300);
		}, 10);
	}
}

class ul extends mu
{
	constructor(vm)
	{
		const im = new pz;

		super(im);

		this.gk(vm).then(
			vt => this.qm(vt)
		);
	}

	eo()
	{
		this.im.ep('mardi');
	}

	qm(vt)
	{
		this.im.innerHTML = vt;
	}

	gk(vm)
	{
		const ir = mv.nm('/html/policies/%s.html', vm);

		return as.gk(ir);
	}
}

class dq extends mu
{
	constructor()
	{
		const im = new qt('oc');

		super(im);

		this.sv(hk, jc);

		mg.mz(this, 'qj');
	}

	eo()
	{
		this.ro = new kd({
			placeholder:'type keywords here..',
		});
		this.ro.ct(this, 'kl', ['wp']);
		this.ro.ct(this, 'pm', ['ta', 'vr']);

		this.au = new nu({
			wj:'wnctw',
			hy:'0',
			dg:'disabled',
			em:[this, 'px', 'ak']
		});

		this.kp = new ds(this);

		this.dj = new sc();
		this.dj.ra = new xl(this);

		this.sy = new qt(this.im.oz('mw'));
		this.sy.st(this.ro);
		this.sy.st(this.au);

		this.eu = new qt(this.im.oz('bs'));
		this.eu.st(this.dj);
		this.eu.st(this.kp);
	}

	ix()
	{
		if (this.li)
		{
			this.bi();

			if (this.ri.yj)
			{
				this.su('');
				this.dj.ck();
			}
		}
	}

	tn(vu)
	{
		this.ro.focus();

		if (vu == 'mt')
		{
			this.ro.select();
		}
	}

	dc()
	{
		if (this.kp.nc)
		{
			this.kp.bz.db();
		}
	}

	ut(re)
	{
		if (re == 'qj')
			return this.rx();
	}

	ny(im)
	{
		this.eu.wv(im);
	}

	kl()
	{
		if (this.li)
		{
			this.bi();
		}
	}

	pm()
	{
		let q = this.th();

		switch (true)
		{
			case (!q):
				return;

			case (!mk.tb):
				return this.dj.pt('kq');

			case (this.ri.ht):
			{
				if (!this.ri.gi)
					return;

				if (q == this.ri.iw)
				{
					return this.dj.pt('jx');
				}
			}
		}

		this.yd(q);
	}

	ca()
	{
		if (!mk.tb)
			return this.dj.pt('kq');

		this.wc(':all');
	}

	get pn()
	{
		return this.ri.pn;
	}

	px()
	{
		this.wa(new nl);
	}

	yd(q)
	{
		this.ri.search(q);
		this.dj.pt('ey');
	}

	bi()
	{
		this.ri.yt();
	}

	rx()
	{
		let q = mv.ql(mk.wg.currentTime);

		this.wc(q);
	}

	th()
	{
		return this.ro.value;
	}

	su(q)
	{
		this.ro.value = q;
	}

	wc(q)
	{
		this.su(q);
		this.yd(q);
	}

	get li()
	{
		if (mk.tb && mk.vd != this.sq)
		{
			return !!(this.sq = mk.vd);
		}

		return false;
	}
}

class hk
{
	constructor()
	{
		this.he = he.iy('xw', this.ls.bind(this));

		this.iw = '';
		this.ni = 0;
		this.wi = 0;
		this.xc = 500;
		this.gi = false;
		this.yj = false;
		this.fu = [];
		this.av = 25;
	}

	ls(vj)
	{
		const bh = vj.bh;

		switch (vj.mj)
		{
			case 'yx':
				return this.ha(bh);

			case 'fv':
				return this.ld(bh);

			case 'xj':
				return this.ho(bh);
		}
	}

	get ht()
	{
		return this.gi || this.yl('wi') < 500;
	}

	get pn()
	{
		return this.fu.splice(0, this.av);
	}

	yt()
	{
		this.he.xh('fv', new bl(''));
	}

	search(q)
	{
		this.bp(q);

		this.he.xh('yx', new bl(q));
	}

	ho(xj)
	{
		this.yq();

		this.ra.ho(xj.re);
	}

	ha(r)
	{
		this.yq();

		let zt = this.xc - this.yl('ni');

		(r.vi == 0) && (zt = 200);

		this.fu = r.sj;
		this.yj = (r.vi == 0);

		setTimeout(
			_ => this.ra.ha(r.vi, r.rg),
		zt);
	}

	ld(n)
	{
		this.ra.ld(n);
	}

	cr(qw)
	{
		this[qw] = Date.now();
	}

	yl(qw)
	{
		return Date.now() - this[qw];
	}

	bp(q)
	{
		this.iw = q;

		this.gi = true;

		this.cr('ni');
	}

	yq()
	{
		this.gi = false;

		this.cr('wi');
	}
}

class sc extends qt
{
	constructor()
	{
		super('qt', {
			wj:'qjgnt'
		});

		this.ef = {
			nr: 'no results match your query',
			ey: 'Searching...',
			jx: 'Searching still...',
			kq: 'You are not watching any video',
			nk: 'Invalid request',
			gh: 'This video has zero comments',
			xf: 'Comments are disabled for this video.',
			ec: 'check your internet connection',
			md: 'service down for maintenance',
			op: 'request timeout, try again',
			be: 'feature not supported for this video',
			vw: 'invalid response from server, try again',
			si: 'something is not working properly, if this persists please let us know',

			accessNotConfigured: 'the provided API key is not valid',
			rateLimitExceeded: 'max allocated requests per day exceeded',
			processingFailure: 'comments server is not responding',
			videoNotFound: 'video not found',
			forbidden: 'your query could not be processed',
			commentsDisabled: 'Comments are disabled for this video.'
		};
	}

	pt(wk)
	{
		this.af(wk);
	}

	gv(...ej)
	{
		this.dm(...ej);
	}

	xv(uk, ej)
	{
		this.dm(
			mv.nm(uk, ej)
		);
	}

	ck()
	{
		this.innerHTML = '';
	}

	af(re)
	{
		let je = this.ef[re];

		if (!je)
		{
			je = this.ef.si;
		}

		this.dm(je);
	}

	dm(...pk)
	{
		const sb = document.createDocumentFragment();

		for (let zc of pk)
		{
			let lm = null;

			if (typeof zc == 'string')
			{
				lm = document.createTextNode(zc);
			}
			else {
				lm = zc.el;
			}

			sb.appendChild(lm);
		}

		this.ck();
		this.appendChild(sb);

		this.ra.ar();
	}
}

class ds extends ed
{
	constructor(dx)
	{
		super(dx);

		this.nc = false;
	}

	gr(vu)
	{
		this.bz.hq(vu.vd, vu.yh);

		vu.wq.rs(this.bz);
	}

	gj(vu)
	{
		mv.nd(mk.wg, vu.yh);
	}

	gl(sa)
	{
		const on = [];

		for (let ye of sa)
		{
			for (let i = 0; i < ye.length; i++)
			{
				const ol = ye[i];

				if (ol.ty && !ol.hidden)
				{
					ye[i-1].nx = true;

					for (let k = i - 1; k > 0; k--)
					{
						if (ye[k].re == ol.ty)
						{
							ye[k].nx = true;
						}
					}
				}
			}

			let dt = new qt('vq');

			for (let ol of ye)
			{
				dt.st(
					new ek(ol)
				);
			}

			on.push(dt);
		}

		return on;
	}

	get bz()
	{
		if (!this.nc)
		{
			this.nc = true;
			this.sh = new td;
		}

		return this.sh;
	}
}

const jc = function(zr)
{
	return {
		ld(n)
		{
			if (0 < n && n < 1000)
			{
				zr.au.qz('normal')
			}
			else {
				zr.au.qz('disabled');
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

			zr.au.vo(n);
		},

		ha(vi, p)
		{
			this.ld(p);

			if (vi > 0)
			{
				zr.kp.tm();

				return zr.ny(zr.kp);
			}

			if (p <= 0) switch (p)
			{
				case 0:
					return zr.dj.pt('gh');

				case -1:
					return zr.dj.pt('xf');

				case -2:
					return zr.dj.pt('nr');
			}

			if (0 < p && p < 600)
			{
				if (p < 100)
				{
					const iz = new jb({
						pr:mv.nm('%s comments', p),
						em:[zr, 'ca', 'ak']
					});

					return zr.dj.gv('Nothing found in ', iz);
				}

				return zr.dj.xv('Nothing found in %s comments', p);
			}

			zr.dj.pt('nr');
		},

		ho(zj)
		{
			zr.dj.pt(zj);
		}
	}
}

const xl = function(zr)
{
	return {
		ar()
		{
			zr.ny(zr.dj);
		}
	}
}

class td extends qt
{
	constructor()
	{
		super('td');

		this.io = this.children[0];

		this.io.onload = () => {
			try {
				const zm = this.io.contentDocument.body;

				this.wg = zm.querySelector('video');

				zm.querySelector('.ytp-pause-overlay').hidden = true;
			}
			catch (e) {
			}
		}

		this.sq;
		this.hl;
	}

	hq(vd, yh)
	{
		if (vd != this.sq) {
			this.io.src = mv.nm(
				'https://www.youtube.com/embed/%s?start=%s&autoplay=1&iv_load_policy=3&modestbranding=1', [vd, yh]
			);
		}
		else if (this.wg) {
			mv.nd(this.wg, yh);
		}

		this.sq = vd;
		this.hl = yh;
	}

	db()
	{
		if (this.yf)
		{
			this.ng();
		}
	}
}

class ek extends qt
{
	constructor(ol)
	{
		const xy = vf.ch('ek', ol);

		super(xy);

		this.fx(ol);
	}

	fx(ol)
	{
		this.ot(ol);
		this.os(ol);

		if (ol.uc)
		{
			if (ol.nx)
				this.ep('aspcg');

			if (ol.hidden)
				this.ep('titja');
		}

		if (ol.jv)
		{
			this.ep('onoif');

			this.st(
				new qt('va', {wj:'rugxi'}), 'fk'
			);
		}
	}

	oh()
	{
		return this;
	}

	rs(bz)
	{
		this.st(bz, 'pb');
	}

	ot(ol)
	{
		const lf = ol.rf;

		const de = lf.replace(
			uz[6], mv.nm('s%s-', ol.uc ? 48 : 80)
		);

		this.st(new gw({
			jr:de,
			og:lf,
		}), 'bc');
	}

	os(ol)
	{
		const km = new lo({
			wj:'wreuo',
			rc: {
				dir:ol.ku,
				lang:ol.fz
			}
		});

		const cs = Object.keys(ol.gq);

		if (cs.length)
		{
			const dl = mv.rm(ol.ge, cs);

			for (let x of dl)
			{
				if (mv.kb(x))
				{
					const a = this.kc(ol.gq[x]);

					km.st(a);
				}
				else {
					const s = vf.hp(x);

					km.appendChild(s);
				}
			}
		}
		else {
			km.textContent = ol.ge;
		}

		if (ol.uc && !ol.jv)
		{
			km.ep('dtous');

			km.addEventListener('click',
				e => km.ew('dtous')
			);
		}

		this.st(km, 'pb');
	}

	kc(x)
	{
		let a;

		if (x.ic == 'mb' && x.vd != mk.vd)
		{
			x.ic = 'vh';
		}

		switch (x.ic)
		{
			case 'mb':
				a = new fo(x.pr, x.yh);
				a.ct(this, 'gj', 'ak');
				return a;

			case 'vh':
				a = new fd(x.pr, x.vd, x.yh);
				a.ct(this, 'gr', 'ak');
				return a;

			case 'zh':
				return new jb({
					pr:x.pr,
					kx:x.hb
				});
		}
	}
}

class fd extends jb
{
	constructor(pr, vd, yh)
	{
		super({
			wj:'ebdxc',
			pr:pr
		});

		this.vd = vd;
		this.yh = yh;
	}

	get wq()
	{
		return this.gz('oh');
	}
}

class fo extends jb
{
	constructor(pr, yh)
	{
		super({
			wj:'ebdxc',
			pr:pr
		});

		this.yh = yh;
	}
}

let kv;
let le;
let jn;
let he;
let as;
let mg;
let hc;
let bk;
let no;
let wh;
let vf;

if (mk.xt)
{
	kv = new mq;
	le = new pl;
	jn = new hn;
	he = new tw;
	as = new hw;
	mg = new yr;
	wh = new cb;

	as.me().then(async sl =>
	{
		if (sl.dg.fl)
		{
			await kv.uo();
		}

		vf = new pu(sl.zy);

		bk = new sk(sl.dg);

		no = new di;

		as.eb();

		kv.hx();
	});

	jn.wo && wh.mx();
}

const uz = [
	/^[0-9]{9}$/,
	/%s/g,
	/(\d+)([a-z])/,
	/^(00:0?|0)/,
	/[?&]v=([\w\-]+)/,
	/{([A-Za-z\d]+)}/g,
	/\bs\d+\-/,
];