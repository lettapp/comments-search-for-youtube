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

	return lp != 3044;
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
class na
{
	vd(ti)
	{
		this.ti = ti;
	}

	qm(as, bx)
	{
		if (as in this && this != bx)
		{
			return this[as](bx);
		}

		if (this.wu)
		{
			return this.wu.qm(as, bx);
		}
	}

	get wu()
	{
		return this.ti || this.sk;
	}
}

const yt = function(td, gt)
{
	return new gt(td);
}

class ue extends na
{
	constructor(un)
	{
		super();

		this.ua = un;

		this.eb('style', 'hidden', 'addEventListener', 'setAttribute', 'querySelector',
			'querySelectorAll', 'children', 'appendChild', 'innerHTML', 'textContent');
	}

	mj(jk)
	{
		if (typeof jk == 'string')
		{
			jk = [jk];
		}

		this.ua.classList.add(...jk);
	}

	gw(jk)
	{
		this.ua.classList.remove(jk);
	}

	lz(jk)
	{
		this.ua.classList.contains(jk) ? this.gw(jk)
												: this.mj(jk);
	}

	xf()
	{
		this.ua.remove();
	}

	eb(...fe)
	{
		for (let x of fe) {
			if (x in this)
			{
				throw Error('Property already defined');
			}

			if (this.ua[x] instanceof Function)
			{
				this[x] = this.ua[x].bind(this.ua);
			}
			else {
				Object.defineProperty(this, x,
				{
					get() {
						return this.ua[x];
					},
					set(v) {
						this.ua[x] = v;
					}
				});
			}
		}
	}
}

class tm extends ue
{
	constructor(fp, lv)
	{
		super(
			typeof fp == 'string' ? tz.fn(fp) : fp
		);

		this.sk = null;
		this.yn = [];
		this.gv = {};
		this.zy = {};

		if (lv)
		{
			if (lv.nz)
			{
				this.mj(lv.nz);
			}

			if (lv.jf)
			{
				this.textContent = lv.jf;
			}

			if (lv.sd)
			{
				this.qh(...lv.sd);
			}

			if (lv.sb)
			{
				for (let vn in lv.sb)
				{
					this.setAttribute(vn, lv.sb[vn]);
				}
			}

			if (lv.import)
			{
				for (let jd of lv.import)
				{
					this.eb(jd);
				}
			}
		}
	}

	rv(jy, eo)
	{
		if (jy.sk)
		{
			if (jy.sk == this)
				return;

			jy.hb();
		}

		jy.sk = this;
		this.yn.push(jy);

		switch (typeof eo)
		{
			case 'string':
				return this.ab(eo).appendChild(jy.ua);

			case 'number':
				return this.ua.prepend(jy.ua);

			default:
				return this.appendChild(jy.ua);
		}
	}

	ab(ck)
	{
		return this.querySelector('#' + ck);
	}

	qh(sd, as, zo)
	{
		if (typeof zo == 'string')
		{
			zo = [zo];
		}

		for (let xw of zo)
		{
			if (!this.zy[xw])
			{
				this.zy[xw] = new Map;

				this.addEventListener(
					ye.vw(xw, tm.xv), e => this.uq(e)
				);
			}

			this.zy[xw].set(sd, as)
		}
	}

	cy()
	{
		this.zy = {};
	}

	ca(sd, as, zo)
	{
		this.cy();

		this.qh(sd, as, zo);
	}

	kx(xw)
	{
		const zy = this.zy[xw];

		if (zy)
		{
			for (let [sd, as] of zy)
			{
				sd.qm(as, this);
			}
		}
	}

	ce()
	{
		this.hidden = true;
	}

	eu()
	{
		this.hidden = false;
	}

	vk()
	{
		let i = this.yn.length;

		while (i--)
		{
			this.yn[i].hb();
		}
	}

	hb()
	{
		this.sk.ob(this);
	}

	vf(jy)
	{
		this.appendChild(jy.ua);
	}

	ob(jy)
	{
		jy.sk = null;

		this.yn.splice(
			this.yn.indexOf(jy), 1
		);

		jy.ua.remove();
	}

	uq(e)
	{
		e.stopPropagation();

		this[ye.vw(e.type, tm.xv)](e);
	}

	iz()
	{
		this.kx('iz');
	}
}

tm.xv = {
	iz:'click',
	vs:'paste',
	hk:'keyup',
	zk:'keyup',
	sh:'focus',
};

class qb extends tm
{
	constructor(lv)
	{
		super('qb', lv);
	}
}

class qk extends tm
{
	constructor()
	{
		super('qk');

		this.eb('scrollTop', 'scrollHeight', 'offsetHeight');

		this.addEventListener('wheel', e =>
		{
			vl.mi(e);

			this.scrollTop += e.deltaY;
		});
	}
}


class xu extends qk
{
	constructor(gb)
	{
		super();

		this.gb = gb;

		this.qv;

		this.addEventListener('scroll',
			_ => this.ec()
		);
	}

	cj()
	{
	}

	xz()
	{
		this.vk();
		this.mh();
		this.iv();

		this.kq();
	}

	ec()
	{
		if (this.wz && this.jn)
		{
			this.iv();
		}
	}

	mh()
	{
		this.qv = this.cj(this.gb.ar);
	}

	iv()
	{
		for (let jy of this.qv)
		{
			this.rv(jy);
		}

		this.mh();
	}

	kq()
	{
		this.gw('oxkpj');

		if (this.hu)
		{
			this.mj('oxkpj');
		}
	}

	get hu()
	{
		return this.scrollHeight > this.offsetHeight;
	}

	get wz()
	{
		return this.qv.length;
	}

	get jn()
	{
		return this.scrollTop > .3 * (this.scrollHeight - this.offsetHeight);
	}
}

class hy extends tm
{
	constructor(px, vo)
	{
		super('hy');

		this.eb('getBoundingClientRect', 'offsetHeight', 'offsetLeft');

		this.xj = px;

		this.zi(px, vo);

		this.de();
		this.yv();
	}

	cz(pj)
	{
		for (let k in pj)
		{
			this.style[k] = pj[k] + (k == 'top' ? 'vh' : 'vw')
		}
	}

	zi(px, vo)
	{
		const x = window.innerHeight - vo;
		const y = window.innerWidth - px - 100;

		this.style.top = x + 'px';
		this.style.left = y + 'px';
		this.style.minWidth = px + 'px';
	}

	de()
	{
		let eg = this.querySelectorAll('[resize]');

		for (let yo of eg)
		{
			yo.addEventListener('pointerdown',
				e => this.jo(e, 'ek')
			);
		}
	}

	yv()
	{
		this.querySelector('[movable]').addEventListener('pointerdown',
			e => this.jo(e, 'hm')
		);
	}

	jo(e, as)
	{
		if (e.which == 1)
			this[as](e);
	}

	gq()
	{
		return this.getBoundingClientRect();
	}

	ek(e)
	{
		const at = e.target.getAttribute('resize'),
				pn = at.includes('w'),
				pw = at.includes('n'),
				up = at.includes('e');

		const kw = this.gq(),
				xj = this.xj,
				vu = 56,
				bh = tx.ql,
				qo = window.innerHeight - vu,
				tk = e.clientX,
				ig = e.clientY,
				ba = kw.x,
				te = kw.y,
				uv = kw.width;

		let yw = 0,
				cb = 0,
				pg = ba,
				nt = te,
				rz = uv;

		let py = (e) =>
		{
			yw = e.clientX - tk;
			cb = e.clientY - ig;

			if (pw)
			{
				nt = te + cb;

				(nt < 0) && (nt = 0);

				(nt > qo) && (nt = qo);

				this.style.top = nt + 'px';
			}

			if (up)
			{
				rz = uv + yw;

				(e.clientX > bh) && (rz = bh - ba);

				(rz < xj) && (rz = xj);

				this.style.width = rz + 'px';
			}

			if (pn)
			{
				pg = ba + yw;
				rz = uv - yw;

				if (pg < 0)
				{
					pg = 0;
					rz = uv + ba;
				}

				if (rz < xj)
				{
					pg = ba + (uv - xj);
					rz = xj;
				}

				this.style.width = rz + 'px';
				this.style.left = pg + 'px';
			}
		};

		let bu = () => {
			(yw != 0 || cb != 0) && this.ay();
		};

		this.lr(py, bu);
	}

	hm(e)
	{
		let ba = this.offsetLeft,
			tk = e.clientX,
			yw = 0;

		let py = (e) => {
			yw = e.clientX - tk;
			this.style.left = ba + yw + 'px';
		};

		let bu = () => {
			(yw != 0) && this.ay();
		};

		this.lr(py, bu);
	}

	lr(py, bu)
	{
		vl.rt(true);

		document.onpointermove = (e) => py(e);

		document.onpointerup = (e) => {
			vl.rt(false);
			bu();
			document.onpointerup = document.onpointermove = null;
		};
	}

	ay()
	{
		if (this.hidden) return;

		let kw = this.gq();

		let pj = {
			width: ye.tv(kw.width, window.innerWidth),
			left: ye.tv(kw.x, window.innerWidth),
			top: ye.tv(kw.y, window.innerHeight),
		};

		this.cz(pj);

		if ('ke' in this.gv)
		{
			this.gv.ke(pj);
		}
	}
}

class ao extends hy
{
	constructor(px, vo)
	{
		super(px, vo);

		this.addEventListener('wheel', vl.mi);
	}
}

class bg extends tm
{
	constructor(lv)
	{
		super('bg', lv);

		this.eb('src');

		if (lv.lb)
		{
			this.addEventListener('error', e => this.src = lv.lb, {once:true});
		}

		this.src = lv.jp;
	}
}

class hg extends tm
{
	constructor(fp, lv)
	{
		super(fp, lv);

		this.vq = [];
		this.lt = false;
	}

	hk(e)
	{
		if (e.key == 'Enter')
		{
			this.kx('zk');
		}

		this.kx('hk');
	}

	vs(e)
	{
		setTimeout(
			_ => this.kx('vs'),
		10);
	}

	sh(e)
	{
		this.kx('sh');
	}

	get tr()
	{
		if (!this.lt)
		{
			const tu = Date.now();

			const ia = this.vq.push(tu);

			if (ia > 3)
			{
				if (tu - this.vq[0] < 2000)
				{
					this.lt = true;

					setTimeout(
						_ => this.lt = false,
					20 * 1000);
				}
				else {
					this.vq.length = 0;
				}
			}
		}

		return this.lt;
	}
}

class ur extends hg
{
	constructor(lv)
	{
		super('ur', lv);

		this.eb('placeholder', 'focus', 'select');

		if (lv && lv.placeholder)
		{
			this.placeholder = lv.placeholder;
		}
	}

	get value()
	{
		return this.ua.value.trim();
	}

	set value(s)
	{
		this.ua.value = String(s).trim();
	}
}

class cr extends hg
{
	constructor(lv)
	{
		super('cr', lv);

		this.zi();
	}

	zi()
	{
		this.lg = new ur();

		this.rv(this.lg, 'pm');

		this.jh = new dv();

		this.rv(this.jh, 'pm');

		this.co = this.ab('co');
	}

	focus()
	{
		this.lg.focus();
	}

	get value()
	{
		return this.lg.value;
	}

	hl(zt, jf)
	{
		this.jh.dh(zt);

		this.co.textContent = jf || '';
	}
}

class br extends tm
{
	constructor(fp, lv)
	{
		super(fp, lv);

		this.dh(lv.zt || 'initial');
	}

	get sz()
	{
		return this.zt == 'disabled';
	}

	get ui()
	{
		return this.zt == 'selected';
	}

	dh(zt)
	{
		this.zt = zt;

		this.setAttribute('state', zt);
	}

	uq(e)
	{
		if (!this.sz)
		{
			super.uq(e);
		}
	}
}

class wh extends br
{
	constructor(lv)
	{
		super('wh', lv);

		this.value = lv.value;

		if (lv.oa)
		{
			this.pq(lv.oa);
		}

		if (lv.ew)
		{
			this.cd(lv.ew);
		}
	}

	pq(jf)
	{
		this.textContent = jf;
	}

	cd(fp)
	{
		const ew = tz.fn(fp);

		this.appendChild(ew);
	}
}

class cs extends wh
{
	constructor(lv)
	{
		super(lv);

		this.value = lv.value;
	}

	iz()
	{
		if (this.ui)
		{
			this.dh('initial');
		}
		else {
			this.dh('selected');
		}

		super.iz();
	}
}

class hw extends tm
{
	constructor(lv)
	{
		super('hw', lv);

		if (lv.bc)
		{
			this.setAttribute('href', lv.bc);
		}
	}
}

class dv extends tm
{
	constructor(lv)
	{
		super('dv', lv);
	}

	dh(zt)
	{
		this.setAttribute('state', zt);
	}
}

class zg extends na
{
	constructor(jy, fm)
	{
		super();

		this.jy;

		this.vc;

		this.children = [];

		this.po(jy, fm);
	}

	po(jy, fm)
	{
		jy.vd(this);

		if (fm)
		{
			jy.gv = new yt(this, fm);
		}

		this.jy = jy;

		this.nf();
	}

	wm(ri, oj)
	{
		this.vc = new ri;

		if (oj)
		{
			this.vc.gv = new yt(this, oj);
		}

		this.kr();
	}

	kr()
	{
	}

	nf()
	{
	}

	ij(bx)
	{
		if (this.cw)
		{
			this.cw.ij(bx);
		}

	}

	yr(bx)
	{
		if (this.cw)
		{
			this.cw.yr(bx);
		}

	}

	hf(bx)
	{
		if (this.cw)
		{
			this.cw.hf(bx);
		}

	}

	zq(bx)
	{
		if (this.cw)
		{
			this.cw.zq(bx);
		}

	}

	bl(ck)
	{
	}

	eu(dm, bx)
	{
		this.jy.appendChild(dm.jy.ua);
	}

	pz(dm)
	{
		this.gj.xp(dm);
	}

	fq()
	{
		this.gj.nw();
	}

	xp(uo, ex)
	{
		uo.vd(this);

		uo.ij();

		this.children.push(uo);

		this.jy.rv(uo.jy, ex);

		uo.yr();
	}

	nw()
	{
		this.children.pop().qd();
	}

	get gj()
	{
		let he = this;

		while (he.ti)
		{
			he = he.ti;
		}

		return he;
	}

	get vh()
	{
		return this.children.length;
	}

	get cw()
	{
		return ye.pb(this.children);
	}

	qd()
	{
		this.jy.xf();

		for (let uo of this.children)
		{
			uo.qd();
		}
	}
}

class xk extends zg
{
	constructor()
	{
		const jy = new tm('xe');

		super(jy);
	}

	nf()
	{
		this.zx = new wh({
			nz:['wmosh', 'rezer'],
			ew:'bn',
			zt:'hidden',
			sd:[this, 'vt', 'iz']
		});

		this.jy.rv(this.zx);
	}

	vt()
	{
		this.nw();

		this.fy();
	}

	dc()
	{
		this.zx.dh('hidden');
	}

	xp(uo)
	{
		super.xp(uo, 'yg');

		this.fy();
	}

	fy()
	{
		if (this.vh > 1)
		{
			this.zx.dh('initial');
		}
		else {
			this.zx.dh('hidden');
		}
	}




}

ye.so = function(nk, iu)
{
	nk.currentTime = iu;

	if (nk.paused)
	{
		nk.play();
	}
}

function openWindow(wr)
{
	let q = {
		width:500,
		height:screen.height,
		left:(screen.width - 500) / 2
	};

	q = ye.oz(q, ',');

	return window.open(wr, '', q);
}

class op
{
	constructor(q)
	{
		Object.assign(this, {
			pv: q,
			sj: fj.sj,
			sa: fj.nk.duration,
			mq:fj.nk.currentTime
		});
	}
}

class km
{
	constructor()
	{
		this.fa = navigator.platform.includes('Mac');
	}

	get ql()
	{
		return !this.fa ? document.body.clientWidth : window.innerWidth;
	}
}

const fj = {
	get rs()
	{
		return ['www', 'music'].includes(this.ni);
	},

	get ky()
	{
		return location.pathname == '/watch';
	},

	get nk()
	{
		if (!this.gd)
		{
			this.gd = vl.querySelector('video');
		}

		return this.gd || document.createElement('video');
	},

	get sj()
	{
		return ye.xq(rb[3], location.href);
	},

	get ni()
	{
		return location.host.split('.')[0];
	}
}

class va
{
	constructor(qz)
	{
		this.mt = document.createElement('div');

		this.cx = {};

		for (let tp of this.rm(qz).children)
		{
			const sx = tp.getAttribute('protoid');

			if (sx) {
				tp.removeAttribute('protoid');
			}
			else {
				throw 'ParseError: Missing protoId for child';
			}

			this.cx[sx] = tp.outerHTML;
		}
	}

	fn(fp, dp)
	{
		let zh = this.cx[fp];

		if (dp)
		{
			zh = zh.replace(rb[4], (_, ms) => dp[ms]);
		}

		return this.rm(zh);
	}

	rd(jf)
	{
		const s = document.createElement('span');

		s.textContent = jf;

		return s;
	}

	rm(zh)
	{
		this.mt.innerHTML = zh;

		return this.mt.children[0];
	}
}

class jl extends ue
{
	constructor()
	{
		super(document.documentElement);

		if ('fullscreenElement' in document)
		{
			this.di = 'fullscreenchange';
			this.ge = 'fullscreenElement';
		}
		else {
			this.di = 'webkitfullscreenchange';
			this.ge = 'webkitFullscreenElement';
		}

		this.zp();

		document.addEventListener(
			this.di, _ => this.zp()
		);
	}

	get pl()
	{
		return !!(document[this.ge]);
	}

	bi()
	{
		this.mj('nplpb');
	}

	rt(lw)
	{
		lw ? this.mj('shzly')
			: this.gw('shzly');
	}

	mi(e)
	{
		if (e.ctrlKey)
			return;

		e.preventDefault();

		e.stopPropagation();
	}

	zp()
	{
		this.setAttribute('cs-fullscreen', this.pl);
	}
}

class wl
{
	constructor()
	{
		this.sv = {
			yl: '/html/svg/nerdy.svg',
			ga: '/html/svg/hybrid.svg',
			tl: '/html/svg/coin.webp',
		}
	}

	xi()
	{
		return og.get('1').then(zf => {
			on = new pu(zf);
		});
	}

	hj(ck)
	{
		return chrome.runtime.getURL(this.sv[ck]);
	}

	zj()
	{
		fv.fc(
			ye.io()
		);
	}
}

class od extends zg
{
	constructor(zt)
	{
		const jy = new ao(460, 480);

		super(jy, qa);

		this.wm(ot);

		this.ji = false;

		ya.wf(this, [
			'pf', 'im', 'tw', 'ws'
		]);

		switch (true)
		{
			case (zt.we):
				return this.xp(new jm);

			case (zt.jq):
				return this.xp(new is);

			default:
				return this.oq();
		}
	}

	nf()
	{
		this.jy.rv(new wh({
			nz:['wmosh', 'cbwxz'],
			ew:'rc',
			sd:[this, 'nx', 'iz']
		}));

		document.body.appendChild(this.jy.ua);
	}

	kr()
	{
		this.vc.gq.then(
			pj => pj && this.jy.cz(pj)
		);
	}

	bl(ck)
	{
		switch (ck)
		{
			case 'pf':
				return this.le('pd');

			case 'im':
				return this.le('sr');

			case 'tw':
				return this.nx();

			case 'ws':
				return this.kn();
		}
	}

	oq()
	{
		this.xp(new go);
	}

	kn()
	{
		this.nw();

		this.oq();
	}

	le(bx)
	{
		this.cw.ij(bx);

		this.jy.eu();

		this.cw.yr(bx);

		this.ji = true;
	}

	nx(bx)
	{
		this.cw.hf(bx);

		this.jy.ce();
	}

	dn()
	{
		this.xp(new hq);
	}
}

class ot
{
	get gq()
	{
		return og.get('appPosition');
	}

	an(nz)
	{
		(nz.width > 100) && (nz.width = 100);

		(nz.left < 0) && (nz.left = 0);

		if (nz.left + nz.width > 100)
		{
			nz.left = 100 - nz.width;
		}

		og.set('appPosition', nz);
	}
}

const qa = function(td)
{
	return {
		ke(pj)
		{
			td.vc.an(pj);
		}
	}
}

class ze
{
	static ux(ms)
	{
		return ms == 'Enter';
	}

	static wq(ms)
	{
		return ['Control','Meta'].includes(ms);
	}
}

class za
{
	constructor()
	{
		window.addEventListener('keydown', e => this.mw(e), true);
	}

	mw(e)
	{
		this.es(e);

		const mv = this.mv;

		if (this.en)
		{
			if (mv == 'KeyS')
			{
				e.preventDefault();

				return ya.qt('pf');
			}

			if (mv == 'KeyE' && fj.ky)
			{
				e.preventDefault();

				return ya.qt('im');
			}

			if (mv == 'KeyX' && vl.pl)
			{
				return ya.qt('tw');
			}
		}

		if (mv == 'Escape')
		{
			return ya.qt('tw');
		}
	}

	es(e)
	{
		this.mv = e.code;

		this.en = !e.shiftKey && (e.ctrlKey + e.altKey + e.metaKey == 1);
	}

	get rg()
	{
		return this.mv == 'KeyV';
	}
}

class ed
{
	constructor()
	{
		this.rl = {};
	}

	qt(oc)
	{
		let uc = this.hp(oc);

		for (let dr of uc)
		{
			dr.bl(oc);
		}
	}

	wf(dr, ya)
	{
		if (typeof ya == 'string')
		{
			ya = [ya];
		}

		for (let ck of ya)
		{
			this.hp(ck).push(dr);
		}
	}

	hp(oc)
	{
		return this.rl[oc] || (this.rl[oc] = new rj);
	}
}

class ja extends zg
{
	constructor()
	{
		const jy = new tm('ny');

		super(jy);
	}

	uj()
	{
		fv.fd();

		this.fq();
	}
}

class jm extends zg
{
	constructor()
	{
		super(
			new tm('rn')
		);
	}

	nf()
	{
		this.jy.rv(
			new bg({
				jp:tc.hj('tl')
			}), 'fu'
		);

		const em = new wh({
			nz:'suaog',
			oa:'Update Now',
			sd:[this, 'aq', 'iz']
		});

		this.jy.rv(em, 'dz');
	}

	aq()
	{
		window.open('https://cs.lett.app/update');
	}
}

class sc extends zg
{
	constructor()
	{
		const jy = new tm('si');

		super(jy);
	}

	nf()
	{
		this.jy.rv(new wh({
			nz:['rezer', 'wmosh'],
			ew:'bn',
			sd:[this, 'fq', 'iz']
		}));
	}
}

class hq extends zg
{
	constructor()
	{
		const jy = new tm('fr');

		super(jy);
	}
}

class is extends zg
{
	constructor()
	{
		const jy = new tm('tm');

		super(jy);

		ya.wf(this, [
			'ry', 'zd'
		]);
	}

	nf()
	{
		switch (true)
		{
			case (!on.mc):
				return this.xp(new sn);

			case (!on.rh):
				return this.xp(new ta);
		}
	}

	async bl(ck)
	{
		await tc.xi();

		switch (ck)
		{
			case 'ry':
				return this.re();

			case 'zd':
				return this.dg();
		}
	}

	re()
	{
		if (!on.rh)
			return this.xp(new ta);

		this.sp();
	}

	dg()
	{
		!ev.ji && this.sp();
	}

	bj()
	{
		this.sp();
	}

	sp()
	{
		ya.qt('ws');
	}
}

class sn extends zg
{
	constructor()
	{
		const jy = new tm('qi');

		super(jy);
	}

	nf()
	{
		this.uf = new cr({
			sd:[this, 'ei', ['vs', 'zk']]
		});

		this.jy.rv(this.uf, 'ps');

		this.jy.rv(
			new bg({
				jp:tc.hj('yl')
			}), 'fu'
		);

		this.jy.rv(
			new hw({jf:'Need help?', bc:'https://cs.lett.app/api-key'}), 'ch'
		);
	}

	yr()
	{
		this.uf.focus();
	}

	ei(bx)
	{
		bx.hl('loading');

		if (!this.gn)
		{
			this.gn = true;

			fv.ei(bx.value).then(fk =>
			{
				!fk && bx.hl('error', 'try again');

				this.gn = false;
			});
		}
	}
}

class ta extends xk
{
	constructor()
	{
		super();

		this.xp(new su);
	}

	gs()
	{
		this.xp(new ok);
	}
}

class su extends zg
{
	constructor()
	{
		const jy = new tm('lm');

		super(jy);
	}

	nf()
	{
		const qu = [];

		qu.push(
			new wh({
				nz:'suaog',
				oa:'Remind me later',
				sd:[this, 'bj', 'iz']
			})
		);

		qu.push(
			new wh({
				nz:'suaog',
				oa:'Donate',
				sd:[this, 'gs', 'iz']
			})
		);

		on.tf && qu[0].ca(this, 'hr', 'iz');

		for (let ax of qu)
		{
			this.jy.rv(ax, 'dz');
		}

		this.jy.rv(
			new bg({
				jp:tc.hj('ga')
			}), 'fu'
		);
	}

	hr(bx)
	{
		bx.mj('axngo');

		setTimeout(
			_ => bx.gw('axngo'),
		500);
	}
}

class ok extends zg
{
	constructor()
	{
		const jy = new tm('xh');

		super(jy);

		this.mr;

		this.nb;
		this.ln;

		ya.wf(this, ['zd']);
	}

	bl(ck)
	{
		switch (ck)
		{
			case 'zd':
				return this.dg();
		}
	}

	nf()
	{
		this.jh = new dv({
			nz:'oailk'
		});

		this.jy.rv(this.jh);

		this.jy.rv(
			new bg({
				jp:tc.hj('tl')
			}), 'fu'
		);

		this.ds = new ld();

		const ov = new qb({nz:'jkvtu'});

		for (let ix of [5,10,15,20])
		{
			const th = new wh({
				nz:'fwtyb',
				jf:ix,
				value:ix,
				sd:[this, 'se', 'iz']
			});

			ov.rv(th);
		}

		this.ds.pa(ov);

		this.jy.rv(this.ds, 'ds');

		this.vi = new ld();

		this.vi.kl(
			new qb({jf:'Please select amount in USD'})
		);

		this.jy.rv(this.vi, 'vi');

		this.ox = new wh({
			nz:['suaog', 'wnwtm'],
			oa:'Donate with PayPal',
			sd:[this, 'yq', 'iz']
		});

		this.jy.rv(this.ox, 'dz');
	}

	hf()
	{
		this.gl();
	}

	se(bx)
	{
		const qn = this.mr;
		const xs = bx;

		if (qn != xs)
		{
			xs.dh('selected');

			if (qn)
			{
				qn.dh('initial');
			}

			this.mr = xs;
		}
	}

	yq()
	{
		if (this.al || !this.mr)
			return;

		this.al = true;

		this.jh.dh('loading');

		fv.fi(this.mr.value).then(wr =>
		{
			if (wr) {
				this.xy(wr);

				this.jh.dh('waiting');
			}
			else {
				this.jh.dh('error');
			}

			this.al = false;
		});
	}

	xy(wr)
	{
		this.gl();

		this.nb = openWindow(wr);

		this.ln = setInterval(
			_ => this.nb.closed && this.gl(),
		500);
	}

	gl()
	{
		if (this.nb)
		{
			this.nb.close();

			this.jh.dh('initial');

			clearInterval(this.ln);
		}
	}

	dg()
	{
		this.gl();

		setTimeout(_ => {
			this.qm('dc', this);
			this.ai();
		}, 900);
	}

	ai()
	{
		this.ds.pa(
			new qb({nz:'spncj',jf:'Thank You!'}), true
		);

		this.vi.kl(
			new qb({jf:'Your Payment was Received'}), true
		);

		setTimeout(_ => {
			this.ox.mj('liype');
			this.ox.textContent = 'Done';
			this.ox.ca(this, 'sp', 'iz');
		}, 200);
	}

	sp()
	{
		this.qm('sp', this);
	}

	qd()
	{
		super.qd();

		this.gl();
	}
}

class ld extends qb
{
	constructor()
	{
		super();

		this.zi();
	}

	zi()
	{
		this.fg = new qb({
			nz:'lqixh'
		});

		this.rv(this.fg);
	}

	pa(el, ag)
	{
		this.cf(el, 0, ag);
	}

	kl(el, ag)
	{
		this.cf(el, null, ag);
	}

	cf(el, ub, ag)
	{
		this.fg.rv(el, ub);

		if (ag)
		{
			this.ag(ub != null);
		}
	}

	ag(gk)
	{
		let cv, pi = this.fg;

		if (gk)
		{
			pi.style.transform = 'translateY(-100%)';

			cv = 'translateY(0)';
		}
		else {
			cv = 'translateY(-100%)';
		}

		setTimeout(_ => {
			pi.style.transition = 'transform 300ms';

			setTimeout(
				_ => pi.style.transform = cv,
			10);

			setTimeout(_ => {
				pi.style.transition = null;
			}, 300);
		}, 10);
	}
}

class nl extends zg
{
	constructor(aw)
	{
		const jy = new qk;

		super(jy);

		this.ku(aw).then(
			yx => this.lv(yx)
		);
	}

	nf()
	{
		this.jy.mj('xsout');
	}

	lv(yx)
	{
		this.jy.innerHTML = yx;
	}

	ku(aw)
	{
		const jx = ye.wt('/html/policies/%s.html', aw);

		return fv.ku(jx);
	}
}

class go extends zg
{
	constructor()
	{
		const jy = new tm('oe');

		super(jy);

		this.wm(sl, tg);

		ya.wf(this, 'im');
	}

	nf()
	{
		this.ne = new ur({
			placeholder:'type keywords here..',
		});
		this.ne.qh(this, 'ut', ['sh']);
		this.ne.qh(this, 'bf', ['zk', 'vs']);

		this.kd = new wh({
			nz:'ratgc',
			oa:'0',
			zt:'disabled',
			sd:[this, 'mg', 'iz']
		});

		this.vm = new mu(this);

		this.cu = new ks();
		this.cu.gv = new ej(this);

		this.um = new tm(this.jy.ab('bw'));
		this.um.rv(this.ne);
		this.um.rv(this.kd);

		this.yd = new tm(this.jy.ab('zl'));
		this.yd.rv(this.cu);
		this.yd.rv(this.vm);
	}

	ij()
	{
		if (this.it)
		{
			this.ty();

			if (this.vc.fh)
			{
				this.je('');
				this.cu.me();
			}
		}
	}

	yr(bx)
	{
		this.ne.focus();

		if (bx == 'pd')
		{
			this.ne.select();
		}
	}

	hf()
	{
		if (this.vm.nm)
		{
			this.vm.hn.fq();
		}
	}

	bl(ck)
	{
		if (ck == 'im')
			return this.ak();
	}

	ft(jy)
	{
		this.yd.vf(jy);
	}

	ut()
	{
		if (this.it)
		{
			this.ty();
		}
	}

	bf()
	{
		let q = this.bs();

		switch (true)
		{
			case (!q):
				return;

			case (!fj.ky):
				return this.cu.ph('sg');

			case (this.vc.bz):
			{
				if (!this.vc.av)
					return;

				if (q == this.vc.jr)
				{
					return this.cu.ph('wd');
				}
			}
		}

		this.gp(q);
	}

	yz()
	{
		if (!fj.ky)
			return this.cu.ph('sg');

		this.xc(':all');
	}

	get ar()
	{
		return this.vc.ar;
	}

	mg()
	{
		this.pz(new sc);
	}

	gp(q)
	{
		this.vc.search(q);
		this.cu.ph('zu');
	}

	ty()
	{
		this.vc.oi();
	}

	ak()
	{
		let q = ye.ea(fj.nk.currentTime);

		this.xc(q);
	}

	bs()
	{
		return this.ne.value;
	}

	je(q)
	{
		this.ne.value = q;
	}

	xc(q)
	{
		this.je(q);
		this.gp(q);
	}

	get it()
	{
		if (fj.ky && fj.sj != this.ud)
		{
			return !!(this.ud = fj.sj);
		}

		return false;
	}
}

class sl
{
	constructor()
	{
		this.et = et.ez('cg', this.hi.bind(this));

		this.jr = '';
		this.hx = 0;
		this.nj = 0;
		this.ng = 500;
		this.av = false;
		this.fh = false;
		this.ki = [];
		this.rp = 25;
	}

	hi(wx)
	{
		const zf = wx.zf;

		switch (wx.xd)
		{
			case 'kp':
				return this.bm(zf);

			case 'jw':
				return this.zm(zf);

			case 'yf':
				return this.ha(zf);
		}
	}

	get bz()
	{
		return this.av || this.dw('nj') < 500;
	}

	get ar()
	{
		return this.ki.splice(0, this.rp);
	}

	oi()
	{
		this.et.qs('jw', new op(''));
	}

	search(q)
	{
		this.ir(q);

		this.et.qs('kp', new op(q));
	}

	ha(yf)
	{
		this.uk();

		this.gv.ha(yf.ck);
	}

	bm(r)
	{
		this.uk();

		let tq = this.ng - this.dw('hx');

		(r.ju == 0) && (tq = 200);

		this.ki = r.ib;
		this.fh = (r.ju == 0);

		setTimeout(
			_ => this.gv.bm(r.ju, r.lq),
		tq);
	}

	zm(n)
	{
		this.gv.zm(n);
	}

	dt(vy)
	{
		this[vy] = Date.now();
	}

	dw(vy)
	{
		return Date.now() - this[vy];
	}

	ir(q)
	{
		this.jr = q;

		this.av = true;

		this.dt('hx');
	}

	uk()
	{
		this.av = false;

		this.dt('nj');
	}
}

class ks extends tm
{
	constructor()
	{
		super('tm', {
			nz:'bnqpc'
		});

		this.lj = {
			yh: 'no results match your query',
			zu: 'Searching...',
			wd: 'Searching still...',
			sg: 'You are not watching any video',
			fl: 'Invalid request',
			qc: 'This video has zero comments',
			yk: 'Comments are disabled for this video.',
			qx: 'check your internet connection',
			ns: 'service down for maintenance',
			zb: 'request timeout, try again',
			cq: 'feature not supported for this video',
			ma: 'invalid response from server, try again',
			yi: 'something is not working properly, if this persists please let us know',

			accessNotConfigured: 'the provided API key is not valid',
			rateLimitExceeded: 'daily rate limit exceeded',
			quotaExceeded: 'quota exceeded',
			processingFailure: 'comments server is not responding',
			videoNotFound: 'video not found',
			forbidden: 'your query could not be processed',
			commentsDisabled: 'Comments are disabled for this video.'
		};
	}

	ph(nu)
	{
		this.qp(nu);
	}

	cl(...vz)
	{
		this.pe(...vz);
	}

	wb(vb, vz)
	{
		this.pe(
			ye.wt(vb, vz)
		);
	}

	me()
	{
		this.innerHTML = '';
	}

	qp(ck)
	{
		let ra = this.lj[ck];

		if (!ra)
		{
			ra = this.lj.yi;
		}

		this.pe(ra);
	}

	pe(...jt)
	{
		const be = document.createDocumentFragment();

		for (let pr of jt)
		{
			let xt = null;

			if (typeof pr == 'string')
			{
				xt = document.createTextNode(pr);
			}
			else {
				xt = pr.ua;
			}

			be.appendChild(xt);
		}

		this.me();
		this.appendChild(be);

		this.gv.ts();
	}
}

class mu extends xu
{
	constructor(gb)
	{
		super(gb);

		this.nm = false;
	}

	vr(bx)
	{
		this.hn.bo(bx.sj, bx.ug);

		bx.gx.gc(this.hn);
	}

	bp(bx)
	{
		ye.so(fj.nk, bx.ug);
	}

	cj(lo)
	{
		const nq = [];

		for (let kt of lo)
		{
			for (let i = 0; i < kt.length; i++)
			{
				const lf = kt[i];

				if (lf.ik && !lf.hidden)
				{
					kt[i-1].bt = true;

					for (let k = i - 1; k > 0; k--)
					{
						if (kt[k].ck == lf.ik)
						{
							kt[k].bt = true;
						}
					}
				}
			}

			let lc = new tm('jg');

			for (let lf of kt)
			{
				lc.rv(
					new oy(lf)
				);
			}

			nq.push(lc);
		}

		return nq;
	}

	get hn()
	{
		if (!this.nm)
		{
			this.wg = new pc;
			this.nm = true;
		}

		return this.wg;
	}
}

const tg = function(td)
{
	return {
		zm(n)
		{
			if (0 < n && n < 1000)
			{
				td.kd.dh('normal')
			}
			else {
				td.kd.dh('disabled');
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

			td.kd.pq(n);
		},

		bm(ju, p)
		{
			this.zm(p);

			if (ju > 0)
			{
				td.vm.xz();

				return td.ft(td.vm);
			}

			if (p <= 0) switch (p)
			{
				case 0:
					return td.cu.ph('qc');

				case -1:
					return td.cu.ph('yk');

				case -2:
					return td.cu.ph('yh');
			}

			if (0 < p && p < 600)
			{
				if (p < 100)
				{
					const as = new hw({
						jf:ye.wt('%s comments', p),
						sd:[td, 'yz', 'iz']
					});

					return td.cu.cl('Nothing found in ', as);
				}

				return td.cu.wb('Nothing found in %s comments', p);
			}

			td.cu.ph('yh');
		},

		ha(da)
		{
			td.cu.ph(da);
		}
	}
}

const ej = function(td)
{
	return {
		ts()
		{
			td.ft(td.cu);
		}
	}
}

class pc extends tm
{
	constructor()
	{
		super('pc');

		this.xm = this.children[0];

		this.xm.onload = () => {
			try {
				const fo = this.xm.contentDocument.body;

				this.nk = fo.querySelector('video');

				fo.querySelector('.ytp-pause-overlay').hidden = true;
			}
			catch (e) {
			}
		}

		this.ud;
		this.by;
	}

	bo(sj, ug)
	{
		if (sj != this.ud) {
			this.xm.src = ye.wt(
				'https://www.youtube.com/embed/%s?start=%s&autoplay=1&iv_load_policy=3&modestbranding=1', [sj, ug]
			);
		}
		else if (this.nk) {
			ye.so(this.nk, ug);
		}

		this.ud = sj;
		this.by = ug;
	}

	fq()
	{
		if (this.sk)
		{
			this.hb();
		}
	}
}

class oy extends tm
{
	constructor(lf)
	{
		const fs = tz.fn('oy', lf);

		super(fs);

		this.zi(lf);
	}

	zi(lf)
	{
		this.qe(lf);
		this.np(lf);

		if (lf.pk)
		{
			if (lf.bt)
				this.mj('hmlvw');

			if (lf.hidden)
				this.mj('vxarm');
		}

		if (lf.yj)
		{
			this.mj('xyxsf');

			this.rv(
				new tm('ie', {nz:'qblex'}), 'my'
			);
		}
	}

	xg()
	{
		return this;
	}

	gc(hn)
	{
		this.rv(hn, 'mw');
	}

	qe(lf)
	{
		const om = lf.dx;

		const mf = om.replace(
			rb[5], ye.wt('s%s-', lf.pk ? 48 : 80)
		);

		this.rv(new bg({
			jp:mf,
			lb:om,
		}), 'eh');
	}

	np(lf)
	{
		const ef = new qb({
			nz:'psdzc',
			sb: {
				dir:lf.jb,
				lang:lf.yp
			}
		});

		let qr = Object.keys(lf.yu);

		if (qr.length)
		{
			qr = ye.wp(lf.jz, qr);

			for (let x of qr)
			{
				if (x in lf.yu)
				{
					ef.rv(
						this.zr(lf.yu[x])
					);
				}
				else {
					ef.appendChild(
						tz.rd(x)
					);
				}
			}
		}
		else {
			ef.textContent = lf.jz;
		}

		if (lf.pk && !lf.yj)
		{
			ef.mj('qizbz');

			ef.addEventListener('click',
				e => ef.gw('qizbz')
			);
		}

		this.rv(ef, 'mw');
	}

	zr(x)
	{
		let a;

		if (x.rw == 'zc' && x.sj != fj.sj)
		{
			x.rw = 'mo';
		}

		switch (x.rw)
		{
			case 'zc':
				a = new vx(x.jf, x.ug);
				a.qh(this, 'bp', 'iz');
				return a;

			case 'mo':
				a = new sw(x.jf, x.sj, x.ug);
				a.qh(this, 'vr', 'iz');
				return a;

			case 'uw':
				return new hw({
					jf:x.jf,
					bc:x.wr
				});
		}
	}
}

class sw extends hw
{
	constructor(jf, sj, ug)
	{
		super({
			nz:'nrnck',
			jf:jf
		});

		this.sj = sj;
		this.ug = ug;
	}

	get gx()
	{
		return this.qm('xg');
	}
}

class vx extends hw
{
	constructor(jf, ug)
	{
		super({
			nz:'nrnck',
			jf:jf
		});

		this.ug = ug;
	}
}

let tc;
let og;
let tx;
let et;
let fv;
let ya;
let on;
let ev;
let os;
let vl;
let tz;

if (fj.rs)
{
	tc = new wl;
	og = new ve;
	tx = new km;
	et = new wv;
	fv = new la;
	ya = new ed;
	vl = new jl;

	fv.qf().then(async az =>
	{
		if (az.zt.jq)
		{
			await tc.xi();
		}

		tz = new va(az.aj);

		ev = new od(az.zt);

		os = new za;

		fv.ml();

		tc.zj();
	});

	tx.fa && vl.bi();
}

const rb = [
	/%s/g,
	/(\d+)([a-z])/,
	/^(00:0?|0)/,
	/[?&]v=([\w\-]+)/,
	/{([A-Za-z\d]+)}/g,
	/\bs\d+\-/,
];