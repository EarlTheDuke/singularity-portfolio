(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const co="170",ss={ROTATE:0,DOLLY:1,PAN:2},es={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Rh=0,Nc=1,Ph=2,Su=1,wu=2,Wn=3,hi=0,$e=1,Re=2,In=0,rs=1,ve=2,Fc=3,Oc=4,Dh=5,Mi=100,Ih=101,Lh=102,Uh=103,Nh=104,Fh=200,Oh=201,Bh=202,kh=203,pa=204,ma=205,zh=206,Vh=207,Hh=208,Gh=209,Wh=210,Xh=211,qh=212,Yh=213,Zh=214,ga=0,_a=1,xa=2,ls=3,va=4,ya=5,Ma=6,Sa=7,bu=0,jh=1,$h=2,ci=0,Eu=1,Tu=2,Au=3,cc=4,Kh=5,Cu=6,Ru=7,Pu=300,us=301,hs=302,wa=303,ba=304,lo=306,qs=1e3,oi=1001,jr=1002,Xe=1003,Du=1004,Os=1005,En=1006,Hr=1007,ai=1008,Zn=1009,Iu=1010,Lu=1011,Ys=1012,lc=1013,wi=1014,Dn=1015,Ln=1016,uc=1017,hc=1018,ds=1020,Uu=35902,Nu=1021,Fu=1022,mn=1023,Ou=1024,Bu=1025,os=1026,fs=1027,dc=1028,fc=1029,ku=1030,pc=1031,mc=1033,Gr=33776,Wr=33777,Xr=33778,qr=33779,Ea=35840,Ta=35841,Aa=35842,Ca=35843,Ra=36196,Pa=37492,Da=37496,Ia=37808,La=37809,Ua=37810,Na=37811,Fa=37812,Oa=37813,Ba=37814,ka=37815,za=37816,Va=37817,Ha=37818,Ga=37819,Wa=37820,Xa=37821,Yr=36492,qa=36494,Ya=36495,zu=36283,Za=36284,ja=36285,$a=36286,Jh=2300,Qh=2301,td=3200,Vu=3201,Hu=0,ed=1,Xn="",be="srgb",vs="srgb-linear",uo="linear",fe="srgb",Li=7680,Bc=519,nd=512,id=513,sd=514,Gu=515,rd=516,od=517,ad=518,cd=519,Ka=35044,kc="300 es",qn=2e3,$r=2001;class Ei{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Ge=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let zc=1234567;const as=Math.PI/180,Zs=180/Math.PI;function Un(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ge[i&255]+Ge[i>>8&255]+Ge[i>>16&255]+Ge[i>>24&255]+"-"+Ge[t&255]+Ge[t>>8&255]+"-"+Ge[t>>16&15|64]+Ge[t>>24&255]+"-"+Ge[e&63|128]+Ge[e>>8&255]+"-"+Ge[e>>16&255]+Ge[e>>24&255]+Ge[n&255]+Ge[n>>8&255]+Ge[n>>16&255]+Ge[n>>24&255]).toLowerCase()}function Ue(i,t,e){return Math.max(t,Math.min(e,i))}function gc(i,t){return(i%t+t)%t}function ld(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function ud(i,t,e){return i!==t?(e-i)/(t-i):0}function Hs(i,t,e){return(1-e)*i+e*t}function hd(i,t,e,n){return Hs(i,t,1-Math.exp(-e*n))}function dd(i,t=1){return t-Math.abs(gc(i,t*2)-t)}function fd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function pd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function md(i,t){return i+Math.floor(Math.random()*(t-i+1))}function gd(i,t){return i+Math.random()*(t-i)}function _d(i){return i*(.5-Math.random())}function xd(i){i!==void 0&&(zc=i);let t=zc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function vd(i){return i*as}function yd(i){return i*Zs}function Md(i){return(i&i-1)===0&&i!==0}function Sd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function wd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function bd(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),u=o((t+n)/2),h=r((t-n)/2),d=o((t-n)/2),f=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*u,c*h,c*d,a*l);break;case"YZY":i.set(c*d,a*u,c*h,a*l);break;case"ZXZ":i.set(c*h,c*d,a*u,a*l);break;case"XZX":i.set(a*u,c*g,c*f,a*l);break;case"YXY":i.set(c*f,a*u,c*g,a*l);break;case"ZYZ":i.set(c*g,c*f,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function bn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function pe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Kr={DEG2RAD:as,RAD2DEG:Zs,generateUUID:Un,clamp:Ue,euclideanModulo:gc,mapLinear:ld,inverseLerp:ud,lerp:Hs,damp:hd,pingpong:dd,smoothstep:fd,smootherstep:pd,randInt:md,randFloat:gd,randFloatSpread:_d,seededRandom:xd,degToRad:vd,radToDeg:yd,isPowerOfTwo:Md,ceilPowerOfTwo:Sd,floorPowerOfTwo:wd,setQuaternionFromProperEuler:bd,normalize:pe,denormalize:bn};class ft{constructor(t=0,e=0){ft.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ue(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Jt{constructor(t,e,n,s,r,o,a,c,l){Jt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],h=n[7],d=n[2],f=n[5],g=n[8],x=s[0],m=s[3],p=s[6],w=s[1],M=s[4],_=s[7],E=s[2],b=s[5],v=s[8];return r[0]=o*x+a*w+c*E,r[3]=o*m+a*M+c*b,r[6]=o*p+a*_+c*v,r[1]=l*x+u*w+h*E,r[4]=l*m+u*M+h*b,r[7]=l*p+u*_+h*v,r[2]=d*x+f*w+g*E,r[5]=d*m+f*M+g*b,r[8]=d*p+f*_+g*v,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*a*l-n*r*u+n*a*c+s*r*l-s*o*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=u*o-a*l,d=a*c-u*r,f=l*r-o*c,g=e*h+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return t[0]=h*x,t[1]=(s*l-u*n)*x,t[2]=(a*n-s*o)*x,t[3]=d*x,t[4]=(u*e-s*c)*x,t[5]=(s*r-a*e)*x,t[6]=f*x,t[7]=(n*c-l*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(vo.makeScale(t,e)),this}rotate(t){return this.premultiply(vo.makeRotation(-t)),this}translate(t,e){return this.premultiply(vo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const vo=new Jt;function Wu(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Jr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ed(){const i=Jr("canvas");return i.style.display="block",i}const Vc={};function Bs(i){i in Vc||(Vc[i]=!0,console.warn(i))}function Td(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Ad(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Cd(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const oe={enabled:!0,workingColorSpace:vs,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===fe&&(i.r=Yn(i.r),i.g=Yn(i.g),i.b=Yn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===fe&&(i.r=cs(i.r),i.g=cs(i.g),i.b=cs(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Xn?uo:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Yn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function cs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Hc=[.64,.33,.3,.6,.15,.06],Gc=[.2126,.7152,.0722],Wc=[.3127,.329],Xc=new Jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),qc=new Jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);oe.define({[vs]:{primaries:Hc,whitePoint:Wc,transfer:uo,toXYZ:Xc,fromXYZ:qc,luminanceCoefficients:Gc,workingColorSpaceConfig:{unpackColorSpace:be},outputColorSpaceConfig:{drawingBufferColorSpace:be}},[be]:{primaries:Hc,whitePoint:Wc,transfer:fe,toXYZ:Xc,fromXYZ:qc,luminanceCoefficients:Gc,outputColorSpaceConfig:{drawingBufferColorSpace:be}}});let Ui;class Rd{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ui===void 0&&(Ui=Jr("canvas")),Ui.width=t.width,Ui.height=t.height;const n=Ui.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ui}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Jr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Yn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Yn(e[n]/255)*255):e[n]=Yn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Pd=0;class _c{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Pd++}),this.uuid=Un(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(yo(s[o].image)):r.push(yo(s[o]))}else r=yo(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function yo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Rd.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Dd=0;class Ve extends Ei{constructor(t=Ve.DEFAULT_IMAGE,e=Ve.DEFAULT_MAPPING,n=oi,s=oi,r=En,o=ai,a=mn,c=Zn,l=Ve.DEFAULT_ANISOTROPY,u=Xn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Dd++}),this.uuid=Un(),this.name="",this.source=new _c(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ft(0,0),this.repeat=new ft(1,1),this.center=new ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Pu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case qs:t.x=t.x-Math.floor(t.x);break;case oi:t.x=t.x<0?0:1;break;case jr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case qs:t.y=t.y-Math.floor(t.y);break;case oi:t.y=t.y<0?0:1;break;case jr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ve.DEFAULT_IMAGE=null;Ve.DEFAULT_MAPPING=Pu;Ve.DEFAULT_ANISOTROPY=1;class ge{constructor(t=0,e=0,n=0,s=1){ge.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],u=c[4],h=c[8],d=c[1],f=c[5],g=c[9],x=c[2],m=c[6],p=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(l+1)/2,_=(f+1)/2,E=(p+1)/2,b=(u+d)/4,v=(h+x)/4,A=(g+m)/4;return M>_&&M>E?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=b/n,r=v/n):_>E?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=b/s,r=A/s):E<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),n=v/r,s=A/r),this.set(n,s,r,e),this}let w=Math.sqrt((m-g)*(m-g)+(h-x)*(h-x)+(d-u)*(d-u));return Math.abs(w)<.001&&(w=1),this.x=(m-g)/w,this.y=(h-x)/w,this.z=(d-u)/w,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Id extends Ei{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ge(0,0,t,e),this.scissorTest=!1,this.viewport=new ge(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:En,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Ve(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new _c(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class gn extends Id{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Xu extends Ve{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Xe,this.minFilter=Xe,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ld extends Ve{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Xe,this.minFilter=Xe,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class di{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],u=n[s+2],h=n[s+3];const d=r[o+0],f=r[o+1],g=r[o+2],x=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=x;return}if(h!==x||c!==d||l!==f||u!==g){let m=1-a;const p=c*d+l*f+u*g+h*x,w=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){const E=Math.sqrt(M),b=Math.atan2(E,p*w);m=Math.sin(m*b)/E,a=Math.sin(a*b)/E}const _=a*w;if(c=c*m+d*_,l=l*m+f*_,u=u*m+g*_,h=h*m+x*_,m===1-a){const E=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=E,l*=E,u*=E,h*=E}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],u=n[s+3],h=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+u*h+c*f-l*d,t[e+1]=c*g+u*d+l*h-a*f,t[e+2]=l*g+u*f+a*d-c*h,t[e+3]=u*g-a*h-c*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(s/2),h=a(r/2),d=c(n/2),f=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=d*u*h+l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h+d*f*g;break;case"YZX":this._x=d*u*h+l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h-d*f*g;break;case"XZY":this._x=d*u*h-l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],u=e[6],h=e[10],d=n+a+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(n>a&&n>h){const f=2*Math.sqrt(1+n-a-h);this._w=(u-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>h){const f=2*Math.sqrt(1+a-n-h);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+u)/f}else{const f=2*Math.sqrt(1+h-n-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ue(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-s*a,this._w=o*u-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-e)*u)/l,d=Math.sin(e*u)/l;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{constructor(t=0,e=0,n=0){C.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Yc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Yc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),u=2*(a*e-r*s),h=2*(r*n-o*e);return this.x=e+c*l+o*h-a*u,this.y=n+c*u+a*l-r*h,this.z=s+c*h+r*u-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Mo.copy(this).projectOnVector(t),this.sub(Mo)}reflect(t){return this.sub(Mo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ue(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Mo=new C,Yc=new di;class Ti{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Mn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Mn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Mn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Mn):Mn.fromBufferAttribute(r,o),Mn.applyMatrix4(t.matrixWorld),this.expandByPoint(Mn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),nr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),nr.copy(n.boundingBox)),nr.applyMatrix4(t.matrixWorld),this.union(nr)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Mn),Mn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ws),ir.subVectors(this.max,ws),Ni.subVectors(t.a,ws),Fi.subVectors(t.b,ws),Oi.subVectors(t.c,ws),Qn.subVectors(Fi,Ni),ti.subVectors(Oi,Fi),pi.subVectors(Ni,Oi);let e=[0,-Qn.z,Qn.y,0,-ti.z,ti.y,0,-pi.z,pi.y,Qn.z,0,-Qn.x,ti.z,0,-ti.x,pi.z,0,-pi.x,-Qn.y,Qn.x,0,-ti.y,ti.x,0,-pi.y,pi.x,0];return!So(e,Ni,Fi,Oi,ir)||(e=[1,0,0,0,1,0,0,0,1],!So(e,Ni,Fi,Oi,ir))?!1:(sr.crossVectors(Qn,ti),e=[sr.x,sr.y,sr.z],So(e,Ni,Fi,Oi,ir))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Mn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Mn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(kn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const kn=[new C,new C,new C,new C,new C,new C,new C,new C],Mn=new C,nr=new Ti,Ni=new C,Fi=new C,Oi=new C,Qn=new C,ti=new C,pi=new C,ws=new C,ir=new C,sr=new C,mi=new C;function So(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){mi.fromArray(i,r);const a=s.x*Math.abs(mi.x)+s.y*Math.abs(mi.y)+s.z*Math.abs(mi.z),c=t.dot(mi),l=e.dot(mi),u=n.dot(mi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const Ud=new Ti,bs=new C,wo=new C;class Ai{constructor(t=new C,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Ud.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;bs.subVectors(t,this.center);const e=bs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(bs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(wo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(bs.copy(t.center).add(wo)),this.expandByPoint(bs.copy(t.center).sub(wo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const zn=new C,bo=new C,rr=new C,ei=new C,Eo=new C,or=new C,To=new C;class Js{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,zn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=zn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(zn.copy(this.origin).addScaledVector(this.direction,e),zn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){bo.copy(t).add(e).multiplyScalar(.5),rr.copy(e).sub(t).normalize(),ei.copy(this.origin).sub(bo);const r=t.distanceTo(e)*.5,o=-this.direction.dot(rr),a=ei.dot(this.direction),c=-ei.dot(rr),l=ei.lengthSq(),u=Math.abs(1-o*o);let h,d,f,g;if(u>0)if(h=o*c-a,d=o*a-c,g=r*u,h>=0)if(d>=-g)if(d<=g){const x=1/u;h*=x,d*=x,f=h*(h+o*d+2*a)+d*(o*h+d+2*c)+l}else d=r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;else d=-r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;else d<=-g?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+l):d<=g?(h=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+l);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(bo).addScaledVector(rr,d),f}intersectSphere(t,e){zn.subVectors(t.center,this.origin);const n=zn.dot(this.direction),s=zn.dot(zn)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),u>=0?(r=(t.min.y-d.y)*u,o=(t.max.y-d.y)*u):(r=(t.max.y-d.y)*u,o=(t.min.y-d.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(t.min.z-d.z)*h,c=(t.max.z-d.z)*h):(a=(t.max.z-d.z)*h,c=(t.min.z-d.z)*h),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,zn)!==null}intersectTriangle(t,e,n,s,r){Eo.subVectors(e,t),or.subVectors(n,t),To.crossVectors(Eo,or);let o=this.direction.dot(To),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ei.subVectors(this.origin,t);const c=a*this.direction.dot(or.crossVectors(ei,or));if(c<0)return null;const l=a*this.direction.dot(Eo.cross(ei));if(l<0||c+l>o)return null;const u=-a*ei.dot(To);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class re{constructor(t,e,n,s,r,o,a,c,l,u,h,d,f,g,x,m){re.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,u,h,d,f,g,x,m)}set(t,e,n,s,r,o,a,c,l,u,h,d,f,g,x,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new re().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Bi.setFromMatrixColumn(t,0).length(),r=1/Bi.setFromMatrixColumn(t,1).length(),o=1/Bi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const d=o*u,f=o*h,g=a*u,x=a*h;e[0]=c*u,e[4]=-c*h,e[8]=l,e[1]=f+g*l,e[5]=d-x*l,e[9]=-a*c,e[2]=x-d*l,e[6]=g+f*l,e[10]=o*c}else if(t.order==="YXZ"){const d=c*u,f=c*h,g=l*u,x=l*h;e[0]=d+x*a,e[4]=g*a-f,e[8]=o*l,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=f*a-g,e[6]=x+d*a,e[10]=o*c}else if(t.order==="ZXY"){const d=c*u,f=c*h,g=l*u,x=l*h;e[0]=d-x*a,e[4]=-o*h,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*u,e[9]=x-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const d=o*u,f=o*h,g=a*u,x=a*h;e[0]=c*u,e[4]=g*l-f,e[8]=d*l+x,e[1]=c*h,e[5]=x*l+d,e[9]=f*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const d=o*c,f=o*l,g=a*c,x=a*l;e[0]=c*u,e[4]=x-d*h,e[8]=g*h+f,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-l*u,e[6]=f*h+g,e[10]=d-x*h}else if(t.order==="XZY"){const d=o*c,f=o*l,g=a*c,x=a*l;e[0]=c*u,e[4]=-h,e[8]=l*u,e[1]=d*h+x,e[5]=o*u,e[9]=f*h-g,e[2]=g*h-f,e[6]=a*u,e[10]=x*h+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Nd,t,Fd)}lookAt(t,e,n){const s=this.elements;return rn.subVectors(t,e),rn.lengthSq()===0&&(rn.z=1),rn.normalize(),ni.crossVectors(n,rn),ni.lengthSq()===0&&(Math.abs(n.z)===1?rn.x+=1e-4:rn.z+=1e-4,rn.normalize(),ni.crossVectors(n,rn)),ni.normalize(),ar.crossVectors(rn,ni),s[0]=ni.x,s[4]=ar.x,s[8]=rn.x,s[1]=ni.y,s[5]=ar.y,s[9]=rn.y,s[2]=ni.z,s[6]=ar.z,s[10]=rn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],h=n[5],d=n[9],f=n[13],g=n[2],x=n[6],m=n[10],p=n[14],w=n[3],M=n[7],_=n[11],E=n[15],b=s[0],v=s[4],A=s[8],S=s[12],y=s[1],R=s[5],W=s[9],q=s[13],z=s[2],O=s[6],B=s[10],j=s[14],H=s[3],Y=s[7],yt=s[11],X=s[15];return r[0]=o*b+a*y+c*z+l*H,r[4]=o*v+a*R+c*O+l*Y,r[8]=o*A+a*W+c*B+l*yt,r[12]=o*S+a*q+c*j+l*X,r[1]=u*b+h*y+d*z+f*H,r[5]=u*v+h*R+d*O+f*Y,r[9]=u*A+h*W+d*B+f*yt,r[13]=u*S+h*q+d*j+f*X,r[2]=g*b+x*y+m*z+p*H,r[6]=g*v+x*R+m*O+p*Y,r[10]=g*A+x*W+m*B+p*yt,r[14]=g*S+x*q+m*j+p*X,r[3]=w*b+M*y+_*z+E*H,r[7]=w*v+M*R+_*O+E*Y,r[11]=w*A+M*W+_*B+E*yt,r[15]=w*S+M*q+_*j+E*X,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],u=t[2],h=t[6],d=t[10],f=t[14],g=t[3],x=t[7],m=t[11],p=t[15];return g*(+r*c*h-s*l*h-r*a*d+n*l*d+s*a*f-n*c*f)+x*(+e*c*f-e*l*d+r*o*d-s*o*f+s*l*u-r*c*u)+m*(+e*l*h-e*a*f-r*o*h+n*o*f+r*a*u-n*l*u)+p*(-s*a*u-e*c*h+e*a*d+s*o*h-n*o*d+n*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=t[9],d=t[10],f=t[11],g=t[12],x=t[13],m=t[14],p=t[15],w=h*m*l-x*d*l+x*c*f-a*m*f-h*c*p+a*d*p,M=g*d*l-u*m*l-g*c*f+o*m*f+u*c*p-o*d*p,_=u*x*l-g*h*l+g*a*f-o*x*f-u*a*p+o*h*p,E=g*h*c-u*x*c-g*a*d+o*x*d+u*a*m-o*h*m,b=e*w+n*M+s*_+r*E;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const v=1/b;return t[0]=w*v,t[1]=(x*d*r-h*m*r-x*s*f+n*m*f+h*s*p-n*d*p)*v,t[2]=(a*m*r-x*c*r+x*s*l-n*m*l-a*s*p+n*c*p)*v,t[3]=(h*c*r-a*d*r-h*s*l+n*d*l+a*s*f-n*c*f)*v,t[4]=M*v,t[5]=(u*m*r-g*d*r+g*s*f-e*m*f-u*s*p+e*d*p)*v,t[6]=(g*c*r-o*m*r-g*s*l+e*m*l+o*s*p-e*c*p)*v,t[7]=(o*d*r-u*c*r+u*s*l-e*d*l-o*s*f+e*c*f)*v,t[8]=_*v,t[9]=(g*h*r-u*x*r-g*n*f+e*x*f+u*n*p-e*h*p)*v,t[10]=(o*x*r-g*a*r+g*n*l-e*x*l-o*n*p+e*a*p)*v,t[11]=(u*a*r-o*h*r-u*n*l+e*h*l+o*n*f-e*a*f)*v,t[12]=E*v,t[13]=(u*x*s-g*h*s+g*n*d-e*x*d-u*n*m+e*h*m)*v,t[14]=(g*a*s-o*x*s-g*n*c+e*x*c+o*n*m-e*a*m)*v,t[15]=(o*h*s-u*a*s+u*n*c-e*h*c-o*n*d+e*a*d)*v,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+n,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,u=o+o,h=a+a,d=r*l,f=r*u,g=r*h,x=o*u,m=o*h,p=a*h,w=c*l,M=c*u,_=c*h,E=n.x,b=n.y,v=n.z;return s[0]=(1-(x+p))*E,s[1]=(f+_)*E,s[2]=(g-M)*E,s[3]=0,s[4]=(f-_)*b,s[5]=(1-(d+p))*b,s[6]=(m+w)*b,s[7]=0,s[8]=(g+M)*v,s[9]=(m-w)*v,s[10]=(1-(d+x))*v,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Bi.set(s[0],s[1],s[2]).length();const o=Bi.set(s[4],s[5],s[6]).length(),a=Bi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Sn.copy(this);const l=1/r,u=1/o,h=1/a;return Sn.elements[0]*=l,Sn.elements[1]*=l,Sn.elements[2]*=l,Sn.elements[4]*=u,Sn.elements[5]*=u,Sn.elements[6]*=u,Sn.elements[8]*=h,Sn.elements[9]*=h,Sn.elements[10]*=h,e.setFromRotationMatrix(Sn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=qn){const c=this.elements,l=2*r/(e-t),u=2*r/(n-s),h=(e+t)/(e-t),d=(n+s)/(n-s);let f,g;if(a===qn)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===$r)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=qn){const c=this.elements,l=1/(e-t),u=1/(n-s),h=1/(o-r),d=(e+t)*l,f=(n+s)*u;let g,x;if(a===qn)g=(o+r)*h,x=-2*h;else if(a===$r)g=r*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=x,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Bi=new C,Sn=new re,Nd=new C(0,0,0),Fd=new C(1,1,1),ni=new C,ar=new C,rn=new C,Zc=new re,jc=new di;class Nn{constructor(t=0,e=0,n=0,s=Nn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],h=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Ue(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ue(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ue(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ue(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Ue(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ue(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Zc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Zc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return jc.setFromEuler(this),this.setFromQuaternion(jc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Nn.DEFAULT_ORDER="XYZ";class xc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Od=0;const $c=new C,ki=new di,Vn=new re,cr=new C,Es=new C,Bd=new C,kd=new di,Kc=new C(1,0,0),Jc=new C(0,1,0),Qc=new C(0,0,1),tl={type:"added"},zd={type:"removed"},zi={type:"childadded",child:null},Ao={type:"childremoved",child:null};class De extends Ei{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Od++}),this.uuid=Un(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=De.DEFAULT_UP.clone();const t=new C,e=new Nn,n=new di,s=new C(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new re},normalMatrix:{value:new Jt}}),this.matrix=new re,this.matrixWorld=new re,this.matrixAutoUpdate=De.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=De.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ki.setFromAxisAngle(t,e),this.quaternion.multiply(ki),this}rotateOnWorldAxis(t,e){return ki.setFromAxisAngle(t,e),this.quaternion.premultiply(ki),this}rotateX(t){return this.rotateOnAxis(Kc,t)}rotateY(t){return this.rotateOnAxis(Jc,t)}rotateZ(t){return this.rotateOnAxis(Qc,t)}translateOnAxis(t,e){return $c.copy(t).applyQuaternion(this.quaternion),this.position.add($c.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Kc,t)}translateY(t){return this.translateOnAxis(Jc,t)}translateZ(t){return this.translateOnAxis(Qc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Vn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?cr.copy(t):cr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Es.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vn.lookAt(Es,cr,this.up):Vn.lookAt(cr,Es,this.up),this.quaternion.setFromRotationMatrix(Vn),s&&(Vn.extractRotation(s.matrixWorld),ki.setFromRotationMatrix(Vn),this.quaternion.premultiply(ki.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(tl),zi.child=t,this.dispatchEvent(zi),zi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(zd),Ao.child=t,this.dispatchEvent(Ao),Ao.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Vn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Vn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Vn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(tl),zi.child=t,this.dispatchEvent(zi),zi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Es,t,Bd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Es,kd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];r(t.shapes,h)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),h=o(t.shapes),d=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}De.DEFAULT_UP=new C(0,1,0);De.DEFAULT_MATRIX_AUTO_UPDATE=!0;De.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const wn=new C,Hn=new C,Co=new C,Gn=new C,Vi=new C,Hi=new C,el=new C,Ro=new C,Po=new C,Do=new C,Io=new ge,Lo=new ge,Uo=new ge;class cn{constructor(t=new C,e=new C,n=new C){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),wn.subVectors(t,e),s.cross(wn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){wn.subVectors(s,e),Hn.subVectors(n,e),Co.subVectors(t,e);const o=wn.dot(wn),a=wn.dot(Hn),c=wn.dot(Co),l=Hn.dot(Hn),u=Hn.dot(Co),h=o*l-a*a;if(h===0)return r.set(0,0,0),null;const d=1/h,f=(l*c-a*u)*d,g=(o*u-a*c)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Gn)===null?!1:Gn.x>=0&&Gn.y>=0&&Gn.x+Gn.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,Gn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Gn.x),c.addScaledVector(o,Gn.y),c.addScaledVector(a,Gn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return Io.setScalar(0),Lo.setScalar(0),Uo.setScalar(0),Io.fromBufferAttribute(t,e),Lo.fromBufferAttribute(t,n),Uo.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Io,r.x),o.addScaledVector(Lo,r.y),o.addScaledVector(Uo,r.z),o}static isFrontFacing(t,e,n,s){return wn.subVectors(n,e),Hn.subVectors(t,e),wn.cross(Hn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return wn.subVectors(this.c,this.b),Hn.subVectors(this.a,this.b),wn.cross(Hn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return cn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return cn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return cn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return cn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return cn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;Vi.subVectors(s,n),Hi.subVectors(r,n),Ro.subVectors(t,n);const c=Vi.dot(Ro),l=Hi.dot(Ro);if(c<=0&&l<=0)return e.copy(n);Po.subVectors(t,s);const u=Vi.dot(Po),h=Hi.dot(Po);if(u>=0&&h<=u)return e.copy(s);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(n).addScaledVector(Vi,o);Do.subVectors(t,r);const f=Vi.dot(Do),g=Hi.dot(Do);if(g>=0&&f<=g)return e.copy(r);const x=f*l-c*g;if(x<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(Hi,a);const m=u*g-f*h;if(m<=0&&h-u>=0&&f-g>=0)return el.subVectors(r,s),a=(h-u)/(h-u+(f-g)),e.copy(s).addScaledVector(el,a);const p=1/(m+x+d);return o=x*p,a=d*p,e.copy(n).addScaledVector(Vi,o).addScaledVector(Hi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const qu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ii={h:0,s:0,l:0},lr={h:0,s:0,l:0};function No(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Wt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=be){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,oe.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=oe.workingColorSpace){return this.r=t,this.g=e,this.b=n,oe.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=oe.workingColorSpace){if(t=gc(t,1),e=Ue(e,0,1),n=Ue(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=No(o,r,t+1/3),this.g=No(o,r,t),this.b=No(o,r,t-1/3)}return oe.toWorkingColorSpace(this,s),this}setStyle(t,e=be){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=be){const n=qu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Yn(t.r),this.g=Yn(t.g),this.b=Yn(t.b),this}copyLinearToSRGB(t){return this.r=cs(t.r),this.g=cs(t.g),this.b=cs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=be){return oe.fromWorkingColorSpace(We.copy(this),t),Math.round(Ue(We.r*255,0,255))*65536+Math.round(Ue(We.g*255,0,255))*256+Math.round(Ue(We.b*255,0,255))}getHexString(t=be){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=oe.workingColorSpace){oe.fromWorkingColorSpace(We.copy(this),e);const n=We.r,s=We.g,r=We.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case n:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-n)/h+2;break;case r:c=(n-s)/h+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=oe.workingColorSpace){return oe.fromWorkingColorSpace(We.copy(this),e),t.r=We.r,t.g=We.g,t.b=We.b,t}getStyle(t=be){oe.fromWorkingColorSpace(We.copy(this),t);const e=We.r,n=We.g,s=We.b;return t!==be?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ii),this.setHSL(ii.h+t,ii.s+e,ii.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ii),t.getHSL(lr);const n=Hs(ii.h,lr.h,e),s=Hs(ii.s,lr.s,e),r=Hs(ii.l,lr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const We=new Wt;Wt.NAMES=qu;let Vd=0;class fi extends Ei{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Vd++}),this.uuid=Un(),this.name="",this.blending=rs,this.side=hi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=pa,this.blendDst=ma,this.blendEquation=Mi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Wt(0,0,0),this.blendAlpha=0,this.depthFunc=ls,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Li,this.stencilZFail=Li,this.stencilZPass=Li,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==rs&&(n.blending=this.blending),this.side!==hi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==pa&&(n.blendSrc=this.blendSrc),this.blendDst!==ma&&(n.blendDst=this.blendDst),this.blendEquation!==Mi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ls&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Bc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Li&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Li&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Li&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class hn extends fi{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nn,this.combine=bu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Le=new C,ur=new ft;class Ne{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ka,this.updateRanges=[],this.gpuType=Dn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ur.fromBufferAttribute(this,e),ur.applyMatrix3(t),this.setXY(e,ur.x,ur.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix3(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix4(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyNormalMatrix(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.transformDirection(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=bn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=pe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=bn(e,this.array)),e}setX(t,e){return this.normalized&&(e=pe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=bn(e,this.array)),e}setY(t,e){return this.normalized&&(e=pe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=bn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=pe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=bn(e,this.array)),e}setW(t,e){return this.normalized&&(e=pe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=pe(e,this.array),n=pe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=pe(e,this.array),n=pe(n,this.array),s=pe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=pe(e,this.array),n=pe(n,this.array),s=pe(s,this.array),r=pe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ka&&(t.usage=this.usage),t}}class Yu extends Ne{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Zu extends Ne{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class $t extends Ne{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Hd=0;const pn=new re,Fo=new De,Gi=new C,on=new Ti,Ts=new Ti,ze=new C;class Se extends Ei{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Hd++}),this.uuid=Un(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Wu(t)?Zu:Yu)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Jt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return pn.makeRotationFromQuaternion(t),this.applyMatrix4(pn),this}rotateX(t){return pn.makeRotationX(t),this.applyMatrix4(pn),this}rotateY(t){return pn.makeRotationY(t),this.applyMatrix4(pn),this}rotateZ(t){return pn.makeRotationZ(t),this.applyMatrix4(pn),this}translate(t,e,n){return pn.makeTranslation(t,e,n),this.applyMatrix4(pn),this}scale(t,e,n){return pn.makeScale(t,e,n),this.applyMatrix4(pn),this}lookAt(t){return Fo.lookAt(t),Fo.updateMatrix(),this.applyMatrix4(Fo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gi).negate(),this.translate(Gi.x,Gi.y,Gi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new $t(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ti);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];on.setFromBufferAttribute(r),this.morphTargetsRelative?(ze.addVectors(this.boundingBox.min,on.min),this.boundingBox.expandByPoint(ze),ze.addVectors(this.boundingBox.max,on.max),this.boundingBox.expandByPoint(ze)):(this.boundingBox.expandByPoint(on.min),this.boundingBox.expandByPoint(on.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ai);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(t){const n=this.boundingSphere.center;if(on.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Ts.setFromBufferAttribute(a),this.morphTargetsRelative?(ze.addVectors(on.min,Ts.min),on.expandByPoint(ze),ze.addVectors(on.max,Ts.max),on.expandByPoint(ze)):(on.expandByPoint(Ts.min),on.expandByPoint(Ts.max))}on.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)ze.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(ze));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)ze.fromBufferAttribute(a,l),c&&(Gi.fromBufferAttribute(t,l),ze.add(Gi)),s=Math.max(s,n.distanceToSquared(ze))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ne(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let A=0;A<n.count;A++)a[A]=new C,c[A]=new C;const l=new C,u=new C,h=new C,d=new ft,f=new ft,g=new ft,x=new C,m=new C;function p(A,S,y){l.fromBufferAttribute(n,A),u.fromBufferAttribute(n,S),h.fromBufferAttribute(n,y),d.fromBufferAttribute(r,A),f.fromBufferAttribute(r,S),g.fromBufferAttribute(r,y),u.sub(l),h.sub(l),f.sub(d),g.sub(d);const R=1/(f.x*g.y-g.x*f.y);isFinite(R)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(R),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(R),a[A].add(x),a[S].add(x),a[y].add(x),c[A].add(m),c[S].add(m),c[y].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let A=0,S=w.length;A<S;++A){const y=w[A],R=y.start,W=y.count;for(let q=R,z=R+W;q<z;q+=3)p(t.getX(q+0),t.getX(q+1),t.getX(q+2))}const M=new C,_=new C,E=new C,b=new C;function v(A){E.fromBufferAttribute(s,A),b.copy(E);const S=a[A];M.copy(S),M.sub(E.multiplyScalar(E.dot(S))).normalize(),_.crossVectors(b,S);const R=_.dot(c[A])<0?-1:1;o.setXYZW(A,M.x,M.y,M.z,R)}for(let A=0,S=w.length;A<S;++A){const y=w[A],R=y.start,W=y.count;for(let q=R,z=R+W;q<z;q+=3)v(t.getX(q+0)),v(t.getX(q+1)),v(t.getX(q+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ne(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new C,r=new C,o=new C,a=new C,c=new C,l=new C,u=new C,h=new C;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),x=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),a.add(u),c.add(u),l.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ze.fromBufferAttribute(t,e),ze.normalize(),t.setXYZ(e,ze.x,ze.y,ze.z)}toNonIndexed(){function t(a,c){const l=a.array,u=a.itemSize,h=a.normalized,d=new l.constructor(c.length*u);let f=0,g=0;for(let x=0,m=c.length;x<m;x++){a.isInterleavedBufferAttribute?f=c[x]*a.data.stride+a.offset:f=c[x]*u;for(let p=0;p<u;p++)d[g++]=l[f++]}return new Ne(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Se,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,h=l.length;u<h;u++){const d=l[u],f=t(d,n);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){const f=l[h];u.push(f.toJSON(t.data))}u.length>0&&(s[c]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(e))}const r=t.morphAttributes;for(const l in r){const u=[],h=r[l];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const nl=new re,gi=new Js,hr=new Ai,il=new C,dr=new C,fr=new C,pr=new C,Oo=new C,mr=new C,sl=new C,gr=new C;class N extends De{constructor(t=new Se,e=new hn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){mr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],h=r[c];u!==0&&(Oo.fromBufferAttribute(h,t),o?mr.addScaledVector(Oo,u):mr.addScaledVector(Oo.sub(e),u))}e.add(mr)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),hr.copy(n.boundingSphere),hr.applyMatrix4(r),gi.copy(t.ray).recast(t.near),!(hr.containsPoint(gi.origin)===!1&&(gi.intersectSphere(hr,il)===null||gi.origin.distanceToSquared(il)>(t.far-t.near)**2))&&(nl.copy(r).invert(),gi.copy(t.ray).applyMatrix4(nl),!(n.boundingBox!==null&&gi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,gi)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){const m=d[g],p=o[m.materialIndex],w=Math.max(m.start,f.start),M=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let _=w,E=M;_<E;_+=3){const b=a.getX(_),v=a.getX(_+1),A=a.getX(_+2);s=_r(this,p,t,n,l,u,h,b,v,A),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){const w=a.getX(m),M=a.getX(m+1),_=a.getX(m+2);s=_r(this,o,t,n,l,u,h,w,M,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){const m=d[g],p=o[m.materialIndex],w=Math.max(m.start,f.start),M=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let _=w,E=M;_<E;_+=3){const b=_,v=_+1,A=_+2;s=_r(this,p,t,n,l,u,h,b,v,A),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),x=Math.min(c.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){const w=m,M=m+1,_=m+2;s=_r(this,o,t,n,l,u,h,w,M,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Gd(i,t,e,n,s,r,o,a){let c;if(t.side===$e?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===hi,a),c===null)return null;gr.copy(a),gr.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(gr);return l<e.near||l>e.far?null:{distance:l,point:gr.clone(),object:i}}function _r(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,dr),i.getVertexPosition(c,fr),i.getVertexPosition(l,pr);const u=Gd(i,t,e,n,dr,fr,pr,sl);if(u){const h=new C;cn.getBarycoord(sl,dr,fr,pr,h),s&&(u.uv=cn.getInterpolatedAttribute(s,a,c,l,h,new ft)),r&&(u.uv1=cn.getInterpolatedAttribute(r,a,c,l,h,new ft)),o&&(u.normal=cn.getInterpolatedAttribute(o,a,c,l,h,new C),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new C,materialIndex:0};cn.getNormal(dr,fr,pr,d.normal),u.face=d,u.barycoord=h}return u}class bt extends Se{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],h=[];let d=0,f=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new $t(l,3)),this.setAttribute("normal",new $t(u,3)),this.setAttribute("uv",new $t(h,2));function g(x,m,p,w,M,_,E,b,v,A,S){const y=_/v,R=E/A,W=_/2,q=E/2,z=b/2,O=v+1,B=A+1;let j=0,H=0;const Y=new C;for(let yt=0;yt<B;yt++){const X=yt*R-q;for(let et=0;et<O;et++){const pt=et*y-W;Y[x]=pt*w,Y[m]=X*M,Y[p]=z,l.push(Y.x,Y.y,Y.z),Y[x]=0,Y[m]=0,Y[p]=b>0?1:-1,u.push(Y.x,Y.y,Y.z),h.push(et/v),h.push(1-yt/A),j+=1}}for(let yt=0;yt<A;yt++)for(let X=0;X<v;X++){const et=d+X+O*yt,pt=d+X+O*(yt+1),Q=d+(X+1)+O*(yt+1),it=d+(X+1)+O*yt;c.push(et,pt,it),c.push(pt,Q,it),H+=6}a.addGroup(f,H,S),f+=H,d+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new bt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ps(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ze(i){const t={};for(let e=0;e<i.length;e++){const n=ps(i[e]);for(const s in n)t[s]=n[s]}return t}function Wd(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function ju(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:oe.workingColorSpace}const ms={clone:ps,merge:Ze};var Xd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Oe extends fi{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Xd,this.fragmentShader=qd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ps(t.uniforms),this.uniformsGroups=Wd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class $u extends De{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new re,this.projectionMatrix=new re,this.projectionMatrixInverse=new re,this.coordinateSystem=qn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const si=new C,rl=new ft,ol=new ft;class an extends $u{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Zs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(as*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Zs*2*Math.atan(Math.tan(as*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){si.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(si.x,si.y).multiplyScalar(-t/si.z),si.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(si.x,si.y).multiplyScalar(-t/si.z)}getViewSize(t,e){return this.getViewBounds(t,rl,ol),e.subVectors(ol,rl)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(as*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Wi=-90,Xi=1;class Yd extends De{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new an(Wi,Xi,t,e);s.layers=this.layers,this.add(s);const r=new an(Wi,Xi,t,e);r.layers=this.layers,this.add(r);const o=new an(Wi,Xi,t,e);o.layers=this.layers,this.add(o);const a=new an(Wi,Xi,t,e);a.layers=this.layers,this.add(a);const c=new an(Wi,Xi,t,e);c.layers=this.layers,this.add(c);const l=new an(Wi,Xi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===qn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===$r)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,u]=this.children,h=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(h,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Ku extends Ve{constructor(t,e,n,s,r,o,a,c,l,u){t=t!==void 0?t:[],e=e!==void 0?e:us,super(t,e,n,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Zd extends gn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Ku(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:En}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new bt(5,5,5),r=new Oe({name:"CubemapFromEquirect",uniforms:ps(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:$e,blending:In});r.uniforms.tEquirect.value=e;const o=new N(s,r),a=e.minFilter;return e.minFilter===ai&&(e.minFilter=En),new Yd(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const Bo=new C,jd=new C,$d=new Jt;class Rn{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Bo.subVectors(n,e).cross(jd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Bo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||$d.getNormalMatrix(t),s=this.coplanarPoint(Bo).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const _i=new Ai,xr=new C;class vc{constructor(t=new Rn,e=new Rn,n=new Rn,s=new Rn,r=new Rn,o=new Rn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=qn){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],u=s[5],h=s[6],d=s[7],f=s[8],g=s[9],x=s[10],m=s[11],p=s[12],w=s[13],M=s[14],_=s[15];if(n[0].setComponents(c-r,d-l,m-f,_-p).normalize(),n[1].setComponents(c+r,d+l,m+f,_+p).normalize(),n[2].setComponents(c+o,d+u,m+g,_+w).normalize(),n[3].setComponents(c-o,d-u,m-g,_-w).normalize(),n[4].setComponents(c-a,d-h,m-x,_-M).normalize(),e===qn)n[5].setComponents(c+a,d+h,m+x,_+M).normalize();else if(e===$r)n[5].setComponents(a,h,x,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),_i.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),_i.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(_i)}intersectsSprite(t){return _i.center.set(0,0,0),_i.radius=.7071067811865476,_i.applyMatrix4(t.matrixWorld),this.intersectsSphere(_i)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(xr.x=s.normal.x>0?t.max.x:t.min.x,xr.y=s.normal.y>0?t.max.y:t.min.y,xr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(xr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ju(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Kd(i){const t=new WeakMap;function e(a,c){const l=a.array,u=a.usage,h=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,u),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,c,l){const u=c.array,h=c.updateRanges;if(i.bindBuffer(l,a),h.length===0)i.bufferSubData(l,0,u);else{h.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<h.length;f++){const g=h[d],x=h[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,h[d]=x)}h.length=d+1;for(let f=0,g=h.length;f<g;f++){const x=h[f];i.bufferSubData(l,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}class Gt extends Se{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,u=c+1,h=t/a,d=e/c,f=[],g=[],x=[],m=[];for(let p=0;p<u;p++){const w=p*d-o;for(let M=0;M<l;M++){const _=M*h-r;g.push(_,-w,0),x.push(0,0,1),m.push(M/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let w=0;w<a;w++){const M=w+l*p,_=w+l*(p+1),E=w+1+l*(p+1),b=w+1+l*p;f.push(M,_,b),f.push(_,E,b)}this.setIndex(f),this.setAttribute("position",new $t(g,3)),this.setAttribute("normal",new $t(x,3)),this.setAttribute("uv",new $t(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Gt(t.width,t.height,t.widthSegments,t.heightSegments)}}var Jd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Qd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,tf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ef=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,sf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,of=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,af=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,cf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,lf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,uf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,df=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ff=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,pf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,mf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_f=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,vf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,yf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Mf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Sf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,wf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,bf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Ef=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Tf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Af=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Cf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Rf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Pf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Df=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,If=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Lf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Uf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Nf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ff=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Of=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Bf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,kf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Vf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Hf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Gf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Wf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Xf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,qf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Yf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Zf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$f=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Kf=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Jf=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Qf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,tp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ep=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,np=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ip=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,rp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,op=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ap=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,cp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,up=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,dp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,fp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,mp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,_p=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,xp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Mp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Sp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,wp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,bp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ep=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Tp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ap=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Cp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Rp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Pp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Dp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ip=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Lp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Up=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Np=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Fp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Op=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Bp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,kp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,zp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Vp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Hp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Gp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Wp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Xp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,qp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Yp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Zp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,jp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,$p=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Kp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Jp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Qp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,em=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,im=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,rm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,om=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,am=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,cm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,lm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,um=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,hm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,dm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,fm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,_m=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,vm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ym=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Mm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,wm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Em=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Am=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Cm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Pm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Dm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Qt={alphahash_fragment:Jd,alphahash_pars_fragment:Qd,alphamap_fragment:tf,alphamap_pars_fragment:ef,alphatest_fragment:nf,alphatest_pars_fragment:sf,aomap_fragment:rf,aomap_pars_fragment:of,batching_pars_vertex:af,batching_vertex:cf,begin_vertex:lf,beginnormal_vertex:uf,bsdfs:hf,iridescence_fragment:df,bumpmap_pars_fragment:ff,clipping_planes_fragment:pf,clipping_planes_pars_fragment:mf,clipping_planes_pars_vertex:gf,clipping_planes_vertex:_f,color_fragment:xf,color_pars_fragment:vf,color_pars_vertex:yf,color_vertex:Mf,common:Sf,cube_uv_reflection_fragment:wf,defaultnormal_vertex:bf,displacementmap_pars_vertex:Ef,displacementmap_vertex:Tf,emissivemap_fragment:Af,emissivemap_pars_fragment:Cf,colorspace_fragment:Rf,colorspace_pars_fragment:Pf,envmap_fragment:Df,envmap_common_pars_fragment:If,envmap_pars_fragment:Lf,envmap_pars_vertex:Uf,envmap_physical_pars_fragment:Xf,envmap_vertex:Nf,fog_vertex:Ff,fog_pars_vertex:Of,fog_fragment:Bf,fog_pars_fragment:kf,gradientmap_pars_fragment:zf,lightmap_pars_fragment:Vf,lights_lambert_fragment:Hf,lights_lambert_pars_fragment:Gf,lights_pars_begin:Wf,lights_toon_fragment:qf,lights_toon_pars_fragment:Yf,lights_phong_fragment:Zf,lights_phong_pars_fragment:jf,lights_physical_fragment:$f,lights_physical_pars_fragment:Kf,lights_fragment_begin:Jf,lights_fragment_maps:Qf,lights_fragment_end:tp,logdepthbuf_fragment:ep,logdepthbuf_pars_fragment:np,logdepthbuf_pars_vertex:ip,logdepthbuf_vertex:sp,map_fragment:rp,map_pars_fragment:op,map_particle_fragment:ap,map_particle_pars_fragment:cp,metalnessmap_fragment:lp,metalnessmap_pars_fragment:up,morphinstance_vertex:hp,morphcolor_vertex:dp,morphnormal_vertex:fp,morphtarget_pars_vertex:pp,morphtarget_vertex:mp,normal_fragment_begin:gp,normal_fragment_maps:_p,normal_pars_fragment:xp,normal_pars_vertex:vp,normal_vertex:yp,normalmap_pars_fragment:Mp,clearcoat_normal_fragment_begin:Sp,clearcoat_normal_fragment_maps:wp,clearcoat_pars_fragment:bp,iridescence_pars_fragment:Ep,opaque_fragment:Tp,packing:Ap,premultiplied_alpha_fragment:Cp,project_vertex:Rp,dithering_fragment:Pp,dithering_pars_fragment:Dp,roughnessmap_fragment:Ip,roughnessmap_pars_fragment:Lp,shadowmap_pars_fragment:Up,shadowmap_pars_vertex:Np,shadowmap_vertex:Fp,shadowmask_pars_fragment:Op,skinbase_vertex:Bp,skinning_pars_vertex:kp,skinning_vertex:zp,skinnormal_vertex:Vp,specularmap_fragment:Hp,specularmap_pars_fragment:Gp,tonemapping_fragment:Wp,tonemapping_pars_fragment:Xp,transmission_fragment:qp,transmission_pars_fragment:Yp,uv_pars_fragment:Zp,uv_pars_vertex:jp,uv_vertex:$p,worldpos_vertex:Kp,background_vert:Jp,background_frag:Qp,backgroundCube_vert:tm,backgroundCube_frag:em,cube_vert:nm,cube_frag:im,depth_vert:sm,depth_frag:rm,distanceRGBA_vert:om,distanceRGBA_frag:am,equirect_vert:cm,equirect_frag:lm,linedashed_vert:um,linedashed_frag:hm,meshbasic_vert:dm,meshbasic_frag:fm,meshlambert_vert:pm,meshlambert_frag:mm,meshmatcap_vert:gm,meshmatcap_frag:_m,meshnormal_vert:xm,meshnormal_frag:vm,meshphong_vert:ym,meshphong_frag:Mm,meshphysical_vert:Sm,meshphysical_frag:wm,meshtoon_vert:bm,meshtoon_frag:Em,points_vert:Tm,points_frag:Am,shadow_vert:Cm,shadow_frag:Rm,sprite_vert:Pm,sprite_frag:Dm},At={common:{diffuse:{value:new Wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Jt}},envmap:{envMap:{value:null},envMapRotation:{value:new Jt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Jt},normalScale:{value:new ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0},uvTransform:{value:new Jt}},sprite:{diffuse:{value:new Wt(16777215)},opacity:{value:1},center:{value:new ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}}},Pn={basic:{uniforms:Ze([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.fog]),vertexShader:Qt.meshbasic_vert,fragmentShader:Qt.meshbasic_frag},lambert:{uniforms:Ze([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.fog,At.lights,{emissive:{value:new Wt(0)}}]),vertexShader:Qt.meshlambert_vert,fragmentShader:Qt.meshlambert_frag},phong:{uniforms:Ze([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.fog,At.lights,{emissive:{value:new Wt(0)},specular:{value:new Wt(1118481)},shininess:{value:30}}]),vertexShader:Qt.meshphong_vert,fragmentShader:Qt.meshphong_frag},standard:{uniforms:Ze([At.common,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.roughnessmap,At.metalnessmap,At.fog,At.lights,{emissive:{value:new Wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag},toon:{uniforms:Ze([At.common,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.gradientmap,At.fog,At.lights,{emissive:{value:new Wt(0)}}]),vertexShader:Qt.meshtoon_vert,fragmentShader:Qt.meshtoon_frag},matcap:{uniforms:Ze([At.common,At.bumpmap,At.normalmap,At.displacementmap,At.fog,{matcap:{value:null}}]),vertexShader:Qt.meshmatcap_vert,fragmentShader:Qt.meshmatcap_frag},points:{uniforms:Ze([At.points,At.fog]),vertexShader:Qt.points_vert,fragmentShader:Qt.points_frag},dashed:{uniforms:Ze([At.common,At.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qt.linedashed_vert,fragmentShader:Qt.linedashed_frag},depth:{uniforms:Ze([At.common,At.displacementmap]),vertexShader:Qt.depth_vert,fragmentShader:Qt.depth_frag},normal:{uniforms:Ze([At.common,At.bumpmap,At.normalmap,At.displacementmap,{opacity:{value:1}}]),vertexShader:Qt.meshnormal_vert,fragmentShader:Qt.meshnormal_frag},sprite:{uniforms:Ze([At.sprite,At.fog]),vertexShader:Qt.sprite_vert,fragmentShader:Qt.sprite_frag},background:{uniforms:{uvTransform:{value:new Jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qt.background_vert,fragmentShader:Qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Jt}},vertexShader:Qt.backgroundCube_vert,fragmentShader:Qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qt.cube_vert,fragmentShader:Qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qt.equirect_vert,fragmentShader:Qt.equirect_frag},distanceRGBA:{uniforms:Ze([At.common,At.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qt.distanceRGBA_vert,fragmentShader:Qt.distanceRGBA_frag},shadow:{uniforms:Ze([At.lights,At.fog,{color:{value:new Wt(0)},opacity:{value:1}}]),vertexShader:Qt.shadow_vert,fragmentShader:Qt.shadow_frag}};Pn.physical={uniforms:Ze([Pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Jt},clearcoatNormalScale:{value:new ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Jt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Jt},sheen:{value:0},sheenColor:{value:new Wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Jt},transmissionSamplerSize:{value:new ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Jt},attenuationDistance:{value:0},attenuationColor:{value:new Wt(0)},specularColor:{value:new Wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Jt},anisotropyVector:{value:new ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Jt}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag};const vr={r:0,b:0,g:0},xi=new Nn,Im=new re;function Lm(i,t,e,n,s,r,o){const a=new Wt(0);let c=r===!0?0:1,l,u,h=null,d=0,f=null;function g(w){let M=w.isScene===!0?w.background:null;return M&&M.isTexture&&(M=(w.backgroundBlurriness>0?e:t).get(M)),M}function x(w){let M=!1;const _=g(w);_===null?p(a,c):_&&_.isColor&&(p(_,1),M=!0);const E=i.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(w,M){const _=g(M);_&&(_.isCubeTexture||_.mapping===lo)?(u===void 0&&(u=new N(new bt(1,1,1),new Oe({name:"BackgroundCubeMaterial",uniforms:ps(Pn.backgroundCube.uniforms),vertexShader:Pn.backgroundCube.vertexShader,fragmentShader:Pn.backgroundCube.fragmentShader,side:$e,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(E,b,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),xi.copy(M.backgroundRotation),xi.x*=-1,xi.y*=-1,xi.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(xi.y*=-1,xi.z*=-1),u.material.uniforms.envMap.value=_,u.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Im.makeRotationFromEuler(xi)),u.material.toneMapped=oe.getTransfer(_.colorSpace)!==fe,(h!==_||d!==_.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,h=_,d=_.version,f=i.toneMapping),u.layers.enableAll(),w.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new N(new Gt(2,2),new Oe({name:"BackgroundMaterial",uniforms:ps(Pn.background.uniforms),vertexShader:Pn.background.vertexShader,fragmentShader:Pn.background.fragmentShader,side:hi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=oe.getTransfer(_.colorSpace)!==fe,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||d!==_.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,h=_,d=_.version,f=i.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null))}function p(w,M){w.getRGB(vr,ju(i)),n.buffers.color.setClear(vr.r,vr.g,vr.b,M,o)}return{getClearColor:function(){return a},setClearColor:function(w,M=1){a.set(w),c=M,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(w){c=w,p(a,c)},render:x,addToRenderList:m}}function Um(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(y,R,W,q,z){let O=!1;const B=h(q,W,R);r!==B&&(r=B,l(r.object)),O=f(y,q,W,z),O&&g(y,q,W,z),z!==null&&t.update(z,i.ELEMENT_ARRAY_BUFFER),(O||o)&&(o=!1,_(y,R,W,q),z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function c(){return i.createVertexArray()}function l(y){return i.bindVertexArray(y)}function u(y){return i.deleteVertexArray(y)}function h(y,R,W){const q=W.wireframe===!0;let z=n[y.id];z===void 0&&(z={},n[y.id]=z);let O=z[R.id];O===void 0&&(O={},z[R.id]=O);let B=O[q];return B===void 0&&(B=d(c()),O[q]=B),B}function d(y){const R=[],W=[],q=[];for(let z=0;z<e;z++)R[z]=0,W[z]=0,q[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:W,attributeDivisors:q,object:y,attributes:{},index:null}}function f(y,R,W,q){const z=r.attributes,O=R.attributes;let B=0;const j=W.getAttributes();for(const H in j)if(j[H].location>=0){const yt=z[H];let X=O[H];if(X===void 0&&(H==="instanceMatrix"&&y.instanceMatrix&&(X=y.instanceMatrix),H==="instanceColor"&&y.instanceColor&&(X=y.instanceColor)),yt===void 0||yt.attribute!==X||X&&yt.data!==X.data)return!0;B++}return r.attributesNum!==B||r.index!==q}function g(y,R,W,q){const z={},O=R.attributes;let B=0;const j=W.getAttributes();for(const H in j)if(j[H].location>=0){let yt=O[H];yt===void 0&&(H==="instanceMatrix"&&y.instanceMatrix&&(yt=y.instanceMatrix),H==="instanceColor"&&y.instanceColor&&(yt=y.instanceColor));const X={};X.attribute=yt,yt&&yt.data&&(X.data=yt.data),z[H]=X,B++}r.attributes=z,r.attributesNum=B,r.index=q}function x(){const y=r.newAttributes;for(let R=0,W=y.length;R<W;R++)y[R]=0}function m(y){p(y,0)}function p(y,R){const W=r.newAttributes,q=r.enabledAttributes,z=r.attributeDivisors;W[y]=1,q[y]===0&&(i.enableVertexAttribArray(y),q[y]=1),z[y]!==R&&(i.vertexAttribDivisor(y,R),z[y]=R)}function w(){const y=r.newAttributes,R=r.enabledAttributes;for(let W=0,q=R.length;W<q;W++)R[W]!==y[W]&&(i.disableVertexAttribArray(W),R[W]=0)}function M(y,R,W,q,z,O,B){B===!0?i.vertexAttribIPointer(y,R,W,z,O):i.vertexAttribPointer(y,R,W,q,z,O)}function _(y,R,W,q){x();const z=q.attributes,O=W.getAttributes(),B=R.defaultAttributeValues;for(const j in O){const H=O[j];if(H.location>=0){let Y=z[j];if(Y===void 0&&(j==="instanceMatrix"&&y.instanceMatrix&&(Y=y.instanceMatrix),j==="instanceColor"&&y.instanceColor&&(Y=y.instanceColor)),Y!==void 0){const yt=Y.normalized,X=Y.itemSize,et=t.get(Y);if(et===void 0)continue;const pt=et.buffer,Q=et.type,it=et.bytesPerElement,_t=Q===i.INT||Q===i.UNSIGNED_INT||Y.gpuType===lc;if(Y.isInterleavedBufferAttribute){const st=Y.data,rt=st.stride,L=Y.offset;if(st.isInstancedInterleavedBuffer){for(let U=0;U<H.locationSize;U++)p(H.location+U,st.meshPerAttribute);y.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let U=0;U<H.locationSize;U++)m(H.location+U);i.bindBuffer(i.ARRAY_BUFFER,pt);for(let U=0;U<H.locationSize;U++)M(H.location+U,X/H.locationSize,Q,yt,rt*it,(L+X/H.locationSize*U)*it,_t)}else{if(Y.isInstancedBufferAttribute){for(let st=0;st<H.locationSize;st++)p(H.location+st,Y.meshPerAttribute);y.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let st=0;st<H.locationSize;st++)m(H.location+st);i.bindBuffer(i.ARRAY_BUFFER,pt);for(let st=0;st<H.locationSize;st++)M(H.location+st,X/H.locationSize,Q,yt,X*it,X/H.locationSize*st*it,_t)}}else if(B!==void 0){const yt=B[j];if(yt!==void 0)switch(yt.length){case 2:i.vertexAttrib2fv(H.location,yt);break;case 3:i.vertexAttrib3fv(H.location,yt);break;case 4:i.vertexAttrib4fv(H.location,yt);break;default:i.vertexAttrib1fv(H.location,yt)}}}}w()}function E(){A();for(const y in n){const R=n[y];for(const W in R){const q=R[W];for(const z in q)u(q[z].object),delete q[z];delete R[W]}delete n[y]}}function b(y){if(n[y.id]===void 0)return;const R=n[y.id];for(const W in R){const q=R[W];for(const z in q)u(q[z].object),delete q[z];delete R[W]}delete n[y.id]}function v(y){for(const R in n){const W=n[R];if(W[y.id]===void 0)continue;const q=W[y.id];for(const z in q)u(q[z].object),delete q[z];delete W[y.id]}}function A(){S(),o=!0,r!==s&&(r=s,l(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:A,resetDefaultState:S,dispose:E,releaseStatesOfGeometry:b,releaseStatesOfProgram:v,initAttributes:x,enableAttribute:m,disableUnusedAttributes:w}}function Nm(i,t,e){let n;function s(l){n=l}function r(l,u){i.drawArrays(n,l,u),e.update(u,n,1)}function o(l,u,h){h!==0&&(i.drawArraysInstanced(n,l,u,h),e.update(u,n,h))}function a(l,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,h);let f=0;for(let g=0;g<h;g++)f+=u[g];e.update(f,n,1)}function c(l,u,h,d){if(h===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)o(l[g],u[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,u,0,d,0,h);let g=0;for(let x=0;x<h;x++)g+=u[x]*d[x];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Fm(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const v=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(v.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(v){return!(v!==mn&&n.convert(v)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(v){const A=v===Ln&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(v!==Zn&&n.convert(v)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&v!==Dn&&!A)}function c(v){if(v==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";v="mediump"}return v==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),w=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=g>0,b=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:w,maxVaryings:M,maxFragmentUniforms:_,vertexTextures:E,maxSamples:b}}function Om(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new Rn,a=new Jt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||n!==0||s;return s=d,n=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){e=u(h,d,0)},this.setState=function(h,d,f){const g=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,p=i.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):l();else{const w=r?0:n,M=w*4;let _=p.clippingState||null;c.value=_,_=u(g,d,M,f);for(let E=0;E!==M;++E)_[E]=e[E];p.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=w}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,d,f,g){const x=h!==null?h.length:0;let m=null;if(x!==0){if(m=c.value,g!==!0||m===null){const p=f+x*4,w=d.matrixWorldInverse;a.getNormalMatrix(w),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,_=f;M!==x;++M,_+=4)o.copy(h[M]).applyMatrix4(w,a),o.normal.toArray(m,_),m[_+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function Bm(i){let t=new WeakMap;function e(o,a){return a===wa?o.mapping=us:a===ba&&(o.mapping=hs),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===wa||a===ba)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Zd(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class ho extends $u{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const ns=4,al=[.125,.215,.35,.446,.526,.582],Si=20,ko=new ho,cl=new Wt;let zo=null,Vo=0,Ho=0,Go=!1;const yi=(1+Math.sqrt(5))/2,qi=1/yi,ll=[new C(-yi,qi,0),new C(yi,qi,0),new C(-qi,0,yi),new C(qi,0,yi),new C(0,yi,-qi),new C(0,yi,qi),new C(-1,1,-1),new C(1,1,-1),new C(-1,1,1),new C(1,1,1)];class Ja{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){zo=this._renderer.getRenderTarget(),Vo=this._renderer.getActiveCubeFace(),Ho=this._renderer.getActiveMipmapLevel(),Go=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=dl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(zo,Vo,Ho),this._renderer.xr.enabled=Go,t.scissorTest=!1,yr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===us||t.mapping===hs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),zo=this._renderer.getRenderTarget(),Vo=this._renderer.getActiveCubeFace(),Ho=this._renderer.getActiveMipmapLevel(),Go=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:En,minFilter:En,generateMipmaps:!1,type:Ln,format:mn,colorSpace:vs,depthBuffer:!1},s=ul(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ul(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=km(r)),this._blurMaterial=zm(r,t,e)}return s}_compileMaterial(t){const e=new N(this._lodPlanes[0],t);this._renderer.compile(e,ko)}_sceneToCubeUV(t,e,n,s){const a=new an(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(cl),u.toneMapping=ci,u.autoClear=!1;const f=new hn({name:"PMREM.Background",side:$e,depthWrite:!1,depthTest:!1}),g=new N(new bt,f);let x=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,x=!0):(f.color.copy(cl),x=!0);for(let p=0;p<6;p++){const w=p%3;w===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):w===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const M=this._cubeSize;yr(s,w*M,p>2?M:0,M,M),u.setRenderTarget(s),x&&u.render(g,a),u.render(t,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===us||t.mapping===hs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=dl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=hl());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new N(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;yr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,ko)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=ll[(s-r-1)%ll.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new N(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Si-1),x=r/g,m=isFinite(r)?1+Math.floor(u*x):Si;m>Si&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Si}`);const p=[];let w=0;for(let v=0;v<Si;++v){const A=v/x,S=Math.exp(-A*A/2);p.push(S),v===0?w+=S:v<m&&(w+=2*S)}for(let v=0;v<p.length;v++)p[v]=p[v]/w;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:M}=this;d.dTheta.value=g,d.mipInt.value=M-n;const _=this._sizeLods[s],E=3*_*(s>M-ns?s-M+ns:0),b=4*(this._cubeSize-_);yr(e,E,b,3*_,2*_),c.setRenderTarget(e),c.render(h,ko)}}function km(i){const t=[],e=[],n=[];let s=i;const r=i-ns+1+al.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let c=1/a;o>i-ns?c=al[o-i+ns-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,g=6,x=3,m=2,p=1,w=new Float32Array(x*g*f),M=new Float32Array(m*g*f),_=new Float32Array(p*g*f);for(let b=0;b<f;b++){const v=b%3*2/3-1,A=b>2?0:-1,S=[v,A,0,v+2/3,A,0,v+2/3,A+1,0,v,A,0,v+2/3,A+1,0,v,A+1,0];w.set(S,x*g*b),M.set(d,m*g*b);const y=[b,b,b,b,b,b];_.set(y,p*g*b)}const E=new Se;E.setAttribute("position",new Ne(w,x)),E.setAttribute("uv",new Ne(M,m)),E.setAttribute("faceIndex",new Ne(_,p)),t.push(E),s>ns&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function ul(i,t,e){const n=new gn(i,t,e);return n.texture.mapping=lo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function yr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function zm(i,t,e){const n=new Float32Array(Si),s=new C(0,1,0);return new Oe({name:"SphericalGaussianBlur",defines:{n:Si,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:yc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:In,depthTest:!1,depthWrite:!1})}function hl(){return new Oe({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:In,depthTest:!1,depthWrite:!1})}function dl(){return new Oe({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:In,depthTest:!1,depthWrite:!1})}function yc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Vm(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===wa||c===ba,u=c===us||c===hs;if(l||u){let h=t.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Ja(i)),h=l?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{const f=a.image;return l&&f&&f.height>0||u&&f&&s(f)?(e===null&&(e=new Ja(i)),h=l?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Hm(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Bs("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Gm(i,t,e,n){const s={},r=new WeakMap;function o(h){const d=h.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const x=d.morphAttributes[g];for(let m=0,p=x.length;m<p;m++)t.remove(x[m])}d.removeEventListener("dispose",o),delete s[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function c(h){const d=h.attributes;for(const g in d)t.update(d[g],i.ARRAY_BUFFER);const f=h.morphAttributes;for(const g in f){const x=f[g];for(let m=0,p=x.length;m<p;m++)t.update(x[m],i.ARRAY_BUFFER)}}function l(h){const d=[],f=h.index,g=h.attributes.position;let x=0;if(f!==null){const w=f.array;x=f.version;for(let M=0,_=w.length;M<_;M+=3){const E=w[M+0],b=w[M+1],v=w[M+2];d.push(E,b,b,v,v,E)}}else if(g!==void 0){const w=g.array;x=g.version;for(let M=0,_=w.length/3-1;M<_;M+=3){const E=M+0,b=M+1,v=M+2;d.push(E,b,b,v,v,E)}}else return;const m=new(Wu(d)?Zu:Yu)(d,1);m.version=x;const p=r.get(h);p&&t.remove(p),r.set(h,m)}function u(h){const d=r.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&l(h)}else l(h);return r.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function Wm(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,f){i.drawElements(n,f,r,d*o),e.update(f,n,1)}function l(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*o,g),e.update(f,n,g))}function u(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function h(d,f,g,x){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/o,f[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,x,0,g);let p=0;for(let w=0;w<g;w++)p+=f[w]*x[w];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Xm(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function qm(i,t,e){const n=new WeakMap,s=new ge;function r(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(a);if(d===void 0||d.count!==h){let y=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",y)};var f=y;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],w=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let _=0;g===!0&&(_=1),x===!0&&(_=2),m===!0&&(_=3);let E=a.attributes.position.count*_,b=1;E>t.maxTextureSize&&(b=Math.ceil(E/t.maxTextureSize),E=t.maxTextureSize);const v=new Float32Array(E*b*4*h),A=new Xu(v,E,b,h);A.type=Dn,A.needsUpdate=!0;const S=_*4;for(let R=0;R<h;R++){const W=p[R],q=w[R],z=M[R],O=E*b*4*R;for(let B=0;B<W.count;B++){const j=B*S;g===!0&&(s.fromBufferAttribute(W,B),v[O+j+0]=s.x,v[O+j+1]=s.y,v[O+j+2]=s.z,v[O+j+3]=0),x===!0&&(s.fromBufferAttribute(q,B),v[O+j+4]=s.x,v[O+j+5]=s.y,v[O+j+6]=s.z,v[O+j+7]=0),m===!0&&(s.fromBufferAttribute(z,B),v[O+j+8]=s.x,v[O+j+9]=s.y,v[O+j+10]=s.z,v[O+j+11]=z.itemSize===4?s.w:1)}}d={count:h,texture:A,size:new ft(E,b)},n.set(a,d),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const x=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",x),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Ym(i,t,e,n){let s=new WeakMap;function r(c){const l=n.render.frame,u=c.geometry,h=t.get(c,u);if(s.get(h)!==l&&(t.update(h),s.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return h}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}class Qu extends Ve{constructor(t,e,n,s,r,o,a,c,l,u=os){if(u!==os&&u!==fs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===os&&(n=wi),n===void 0&&u===fs&&(n=ds),super(null,s,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Xe,this.minFilter=c!==void 0?c:Xe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const th=new Ve,fl=new Qu(1,1),eh=new Xu,nh=new Ld,ih=new Ku,pl=[],ml=[],gl=new Float32Array(16),_l=new Float32Array(9),xl=new Float32Array(4);function ys(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=pl[s];if(r===void 0&&(r=new Float32Array(s),pl[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Be(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ke(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function fo(i,t){let e=ml[t];e===void 0&&(e=new Int32Array(t),ml[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Zm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function jm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;i.uniform2fv(this.addr,t),ke(e,t)}}function $m(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Be(e,t))return;i.uniform3fv(this.addr,t),ke(e,t)}}function Km(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;i.uniform4fv(this.addr,t),ke(e,t)}}function Jm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Be(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ke(e,t)}else{if(Be(e,n))return;xl.set(n),i.uniformMatrix2fv(this.addr,!1,xl),ke(e,n)}}function Qm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Be(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ke(e,t)}else{if(Be(e,n))return;_l.set(n),i.uniformMatrix3fv(this.addr,!1,_l),ke(e,n)}}function t0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Be(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ke(e,t)}else{if(Be(e,n))return;gl.set(n),i.uniformMatrix4fv(this.addr,!1,gl),ke(e,n)}}function e0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function n0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;i.uniform2iv(this.addr,t),ke(e,t)}}function i0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Be(e,t))return;i.uniform3iv(this.addr,t),ke(e,t)}}function s0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;i.uniform4iv(this.addr,t),ke(e,t)}}function r0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function o0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;i.uniform2uiv(this.addr,t),ke(e,t)}}function a0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Be(e,t))return;i.uniform3uiv(this.addr,t),ke(e,t)}}function c0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;i.uniform4uiv(this.addr,t),ke(e,t)}}function l0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(fl.compareFunction=Gu,r=fl):r=th,e.setTexture2D(t||r,s)}function u0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||nh,s)}function h0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||ih,s)}function d0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||eh,s)}function f0(i){switch(i){case 5126:return Zm;case 35664:return jm;case 35665:return $m;case 35666:return Km;case 35674:return Jm;case 35675:return Qm;case 35676:return t0;case 5124:case 35670:return e0;case 35667:case 35671:return n0;case 35668:case 35672:return i0;case 35669:case 35673:return s0;case 5125:return r0;case 36294:return o0;case 36295:return a0;case 36296:return c0;case 35678:case 36198:case 36298:case 36306:case 35682:return l0;case 35679:case 36299:case 36307:return u0;case 35680:case 36300:case 36308:case 36293:return h0;case 36289:case 36303:case 36311:case 36292:return d0}}function p0(i,t){i.uniform1fv(this.addr,t)}function m0(i,t){const e=ys(t,this.size,2);i.uniform2fv(this.addr,e)}function g0(i,t){const e=ys(t,this.size,3);i.uniform3fv(this.addr,e)}function _0(i,t){const e=ys(t,this.size,4);i.uniform4fv(this.addr,e)}function x0(i,t){const e=ys(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function v0(i,t){const e=ys(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function y0(i,t){const e=ys(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function M0(i,t){i.uniform1iv(this.addr,t)}function S0(i,t){i.uniform2iv(this.addr,t)}function w0(i,t){i.uniform3iv(this.addr,t)}function b0(i,t){i.uniform4iv(this.addr,t)}function E0(i,t){i.uniform1uiv(this.addr,t)}function T0(i,t){i.uniform2uiv(this.addr,t)}function A0(i,t){i.uniform3uiv(this.addr,t)}function C0(i,t){i.uniform4uiv(this.addr,t)}function R0(i,t,e){const n=this.cache,s=t.length,r=fo(e,s);Be(n,r)||(i.uniform1iv(this.addr,r),ke(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||th,r[o])}function P0(i,t,e){const n=this.cache,s=t.length,r=fo(e,s);Be(n,r)||(i.uniform1iv(this.addr,r),ke(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||nh,r[o])}function D0(i,t,e){const n=this.cache,s=t.length,r=fo(e,s);Be(n,r)||(i.uniform1iv(this.addr,r),ke(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||ih,r[o])}function I0(i,t,e){const n=this.cache,s=t.length,r=fo(e,s);Be(n,r)||(i.uniform1iv(this.addr,r),ke(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||eh,r[o])}function L0(i){switch(i){case 5126:return p0;case 35664:return m0;case 35665:return g0;case 35666:return _0;case 35674:return x0;case 35675:return v0;case 35676:return y0;case 5124:case 35670:return M0;case 35667:case 35671:return S0;case 35668:case 35672:return w0;case 35669:case 35673:return b0;case 5125:return E0;case 36294:return T0;case 36295:return A0;case 36296:return C0;case 35678:case 36198:case 36298:case 36306:case 35682:return R0;case 35679:case 36299:case 36307:return P0;case 35680:case 36300:case 36308:case 36293:return D0;case 36289:case 36303:case 36311:case 36292:return I0}}class U0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=f0(e.type)}}class N0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=L0(e.type)}}class F0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const Wo=/(\w+)(\])?(\[|\.)?/g;function vl(i,t){i.seq.push(t),i.map[t.id]=t}function O0(i,t,e){const n=i.name,s=n.length;for(Wo.lastIndex=0;;){const r=Wo.exec(n),o=Wo.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){vl(e,l===void 0?new U0(a,i,t):new N0(a,i,t));break}else{let h=e.map[a];h===void 0&&(h=new F0(a),vl(e,h)),e=h}}}class Zr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);O0(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function yl(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const B0=37297;let k0=0;function z0(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Ml=new Jt;function V0(i){oe._getMatrix(Ml,oe.workingColorSpace,i);const t=`mat3( ${Ml.elements.map(e=>e.toFixed(4))} )`;switch(oe.getTransfer(i)){case uo:return[t,"LinearTransferOETF"];case fe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Sl(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+z0(i.getShaderSource(t),o)}else return s}function H0(i,t){const e=V0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function G0(i,t){let e;switch(t){case Eu:e="Linear";break;case Tu:e="Reinhard";break;case Au:e="Cineon";break;case cc:e="ACESFilmic";break;case Cu:e="AgX";break;case Ru:e="Neutral";break;case Kh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Mr=new C;function W0(){oe.getLuminanceCoefficients(Mr);const i=Mr.x.toFixed(4),t=Mr.y.toFixed(4),e=Mr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function X0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ks).join(`
`)}function q0(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Y0(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function ks(i){return i!==""}function wl(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function bl(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Z0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qa(i){return i.replace(Z0,$0)}const j0=new Map;function $0(i,t){let e=Qt[t];if(e===void 0){const n=j0.get(t);if(n!==void 0)e=Qt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Qa(e)}const K0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function El(i){return i.replace(K0,J0)}function J0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Tl(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Q0(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Su?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===wu?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Wn&&(t="SHADOWMAP_TYPE_VSM"),t}function tg(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case us:case hs:t="ENVMAP_TYPE_CUBE";break;case lo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function eg(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case hs:t="ENVMAP_MODE_REFRACTION";break}return t}function ng(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case bu:t="ENVMAP_BLENDING_MULTIPLY";break;case jh:t="ENVMAP_BLENDING_MIX";break;case $h:t="ENVMAP_BLENDING_ADD";break}return t}function ig(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function sg(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=Q0(e),l=tg(e),u=eg(e),h=ng(e),d=ig(e),f=X0(e),g=q0(r),x=s.createProgram();let m,p,w=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ks).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ks).join(`
`),p.length>0&&(p+=`
`)):(m=[Tl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ks).join(`
`),p=[Tl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ci?"#define TONE_MAPPING":"",e.toneMapping!==ci?Qt.tonemapping_pars_fragment:"",e.toneMapping!==ci?G0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Qt.colorspace_pars_fragment,H0("linearToOutputTexel",e.outputColorSpace),W0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ks).join(`
`)),o=Qa(o),o=wl(o,e),o=bl(o,e),a=Qa(a),a=wl(a,e),a=bl(a,e),o=El(o),a=El(a),e.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===kc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===kc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=w+m+o,_=w+p+a,E=yl(s,s.VERTEX_SHADER,M),b=yl(s,s.FRAGMENT_SHADER,_);s.attachShader(x,E),s.attachShader(x,b),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function v(R){if(i.debug.checkShaderErrors){const W=s.getProgramInfoLog(x).trim(),q=s.getShaderInfoLog(E).trim(),z=s.getShaderInfoLog(b).trim();let O=!0,B=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(O=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,E,b);else{const j=Sl(s,E,"vertex"),H=Sl(s,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+W+`
`+j+`
`+H)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(q===""||z==="")&&(B=!1);B&&(R.diagnostics={runnable:O,programLog:W,vertexShader:{log:q,prefix:m},fragmentShader:{log:z,prefix:p}})}s.deleteShader(E),s.deleteShader(b),A=new Zr(s,x),S=Y0(s,x)}let A;this.getUniforms=function(){return A===void 0&&v(this),A};let S;this.getAttributes=function(){return S===void 0&&v(this),S};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(x,B0)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=k0++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=E,this.fragmentShader=b,this}let rg=0;class og{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new ag(t),e.set(t,n)),n}}class ag{constructor(t){this.id=rg++,this.code=t,this.usedTimes=0}}function cg(i,t,e,n,s,r,o){const a=new xc,c=new og,l=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S){return l.add(S),S===0?"uv":`uv${S}`}function m(S,y,R,W,q){const z=W.fog,O=q.geometry,B=S.isMeshStandardMaterial?W.environment:null,j=(S.isMeshStandardMaterial?e:t).get(S.envMap||B),H=j&&j.mapping===lo?j.image.height:null,Y=g[S.type];S.precision!==null&&(f=s.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));const yt=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,X=yt!==void 0?yt.length:0;let et=0;O.morphAttributes.position!==void 0&&(et=1),O.morphAttributes.normal!==void 0&&(et=2),O.morphAttributes.color!==void 0&&(et=3);let pt,Q,it,_t;if(Y){const ae=Pn[Y];pt=ae.vertexShader,Q=ae.fragmentShader}else pt=S.vertexShader,Q=S.fragmentShader,c.update(S),it=c.getVertexShaderID(S),_t=c.getFragmentShaderID(S);const st=i.getRenderTarget(),rt=i.state.buffers.depth.getReversed(),L=q.isInstancedMesh===!0,U=q.isBatchedMesh===!0,G=!!S.map,k=!!S.matcap,Z=!!j,P=!!S.aoMap,mt=!!S.lightMap,ot=!!S.bumpMap,vt=!!S.normalMap,lt=!!S.displacementMap,V=!!S.emissiveMap,nt=!!S.metalnessMap,D=!!S.roughnessMap,T=S.anisotropy>0,K=S.clearcoat>0,ht=S.dispersion>0,gt=S.iridescence>0,dt=S.sheen>0,Ft=S.transmission>0,Tt=T&&!!S.anisotropyMap,Dt=K&&!!S.clearcoatMap,te=K&&!!S.clearcoatNormalMap,Mt=K&&!!S.clearcoatRoughnessMap,Lt=gt&&!!S.iridescenceMap,Xt=gt&&!!S.iridescenceThicknessMap,qt=dt&&!!S.sheenColorMap,Ut=dt&&!!S.sheenRoughnessMap,se=!!S.specularMap,Zt=!!S.specularColorMap,de=!!S.specularIntensityMap,$=Ft&&!!S.transmissionMap,Ct=Ft&&!!S.thicknessMap,ut=!!S.gradientMap,xt=!!S.alphaMap,Rt=S.alphaTest>0,Pt=!!S.alphaHash,Yt=!!S.extensions;let we=ci;S.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(we=i.toneMapping);const Ie={shaderID:Y,shaderType:S.type,shaderName:S.name,vertexShader:pt,fragmentShader:Q,defines:S.defines,customVertexShaderID:it,customFragmentShaderID:_t,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:U,batchingColor:U&&q._colorsTexture!==null,instancing:L,instancingColor:L&&q.instanceColor!==null,instancingMorph:L&&q.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:st===null?i.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:vs,alphaToCoverage:!!S.alphaToCoverage,map:G,matcap:k,envMap:Z,envMapMode:Z&&j.mapping,envMapCubeUVHeight:H,aoMap:P,lightMap:mt,bumpMap:ot,normalMap:vt,displacementMap:d&&lt,emissiveMap:V,normalMapObjectSpace:vt&&S.normalMapType===ed,normalMapTangentSpace:vt&&S.normalMapType===Hu,metalnessMap:nt,roughnessMap:D,anisotropy:T,anisotropyMap:Tt,clearcoat:K,clearcoatMap:Dt,clearcoatNormalMap:te,clearcoatRoughnessMap:Mt,dispersion:ht,iridescence:gt,iridescenceMap:Lt,iridescenceThicknessMap:Xt,sheen:dt,sheenColorMap:qt,sheenRoughnessMap:Ut,specularMap:se,specularColorMap:Zt,specularIntensityMap:de,transmission:Ft,transmissionMap:$,thicknessMap:Ct,gradientMap:ut,opaque:S.transparent===!1&&S.blending===rs&&S.alphaToCoverage===!1,alphaMap:xt,alphaTest:Rt,alphaHash:Pt,combine:S.combine,mapUv:G&&x(S.map.channel),aoMapUv:P&&x(S.aoMap.channel),lightMapUv:mt&&x(S.lightMap.channel),bumpMapUv:ot&&x(S.bumpMap.channel),normalMapUv:vt&&x(S.normalMap.channel),displacementMapUv:lt&&x(S.displacementMap.channel),emissiveMapUv:V&&x(S.emissiveMap.channel),metalnessMapUv:nt&&x(S.metalnessMap.channel),roughnessMapUv:D&&x(S.roughnessMap.channel),anisotropyMapUv:Tt&&x(S.anisotropyMap.channel),clearcoatMapUv:Dt&&x(S.clearcoatMap.channel),clearcoatNormalMapUv:te&&x(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Mt&&x(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Lt&&x(S.iridescenceMap.channel),iridescenceThicknessMapUv:Xt&&x(S.iridescenceThicknessMap.channel),sheenColorMapUv:qt&&x(S.sheenColorMap.channel),sheenRoughnessMapUv:Ut&&x(S.sheenRoughnessMap.channel),specularMapUv:se&&x(S.specularMap.channel),specularColorMapUv:Zt&&x(S.specularColorMap.channel),specularIntensityMapUv:de&&x(S.specularIntensityMap.channel),transmissionMapUv:$&&x(S.transmissionMap.channel),thicknessMapUv:Ct&&x(S.thicknessMap.channel),alphaMapUv:xt&&x(S.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(vt||T),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!O.attributes.uv&&(G||xt),fog:!!z,useFog:S.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:rt,skinning:q.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:X,morphTextureStride:et,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:we,decodeVideoTexture:G&&S.map.isVideoTexture===!0&&oe.getTransfer(S.map.colorSpace)===fe,decodeVideoTextureEmissive:V&&S.emissiveMap.isVideoTexture===!0&&oe.getTransfer(S.emissiveMap.colorSpace)===fe,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Re,flipSided:S.side===$e,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Yt&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Yt&&S.extensions.multiDraw===!0||U)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Ie.vertexUv1s=l.has(1),Ie.vertexUv2s=l.has(2),Ie.vertexUv3s=l.has(3),l.clear(),Ie}function p(S){const y=[];if(S.shaderID?y.push(S.shaderID):(y.push(S.customVertexShaderID),y.push(S.customFragmentShaderID)),S.defines!==void 0)for(const R in S.defines)y.push(R),y.push(S.defines[R]);return S.isRawShaderMaterial===!1&&(w(y,S),M(y,S),y.push(i.outputColorSpace)),y.push(S.customProgramCacheKey),y.join()}function w(S,y){S.push(y.precision),S.push(y.outputColorSpace),S.push(y.envMapMode),S.push(y.envMapCubeUVHeight),S.push(y.mapUv),S.push(y.alphaMapUv),S.push(y.lightMapUv),S.push(y.aoMapUv),S.push(y.bumpMapUv),S.push(y.normalMapUv),S.push(y.displacementMapUv),S.push(y.emissiveMapUv),S.push(y.metalnessMapUv),S.push(y.roughnessMapUv),S.push(y.anisotropyMapUv),S.push(y.clearcoatMapUv),S.push(y.clearcoatNormalMapUv),S.push(y.clearcoatRoughnessMapUv),S.push(y.iridescenceMapUv),S.push(y.iridescenceThicknessMapUv),S.push(y.sheenColorMapUv),S.push(y.sheenRoughnessMapUv),S.push(y.specularMapUv),S.push(y.specularColorMapUv),S.push(y.specularIntensityMapUv),S.push(y.transmissionMapUv),S.push(y.thicknessMapUv),S.push(y.combine),S.push(y.fogExp2),S.push(y.sizeAttenuation),S.push(y.morphTargetsCount),S.push(y.morphAttributeCount),S.push(y.numDirLights),S.push(y.numPointLights),S.push(y.numSpotLights),S.push(y.numSpotLightMaps),S.push(y.numHemiLights),S.push(y.numRectAreaLights),S.push(y.numDirLightShadows),S.push(y.numPointLightShadows),S.push(y.numSpotLightShadows),S.push(y.numSpotLightShadowsWithMaps),S.push(y.numLightProbes),S.push(y.shadowMapType),S.push(y.toneMapping),S.push(y.numClippingPlanes),S.push(y.numClipIntersection),S.push(y.depthPacking)}function M(S,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),S.push(a.mask)}function _(S){const y=g[S.type];let R;if(y){const W=Pn[y];R=ms.clone(W.uniforms)}else R=S.uniforms;return R}function E(S,y){let R;for(let W=0,q=u.length;W<q;W++){const z=u[W];if(z.cacheKey===y){R=z,++R.usedTimes;break}}return R===void 0&&(R=new sg(i,y,S,r),u.push(R)),R}function b(S){if(--S.usedTimes===0){const y=u.indexOf(S);u[y]=u[u.length-1],u.pop(),S.destroy()}}function v(S){c.remove(S)}function A(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:_,acquireProgram:E,releaseProgram:b,releaseShaderCache:v,programs:u,dispose:A}}function lg(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function ug(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Al(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Cl(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(h,d,f,g,x,m){let p=i[t];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:g,renderOrder:h.renderOrder,z:x,group:m},i[t]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=x,p.group=m),t++,p}function a(h,d,f,g,x,m){const p=o(h,d,f,g,x,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function c(h,d,f,g,x,m){const p=o(h,d,f,g,x,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function l(h,d){e.length>1&&e.sort(h||ug),n.length>1&&n.sort(d||Al),s.length>1&&s.sort(d||Al)}function u(){for(let h=t,d=i.length;h<d;h++){const f=i[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:u,sort:l}}function hg(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new Cl,i.set(n,[o])):s>=r.length?(o=new Cl,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function dg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new C,color:new Wt};break;case"SpotLight":e={position:new C,direction:new C,color:new Wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new C,color:new Wt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new C,skyColor:new Wt,groundColor:new Wt};break;case"RectAreaLight":e={color:new Wt,position:new C,halfWidth:new C,halfHeight:new C};break}return i[t.id]=e,e}}}function fg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let pg=0;function mg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function gg(i){const t=new dg,e=fg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new C);const s=new C,r=new re,o=new re;function a(l){let u=0,h=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let f=0,g=0,x=0,m=0,p=0,w=0,M=0,_=0,E=0,b=0,v=0;l.sort(mg);for(let S=0,y=l.length;S<y;S++){const R=l[S],W=R.color,q=R.intensity,z=R.distance,O=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=W.r*q,h+=W.g*q,d+=W.b*q;else if(R.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(R.sh.coefficients[B],q);v++}else if(R.isDirectionalLight){const B=t.get(R);if(B.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const j=R.shadow,H=e.get(R);H.shadowIntensity=j.intensity,H.shadowBias=j.bias,H.shadowNormalBias=j.normalBias,H.shadowRadius=j.radius,H.shadowMapSize=j.mapSize,n.directionalShadow[f]=H,n.directionalShadowMap[f]=O,n.directionalShadowMatrix[f]=R.shadow.matrix,w++}n.directional[f]=B,f++}else if(R.isSpotLight){const B=t.get(R);B.position.setFromMatrixPosition(R.matrixWorld),B.color.copy(W).multiplyScalar(q),B.distance=z,B.coneCos=Math.cos(R.angle),B.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),B.decay=R.decay,n.spot[x]=B;const j=R.shadow;if(R.map&&(n.spotLightMap[E]=R.map,E++,j.updateMatrices(R),R.castShadow&&b++),n.spotLightMatrix[x]=j.matrix,R.castShadow){const H=e.get(R);H.shadowIntensity=j.intensity,H.shadowBias=j.bias,H.shadowNormalBias=j.normalBias,H.shadowRadius=j.radius,H.shadowMapSize=j.mapSize,n.spotShadow[x]=H,n.spotShadowMap[x]=O,_++}x++}else if(R.isRectAreaLight){const B=t.get(R);B.color.copy(W).multiplyScalar(q),B.halfWidth.set(R.width*.5,0,0),B.halfHeight.set(0,R.height*.5,0),n.rectArea[m]=B,m++}else if(R.isPointLight){const B=t.get(R);if(B.color.copy(R.color).multiplyScalar(R.intensity),B.distance=R.distance,B.decay=R.decay,R.castShadow){const j=R.shadow,H=e.get(R);H.shadowIntensity=j.intensity,H.shadowBias=j.bias,H.shadowNormalBias=j.normalBias,H.shadowRadius=j.radius,H.shadowMapSize=j.mapSize,H.shadowCameraNear=j.camera.near,H.shadowCameraFar=j.camera.far,n.pointShadow[g]=H,n.pointShadowMap[g]=O,n.pointShadowMatrix[g]=R.shadow.matrix,M++}n.point[g]=B,g++}else if(R.isHemisphereLight){const B=t.get(R);B.skyColor.copy(R.color).multiplyScalar(q),B.groundColor.copy(R.groundColor).multiplyScalar(q),n.hemi[p]=B,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=At.LTC_FLOAT_1,n.rectAreaLTC2=At.LTC_FLOAT_2):(n.rectAreaLTC1=At.LTC_HALF_1,n.rectAreaLTC2=At.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const A=n.hash;(A.directionalLength!==f||A.pointLength!==g||A.spotLength!==x||A.rectAreaLength!==m||A.hemiLength!==p||A.numDirectionalShadows!==w||A.numPointShadows!==M||A.numSpotShadows!==_||A.numSpotMaps!==E||A.numLightProbes!==v)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=_+E-b,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=v,A.directionalLength=f,A.pointLength=g,A.spotLength=x,A.rectAreaLength=m,A.hemiLength=p,A.numDirectionalShadows=w,A.numPointShadows=M,A.numSpotShadows=_,A.numSpotMaps=E,A.numLightProbes=v,n.version=pg++)}function c(l,u){let h=0,d=0,f=0,g=0,x=0;const m=u.matrixWorldInverse;for(let p=0,w=l.length;p<w;p++){const M=l[p];if(M.isDirectionalLight){const _=n.directional[h];_.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),h++}else if(M.isSpotLight){const _=n.spot[f];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),f++}else if(M.isRectAreaLight){const _=n.rectArea[g];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(m),o.identity(),r.copy(M.matrixWorld),r.premultiply(m),o.extractRotation(r),_.halfWidth.set(M.width*.5,0,0),_.halfHeight.set(0,M.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),g++}else if(M.isPointLight){const _=n.point[d];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(m),d++}else if(M.isHemisphereLight){const _=n.hemi[x];_.direction.setFromMatrixPosition(M.matrixWorld),_.direction.transformDirection(m),x++}}}return{setup:a,setupView:c,state:n}}function Rl(i){const t=new gg(i),e=[],n=[];function s(u){l.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function o(u){n.push(u)}function a(){t.setup(e)}function c(u){t.setupView(e,u)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function _g(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Rl(i),t.set(s,[a])):r>=o.length?(a=new Rl(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class sh extends fi{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=td,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class xg extends fi{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const vg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,yg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Mg(i,t,e){let n=new vc;const s=new ft,r=new ft,o=new ge,a=new sh({depthPacking:Vu}),c=new xg,l={},u=e.maxTextureSize,h={[hi]:$e,[$e]:hi,[Re]:Re},d=new Oe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ft},radius:{value:4}},vertexShader:vg,fragmentShader:yg}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Se;g.setAttribute("position",new Ne(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new N(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Su;let p=this.type;this.render=function(b,v,A){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;const S=i.getRenderTarget(),y=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),W=i.state;W.setBlending(In),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const q=p!==Wn&&this.type===Wn,z=p===Wn&&this.type!==Wn;for(let O=0,B=b.length;O<B;O++){const j=b[O],H=j.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const Y=H.getFrameExtents();if(s.multiply(Y),r.copy(H.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/Y.x),s.x=r.x*Y.x,H.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/Y.y),s.y=r.y*Y.y,H.mapSize.y=r.y)),H.map===null||q===!0||z===!0){const X=this.type!==Wn?{minFilter:Xe,magFilter:Xe}:{};H.map!==null&&H.map.dispose(),H.map=new gn(s.x,s.y,X),H.map.texture.name=j.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();const yt=H.getViewportCount();for(let X=0;X<yt;X++){const et=H.getViewport(X);o.set(r.x*et.x,r.y*et.y,r.x*et.z,r.y*et.w),W.viewport(o),H.updateMatrices(j,X),n=H.getFrustum(),_(v,A,H.camera,j,this.type)}H.isPointLightShadow!==!0&&this.type===Wn&&w(H,A),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(S,y,R)};function w(b,v){const A=t.update(x);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new gn(s.x,s.y)),d.uniforms.shadow_pass.value=b.map.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(v,null,A,d,x,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(v,null,A,f,x,null)}function M(b,v,A,S){let y=null;const R=A.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(R!==void 0)y=R;else if(y=A.isPointLight===!0?c:a,i.localClippingEnabled&&v.clipShadows===!0&&Array.isArray(v.clippingPlanes)&&v.clippingPlanes.length!==0||v.displacementMap&&v.displacementScale!==0||v.alphaMap&&v.alphaTest>0||v.map&&v.alphaTest>0){const W=y.uuid,q=v.uuid;let z=l[W];z===void 0&&(z={},l[W]=z);let O=z[q];O===void 0&&(O=y.clone(),z[q]=O,v.addEventListener("dispose",E)),y=O}if(y.visible=v.visible,y.wireframe=v.wireframe,S===Wn?y.side=v.shadowSide!==null?v.shadowSide:v.side:y.side=v.shadowSide!==null?v.shadowSide:h[v.side],y.alphaMap=v.alphaMap,y.alphaTest=v.alphaTest,y.map=v.map,y.clipShadows=v.clipShadows,y.clippingPlanes=v.clippingPlanes,y.clipIntersection=v.clipIntersection,y.displacementMap=v.displacementMap,y.displacementScale=v.displacementScale,y.displacementBias=v.displacementBias,y.wireframeLinewidth=v.wireframeLinewidth,y.linewidth=v.linewidth,A.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const W=i.properties.get(y);W.light=A}return y}function _(b,v,A,S,y){if(b.visible===!1)return;if(b.layers.test(v.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&y===Wn)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,b.matrixWorld);const q=t.update(b),z=b.material;if(Array.isArray(z)){const O=q.groups;for(let B=0,j=O.length;B<j;B++){const H=O[B],Y=z[H.materialIndex];if(Y&&Y.visible){const yt=M(b,Y,S,y);b.onBeforeShadow(i,b,v,A,q,yt,H),i.renderBufferDirect(A,null,q,yt,b,H),b.onAfterShadow(i,b,v,A,q,yt,H)}}}else if(z.visible){const O=M(b,z,S,y);b.onBeforeShadow(i,b,v,A,q,O,null),i.renderBufferDirect(A,null,q,O,b,null),b.onAfterShadow(i,b,v,A,q,O,null)}}const W=b.children;for(let q=0,z=W.length;q<z;q++)_(W[q],v,A,S,y)}function E(b){b.target.removeEventListener("dispose",E);for(const A in l){const S=l[A],y=b.target.uuid;y in S&&(S[y].dispose(),delete S[y])}}}const Sg={[ga]:_a,[xa]:Ma,[va]:Sa,[ls]:ya,[_a]:ga,[Ma]:xa,[Sa]:va,[ya]:ls};function wg(i,t){function e(){let $=!1;const Ct=new ge;let ut=null;const xt=new ge(0,0,0,0);return{setMask:function(Rt){ut!==Rt&&!$&&(i.colorMask(Rt,Rt,Rt,Rt),ut=Rt)},setLocked:function(Rt){$=Rt},setClear:function(Rt,Pt,Yt,we,Ie){Ie===!0&&(Rt*=we,Pt*=we,Yt*=we),Ct.set(Rt,Pt,Yt,we),xt.equals(Ct)===!1&&(i.clearColor(Rt,Pt,Yt,we),xt.copy(Ct))},reset:function(){$=!1,ut=null,xt.set(-1,0,0,0)}}}function n(){let $=!1,Ct=!1,ut=null,xt=null,Rt=null;return{setReversed:function(Pt){if(Ct!==Pt){const Yt=t.get("EXT_clip_control");Ct?Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.ZERO_TO_ONE_EXT):Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.NEGATIVE_ONE_TO_ONE_EXT);const we=Rt;Rt=null,this.setClear(we)}Ct=Pt},getReversed:function(){return Ct},setTest:function(Pt){Pt?st(i.DEPTH_TEST):rt(i.DEPTH_TEST)},setMask:function(Pt){ut!==Pt&&!$&&(i.depthMask(Pt),ut=Pt)},setFunc:function(Pt){if(Ct&&(Pt=Sg[Pt]),xt!==Pt){switch(Pt){case ga:i.depthFunc(i.NEVER);break;case _a:i.depthFunc(i.ALWAYS);break;case xa:i.depthFunc(i.LESS);break;case ls:i.depthFunc(i.LEQUAL);break;case va:i.depthFunc(i.EQUAL);break;case ya:i.depthFunc(i.GEQUAL);break;case Ma:i.depthFunc(i.GREATER);break;case Sa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}xt=Pt}},setLocked:function(Pt){$=Pt},setClear:function(Pt){Rt!==Pt&&(Ct&&(Pt=1-Pt),i.clearDepth(Pt),Rt=Pt)},reset:function(){$=!1,ut=null,xt=null,Rt=null,Ct=!1}}}function s(){let $=!1,Ct=null,ut=null,xt=null,Rt=null,Pt=null,Yt=null,we=null,Ie=null;return{setTest:function(ae){$||(ae?st(i.STENCIL_TEST):rt(i.STENCIL_TEST))},setMask:function(ae){Ct!==ae&&!$&&(i.stencilMask(ae),Ct=ae)},setFunc:function(ae,nn,vn){(ut!==ae||xt!==nn||Rt!==vn)&&(i.stencilFunc(ae,nn,vn),ut=ae,xt=nn,Rt=vn)},setOp:function(ae,nn,vn){(Pt!==ae||Yt!==nn||we!==vn)&&(i.stencilOp(ae,nn,vn),Pt=ae,Yt=nn,we=vn)},setLocked:function(ae){$=ae},setClear:function(ae){Ie!==ae&&(i.clearStencil(ae),Ie=ae)},reset:function(){$=!1,Ct=null,ut=null,xt=null,Rt=null,Pt=null,Yt=null,we=null,Ie=null}}}const r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap;let u={},h={},d=new WeakMap,f=[],g=null,x=!1,m=null,p=null,w=null,M=null,_=null,E=null,b=null,v=new Wt(0,0,0),A=0,S=!1,y=null,R=null,W=null,q=null,z=null;const O=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,j=0;const H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(H)[1]),B=j>=1):H.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),B=j>=2);let Y=null,yt={};const X=i.getParameter(i.SCISSOR_BOX),et=i.getParameter(i.VIEWPORT),pt=new ge().fromArray(X),Q=new ge().fromArray(et);function it($,Ct,ut,xt){const Rt=new Uint8Array(4),Pt=i.createTexture();i.bindTexture($,Pt),i.texParameteri($,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri($,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Yt=0;Yt<ut;Yt++)$===i.TEXTURE_3D||$===i.TEXTURE_2D_ARRAY?i.texImage3D(Ct,0,i.RGBA,1,1,xt,0,i.RGBA,i.UNSIGNED_BYTE,Rt):i.texImage2D(Ct+Yt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Rt);return Pt}const _t={};_t[i.TEXTURE_2D]=it(i.TEXTURE_2D,i.TEXTURE_2D,1),_t[i.TEXTURE_CUBE_MAP]=it(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),_t[i.TEXTURE_2D_ARRAY]=it(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),_t[i.TEXTURE_3D]=it(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),st(i.DEPTH_TEST),o.setFunc(ls),ot(!1),vt(Nc),st(i.CULL_FACE),P(In);function st($){u[$]!==!0&&(i.enable($),u[$]=!0)}function rt($){u[$]!==!1&&(i.disable($),u[$]=!1)}function L($,Ct){return h[$]!==Ct?(i.bindFramebuffer($,Ct),h[$]=Ct,$===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=Ct),$===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=Ct),!0):!1}function U($,Ct){let ut=f,xt=!1;if($){ut=d.get(Ct),ut===void 0&&(ut=[],d.set(Ct,ut));const Rt=$.textures;if(ut.length!==Rt.length||ut[0]!==i.COLOR_ATTACHMENT0){for(let Pt=0,Yt=Rt.length;Pt<Yt;Pt++)ut[Pt]=i.COLOR_ATTACHMENT0+Pt;ut.length=Rt.length,xt=!0}}else ut[0]!==i.BACK&&(ut[0]=i.BACK,xt=!0);xt&&i.drawBuffers(ut)}function G($){return g!==$?(i.useProgram($),g=$,!0):!1}const k={[Mi]:i.FUNC_ADD,[Ih]:i.FUNC_SUBTRACT,[Lh]:i.FUNC_REVERSE_SUBTRACT};k[Uh]=i.MIN,k[Nh]=i.MAX;const Z={[Fh]:i.ZERO,[Oh]:i.ONE,[Bh]:i.SRC_COLOR,[pa]:i.SRC_ALPHA,[Wh]:i.SRC_ALPHA_SATURATE,[Hh]:i.DST_COLOR,[zh]:i.DST_ALPHA,[kh]:i.ONE_MINUS_SRC_COLOR,[ma]:i.ONE_MINUS_SRC_ALPHA,[Gh]:i.ONE_MINUS_DST_COLOR,[Vh]:i.ONE_MINUS_DST_ALPHA,[Xh]:i.CONSTANT_COLOR,[qh]:i.ONE_MINUS_CONSTANT_COLOR,[Yh]:i.CONSTANT_ALPHA,[Zh]:i.ONE_MINUS_CONSTANT_ALPHA};function P($,Ct,ut,xt,Rt,Pt,Yt,we,Ie,ae){if($===In){x===!0&&(rt(i.BLEND),x=!1);return}if(x===!1&&(st(i.BLEND),x=!0),$!==Dh){if($!==m||ae!==S){if((p!==Mi||_!==Mi)&&(i.blendEquation(i.FUNC_ADD),p=Mi,_=Mi),ae)switch($){case rs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ve:i.blendFunc(i.ONE,i.ONE);break;case Fc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Oc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",$);break}else switch($){case rs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ve:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Fc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Oc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",$);break}w=null,M=null,E=null,b=null,v.set(0,0,0),A=0,m=$,S=ae}return}Rt=Rt||Ct,Pt=Pt||ut,Yt=Yt||xt,(Ct!==p||Rt!==_)&&(i.blendEquationSeparate(k[Ct],k[Rt]),p=Ct,_=Rt),(ut!==w||xt!==M||Pt!==E||Yt!==b)&&(i.blendFuncSeparate(Z[ut],Z[xt],Z[Pt],Z[Yt]),w=ut,M=xt,E=Pt,b=Yt),(we.equals(v)===!1||Ie!==A)&&(i.blendColor(we.r,we.g,we.b,Ie),v.copy(we),A=Ie),m=$,S=!1}function mt($,Ct){$.side===Re?rt(i.CULL_FACE):st(i.CULL_FACE);let ut=$.side===$e;Ct&&(ut=!ut),ot(ut),$.blending===rs&&$.transparent===!1?P(In):P($.blending,$.blendEquation,$.blendSrc,$.blendDst,$.blendEquationAlpha,$.blendSrcAlpha,$.blendDstAlpha,$.blendColor,$.blendAlpha,$.premultipliedAlpha),o.setFunc($.depthFunc),o.setTest($.depthTest),o.setMask($.depthWrite),r.setMask($.colorWrite);const xt=$.stencilWrite;a.setTest(xt),xt&&(a.setMask($.stencilWriteMask),a.setFunc($.stencilFunc,$.stencilRef,$.stencilFuncMask),a.setOp($.stencilFail,$.stencilZFail,$.stencilZPass)),V($.polygonOffset,$.polygonOffsetFactor,$.polygonOffsetUnits),$.alphaToCoverage===!0?st(i.SAMPLE_ALPHA_TO_COVERAGE):rt(i.SAMPLE_ALPHA_TO_COVERAGE)}function ot($){y!==$&&($?i.frontFace(i.CW):i.frontFace(i.CCW),y=$)}function vt($){$!==Rh?(st(i.CULL_FACE),$!==R&&($===Nc?i.cullFace(i.BACK):$===Ph?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):rt(i.CULL_FACE),R=$}function lt($){$!==W&&(B&&i.lineWidth($),W=$)}function V($,Ct,ut){$?(st(i.POLYGON_OFFSET_FILL),(q!==Ct||z!==ut)&&(i.polygonOffset(Ct,ut),q=Ct,z=ut)):rt(i.POLYGON_OFFSET_FILL)}function nt($){$?st(i.SCISSOR_TEST):rt(i.SCISSOR_TEST)}function D($){$===void 0&&($=i.TEXTURE0+O-1),Y!==$&&(i.activeTexture($),Y=$)}function T($,Ct,ut){ut===void 0&&(Y===null?ut=i.TEXTURE0+O-1:ut=Y);let xt=yt[ut];xt===void 0&&(xt={type:void 0,texture:void 0},yt[ut]=xt),(xt.type!==$||xt.texture!==Ct)&&(Y!==ut&&(i.activeTexture(ut),Y=ut),i.bindTexture($,Ct||_t[$]),xt.type=$,xt.texture=Ct)}function K(){const $=yt[Y];$!==void 0&&$.type!==void 0&&(i.bindTexture($.type,null),$.type=void 0,$.texture=void 0)}function ht(){try{i.compressedTexImage2D.apply(i,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function gt(){try{i.compressedTexImage3D.apply(i,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function dt(){try{i.texSubImage2D.apply(i,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Ft(){try{i.texSubImage3D.apply(i,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Tt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Dt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function te(){try{i.texStorage2D.apply(i,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Mt(){try{i.texStorage3D.apply(i,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Lt(){try{i.texImage2D.apply(i,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Xt(){try{i.texImage3D.apply(i,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function qt($){pt.equals($)===!1&&(i.scissor($.x,$.y,$.z,$.w),pt.copy($))}function Ut($){Q.equals($)===!1&&(i.viewport($.x,$.y,$.z,$.w),Q.copy($))}function se($,Ct){let ut=l.get(Ct);ut===void 0&&(ut=new WeakMap,l.set(Ct,ut));let xt=ut.get($);xt===void 0&&(xt=i.getUniformBlockIndex(Ct,$.name),ut.set($,xt))}function Zt($,Ct){const xt=l.get(Ct).get($);c.get(Ct)!==xt&&(i.uniformBlockBinding(Ct,xt,$.__bindingPointIndex),c.set(Ct,xt))}function de(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},Y=null,yt={},h={},d=new WeakMap,f=[],g=null,x=!1,m=null,p=null,w=null,M=null,_=null,E=null,b=null,v=new Wt(0,0,0),A=0,S=!1,y=null,R=null,W=null,q=null,z=null,pt.set(0,0,i.canvas.width,i.canvas.height),Q.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:st,disable:rt,bindFramebuffer:L,drawBuffers:U,useProgram:G,setBlending:P,setMaterial:mt,setFlipSided:ot,setCullFace:vt,setLineWidth:lt,setPolygonOffset:V,setScissorTest:nt,activeTexture:D,bindTexture:T,unbindTexture:K,compressedTexImage2D:ht,compressedTexImage3D:gt,texImage2D:Lt,texImage3D:Xt,updateUBOMapping:se,uniformBlockBinding:Zt,texStorage2D:te,texStorage3D:Mt,texSubImage2D:dt,texSubImage3D:Ft,compressedTexSubImage2D:Tt,compressedTexSubImage3D:Dt,scissor:qt,viewport:Ut,reset:de}}function Pl(i,t,e,n){const s=bg(n);switch(e){case Nu:return i*t;case Ou:return i*t;case Bu:return i*t*2;case dc:return i*t/s.components*s.byteLength;case fc:return i*t/s.components*s.byteLength;case ku:return i*t*2/s.components*s.byteLength;case pc:return i*t*2/s.components*s.byteLength;case Fu:return i*t*3/s.components*s.byteLength;case mn:return i*t*4/s.components*s.byteLength;case mc:return i*t*4/s.components*s.byteLength;case Gr:case Wr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Xr:case qr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ta:case Ca:return Math.max(i,16)*Math.max(t,8)/4;case Ea:case Aa:return Math.max(i,8)*Math.max(t,8)/2;case Ra:case Pa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Da:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ia:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case La:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ua:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Na:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Fa:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Oa:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ba:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case ka:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case za:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Va:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ha:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Ga:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Wa:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Xa:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Yr:case qa:case Ya:return Math.ceil(i/4)*Math.ceil(t/4)*16;case zu:case Za:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ja:case $a:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function bg(i){switch(i){case Zn:case Iu:return{byteLength:1,components:1};case Ys:case Lu:case Ln:return{byteLength:2,components:1};case uc:case hc:return{byteLength:2,components:4};case wi:case lc:case Dn:return{byteLength:4,components:1};case Uu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Eg(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ft,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(D,T){return f?new OffscreenCanvas(D,T):Jr("canvas")}function x(D,T,K){let ht=1;const gt=nt(D);if((gt.width>K||gt.height>K)&&(ht=K/Math.max(gt.width,gt.height)),ht<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const dt=Math.floor(ht*gt.width),Ft=Math.floor(ht*gt.height);h===void 0&&(h=g(dt,Ft));const Tt=T?g(dt,Ft):h;return Tt.width=dt,Tt.height=Ft,Tt.getContext("2d").drawImage(D,0,0,dt,Ft),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+gt.width+"x"+gt.height+") to ("+dt+"x"+Ft+")."),Tt}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+gt.width+"x"+gt.height+")."),D;return D}function m(D){return D.generateMipmaps}function p(D){i.generateMipmap(D)}function w(D){return D.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?i.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(D,T,K,ht,gt=!1){if(D!==null){if(i[D]!==void 0)return i[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let dt=T;if(T===i.RED&&(K===i.FLOAT&&(dt=i.R32F),K===i.HALF_FLOAT&&(dt=i.R16F),K===i.UNSIGNED_BYTE&&(dt=i.R8)),T===i.RED_INTEGER&&(K===i.UNSIGNED_BYTE&&(dt=i.R8UI),K===i.UNSIGNED_SHORT&&(dt=i.R16UI),K===i.UNSIGNED_INT&&(dt=i.R32UI),K===i.BYTE&&(dt=i.R8I),K===i.SHORT&&(dt=i.R16I),K===i.INT&&(dt=i.R32I)),T===i.RG&&(K===i.FLOAT&&(dt=i.RG32F),K===i.HALF_FLOAT&&(dt=i.RG16F),K===i.UNSIGNED_BYTE&&(dt=i.RG8)),T===i.RG_INTEGER&&(K===i.UNSIGNED_BYTE&&(dt=i.RG8UI),K===i.UNSIGNED_SHORT&&(dt=i.RG16UI),K===i.UNSIGNED_INT&&(dt=i.RG32UI),K===i.BYTE&&(dt=i.RG8I),K===i.SHORT&&(dt=i.RG16I),K===i.INT&&(dt=i.RG32I)),T===i.RGB_INTEGER&&(K===i.UNSIGNED_BYTE&&(dt=i.RGB8UI),K===i.UNSIGNED_SHORT&&(dt=i.RGB16UI),K===i.UNSIGNED_INT&&(dt=i.RGB32UI),K===i.BYTE&&(dt=i.RGB8I),K===i.SHORT&&(dt=i.RGB16I),K===i.INT&&(dt=i.RGB32I)),T===i.RGBA_INTEGER&&(K===i.UNSIGNED_BYTE&&(dt=i.RGBA8UI),K===i.UNSIGNED_SHORT&&(dt=i.RGBA16UI),K===i.UNSIGNED_INT&&(dt=i.RGBA32UI),K===i.BYTE&&(dt=i.RGBA8I),K===i.SHORT&&(dt=i.RGBA16I),K===i.INT&&(dt=i.RGBA32I)),T===i.RGB&&K===i.UNSIGNED_INT_5_9_9_9_REV&&(dt=i.RGB9_E5),T===i.RGBA){const Ft=gt?uo:oe.getTransfer(ht);K===i.FLOAT&&(dt=i.RGBA32F),K===i.HALF_FLOAT&&(dt=i.RGBA16F),K===i.UNSIGNED_BYTE&&(dt=Ft===fe?i.SRGB8_ALPHA8:i.RGBA8),K===i.UNSIGNED_SHORT_4_4_4_4&&(dt=i.RGBA4),K===i.UNSIGNED_SHORT_5_5_5_1&&(dt=i.RGB5_A1)}return(dt===i.R16F||dt===i.R32F||dt===i.RG16F||dt===i.RG32F||dt===i.RGBA16F||dt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),dt}function _(D,T){let K;return D?T===null||T===wi||T===ds?K=i.DEPTH24_STENCIL8:T===Dn?K=i.DEPTH32F_STENCIL8:T===Ys&&(K=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===wi||T===ds?K=i.DEPTH_COMPONENT24:T===Dn?K=i.DEPTH_COMPONENT32F:T===Ys&&(K=i.DEPTH_COMPONENT16),K}function E(D,T){return m(D)===!0||D.isFramebufferTexture&&D.minFilter!==Xe&&D.minFilter!==En?Math.log2(Math.max(T.width,T.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?T.mipmaps.length:1}function b(D){const T=D.target;T.removeEventListener("dispose",b),A(T),T.isVideoTexture&&u.delete(T)}function v(D){const T=D.target;T.removeEventListener("dispose",v),y(T)}function A(D){const T=n.get(D);if(T.__webglInit===void 0)return;const K=D.source,ht=d.get(K);if(ht){const gt=ht[T.__cacheKey];gt.usedTimes--,gt.usedTimes===0&&S(D),Object.keys(ht).length===0&&d.delete(K)}n.remove(D)}function S(D){const T=n.get(D);i.deleteTexture(T.__webglTexture);const K=D.source,ht=d.get(K);delete ht[T.__cacheKey],o.memory.textures--}function y(D){const T=n.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),n.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let ht=0;ht<6;ht++){if(Array.isArray(T.__webglFramebuffer[ht]))for(let gt=0;gt<T.__webglFramebuffer[ht].length;gt++)i.deleteFramebuffer(T.__webglFramebuffer[ht][gt]);else i.deleteFramebuffer(T.__webglFramebuffer[ht]);T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer[ht])}else{if(Array.isArray(T.__webglFramebuffer))for(let ht=0;ht<T.__webglFramebuffer.length;ht++)i.deleteFramebuffer(T.__webglFramebuffer[ht]);else i.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&i.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let ht=0;ht<T.__webglColorRenderbuffer.length;ht++)T.__webglColorRenderbuffer[ht]&&i.deleteRenderbuffer(T.__webglColorRenderbuffer[ht]);T.__webglDepthRenderbuffer&&i.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const K=D.textures;for(let ht=0,gt=K.length;ht<gt;ht++){const dt=n.get(K[ht]);dt.__webglTexture&&(i.deleteTexture(dt.__webglTexture),o.memory.textures--),n.remove(K[ht])}n.remove(D)}let R=0;function W(){R=0}function q(){const D=R;return D>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+s.maxTextures),R+=1,D}function z(D){const T=[];return T.push(D.wrapS),T.push(D.wrapT),T.push(D.wrapR||0),T.push(D.magFilter),T.push(D.minFilter),T.push(D.anisotropy),T.push(D.internalFormat),T.push(D.format),T.push(D.type),T.push(D.generateMipmaps),T.push(D.premultiplyAlpha),T.push(D.flipY),T.push(D.unpackAlignment),T.push(D.colorSpace),T.join()}function O(D,T){const K=n.get(D);if(D.isVideoTexture&&lt(D),D.isRenderTargetTexture===!1&&D.version>0&&K.__version!==D.version){const ht=D.image;if(ht===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ht.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(K,D,T);return}}e.bindTexture(i.TEXTURE_2D,K.__webglTexture,i.TEXTURE0+T)}function B(D,T){const K=n.get(D);if(D.version>0&&K.__version!==D.version){Q(K,D,T);return}e.bindTexture(i.TEXTURE_2D_ARRAY,K.__webglTexture,i.TEXTURE0+T)}function j(D,T){const K=n.get(D);if(D.version>0&&K.__version!==D.version){Q(K,D,T);return}e.bindTexture(i.TEXTURE_3D,K.__webglTexture,i.TEXTURE0+T)}function H(D,T){const K=n.get(D);if(D.version>0&&K.__version!==D.version){it(K,D,T);return}e.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture,i.TEXTURE0+T)}const Y={[qs]:i.REPEAT,[oi]:i.CLAMP_TO_EDGE,[jr]:i.MIRRORED_REPEAT},yt={[Xe]:i.NEAREST,[Du]:i.NEAREST_MIPMAP_NEAREST,[Os]:i.NEAREST_MIPMAP_LINEAR,[En]:i.LINEAR,[Hr]:i.LINEAR_MIPMAP_NEAREST,[ai]:i.LINEAR_MIPMAP_LINEAR},X={[nd]:i.NEVER,[cd]:i.ALWAYS,[id]:i.LESS,[Gu]:i.LEQUAL,[sd]:i.EQUAL,[ad]:i.GEQUAL,[rd]:i.GREATER,[od]:i.NOTEQUAL};function et(D,T){if(T.type===Dn&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===En||T.magFilter===Hr||T.magFilter===Os||T.magFilter===ai||T.minFilter===En||T.minFilter===Hr||T.minFilter===Os||T.minFilter===ai)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(D,i.TEXTURE_WRAP_S,Y[T.wrapS]),i.texParameteri(D,i.TEXTURE_WRAP_T,Y[T.wrapT]),(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)&&i.texParameteri(D,i.TEXTURE_WRAP_R,Y[T.wrapR]),i.texParameteri(D,i.TEXTURE_MAG_FILTER,yt[T.magFilter]),i.texParameteri(D,i.TEXTURE_MIN_FILTER,yt[T.minFilter]),T.compareFunction&&(i.texParameteri(D,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(D,i.TEXTURE_COMPARE_FUNC,X[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Xe||T.minFilter!==Os&&T.minFilter!==ai||T.type===Dn&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){const K=t.get("EXT_texture_filter_anisotropic");i.texParameterf(D,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function pt(D,T){let K=!1;D.__webglInit===void 0&&(D.__webglInit=!0,T.addEventListener("dispose",b));const ht=T.source;let gt=d.get(ht);gt===void 0&&(gt={},d.set(ht,gt));const dt=z(T);if(dt!==D.__cacheKey){gt[dt]===void 0&&(gt[dt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,K=!0),gt[dt].usedTimes++;const Ft=gt[D.__cacheKey];Ft!==void 0&&(gt[D.__cacheKey].usedTimes--,Ft.usedTimes===0&&S(T)),D.__cacheKey=dt,D.__webglTexture=gt[dt].texture}return K}function Q(D,T,K){let ht=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ht=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ht=i.TEXTURE_3D);const gt=pt(D,T),dt=T.source;e.bindTexture(ht,D.__webglTexture,i.TEXTURE0+K);const Ft=n.get(dt);if(dt.version!==Ft.__version||gt===!0){e.activeTexture(i.TEXTURE0+K);const Tt=oe.getPrimaries(oe.workingColorSpace),Dt=T.colorSpace===Xn?null:oe.getPrimaries(T.colorSpace),te=T.colorSpace===Xn||Tt===Dt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);let Mt=x(T.image,!1,s.maxTextureSize);Mt=V(T,Mt);const Lt=r.convert(T.format,T.colorSpace),Xt=r.convert(T.type);let qt=M(T.internalFormat,Lt,Xt,T.colorSpace,T.isVideoTexture);et(ht,T);let Ut;const se=T.mipmaps,Zt=T.isVideoTexture!==!0,de=Ft.__version===void 0||gt===!0,$=dt.dataReady,Ct=E(T,Mt);if(T.isDepthTexture)qt=_(T.format===fs,T.type),de&&(Zt?e.texStorage2D(i.TEXTURE_2D,1,qt,Mt.width,Mt.height):e.texImage2D(i.TEXTURE_2D,0,qt,Mt.width,Mt.height,0,Lt,Xt,null));else if(T.isDataTexture)if(se.length>0){Zt&&de&&e.texStorage2D(i.TEXTURE_2D,Ct,qt,se[0].width,se[0].height);for(let ut=0,xt=se.length;ut<xt;ut++)Ut=se[ut],Zt?$&&e.texSubImage2D(i.TEXTURE_2D,ut,0,0,Ut.width,Ut.height,Lt,Xt,Ut.data):e.texImage2D(i.TEXTURE_2D,ut,qt,Ut.width,Ut.height,0,Lt,Xt,Ut.data);T.generateMipmaps=!1}else Zt?(de&&e.texStorage2D(i.TEXTURE_2D,Ct,qt,Mt.width,Mt.height),$&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Mt.width,Mt.height,Lt,Xt,Mt.data)):e.texImage2D(i.TEXTURE_2D,0,qt,Mt.width,Mt.height,0,Lt,Xt,Mt.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Zt&&de&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ct,qt,se[0].width,se[0].height,Mt.depth);for(let ut=0,xt=se.length;ut<xt;ut++)if(Ut=se[ut],T.format!==mn)if(Lt!==null)if(Zt){if($)if(T.layerUpdates.size>0){const Rt=Pl(Ut.width,Ut.height,T.format,T.type);for(const Pt of T.layerUpdates){const Yt=Ut.data.subarray(Pt*Rt/Ut.data.BYTES_PER_ELEMENT,(Pt+1)*Rt/Ut.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ut,0,0,Pt,Ut.width,Ut.height,1,Lt,Yt)}T.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ut,0,0,0,Ut.width,Ut.height,Mt.depth,Lt,Ut.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ut,qt,Ut.width,Ut.height,Mt.depth,0,Ut.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Zt?$&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,ut,0,0,0,Ut.width,Ut.height,Mt.depth,Lt,Xt,Ut.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ut,qt,Ut.width,Ut.height,Mt.depth,0,Lt,Xt,Ut.data)}else{Zt&&de&&e.texStorage2D(i.TEXTURE_2D,Ct,qt,se[0].width,se[0].height);for(let ut=0,xt=se.length;ut<xt;ut++)Ut=se[ut],T.format!==mn?Lt!==null?Zt?$&&e.compressedTexSubImage2D(i.TEXTURE_2D,ut,0,0,Ut.width,Ut.height,Lt,Ut.data):e.compressedTexImage2D(i.TEXTURE_2D,ut,qt,Ut.width,Ut.height,0,Ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Zt?$&&e.texSubImage2D(i.TEXTURE_2D,ut,0,0,Ut.width,Ut.height,Lt,Xt,Ut.data):e.texImage2D(i.TEXTURE_2D,ut,qt,Ut.width,Ut.height,0,Lt,Xt,Ut.data)}else if(T.isDataArrayTexture)if(Zt){if(de&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ct,qt,Mt.width,Mt.height,Mt.depth),$)if(T.layerUpdates.size>0){const ut=Pl(Mt.width,Mt.height,T.format,T.type);for(const xt of T.layerUpdates){const Rt=Mt.data.subarray(xt*ut/Mt.data.BYTES_PER_ELEMENT,(xt+1)*ut/Mt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,xt,Mt.width,Mt.height,1,Lt,Xt,Rt)}T.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Mt.width,Mt.height,Mt.depth,Lt,Xt,Mt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,qt,Mt.width,Mt.height,Mt.depth,0,Lt,Xt,Mt.data);else if(T.isData3DTexture)Zt?(de&&e.texStorage3D(i.TEXTURE_3D,Ct,qt,Mt.width,Mt.height,Mt.depth),$&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Mt.width,Mt.height,Mt.depth,Lt,Xt,Mt.data)):e.texImage3D(i.TEXTURE_3D,0,qt,Mt.width,Mt.height,Mt.depth,0,Lt,Xt,Mt.data);else if(T.isFramebufferTexture){if(de)if(Zt)e.texStorage2D(i.TEXTURE_2D,Ct,qt,Mt.width,Mt.height);else{let ut=Mt.width,xt=Mt.height;for(let Rt=0;Rt<Ct;Rt++)e.texImage2D(i.TEXTURE_2D,Rt,qt,ut,xt,0,Lt,Xt,null),ut>>=1,xt>>=1}}else if(se.length>0){if(Zt&&de){const ut=nt(se[0]);e.texStorage2D(i.TEXTURE_2D,Ct,qt,ut.width,ut.height)}for(let ut=0,xt=se.length;ut<xt;ut++)Ut=se[ut],Zt?$&&e.texSubImage2D(i.TEXTURE_2D,ut,0,0,Lt,Xt,Ut):e.texImage2D(i.TEXTURE_2D,ut,qt,Lt,Xt,Ut);T.generateMipmaps=!1}else if(Zt){if(de){const ut=nt(Mt);e.texStorage2D(i.TEXTURE_2D,Ct,qt,ut.width,ut.height)}$&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Lt,Xt,Mt)}else e.texImage2D(i.TEXTURE_2D,0,qt,Lt,Xt,Mt);m(T)&&p(ht),Ft.__version=dt.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function it(D,T,K){if(T.image.length!==6)return;const ht=pt(D,T),gt=T.source;e.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+K);const dt=n.get(gt);if(gt.version!==dt.__version||ht===!0){e.activeTexture(i.TEXTURE0+K);const Ft=oe.getPrimaries(oe.workingColorSpace),Tt=T.colorSpace===Xn?null:oe.getPrimaries(T.colorSpace),Dt=T.colorSpace===Xn||Ft===Tt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Dt);const te=T.isCompressedTexture||T.image[0].isCompressedTexture,Mt=T.image[0]&&T.image[0].isDataTexture,Lt=[];for(let xt=0;xt<6;xt++)!te&&!Mt?Lt[xt]=x(T.image[xt],!0,s.maxCubemapSize):Lt[xt]=Mt?T.image[xt].image:T.image[xt],Lt[xt]=V(T,Lt[xt]);const Xt=Lt[0],qt=r.convert(T.format,T.colorSpace),Ut=r.convert(T.type),se=M(T.internalFormat,qt,Ut,T.colorSpace),Zt=T.isVideoTexture!==!0,de=dt.__version===void 0||ht===!0,$=gt.dataReady;let Ct=E(T,Xt);et(i.TEXTURE_CUBE_MAP,T);let ut;if(te){Zt&&de&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Ct,se,Xt.width,Xt.height);for(let xt=0;xt<6;xt++){ut=Lt[xt].mipmaps;for(let Rt=0;Rt<ut.length;Rt++){const Pt=ut[Rt];T.format!==mn?qt!==null?Zt?$&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Rt,0,0,Pt.width,Pt.height,qt,Pt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Rt,se,Pt.width,Pt.height,0,Pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Zt?$&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Rt,0,0,Pt.width,Pt.height,qt,Ut,Pt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Rt,se,Pt.width,Pt.height,0,qt,Ut,Pt.data)}}}else{if(ut=T.mipmaps,Zt&&de){ut.length>0&&Ct++;const xt=nt(Lt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Ct,se,xt.width,xt.height)}for(let xt=0;xt<6;xt++)if(Mt){Zt?$&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,Lt[xt].width,Lt[xt].height,qt,Ut,Lt[xt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,se,Lt[xt].width,Lt[xt].height,0,qt,Ut,Lt[xt].data);for(let Rt=0;Rt<ut.length;Rt++){const Yt=ut[Rt].image[xt].image;Zt?$&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Rt+1,0,0,Yt.width,Yt.height,qt,Ut,Yt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Rt+1,se,Yt.width,Yt.height,0,qt,Ut,Yt.data)}}else{Zt?$&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,qt,Ut,Lt[xt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,se,qt,Ut,Lt[xt]);for(let Rt=0;Rt<ut.length;Rt++){const Pt=ut[Rt];Zt?$&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Rt+1,0,0,qt,Ut,Pt.image[xt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Rt+1,se,qt,Ut,Pt.image[xt])}}}m(T)&&p(i.TEXTURE_CUBE_MAP),dt.__version=gt.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function _t(D,T,K,ht,gt,dt){const Ft=r.convert(K.format,K.colorSpace),Tt=r.convert(K.type),Dt=M(K.internalFormat,Ft,Tt,K.colorSpace),te=n.get(T),Mt=n.get(K);if(Mt.__renderTarget=T,!te.__hasExternalTextures){const Lt=Math.max(1,T.width>>dt),Xt=Math.max(1,T.height>>dt);gt===i.TEXTURE_3D||gt===i.TEXTURE_2D_ARRAY?e.texImage3D(gt,dt,Dt,Lt,Xt,T.depth,0,Ft,Tt,null):e.texImage2D(gt,dt,Dt,Lt,Xt,0,Ft,Tt,null)}e.bindFramebuffer(i.FRAMEBUFFER,D),vt(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ht,gt,Mt.__webglTexture,0,ot(T)):(gt===i.TEXTURE_2D||gt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&gt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ht,gt,Mt.__webglTexture,dt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function st(D,T,K){if(i.bindRenderbuffer(i.RENDERBUFFER,D),T.depthBuffer){const ht=T.depthTexture,gt=ht&&ht.isDepthTexture?ht.type:null,dt=_(T.stencilBuffer,gt),Ft=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Tt=ot(T);vt(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Tt,dt,T.width,T.height):K?i.renderbufferStorageMultisample(i.RENDERBUFFER,Tt,dt,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,dt,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ft,i.RENDERBUFFER,D)}else{const ht=T.textures;for(let gt=0;gt<ht.length;gt++){const dt=ht[gt],Ft=r.convert(dt.format,dt.colorSpace),Tt=r.convert(dt.type),Dt=M(dt.internalFormat,Ft,Tt,dt.colorSpace),te=ot(T);K&&vt(T)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,te,Dt,T.width,T.height):vt(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,te,Dt,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,Dt,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function rt(D,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,D),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ht=n.get(T.depthTexture);ht.__renderTarget=T,(!ht.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),O(T.depthTexture,0);const gt=ht.__webglTexture,dt=ot(T);if(T.depthTexture.format===os)vt(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,gt,0,dt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,gt,0);else if(T.depthTexture.format===fs)vt(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,gt,0,dt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,gt,0);else throw new Error("Unknown depthTexture format")}function L(D){const T=n.get(D),K=D.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==D.depthTexture){const ht=D.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),ht){const gt=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,ht.removeEventListener("dispose",gt)};ht.addEventListener("dispose",gt),T.__depthDisposeCallback=gt}T.__boundDepthTexture=ht}if(D.depthTexture&&!T.__autoAllocateDepthBuffer){if(K)throw new Error("target.depthTexture not supported in Cube render targets");rt(T.__webglFramebuffer,D)}else if(K){T.__webglDepthbuffer=[];for(let ht=0;ht<6;ht++)if(e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[ht]),T.__webglDepthbuffer[ht]===void 0)T.__webglDepthbuffer[ht]=i.createRenderbuffer(),st(T.__webglDepthbuffer[ht],D,!1);else{const gt=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,dt=T.__webglDepthbuffer[ht];i.bindRenderbuffer(i.RENDERBUFFER,dt),i.framebufferRenderbuffer(i.FRAMEBUFFER,gt,i.RENDERBUFFER,dt)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=i.createRenderbuffer(),st(T.__webglDepthbuffer,D,!1);else{const ht=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,gt=T.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,gt),i.framebufferRenderbuffer(i.FRAMEBUFFER,ht,i.RENDERBUFFER,gt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function U(D,T,K){const ht=n.get(D);T!==void 0&&_t(ht.__webglFramebuffer,D,D.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),K!==void 0&&L(D)}function G(D){const T=D.texture,K=n.get(D),ht=n.get(T);D.addEventListener("dispose",v);const gt=D.textures,dt=D.isWebGLCubeRenderTarget===!0,Ft=gt.length>1;if(Ft||(ht.__webglTexture===void 0&&(ht.__webglTexture=i.createTexture()),ht.__version=T.version,o.memory.textures++),dt){K.__webglFramebuffer=[];for(let Tt=0;Tt<6;Tt++)if(T.mipmaps&&T.mipmaps.length>0){K.__webglFramebuffer[Tt]=[];for(let Dt=0;Dt<T.mipmaps.length;Dt++)K.__webglFramebuffer[Tt][Dt]=i.createFramebuffer()}else K.__webglFramebuffer[Tt]=i.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){K.__webglFramebuffer=[];for(let Tt=0;Tt<T.mipmaps.length;Tt++)K.__webglFramebuffer[Tt]=i.createFramebuffer()}else K.__webglFramebuffer=i.createFramebuffer();if(Ft)for(let Tt=0,Dt=gt.length;Tt<Dt;Tt++){const te=n.get(gt[Tt]);te.__webglTexture===void 0&&(te.__webglTexture=i.createTexture(),o.memory.textures++)}if(D.samples>0&&vt(D)===!1){K.__webglMultisampledFramebuffer=i.createFramebuffer(),K.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let Tt=0;Tt<gt.length;Tt++){const Dt=gt[Tt];K.__webglColorRenderbuffer[Tt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,K.__webglColorRenderbuffer[Tt]);const te=r.convert(Dt.format,Dt.colorSpace),Mt=r.convert(Dt.type),Lt=M(Dt.internalFormat,te,Mt,Dt.colorSpace,D.isXRRenderTarget===!0),Xt=ot(D);i.renderbufferStorageMultisample(i.RENDERBUFFER,Xt,Lt,D.width,D.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.RENDERBUFFER,K.__webglColorRenderbuffer[Tt])}i.bindRenderbuffer(i.RENDERBUFFER,null),D.depthBuffer&&(K.__webglDepthRenderbuffer=i.createRenderbuffer(),st(K.__webglDepthRenderbuffer,D,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(dt){e.bindTexture(i.TEXTURE_CUBE_MAP,ht.__webglTexture),et(i.TEXTURE_CUBE_MAP,T);for(let Tt=0;Tt<6;Tt++)if(T.mipmaps&&T.mipmaps.length>0)for(let Dt=0;Dt<T.mipmaps.length;Dt++)_t(K.__webglFramebuffer[Tt][Dt],D,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,Dt);else _t(K.__webglFramebuffer[Tt],D,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0);m(T)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ft){for(let Tt=0,Dt=gt.length;Tt<Dt;Tt++){const te=gt[Tt],Mt=n.get(te);e.bindTexture(i.TEXTURE_2D,Mt.__webglTexture),et(i.TEXTURE_2D,te),_t(K.__webglFramebuffer,D,te,i.COLOR_ATTACHMENT0+Tt,i.TEXTURE_2D,0),m(te)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let Tt=i.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Tt=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Tt,ht.__webglTexture),et(Tt,T),T.mipmaps&&T.mipmaps.length>0)for(let Dt=0;Dt<T.mipmaps.length;Dt++)_t(K.__webglFramebuffer[Dt],D,T,i.COLOR_ATTACHMENT0,Tt,Dt);else _t(K.__webglFramebuffer,D,T,i.COLOR_ATTACHMENT0,Tt,0);m(T)&&p(Tt),e.unbindTexture()}D.depthBuffer&&L(D)}function k(D){const T=D.textures;for(let K=0,ht=T.length;K<ht;K++){const gt=T[K];if(m(gt)){const dt=w(D),Ft=n.get(gt).__webglTexture;e.bindTexture(dt,Ft),p(dt),e.unbindTexture()}}}const Z=[],P=[];function mt(D){if(D.samples>0){if(vt(D)===!1){const T=D.textures,K=D.width,ht=D.height;let gt=i.COLOR_BUFFER_BIT;const dt=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ft=n.get(D),Tt=T.length>1;if(Tt)for(let Dt=0;Dt<T.length;Dt++)e.bindFramebuffer(i.FRAMEBUFFER,Ft.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Dt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Ft.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Dt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Ft.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ft.__webglFramebuffer);for(let Dt=0;Dt<T.length;Dt++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(gt|=i.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(gt|=i.STENCIL_BUFFER_BIT)),Tt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ft.__webglColorRenderbuffer[Dt]);const te=n.get(T[Dt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,te,0)}i.blitFramebuffer(0,0,K,ht,0,0,K,ht,gt,i.NEAREST),c===!0&&(Z.length=0,P.length=0,Z.push(i.COLOR_ATTACHMENT0+Dt),D.depthBuffer&&D.resolveDepthBuffer===!1&&(Z.push(dt),P.push(dt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,P)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Z))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Tt)for(let Dt=0;Dt<T.length;Dt++){e.bindFramebuffer(i.FRAMEBUFFER,Ft.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Dt,i.RENDERBUFFER,Ft.__webglColorRenderbuffer[Dt]);const te=n.get(T[Dt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Ft.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Dt,i.TEXTURE_2D,te,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ft.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&c){const T=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[T])}}}function ot(D){return Math.min(s.maxSamples,D.samples)}function vt(D){const T=n.get(D);return D.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function lt(D){const T=o.render.frame;u.get(D)!==T&&(u.set(D,T),D.update())}function V(D,T){const K=D.colorSpace,ht=D.format,gt=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||K!==vs&&K!==Xn&&(oe.getTransfer(K)===fe?(ht!==mn||gt!==Zn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",K)),T}function nt(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(l.width=D.naturalWidth||D.width,l.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(l.width=D.displayWidth,l.height=D.displayHeight):(l.width=D.width,l.height=D.height),l}this.allocateTextureUnit=q,this.resetTextureUnits=W,this.setTexture2D=O,this.setTexture2DArray=B,this.setTexture3D=j,this.setTextureCube=H,this.rebindTextures=U,this.setupRenderTarget=G,this.updateRenderTargetMipmap=k,this.updateMultisampleRenderTarget=mt,this.setupDepthRenderbuffer=L,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=vt}function Tg(i,t){function e(n,s=Xn){let r;const o=oe.getTransfer(s);if(n===Zn)return i.UNSIGNED_BYTE;if(n===uc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===hc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Uu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Iu)return i.BYTE;if(n===Lu)return i.SHORT;if(n===Ys)return i.UNSIGNED_SHORT;if(n===lc)return i.INT;if(n===wi)return i.UNSIGNED_INT;if(n===Dn)return i.FLOAT;if(n===Ln)return i.HALF_FLOAT;if(n===Nu)return i.ALPHA;if(n===Fu)return i.RGB;if(n===mn)return i.RGBA;if(n===Ou)return i.LUMINANCE;if(n===Bu)return i.LUMINANCE_ALPHA;if(n===os)return i.DEPTH_COMPONENT;if(n===fs)return i.DEPTH_STENCIL;if(n===dc)return i.RED;if(n===fc)return i.RED_INTEGER;if(n===ku)return i.RG;if(n===pc)return i.RG_INTEGER;if(n===mc)return i.RGBA_INTEGER;if(n===Gr||n===Wr||n===Xr||n===qr)if(o===fe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Gr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Wr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Xr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===qr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Gr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Wr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Xr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===qr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ea||n===Ta||n===Aa||n===Ca)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ea)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ta)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Aa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ca)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ra||n===Pa||n===Da)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ra||n===Pa)return o===fe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Da)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ia||n===La||n===Ua||n===Na||n===Fa||n===Oa||n===Ba||n===ka||n===za||n===Va||n===Ha||n===Ga||n===Wa||n===Xa)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ia)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===La)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ua)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Na)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Fa)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Oa)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ba)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ka)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===za)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Va)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ha)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ga)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Wa)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Xa)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Yr||n===qa||n===Ya)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Yr)return o===fe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===qa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ya)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===zu||n===Za||n===ja||n===$a)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Yr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Za)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ja)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===$a)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ds?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class Ag extends an{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class ie extends De{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Cg={type:"move"};class Xo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ie,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ie,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ie,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const x of t.hand.values()){const m=e.getJointPose(x,n),p=this._getHandJoint(l,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Cg)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ie;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Rg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Pg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Dg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Ve,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Oe({vertexShader:Rg,fragmentShader:Pg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new N(new Gt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Ig extends Ei{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,d=null,f=null,g=null;const x=new Dg,m=e.getContextAttributes();let p=null,w=null;const M=[],_=[],E=new ft;let b=null;const v=new an;v.viewport=new ge;const A=new an;A.viewport=new ge;const S=[v,A],y=new Ag;let R=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let it=M[Q];return it===void 0&&(it=new Xo,M[Q]=it),it.getTargetRaySpace()},this.getControllerGrip=function(Q){let it=M[Q];return it===void 0&&(it=new Xo,M[Q]=it),it.getGripSpace()},this.getHand=function(Q){let it=M[Q];return it===void 0&&(it=new Xo,M[Q]=it),it.getHandSpace()};function q(Q){const it=_.indexOf(Q.inputSource);if(it===-1)return;const _t=M[it];_t!==void 0&&(_t.update(Q.inputSource,Q.frame,l||o),_t.dispatchEvent({type:Q.type,data:Q.inputSource}))}function z(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",O);for(let Q=0;Q<M.length;Q++){const it=_[Q];it!==null&&(_[Q]=null,M[Q].disconnect(it))}R=null,W=null,x.reset(),t.setRenderTarget(p),f=null,d=null,h=null,s=null,w=null,pt.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(E.width,E.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){a=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Q){l=Q},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",z),s.addEventListener("inputsourceschange",O),m.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(E),s.renderState.layers===void 0){const it={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,it),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),w=new gn(f.framebufferWidth,f.framebufferHeight,{format:mn,type:Zn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let it=null,_t=null,st=null;m.depth&&(st=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,it=m.stencil?fs:os,_t=m.stencil?ds:wi);const rt={colorFormat:e.RGBA8,depthFormat:st,scaleFactor:r};h=new XRWebGLBinding(s,e),d=h.createProjectionLayer(rt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),w=new gn(d.textureWidth,d.textureHeight,{format:mn,type:Zn,depthTexture:new Qu(d.textureWidth,d.textureHeight,_t,void 0,void 0,void 0,void 0,void 0,void 0,it),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),pt.setContext(s),pt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function O(Q){for(let it=0;it<Q.removed.length;it++){const _t=Q.removed[it],st=_.indexOf(_t);st>=0&&(_[st]=null,M[st].disconnect(_t))}for(let it=0;it<Q.added.length;it++){const _t=Q.added[it];let st=_.indexOf(_t);if(st===-1){for(let L=0;L<M.length;L++)if(L>=_.length){_.push(_t),st=L;break}else if(_[L]===null){_[L]=_t,st=L;break}if(st===-1)break}const rt=M[st];rt&&rt.connect(_t)}}const B=new C,j=new C;function H(Q,it,_t){B.setFromMatrixPosition(it.matrixWorld),j.setFromMatrixPosition(_t.matrixWorld);const st=B.distanceTo(j),rt=it.projectionMatrix.elements,L=_t.projectionMatrix.elements,U=rt[14]/(rt[10]-1),G=rt[14]/(rt[10]+1),k=(rt[9]+1)/rt[5],Z=(rt[9]-1)/rt[5],P=(rt[8]-1)/rt[0],mt=(L[8]+1)/L[0],ot=U*P,vt=U*mt,lt=st/(-P+mt),V=lt*-P;if(it.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(V),Q.translateZ(lt),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),rt[10]===-1)Q.projectionMatrix.copy(it.projectionMatrix),Q.projectionMatrixInverse.copy(it.projectionMatrixInverse);else{const nt=U+lt,D=G+lt,T=ot-V,K=vt+(st-V),ht=k*G/D*nt,gt=Z*G/D*nt;Q.projectionMatrix.makePerspective(T,K,ht,gt,nt,D),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function Y(Q,it){it===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(it.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let it=Q.near,_t=Q.far;x.texture!==null&&(x.depthNear>0&&(it=x.depthNear),x.depthFar>0&&(_t=x.depthFar)),y.near=A.near=v.near=it,y.far=A.far=v.far=_t,(R!==y.near||W!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),R=y.near,W=y.far),v.layers.mask=Q.layers.mask|2,A.layers.mask=Q.layers.mask|4,y.layers.mask=v.layers.mask|A.layers.mask;const st=Q.parent,rt=y.cameras;Y(y,st);for(let L=0;L<rt.length;L++)Y(rt[L],st);rt.length===2?H(y,v,A):y.projectionMatrix.copy(v.projectionMatrix),yt(Q,y,st)};function yt(Q,it,_t){_t===null?Q.matrix.copy(it.matrixWorld):(Q.matrix.copy(_t.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(it.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(it.projectionMatrix),Q.projectionMatrixInverse.copy(it.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Zs*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(Q){c=Q,d!==null&&(d.fixedFoveation=Q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Q)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(y)};let X=null;function et(Q,it){if(u=it.getViewerPose(l||o),g=it,u!==null){const _t=u.views;f!==null&&(t.setRenderTargetFramebuffer(w,f.framebuffer),t.setRenderTarget(w));let st=!1;_t.length!==y.cameras.length&&(y.cameras.length=0,st=!0);for(let L=0;L<_t.length;L++){const U=_t[L];let G=null;if(f!==null)G=f.getViewport(U);else{const Z=h.getViewSubImage(d,U);G=Z.viewport,L===0&&(t.setRenderTargetTextures(w,Z.colorTexture,d.ignoreDepthValues?void 0:Z.depthStencilTexture),t.setRenderTarget(w))}let k=S[L];k===void 0&&(k=new an,k.layers.enable(L),k.viewport=new ge,S[L]=k),k.matrix.fromArray(U.transform.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale),k.projectionMatrix.fromArray(U.projectionMatrix),k.projectionMatrixInverse.copy(k.projectionMatrix).invert(),k.viewport.set(G.x,G.y,G.width,G.height),L===0&&(y.matrix.copy(k.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),st===!0&&y.cameras.push(k)}const rt=s.enabledFeatures;if(rt&&rt.includes("depth-sensing")){const L=h.getDepthInformation(_t[0]);L&&L.isValid&&L.texture&&x.init(t,L,s.renderState)}}for(let _t=0;_t<M.length;_t++){const st=_[_t],rt=M[_t];st!==null&&rt!==void 0&&rt.update(st,it,l||o)}X&&X(Q,it),it.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:it}),g=null}const pt=new Ju;pt.setAnimationLoop(et),this.setAnimationLoop=function(Q){X=Q},this.dispose=function(){}}}const vi=new Nn,Lg=new re;function Ug(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,ju(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,w,M,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,_)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,w,M):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===$e&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===$e&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const w=t.get(p),M=w.envMap,_=w.envMapRotation;M&&(m.envMap.value=M,vi.copy(_),vi.x*=-1,vi.y*=-1,vi.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(vi.y*=-1,vi.z*=-1),m.envMapRotation.value.setFromMatrix4(Lg.makeRotationFromEuler(vi)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,w,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*w,m.scale.value=M*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,w){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===$e&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){const w=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Ng(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(w,M){const _=M.program;n.uniformBlockBinding(w,_)}function l(w,M){let _=s[w.id];_===void 0&&(g(w),_=u(w),s[w.id]=_,w.addEventListener("dispose",m));const E=M.program;n.updateUBOMapping(w,E);const b=t.render.frame;r[w.id]!==b&&(d(w),r[w.id]=b)}function u(w){const M=h();w.__bindingPointIndex=M;const _=i.createBuffer(),E=w.__size,b=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,E,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,_),_}function h(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(w){const M=s[w.id],_=w.uniforms,E=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let b=0,v=_.length;b<v;b++){const A=Array.isArray(_[b])?_[b]:[_[b]];for(let S=0,y=A.length;S<y;S++){const R=A[S];if(f(R,b,S,E)===!0){const W=R.__offset,q=Array.isArray(R.value)?R.value:[R.value];let z=0;for(let O=0;O<q.length;O++){const B=q[O],j=x(B);typeof B=="number"||typeof B=="boolean"?(R.__data[0]=B,i.bufferSubData(i.UNIFORM_BUFFER,W+z,R.__data)):B.isMatrix3?(R.__data[0]=B.elements[0],R.__data[1]=B.elements[1],R.__data[2]=B.elements[2],R.__data[3]=0,R.__data[4]=B.elements[3],R.__data[5]=B.elements[4],R.__data[6]=B.elements[5],R.__data[7]=0,R.__data[8]=B.elements[6],R.__data[9]=B.elements[7],R.__data[10]=B.elements[8],R.__data[11]=0):(B.toArray(R.__data,z),z+=j.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,W,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(w,M,_,E){const b=w.value,v=M+"_"+_;if(E[v]===void 0)return typeof b=="number"||typeof b=="boolean"?E[v]=b:E[v]=b.clone(),!0;{const A=E[v];if(typeof b=="number"||typeof b=="boolean"){if(A!==b)return E[v]=b,!0}else if(A.equals(b)===!1)return A.copy(b),!0}return!1}function g(w){const M=w.uniforms;let _=0;const E=16;for(let v=0,A=M.length;v<A;v++){const S=Array.isArray(M[v])?M[v]:[M[v]];for(let y=0,R=S.length;y<R;y++){const W=S[y],q=Array.isArray(W.value)?W.value:[W.value];for(let z=0,O=q.length;z<O;z++){const B=q[z],j=x(B),H=_%E,Y=H%j.boundary,yt=H+Y;_+=Y,yt!==0&&E-yt<j.storage&&(_+=E-yt),W.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=_,_+=j.storage}}}const b=_%E;return b>0&&(_+=E-b),w.__size=_,w.__cache={},this}function x(w){const M={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(M.boundary=4,M.storage=4):w.isVector2?(M.boundary=8,M.storage=8):w.isVector3||w.isColor?(M.boundary=16,M.storage=12):w.isVector4?(M.boundary=16,M.storage=16):w.isMatrix3?(M.boundary=48,M.storage=48):w.isMatrix4?(M.boundary=64,M.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),M}function m(w){const M=w.target;M.removeEventListener("dispose",m);const _=o.indexOf(M.__bindingPointIndex);o.splice(_,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function p(){for(const w in s)i.deleteBuffer(s[w]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}class Fg{constructor(t={}){const{canvas:e=Ed(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),x=new Int32Array(4);let m=null,p=null;const w=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=be,this.toneMapping=ci,this.toneMappingExposure=1;const _=this;let E=!1,b=0,v=0,A=null,S=-1,y=null;const R=new ge,W=new ge;let q=null;const z=new Wt(0);let O=0,B=e.width,j=e.height,H=1,Y=null,yt=null;const X=new ge(0,0,B,j),et=new ge(0,0,B,j);let pt=!1;const Q=new vc;let it=!1,_t=!1;const st=new re,rt=new re,L=new C,U=new ge,G={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let k=!1;function Z(){return A===null?H:1}let P=n;function mt(I,J){return e.getContext(I,J)}try{const I={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${co}`),e.addEventListener("webglcontextlost",xt,!1),e.addEventListener("webglcontextrestored",Rt,!1),e.addEventListener("webglcontextcreationerror",Pt,!1),P===null){const J="webgl2";if(P=mt(J,I),P===null)throw mt(J)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(I){throw console.error("THREE.WebGLRenderer: "+I.message),I}let ot,vt,lt,V,nt,D,T,K,ht,gt,dt,Ft,Tt,Dt,te,Mt,Lt,Xt,qt,Ut,se,Zt,de,$;function Ct(){ot=new Hm(P),ot.init(),Zt=new Tg(P,ot),vt=new Fm(P,ot,t,Zt),lt=new wg(P,ot),vt.reverseDepthBuffer&&d&&lt.buffers.depth.setReversed(!0),V=new Xm(P),nt=new lg,D=new Eg(P,ot,lt,nt,vt,Zt,V),T=new Bm(_),K=new Vm(_),ht=new Kd(P),de=new Um(P,ht),gt=new Gm(P,ht,V,de),dt=new Ym(P,gt,ht,V),qt=new qm(P,vt,D),Mt=new Om(nt),Ft=new cg(_,T,K,ot,vt,de,Mt),Tt=new Ug(_,nt),Dt=new hg,te=new _g(ot),Xt=new Lm(_,T,K,lt,dt,f,c),Lt=new Mg(_,dt,vt),$=new Ng(P,V,vt,lt),Ut=new Nm(P,ot,V),se=new Wm(P,ot,V),V.programs=Ft.programs,_.capabilities=vt,_.extensions=ot,_.properties=nt,_.renderLists=Dt,_.shadowMap=Lt,_.state=lt,_.info=V}Ct();const ut=new Ig(_,P);this.xr=ut,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const I=ot.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){const I=ot.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(I){I!==void 0&&(H=I,this.setSize(B,j,!1))},this.getSize=function(I){return I.set(B,j)},this.setSize=function(I,J,at=!0){if(ut.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=I,j=J,e.width=Math.floor(I*H),e.height=Math.floor(J*H),at===!0&&(e.style.width=I+"px",e.style.height=J+"px"),this.setViewport(0,0,I,J)},this.getDrawingBufferSize=function(I){return I.set(B*H,j*H).floor()},this.setDrawingBufferSize=function(I,J,at){B=I,j=J,H=at,e.width=Math.floor(I*at),e.height=Math.floor(J*at),this.setViewport(0,0,I,J)},this.getCurrentViewport=function(I){return I.copy(R)},this.getViewport=function(I){return I.copy(X)},this.setViewport=function(I,J,at,ct){I.isVector4?X.set(I.x,I.y,I.z,I.w):X.set(I,J,at,ct),lt.viewport(R.copy(X).multiplyScalar(H).round())},this.getScissor=function(I){return I.copy(et)},this.setScissor=function(I,J,at,ct){I.isVector4?et.set(I.x,I.y,I.z,I.w):et.set(I,J,at,ct),lt.scissor(W.copy(et).multiplyScalar(H).round())},this.getScissorTest=function(){return pt},this.setScissorTest=function(I){lt.setScissorTest(pt=I)},this.setOpaqueSort=function(I){Y=I},this.setTransparentSort=function(I){yt=I},this.getClearColor=function(I){return I.copy(Xt.getClearColor())},this.setClearColor=function(){Xt.setClearColor.apply(Xt,arguments)},this.getClearAlpha=function(){return Xt.getClearAlpha()},this.setClearAlpha=function(){Xt.setClearAlpha.apply(Xt,arguments)},this.clear=function(I=!0,J=!0,at=!0){let ct=0;if(I){let tt=!1;if(A!==null){const wt=A.texture.format;tt=wt===mc||wt===pc||wt===fc}if(tt){const wt=A.texture.type,It=wt===Zn||wt===wi||wt===Ys||wt===ds||wt===uc||wt===hc,Bt=Xt.getClearColor(),kt=Xt.getClearAlpha(),jt=Bt.r,Kt=Bt.g,zt=Bt.b;It?(g[0]=jt,g[1]=Kt,g[2]=zt,g[3]=kt,P.clearBufferuiv(P.COLOR,0,g)):(x[0]=jt,x[1]=Kt,x[2]=zt,x[3]=kt,P.clearBufferiv(P.COLOR,0,x))}else ct|=P.COLOR_BUFFER_BIT}J&&(ct|=P.DEPTH_BUFFER_BIT),at&&(ct|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(ct)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",xt,!1),e.removeEventListener("webglcontextrestored",Rt,!1),e.removeEventListener("webglcontextcreationerror",Pt,!1),Dt.dispose(),te.dispose(),nt.dispose(),T.dispose(),K.dispose(),dt.dispose(),de.dispose(),$.dispose(),Ft.dispose(),ut.dispose(),ut.removeEventListener("sessionstart",er),ut.removeEventListener("sessionend",Ae),F.stop()};function xt(I){I.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function Rt(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const I=V.autoReset,J=Lt.enabled,at=Lt.autoUpdate,ct=Lt.needsUpdate,tt=Lt.type;Ct(),V.autoReset=I,Lt.enabled=J,Lt.autoUpdate=at,Lt.needsUpdate=ct,Lt.type=tt}function Pt(I){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function Yt(I){const J=I.target;J.removeEventListener("dispose",Yt),we(J)}function we(I){Ie(I),nt.remove(I)}function Ie(I){const J=nt.get(I).programs;J!==void 0&&(J.forEach(function(at){Ft.releaseProgram(at)}),I.isShaderMaterial&&Ft.releaseShaderCache(I))}this.renderBufferDirect=function(I,J,at,ct,tt,wt){J===null&&(J=G);const It=tt.isMesh&&tt.matrixWorld.determinant()<0,Bt=Th(I,J,at,ct,tt);lt.setMaterial(ct,It);let kt=at.index,jt=1;if(ct.wireframe===!0){if(kt=gt.getWireframeAttribute(at),kt===void 0)return;jt=2}const Kt=at.drawRange,zt=at.attributes.position;let ce=Kt.start*jt,xe=(Kt.start+Kt.count)*jt;wt!==null&&(ce=Math.max(ce,wt.start*jt),xe=Math.min(xe,(wt.start+wt.count)*jt)),kt!==null?(ce=Math.max(ce,0),xe=Math.min(xe,kt.count)):zt!=null&&(ce=Math.max(ce,0),xe=Math.min(xe,zt.count));const ye=xe-ce;if(ye<0||ye===1/0)return;de.setup(tt,ct,Bt,at,kt);let Ke,ue=Ut;if(kt!==null&&(Ke=ht.get(kt),ue=se,ue.setIndex(Ke)),tt.isMesh)ct.wireframe===!0?(lt.setLineWidth(ct.wireframeLinewidth*Z()),ue.setMode(P.LINES)):ue.setMode(P.TRIANGLES);else if(tt.isLine){let Ht=ct.linewidth;Ht===void 0&&(Ht=1),lt.setLineWidth(Ht*Z()),tt.isLineSegments?ue.setMode(P.LINES):tt.isLineLoop?ue.setMode(P.LINE_LOOP):ue.setMode(P.LINE_STRIP)}else tt.isPoints?ue.setMode(P.POINTS):tt.isSprite&&ue.setMode(P.TRIANGLES);if(tt.isBatchedMesh)if(tt._multiDrawInstances!==null)ue.renderMultiDrawInstances(tt._multiDrawStarts,tt._multiDrawCounts,tt._multiDrawCount,tt._multiDrawInstances);else if(ot.get("WEBGL_multi_draw"))ue.renderMultiDraw(tt._multiDrawStarts,tt._multiDrawCounts,tt._multiDrawCount);else{const Ht=tt._multiDrawStarts,Bn=tt._multiDrawCounts,he=tt._multiDrawCount,yn=kt?ht.get(kt).bytesPerElement:1,Ii=nt.get(ct).currentProgram.getUniforms();for(let sn=0;sn<he;sn++)Ii.setValue(P,"_gl_DrawID",sn),ue.render(Ht[sn]/yn,Bn[sn])}else if(tt.isInstancedMesh)ue.renderInstances(ce,ye,tt.count);else if(at.isInstancedBufferGeometry){const Ht=at._maxInstanceCount!==void 0?at._maxInstanceCount:1/0,Bn=Math.min(at.instanceCount,Ht);ue.renderInstances(ce,ye,Bn)}else ue.render(ce,ye)};function ae(I,J,at){I.transparent===!0&&I.side===Re&&I.forceSinglePass===!1?(I.side=$e,I.needsUpdate=!0,$n(I,J,at),I.side=hi,I.needsUpdate=!0,$n(I,J,at),I.side=Re):$n(I,J,at)}this.compile=function(I,J,at=null){at===null&&(at=I),p=te.get(at),p.init(J),M.push(p),at.traverseVisible(function(tt){tt.isLight&&tt.layers.test(J.layers)&&(p.pushLight(tt),tt.castShadow&&p.pushShadow(tt))}),I!==at&&I.traverseVisible(function(tt){tt.isLight&&tt.layers.test(J.layers)&&(p.pushLight(tt),tt.castShadow&&p.pushShadow(tt))}),p.setupLights();const ct=new Set;return I.traverse(function(tt){if(!(tt.isMesh||tt.isPoints||tt.isLine||tt.isSprite))return;const wt=tt.material;if(wt)if(Array.isArray(wt))for(let It=0;It<wt.length;It++){const Bt=wt[It];ae(Bt,at,tt),ct.add(Bt)}else ae(wt,at,tt),ct.add(wt)}),M.pop(),p=null,ct},this.compileAsync=function(I,J,at=null){const ct=this.compile(I,J,at);return new Promise(tt=>{function wt(){if(ct.forEach(function(It){nt.get(It).currentProgram.isReady()&&ct.delete(It)}),ct.size===0){tt(I);return}setTimeout(wt,10)}ot.get("KHR_parallel_shader_compile")!==null?wt():setTimeout(wt,10)})};let nn=null;function vn(I){nn&&nn(I)}function er(){F.stop()}function Ae(){F.start()}const F=new Ju;F.setAnimationLoop(vn),typeof self<"u"&&F.setContext(self),this.setAnimationLoop=function(I){nn=I,ut.setAnimationLoop(I),I===null?F.stop():F.start()},ut.addEventListener("sessionstart",er),ut.addEventListener("sessionend",Ae),this.render=function(I,J){if(J!==void 0&&J.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),J.parent===null&&J.matrixWorldAutoUpdate===!0&&J.updateMatrixWorld(),ut.enabled===!0&&ut.isPresenting===!0&&(ut.cameraAutoUpdate===!0&&ut.updateCamera(J),J=ut.getCamera()),I.isScene===!0&&I.onBeforeRender(_,I,J,A),p=te.get(I,M.length),p.init(J),M.push(p),rt.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),Q.setFromProjectionMatrix(rt),_t=this.localClippingEnabled,it=Mt.init(this.clippingPlanes,_t),m=Dt.get(I,w.length),m.init(),w.push(m),ut.enabled===!0&&ut.isPresenting===!0){const wt=_.xr.getDepthSensingMesh();wt!==null&&Et(wt,J,-1/0,_.sortObjects)}Et(I,J,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(Y,yt),k=ut.enabled===!1||ut.isPresenting===!1||ut.hasDepthSensing()===!1,k&&Xt.addToRenderList(m,I),this.info.render.frame++,it===!0&&Mt.beginShadows();const at=p.state.shadowsArray;Lt.render(at,I,J),it===!0&&Mt.endShadows(),this.info.autoReset===!0&&this.info.reset();const ct=m.opaque,tt=m.transmissive;if(p.setupLights(),J.isArrayCamera){const wt=J.cameras;if(tt.length>0)for(let It=0,Bt=wt.length;It<Bt;It++){const kt=wt[It];He(ct,tt,I,kt)}k&&Xt.render(I);for(let It=0,Bt=wt.length;It<Bt;It++){const kt=wt[It];Nt(m,I,kt,kt.viewport)}}else tt.length>0&&He(ct,tt,I,J),k&&Xt.render(I),Nt(m,I,J);A!==null&&(D.updateMultisampleRenderTarget(A),D.updateRenderTargetMipmap(A)),I.isScene===!0&&I.onAfterRender(_,I,J),de.resetDefaultState(),S=-1,y=null,M.pop(),M.length>0?(p=M[M.length-1],it===!0&&Mt.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,w.pop(),w.length>0?m=w[w.length-1]:m=null};function Et(I,J,at,ct){if(I.visible===!1)return;if(I.layers.test(J.layers)){if(I.isGroup)at=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(J);else if(I.isLight)p.pushLight(I),I.castShadow&&p.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||Q.intersectsSprite(I)){ct&&U.setFromMatrixPosition(I.matrixWorld).applyMatrix4(rt);const It=dt.update(I),Bt=I.material;Bt.visible&&m.push(I,It,Bt,at,U.z,null)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||Q.intersectsObject(I))){const It=dt.update(I),Bt=I.material;if(ct&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),U.copy(I.boundingSphere.center)):(It.boundingSphere===null&&It.computeBoundingSphere(),U.copy(It.boundingSphere.center)),U.applyMatrix4(I.matrixWorld).applyMatrix4(rt)),Array.isArray(Bt)){const kt=It.groups;for(let jt=0,Kt=kt.length;jt<Kt;jt++){const zt=kt[jt],ce=Bt[zt.materialIndex];ce&&ce.visible&&m.push(I,It,ce,at,U.z,zt)}}else Bt.visible&&m.push(I,It,Bt,at,U.z,null)}}const wt=I.children;for(let It=0,Bt=wt.length;It<Bt;It++)Et(wt[It],J,at,ct)}function Nt(I,J,at,ct){const tt=I.opaque,wt=I.transmissive,It=I.transparent;p.setupLightsView(at),it===!0&&Mt.setGlobalState(_.clippingPlanes,at),ct&&lt.viewport(R.copy(ct)),tt.length>0&&qe(tt,J,at),wt.length>0&&qe(wt,J,at),It.length>0&&qe(It,J,at),lt.buffers.depth.setTest(!0),lt.buffers.depth.setMask(!0),lt.buffers.color.setMask(!0),lt.setPolygonOffset(!1)}function He(I,J,at,ct){if((at.isScene===!0?at.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[ct.id]===void 0&&(p.state.transmissionRenderTarget[ct.id]=new gn(1,1,{generateMipmaps:!0,type:ot.has("EXT_color_buffer_half_float")||ot.has("EXT_color_buffer_float")?Ln:Zn,minFilter:ai,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:oe.workingColorSpace}));const wt=p.state.transmissionRenderTarget[ct.id],It=ct.viewport||R;wt.setSize(It.z,It.w);const Bt=_.getRenderTarget();_.setRenderTarget(wt),_.getClearColor(z),O=_.getClearAlpha(),O<1&&_.setClearColor(16777215,.5),_.clear(),k&&Xt.render(at);const kt=_.toneMapping;_.toneMapping=ci;const jt=ct.viewport;if(ct.viewport!==void 0&&(ct.viewport=void 0),p.setupLightsView(ct),it===!0&&Mt.setGlobalState(_.clippingPlanes,ct),qe(I,at,ct),D.updateMultisampleRenderTarget(wt),D.updateRenderTargetMipmap(wt),ot.has("WEBGL_multisampled_render_to_texture")===!1){let Kt=!1;for(let zt=0,ce=J.length;zt<ce;zt++){const xe=J[zt],ye=xe.object,Ke=xe.geometry,ue=xe.material,Ht=xe.group;if(ue.side===Re&&ye.layers.test(ct.layers)){const Bn=ue.side;ue.side=$e,ue.needsUpdate=!0,dn(ye,at,ct,Ke,ue,Ht),ue.side=Bn,ue.needsUpdate=!0,Kt=!0}}Kt===!0&&(D.updateMultisampleRenderTarget(wt),D.updateRenderTargetMipmap(wt))}_.setRenderTarget(Bt),_.setClearColor(z,O),jt!==void 0&&(ct.viewport=jt),_.toneMapping=kt}function qe(I,J,at){const ct=J.isScene===!0?J.overrideMaterial:null;for(let tt=0,wt=I.length;tt<wt;tt++){const It=I[tt],Bt=It.object,kt=It.geometry,jt=ct===null?It.material:ct,Kt=It.group;Bt.layers.test(at.layers)&&dn(Bt,J,at,kt,jt,Kt)}}function dn(I,J,at,ct,tt,wt){I.onBeforeRender(_,J,at,ct,tt,wt),I.modelViewMatrix.multiplyMatrices(at.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),tt.onBeforeRender(_,J,at,ct,I,wt),tt.transparent===!0&&tt.side===Re&&tt.forceSinglePass===!1?(tt.side=$e,tt.needsUpdate=!0,_.renderBufferDirect(at,J,ct,tt,I,wt),tt.side=hi,tt.needsUpdate=!0,_.renderBufferDirect(at,J,ct,tt,I,wt),tt.side=Re):_.renderBufferDirect(at,J,ct,tt,I,wt),I.onAfterRender(_,J,at,ct,tt,wt)}function $n(I,J,at){J.isScene!==!0&&(J=G);const ct=nt.get(I),tt=p.state.lights,wt=p.state.shadowsArray,It=tt.state.version,Bt=Ft.getParameters(I,tt.state,wt,J,at),kt=Ft.getProgramCacheKey(Bt);let jt=ct.programs;ct.environment=I.isMeshStandardMaterial?J.environment:null,ct.fog=J.fog,ct.envMap=(I.isMeshStandardMaterial?K:T).get(I.envMap||ct.environment),ct.envMapRotation=ct.environment!==null&&I.envMap===null?J.environmentRotation:I.envMapRotation,jt===void 0&&(I.addEventListener("dispose",Yt),jt=new Map,ct.programs=jt);let Kt=jt.get(kt);if(Kt!==void 0){if(ct.currentProgram===Kt&&ct.lightsStateVersion===It)return Lc(I,Bt),Kt}else Bt.uniforms=Ft.getUniforms(I),I.onBeforeCompile(Bt,_),Kt=Ft.acquireProgram(Bt,kt),jt.set(kt,Kt),ct.uniforms=Bt.uniforms;const zt=ct.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(zt.clippingPlanes=Mt.uniform),Lc(I,Bt),ct.needsLights=Ch(I),ct.lightsStateVersion=It,ct.needsLights&&(zt.ambientLightColor.value=tt.state.ambient,zt.lightProbe.value=tt.state.probe,zt.directionalLights.value=tt.state.directional,zt.directionalLightShadows.value=tt.state.directionalShadow,zt.spotLights.value=tt.state.spot,zt.spotLightShadows.value=tt.state.spotShadow,zt.rectAreaLights.value=tt.state.rectArea,zt.ltc_1.value=tt.state.rectAreaLTC1,zt.ltc_2.value=tt.state.rectAreaLTC2,zt.pointLights.value=tt.state.point,zt.pointLightShadows.value=tt.state.pointShadow,zt.hemisphereLights.value=tt.state.hemi,zt.directionalShadowMap.value=tt.state.directionalShadowMap,zt.directionalShadowMatrix.value=tt.state.directionalShadowMatrix,zt.spotShadowMap.value=tt.state.spotShadowMap,zt.spotLightMatrix.value=tt.state.spotLightMatrix,zt.spotLightMap.value=tt.state.spotLightMap,zt.pointShadowMap.value=tt.state.pointShadowMap,zt.pointShadowMatrix.value=tt.state.pointShadowMatrix),ct.currentProgram=Kt,ct.uniformsList=null,Kt}function On(I){if(I.uniformsList===null){const J=I.currentProgram.getUniforms();I.uniformsList=Zr.seqWithValue(J.seq,I.uniforms)}return I.uniformsList}function Lc(I,J){const at=nt.get(I);at.outputColorSpace=J.outputColorSpace,at.batching=J.batching,at.batchingColor=J.batchingColor,at.instancing=J.instancing,at.instancingColor=J.instancingColor,at.instancingMorph=J.instancingMorph,at.skinning=J.skinning,at.morphTargets=J.morphTargets,at.morphNormals=J.morphNormals,at.morphColors=J.morphColors,at.morphTargetsCount=J.morphTargetsCount,at.numClippingPlanes=J.numClippingPlanes,at.numIntersection=J.numClipIntersection,at.vertexAlphas=J.vertexAlphas,at.vertexTangents=J.vertexTangents,at.toneMapping=J.toneMapping}function Th(I,J,at,ct,tt){J.isScene!==!0&&(J=G),D.resetTextureUnits();const wt=J.fog,It=ct.isMeshStandardMaterial?J.environment:null,Bt=A===null?_.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:vs,kt=(ct.isMeshStandardMaterial?K:T).get(ct.envMap||It),jt=ct.vertexColors===!0&&!!at.attributes.color&&at.attributes.color.itemSize===4,Kt=!!at.attributes.tangent&&(!!ct.normalMap||ct.anisotropy>0),zt=!!at.morphAttributes.position,ce=!!at.morphAttributes.normal,xe=!!at.morphAttributes.color;let ye=ci;ct.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(ye=_.toneMapping);const Ke=at.morphAttributes.position||at.morphAttributes.normal||at.morphAttributes.color,ue=Ke!==void 0?Ke.length:0,Ht=nt.get(ct),Bn=p.state.lights;if(it===!0&&(_t===!0||I!==y)){const fn=I===y&&ct.id===S;Mt.setState(ct,I,fn)}let he=!1;ct.version===Ht.__version?(Ht.needsLights&&Ht.lightsStateVersion!==Bn.state.version||Ht.outputColorSpace!==Bt||tt.isBatchedMesh&&Ht.batching===!1||!tt.isBatchedMesh&&Ht.batching===!0||tt.isBatchedMesh&&Ht.batchingColor===!0&&tt.colorTexture===null||tt.isBatchedMesh&&Ht.batchingColor===!1&&tt.colorTexture!==null||tt.isInstancedMesh&&Ht.instancing===!1||!tt.isInstancedMesh&&Ht.instancing===!0||tt.isSkinnedMesh&&Ht.skinning===!1||!tt.isSkinnedMesh&&Ht.skinning===!0||tt.isInstancedMesh&&Ht.instancingColor===!0&&tt.instanceColor===null||tt.isInstancedMesh&&Ht.instancingColor===!1&&tt.instanceColor!==null||tt.isInstancedMesh&&Ht.instancingMorph===!0&&tt.morphTexture===null||tt.isInstancedMesh&&Ht.instancingMorph===!1&&tt.morphTexture!==null||Ht.envMap!==kt||ct.fog===!0&&Ht.fog!==wt||Ht.numClippingPlanes!==void 0&&(Ht.numClippingPlanes!==Mt.numPlanes||Ht.numIntersection!==Mt.numIntersection)||Ht.vertexAlphas!==jt||Ht.vertexTangents!==Kt||Ht.morphTargets!==zt||Ht.morphNormals!==ce||Ht.morphColors!==xe||Ht.toneMapping!==ye||Ht.morphTargetsCount!==ue)&&(he=!0):(he=!0,Ht.__version=ct.version);let yn=Ht.currentProgram;he===!0&&(yn=$n(ct,J,tt));let Ii=!1,sn=!1,Ms=!1;const Me=yn.getUniforms(),Cn=Ht.uniforms;if(lt.useProgram(yn.program)&&(Ii=!0,sn=!0,Ms=!0),ct.id!==S&&(S=ct.id,sn=!0),Ii||y!==I){lt.buffers.depth.getReversed()?(st.copy(I.projectionMatrix),Ad(st),Cd(st),Me.setValue(P,"projectionMatrix",st)):Me.setValue(P,"projectionMatrix",I.projectionMatrix),Me.setValue(P,"viewMatrix",I.matrixWorldInverse);const Kn=Me.map.cameraPosition;Kn!==void 0&&Kn.setValue(P,L.setFromMatrixPosition(I.matrixWorld)),vt.logarithmicDepthBuffer&&Me.setValue(P,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(ct.isMeshPhongMaterial||ct.isMeshToonMaterial||ct.isMeshLambertMaterial||ct.isMeshBasicMaterial||ct.isMeshStandardMaterial||ct.isShaderMaterial)&&Me.setValue(P,"isOrthographic",I.isOrthographicCamera===!0),y!==I&&(y=I,sn=!0,Ms=!0)}if(tt.isSkinnedMesh){Me.setOptional(P,tt,"bindMatrix"),Me.setOptional(P,tt,"bindMatrixInverse");const fn=tt.skeleton;fn&&(fn.boneTexture===null&&fn.computeBoneTexture(),Me.setValue(P,"boneTexture",fn.boneTexture,D))}tt.isBatchedMesh&&(Me.setOptional(P,tt,"batchingTexture"),Me.setValue(P,"batchingTexture",tt._matricesTexture,D),Me.setOptional(P,tt,"batchingIdTexture"),Me.setValue(P,"batchingIdTexture",tt._indirectTexture,D),Me.setOptional(P,tt,"batchingColorTexture"),tt._colorsTexture!==null&&Me.setValue(P,"batchingColorTexture",tt._colorsTexture,D));const Ss=at.morphAttributes;if((Ss.position!==void 0||Ss.normal!==void 0||Ss.color!==void 0)&&qt.update(tt,at,yn),(sn||Ht.receiveShadow!==tt.receiveShadow)&&(Ht.receiveShadow=tt.receiveShadow,Me.setValue(P,"receiveShadow",tt.receiveShadow)),ct.isMeshGouraudMaterial&&ct.envMap!==null&&(Cn.envMap.value=kt,Cn.flipEnvMap.value=kt.isCubeTexture&&kt.isRenderTargetTexture===!1?-1:1),ct.isMeshStandardMaterial&&ct.envMap===null&&J.environment!==null&&(Cn.envMapIntensity.value=J.environmentIntensity),sn&&(Me.setValue(P,"toneMappingExposure",_.toneMappingExposure),Ht.needsLights&&Ah(Cn,Ms),wt&&ct.fog===!0&&Tt.refreshFogUniforms(Cn,wt),Tt.refreshMaterialUniforms(Cn,ct,H,j,p.state.transmissionRenderTarget[I.id]),Zr.upload(P,On(Ht),Cn,D)),ct.isShaderMaterial&&ct.uniformsNeedUpdate===!0&&(Zr.upload(P,On(Ht),Cn,D),ct.uniformsNeedUpdate=!1),ct.isSpriteMaterial&&Me.setValue(P,"center",tt.center),Me.setValue(P,"modelViewMatrix",tt.modelViewMatrix),Me.setValue(P,"normalMatrix",tt.normalMatrix),Me.setValue(P,"modelMatrix",tt.matrixWorld),ct.isShaderMaterial||ct.isRawShaderMaterial){const fn=ct.uniformsGroups;for(let Kn=0,Jn=fn.length;Kn<Jn;Kn++){const Uc=fn[Kn];$.update(Uc,yn),$.bind(Uc,yn)}}return yn}function Ah(I,J){I.ambientLightColor.needsUpdate=J,I.lightProbe.needsUpdate=J,I.directionalLights.needsUpdate=J,I.directionalLightShadows.needsUpdate=J,I.pointLights.needsUpdate=J,I.pointLightShadows.needsUpdate=J,I.spotLights.needsUpdate=J,I.spotLightShadows.needsUpdate=J,I.rectAreaLights.needsUpdate=J,I.hemisphereLights.needsUpdate=J}function Ch(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return v},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(I,J,at){nt.get(I.texture).__webglTexture=J,nt.get(I.depthTexture).__webglTexture=at;const ct=nt.get(I);ct.__hasExternalTextures=!0,ct.__autoAllocateDepthBuffer=at===void 0,ct.__autoAllocateDepthBuffer||ot.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ct.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(I,J){const at=nt.get(I);at.__webglFramebuffer=J,at.__useDefaultFramebuffer=J===void 0},this.setRenderTarget=function(I,J=0,at=0){A=I,b=J,v=at;let ct=!0,tt=null,wt=!1,It=!1;if(I){const kt=nt.get(I);if(kt.__useDefaultFramebuffer!==void 0)lt.bindFramebuffer(P.FRAMEBUFFER,null),ct=!1;else if(kt.__webglFramebuffer===void 0)D.setupRenderTarget(I);else if(kt.__hasExternalTextures)D.rebindTextures(I,nt.get(I.texture).__webglTexture,nt.get(I.depthTexture).__webglTexture);else if(I.depthBuffer){const zt=I.depthTexture;if(kt.__boundDepthTexture!==zt){if(zt!==null&&nt.has(zt)&&(I.width!==zt.image.width||I.height!==zt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(I)}}const jt=I.texture;(jt.isData3DTexture||jt.isDataArrayTexture||jt.isCompressedArrayTexture)&&(It=!0);const Kt=nt.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(Kt[J])?tt=Kt[J][at]:tt=Kt[J],wt=!0):I.samples>0&&D.useMultisampledRTT(I)===!1?tt=nt.get(I).__webglMultisampledFramebuffer:Array.isArray(Kt)?tt=Kt[at]:tt=Kt,R.copy(I.viewport),W.copy(I.scissor),q=I.scissorTest}else R.copy(X).multiplyScalar(H).floor(),W.copy(et).multiplyScalar(H).floor(),q=pt;if(lt.bindFramebuffer(P.FRAMEBUFFER,tt)&&ct&&lt.drawBuffers(I,tt),lt.viewport(R),lt.scissor(W),lt.setScissorTest(q),wt){const kt=nt.get(I.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+J,kt.__webglTexture,at)}else if(It){const kt=nt.get(I.texture),jt=J||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,kt.__webglTexture,at||0,jt)}S=-1},this.readRenderTargetPixels=function(I,J,at,ct,tt,wt,It){if(!(I&&I.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Bt=nt.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&It!==void 0&&(Bt=Bt[It]),Bt){lt.bindFramebuffer(P.FRAMEBUFFER,Bt);try{const kt=I.texture,jt=kt.format,Kt=kt.type;if(!vt.textureFormatReadable(jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!vt.textureTypeReadable(Kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}J>=0&&J<=I.width-ct&&at>=0&&at<=I.height-tt&&P.readPixels(J,at,ct,tt,Zt.convert(jt),Zt.convert(Kt),wt)}finally{const kt=A!==null?nt.get(A).__webglFramebuffer:null;lt.bindFramebuffer(P.FRAMEBUFFER,kt)}}},this.readRenderTargetPixelsAsync=async function(I,J,at,ct,tt,wt,It){if(!(I&&I.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Bt=nt.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&It!==void 0&&(Bt=Bt[It]),Bt){const kt=I.texture,jt=kt.format,Kt=kt.type;if(!vt.textureFormatReadable(jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!vt.textureTypeReadable(Kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(J>=0&&J<=I.width-ct&&at>=0&&at<=I.height-tt){lt.bindFramebuffer(P.FRAMEBUFFER,Bt);const zt=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,zt),P.bufferData(P.PIXEL_PACK_BUFFER,wt.byteLength,P.STREAM_READ),P.readPixels(J,at,ct,tt,Zt.convert(jt),Zt.convert(Kt),0);const ce=A!==null?nt.get(A).__webglFramebuffer:null;lt.bindFramebuffer(P.FRAMEBUFFER,ce);const xe=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Td(P,xe,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,zt),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,wt),P.deleteBuffer(zt),P.deleteSync(xe),wt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(I,J=null,at=0){I.isTexture!==!0&&(Bs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),J=arguments[0]||null,I=arguments[1]);const ct=Math.pow(2,-at),tt=Math.floor(I.image.width*ct),wt=Math.floor(I.image.height*ct),It=J!==null?J.x:0,Bt=J!==null?J.y:0;D.setTexture2D(I,0),P.copyTexSubImage2D(P.TEXTURE_2D,at,0,0,It,Bt,tt,wt),lt.unbindTexture()},this.copyTextureToTexture=function(I,J,at=null,ct=null,tt=0){I.isTexture!==!0&&(Bs("WebGLRenderer: copyTextureToTexture function signature has changed."),ct=arguments[0]||null,I=arguments[1],J=arguments[2],tt=arguments[3]||0,at=null);let wt,It,Bt,kt,jt,Kt,zt,ce,xe;const ye=I.isCompressedTexture?I.mipmaps[tt]:I.image;at!==null?(wt=at.max.x-at.min.x,It=at.max.y-at.min.y,Bt=at.isBox3?at.max.z-at.min.z:1,kt=at.min.x,jt=at.min.y,Kt=at.isBox3?at.min.z:0):(wt=ye.width,It=ye.height,Bt=ye.depth||1,kt=0,jt=0,Kt=0),ct!==null?(zt=ct.x,ce=ct.y,xe=ct.z):(zt=0,ce=0,xe=0);const Ke=Zt.convert(J.format),ue=Zt.convert(J.type);let Ht;J.isData3DTexture?(D.setTexture3D(J,0),Ht=P.TEXTURE_3D):J.isDataArrayTexture||J.isCompressedArrayTexture?(D.setTexture2DArray(J,0),Ht=P.TEXTURE_2D_ARRAY):(D.setTexture2D(J,0),Ht=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,J.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,J.unpackAlignment);const Bn=P.getParameter(P.UNPACK_ROW_LENGTH),he=P.getParameter(P.UNPACK_IMAGE_HEIGHT),yn=P.getParameter(P.UNPACK_SKIP_PIXELS),Ii=P.getParameter(P.UNPACK_SKIP_ROWS),sn=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,ye.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ye.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,kt),P.pixelStorei(P.UNPACK_SKIP_ROWS,jt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Kt);const Ms=I.isDataArrayTexture||I.isData3DTexture,Me=J.isDataArrayTexture||J.isData3DTexture;if(I.isRenderTargetTexture||I.isDepthTexture){const Cn=nt.get(I),Ss=nt.get(J),fn=nt.get(Cn.__renderTarget),Kn=nt.get(Ss.__renderTarget);lt.bindFramebuffer(P.READ_FRAMEBUFFER,fn.__webglFramebuffer),lt.bindFramebuffer(P.DRAW_FRAMEBUFFER,Kn.__webglFramebuffer);for(let Jn=0;Jn<Bt;Jn++)Ms&&P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,nt.get(I).__webglTexture,tt,Kt+Jn),I.isDepthTexture?(Me&&P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,nt.get(J).__webglTexture,tt,xe+Jn),P.blitFramebuffer(kt,jt,wt,It,zt,ce,wt,It,P.DEPTH_BUFFER_BIT,P.NEAREST)):Me?P.copyTexSubImage3D(Ht,tt,zt,ce,xe+Jn,kt,jt,wt,It):P.copyTexSubImage2D(Ht,tt,zt,ce,xe+Jn,kt,jt,wt,It);lt.bindFramebuffer(P.READ_FRAMEBUFFER,null),lt.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else Me?I.isDataTexture||I.isData3DTexture?P.texSubImage3D(Ht,tt,zt,ce,xe,wt,It,Bt,Ke,ue,ye.data):J.isCompressedArrayTexture?P.compressedTexSubImage3D(Ht,tt,zt,ce,xe,wt,It,Bt,Ke,ye.data):P.texSubImage3D(Ht,tt,zt,ce,xe,wt,It,Bt,Ke,ue,ye):I.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,tt,zt,ce,wt,It,Ke,ue,ye.data):I.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,tt,zt,ce,ye.width,ye.height,Ke,ye.data):P.texSubImage2D(P.TEXTURE_2D,tt,zt,ce,wt,It,Ke,ue,ye);P.pixelStorei(P.UNPACK_ROW_LENGTH,Bn),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,he),P.pixelStorei(P.UNPACK_SKIP_PIXELS,yn),P.pixelStorei(P.UNPACK_SKIP_ROWS,Ii),P.pixelStorei(P.UNPACK_SKIP_IMAGES,sn),tt===0&&J.generateMipmaps&&P.generateMipmap(Ht),lt.unbindTexture()},this.copyTextureToTexture3D=function(I,J,at=null,ct=null,tt=0){return I.isTexture!==!0&&(Bs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),at=arguments[0]||null,ct=arguments[1]||null,I=arguments[2],J=arguments[3],tt=arguments[4]||0),Bs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(I,J,at,ct,tt)},this.initRenderTarget=function(I){nt.get(I).__webglFramebuffer===void 0&&D.setupRenderTarget(I)},this.initTexture=function(I){I.isCubeTexture?D.setTextureCube(I,0):I.isData3DTexture?D.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?D.setTexture2DArray(I,0):D.setTexture2D(I,0),lt.unbindTexture()},this.resetState=function(){b=0,v=0,A=null,lt.reset(),de.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=oe._getDrawingBufferColorSpace(t),e.unpackColorSpace=oe._getUnpackColorSpace()}}class Qr extends De{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Nn,this.environmentIntensity=1,this.environmentRotation=new Nn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Og{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Ka,this.updateRanges=[],this.version=0,this.uuid=Un()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Un()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Un()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ye=new C;class to{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ye.fromBufferAttribute(this,e),Ye.applyMatrix4(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ye.fromBufferAttribute(this,e),Ye.applyNormalMatrix(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ye.fromBufferAttribute(this,e),Ye.transformDirection(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=bn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=pe(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=pe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=pe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=pe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=pe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=bn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=bn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=bn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=bn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=pe(e,this.array),n=pe(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=pe(e,this.array),n=pe(n,this.array),s=pe(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=pe(e,this.array),n=pe(n,this.array),s=pe(s,this.array),r=pe(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Ne(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new to(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class je extends fi{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Wt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Yi;const As=new C,Zi=new C,ji=new C,$i=new ft,Cs=new ft,rh=new re,Sr=new C,Rs=new C,wr=new C,Dl=new ft,qo=new ft,Il=new ft;class tn extends De{constructor(t=new je){if(super(),this.isSprite=!0,this.type="Sprite",Yi===void 0){Yi=new Se;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Og(e,5);Yi.setIndex([0,1,2,0,2,3]),Yi.setAttribute("position",new to(n,3,0,!1)),Yi.setAttribute("uv",new to(n,2,3,!1))}this.geometry=Yi,this.material=t,this.center=new ft(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Zi.setFromMatrixScale(this.matrixWorld),rh.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ji.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Zi.multiplyScalar(-ji.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const o=this.center;br(Sr.set(-.5,-.5,0),ji,o,Zi,s,r),br(Rs.set(.5,-.5,0),ji,o,Zi,s,r),br(wr.set(.5,.5,0),ji,o,Zi,s,r),Dl.set(0,0),qo.set(1,0),Il.set(1,1);let a=t.ray.intersectTriangle(Sr,Rs,wr,!1,As);if(a===null&&(br(Rs.set(-.5,.5,0),ji,o,Zi,s,r),qo.set(0,1),a=t.ray.intersectTriangle(Sr,wr,Rs,!1,As),a===null))return;const c=t.ray.origin.distanceTo(As);c<t.near||c>t.far||e.push({distance:c,point:As.clone(),uv:cn.getInterpolation(As,Sr,Rs,wr,Dl,qo,Il,new ft),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function br(i,t,e,n,s,r){$i.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Cs.x=r*$i.x-s*$i.y,Cs.y=s*$i.x+r*$i.y):Cs.copy($i),i.copy(t),i.x+=Cs.x,i.y+=Cs.y,i.applyMatrix4(rh)}class Bg extends Ve{constructor(t=null,e=1,n=1,s,r,o,a,c,l=Xe,u=Xe,h,d){super(null,o,a,c,l,u,s,r,h,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ll extends Ne{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Ki=new re,Ul=new re,Er=[],Nl=new Ti,kg=new re,Ps=new N,Ds=new Ai;class zg extends N{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ll(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,kg)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ti),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ki),Nl.copy(t.boundingBox).applyMatrix4(Ki),this.boundingBox.union(Nl)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ai),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ki),Ds.copy(t.boundingSphere).applyMatrix4(Ki),this.boundingSphere.union(Ds)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(Ps.geometry=this.geometry,Ps.material=this.material,Ps.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ds.copy(this.boundingSphere),Ds.applyMatrix4(n),t.ray.intersectsSphere(Ds)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ki),Ul.multiplyMatrices(n,Ki),Ps.matrixWorld=Ul,Ps.raycast(t,Er);for(let o=0,a=Er.length;o<a;o++){const c=Er[o];c.instanceId=r,c.object=this,e.push(c)}Er.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Ll(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Bg(new Float32Array(s*this.count),s,this.count,dc,Dn));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class po extends fi{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Wt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const eo=new C,no=new C,Fl=new re,Is=new Js,Tr=new Ai,Yo=new C,Ol=new C;class Vg extends De{constructor(t=new Se,e=new po){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)eo.fromBufferAttribute(e,s-1),no.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=eo.distanceTo(no);t.setAttribute("lineDistance",new $t(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Tr.copy(n.boundingSphere),Tr.applyMatrix4(s),Tr.radius+=r,t.ray.intersectsSphere(Tr)===!1)return;Fl.copy(s).invert(),Is.copy(t.ray).applyMatrix4(Fl);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){const f=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let x=f,m=g-1;x<m;x+=l){const p=u.getX(x),w=u.getX(x+1),M=Ar(this,t,Is,c,p,w);M&&e.push(M)}if(this.isLineLoop){const x=u.getX(g-1),m=u.getX(f),p=Ar(this,t,Is,c,x,m);p&&e.push(p)}}else{const f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let x=f,m=g-1;x<m;x+=l){const p=Ar(this,t,Is,c,x,x+1);p&&e.push(p)}if(this.isLineLoop){const x=Ar(this,t,Is,c,g-1,f);x&&e.push(x)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Ar(i,t,e,n,s,r){const o=i.geometry.attributes.position;if(eo.fromBufferAttribute(o,s),no.fromBufferAttribute(o,r),e.distanceSqToSegment(eo,no,Yo,Ol)>n)return;Yo.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Yo);if(!(c<t.near||c>t.far))return{distance:c,point:Ol.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const Bl=new C,kl=new C;class Mc extends Vg{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Bl.fromBufferAttribute(e,s),kl.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Bl.distanceTo(kl);t.setAttribute("lineDistance",new $t(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class oh extends fi{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Wt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const zl=new re,tc=new Js,Cr=new Ai,Rr=new C;class Hg extends De{constructor(t=new Se,e=new oh){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Cr.copy(n.boundingSphere),Cr.applyMatrix4(s),Cr.radius+=r,t.ray.intersectsSphere(Cr)===!1)return;zl.copy(s).invert(),tc.copy(t.ray).applyMatrix4(zl);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,h=n.attributes.position;if(l!==null){const d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let g=d,x=f;g<x;g++){const m=l.getX(g);Rr.fromBufferAttribute(h,m),Vl(Rr,m,c,s,t,e,this)}}else{const d=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let g=d,x=f;g<x;g++)Rr.fromBufferAttribute(h,g),Vl(Rr,g,c,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Vl(i,t,e,n,s,r,o){const a=tc.distanceSqToPoint(i);if(a<e){const c=new C;tc.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class Zo extends Ve{constructor(t,e,n,s,r,o,a,c,l,u,h,d){super(null,o,a,c,l,u,s,r,h,d),this.isCompressedTexture=!0,this.image={width:e,height:n},this.mipmaps=t,this.flipY=!1,this.generateMipmaps=!1}}class xn extends Ve{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Fn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);const u=n[s],d=n[s+1]-u,f=(o-u)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new ft:new C);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new C,s=[],r=[],o=[],a=new C,c=new re;for(let f=0;f<=t;f++){const g=f/t;s[f]=this.getTangentAt(g,new C)}r[0]=new C,o[0]=new C;let l=Number.MAX_VALUE;const u=Math.abs(s[0].x),h=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=l&&(l=u,n.set(1,0,0)),h<=l&&(l=h,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Ue(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(Ue(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Sc extends Fn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new ft){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*u-f*h+this.aX,l=d*h+f*u+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Gg extends Sc{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function wc(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,u,h){let d=(o-r)/l-(a-r)/(l+u)+(a-o)/u,f=(a-o)/u-(c-o)/(u+h)+(c-a)/h;d*=u,f*=u,s(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const Pr=new C,jo=new wc,$o=new wc,Ko=new wc;class gs extends Fn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new C){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,u;this.closed||a>0?l=s[(a-1)%r]:(Pr.subVectors(s[0],s[1]).add(s[0]),l=Pr);const h=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(Pr.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Pr),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(h),f),x=Math.pow(h.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(u),f);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),jo.initNonuniformCatmullRom(l.x,h.x,d.x,u.x,g,x,m),$o.initNonuniformCatmullRom(l.y,h.y,d.y,u.y,g,x,m),Ko.initNonuniformCatmullRom(l.z,h.z,d.z,u.z,g,x,m)}else this.curveType==="catmullrom"&&(jo.initCatmullRom(l.x,h.x,d.x,u.x,this.tension),$o.initCatmullRom(l.y,h.y,d.y,u.y,this.tension),Ko.initCatmullRom(l.z,h.z,d.z,u.z,this.tension));return n.set(jo.calc(c),$o.calc(c),Ko.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new C().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Hl(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function Wg(i,t){const e=1-i;return e*e*t}function Xg(i,t){return 2*(1-i)*i*t}function qg(i,t){return i*i*t}function Gs(i,t,e,n){return Wg(i,t)+Xg(i,e)+qg(i,n)}function Yg(i,t){const e=1-i;return e*e*e*t}function Zg(i,t){const e=1-i;return 3*e*e*i*t}function jg(i,t){return 3*(1-i)*i*i*t}function $g(i,t){return i*i*i*t}function Ws(i,t,e,n,s){return Yg(i,t)+Zg(i,e)+jg(i,n)+$g(i,s)}class ah extends Fn{constructor(t=new ft,e=new ft,n=new ft,s=new ft){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new ft){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ws(t,s.x,r.x,o.x,a.x),Ws(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Kg extends Fn{constructor(t=new C,e=new C,n=new C,s=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new C){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ws(t,s.x,r.x,o.x,a.x),Ws(t,s.y,r.y,o.y,a.y),Ws(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class ch extends Fn{constructor(t=new ft,e=new ft){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ft){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ft){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Jg extends Fn{constructor(t=new C,e=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new C){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new C){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class lh extends Fn{constructor(t=new ft,e=new ft,n=new ft){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ft){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Gs(t,s.x,r.x,o.x),Gs(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Qg extends Fn{constructor(t=new C,e=new C,n=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new C){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Gs(t,s.x,r.x,o.x),Gs(t,s.y,r.y,o.y),Gs(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class uh extends Fn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ft){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],u=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return n.set(Hl(a,c.x,l.x,u.x,h.x),Hl(a,c.y,l.y,u.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new ft().fromArray(s))}return this}}var ec=Object.freeze({__proto__:null,ArcCurve:Gg,CatmullRomCurve3:gs,CubicBezierCurve:ah,CubicBezierCurve3:Kg,EllipseCurve:Sc,LineCurve:ch,LineCurve3:Jg,QuadraticBezierCurve:lh,QuadraticBezierCurve3:Qg,SplineCurve:uh});class t_ extends Fn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ec[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){const u=c[l];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new ec[s.type]().fromJSON(s))}return this}}class nc extends t_{constructor(t){super(),this.type="Path",this.currentPoint=new ft,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new ch(this.currentPoint.clone(),new ft(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new lh(this.currentPoint.clone(),new ft(t,e),new ft(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new ah(this.currentPoint.clone(),new ft(t,e),new ft(n,s),new ft(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new uh(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+l,e+u,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){const l=new Sc(t,e,n,s,r,o,a,c);if(this.curves.length>0){const h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Qs extends Se{constructor(t=[new ft(0,-.5),new ft(.5,0),new ft(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Ue(s,0,Math.PI*2);const r=[],o=[],a=[],c=[],l=[],u=1/e,h=new C,d=new ft,f=new C,g=new C,x=new C;let m=0,p=0;for(let w=0;w<=t.length-1;w++)switch(w){case 0:m=t[w+1].x-t[w].x,p=t[w+1].y-t[w].y,f.x=p*1,f.y=-m,f.z=p*0,x.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case t.length-1:c.push(x.x,x.y,x.z);break;default:m=t[w+1].x-t[w].x,p=t[w+1].y-t[w].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),c.push(f.x,f.y,f.z),x.copy(g)}for(let w=0;w<=e;w++){const M=n+w*u*s,_=Math.sin(M),E=Math.cos(M);for(let b=0;b<=t.length-1;b++){h.x=t[b].x*_,h.y=t[b].y,h.z=t[b].x*E,o.push(h.x,h.y,h.z),d.x=w/e,d.y=b/(t.length-1),a.push(d.x,d.y);const v=c[3*b+0]*_,A=c[3*b+1],S=c[3*b+0]*E;l.push(v,A,S)}}for(let w=0;w<e;w++)for(let M=0;M<t.length-1;M++){const _=M+w*t.length,E=_,b=_+t.length,v=_+t.length+1,A=_+1;r.push(E,b,A),r.push(v,A,b)}this.setIndex(r),this.setAttribute("position",new $t(o,3)),this.setAttribute("uv",new $t(a,2)),this.setAttribute("normal",new $t(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qs(t.points,t.segments,t.phiStart,t.phiLength)}}class bc extends Qs{constructor(t=1,e=1,n=4,s=8){const r=new nc;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new bc(t.radius,t.length,t.capSegments,t.radialSegments)}}class mo extends Se{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],c=[],l=new C,u=new ft;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let h=0,d=3;h<=e;h++,d+=3){const f=n+h/e*s;l.x=t*Math.cos(f),l.y=t*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(o[d]/t+1)/2,u.y=(o[d+1]/t+1)/2,c.push(u.x,u.y)}for(let h=1;h<=e;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new $t(o,3)),this.setAttribute("normal",new $t(a,3)),this.setAttribute("uv",new $t(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new mo(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Ot extends Se{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],d=[],f=[];let g=0;const x=[],m=n/2;let p=0;w(),o===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(u),this.setAttribute("position",new $t(h,3)),this.setAttribute("normal",new $t(d,3)),this.setAttribute("uv",new $t(f,2));function w(){const _=new C,E=new C;let b=0;const v=(e-t)/n;for(let A=0;A<=r;A++){const S=[],y=A/r,R=y*(e-t)+t;for(let W=0;W<=s;W++){const q=W/s,z=q*c+a,O=Math.sin(z),B=Math.cos(z);E.x=R*O,E.y=-y*n+m,E.z=R*B,h.push(E.x,E.y,E.z),_.set(O,v,B).normalize(),d.push(_.x,_.y,_.z),f.push(q,1-y),S.push(g++)}x.push(S)}for(let A=0;A<s;A++)for(let S=0;S<r;S++){const y=x[S][A],R=x[S+1][A],W=x[S+1][A+1],q=x[S][A+1];(t>0||S!==0)&&(u.push(y,R,q),b+=3),(e>0||S!==r-1)&&(u.push(R,W,q),b+=3)}l.addGroup(p,b,0),p+=b}function M(_){const E=g,b=new ft,v=new C;let A=0;const S=_===!0?t:e,y=_===!0?1:-1;for(let W=1;W<=s;W++)h.push(0,m*y,0),d.push(0,y,0),f.push(.5,.5),g++;const R=g;for(let W=0;W<=s;W++){const z=W/s*c+a,O=Math.cos(z),B=Math.sin(z);v.x=S*B,v.y=m*y,v.z=S*O,h.push(v.x,v.y,v.z),d.push(0,y,0),b.x=O*.5+.5,b.y=B*.5*y+.5,f.push(b.x,b.y),g++}for(let W=0;W<s;W++){const q=E+W,z=R+W;_===!0?u.push(z,z+1,q):u.push(z+1,z,q),A+=3}l.addGroup(p,A,_===!0?1:2),p+=A}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ot(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class io extends Ot{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new io(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}const Dr=new C,Ir=new C,Jo=new C,Lr=new cn;class e_ extends Se{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const s=Math.pow(10,4),r=Math.cos(as*e),o=t.getIndex(),a=t.getAttribute("position"),c=o?o.count:a.count,l=[0,0,0],u=["a","b","c"],h=new Array(3),d={},f=[];for(let g=0;g<c;g+=3){o?(l[0]=o.getX(g),l[1]=o.getX(g+1),l[2]=o.getX(g+2)):(l[0]=g,l[1]=g+1,l[2]=g+2);const{a:x,b:m,c:p}=Lr;if(x.fromBufferAttribute(a,l[0]),m.fromBufferAttribute(a,l[1]),p.fromBufferAttribute(a,l[2]),Lr.getNormal(Jo),h[0]=`${Math.round(x.x*s)},${Math.round(x.y*s)},${Math.round(x.z*s)}`,h[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,h[2]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let w=0;w<3;w++){const M=(w+1)%3,_=h[w],E=h[M],b=Lr[u[w]],v=Lr[u[M]],A=`${_}_${E}`,S=`${E}_${_}`;S in d&&d[S]?(Jo.dot(d[S].normal)<=r&&(f.push(b.x,b.y,b.z),f.push(v.x,v.y,v.z)),d[S]=null):A in d||(d[A]={index0:l[w],index1:l[M],normal:Jo.clone()})}}for(const g in d)if(d[g]){const{index0:x,index1:m}=d[g];Dr.fromBufferAttribute(a,x),Ir.fromBufferAttribute(a,m),f.push(Dr.x,Dr.y,Dr.z),f.push(Ir.x,Ir.y,Ir.z)}this.setAttribute("position",new $t(f,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class Ci extends nc{constructor(t){super(t),this.uuid=Un(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new nc().fromJSON(s))}return this}}const n_={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=hh(i,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l,u,h,d,f;if(n&&(r=a_(i,t,r,e)),i.length>80*e){a=l=i[0],c=u=i[1];for(let g=e;g<s;g+=e)h=i[g],d=i[g+1],h<a&&(a=h),d<c&&(c=d),h>l&&(l=h),d>u&&(u=d);f=Math.max(l-a,u-c),f=f!==0?32767/f:0}return js(r,o,e,a,c,f,0),o}};function hh(i,t,e,n,s){let r,o;if(s===x_(i,t,e,n)>0)for(r=t;r<e;r+=n)o=Gl(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=Gl(r,i[r],i[r+1],o);return o&&go(o,o.next)&&(Ks(o),o=o.next),o}function bi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(go(e,e.next)||Te(e.prev,e,e.next)===0)){if(Ks(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function js(i,t,e,n,s,r,o){if(!i)return;!o&&r&&d_(i,n,s,r);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?s_(i,n,s,r):i_(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),Ks(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=r_(bi(i),t,e),js(i,t,e,n,s,r,2)):o===2&&o_(i,t,e,n,s,r):js(bi(i),t,e,n,s,r,1);break}}}function i_(i){const t=i.prev,e=i,n=i.next;if(Te(t,e,n)>=0)return!1;const s=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,u=s<r?s<o?s:o:r<o?r:o,h=a<c?a<l?a:l:c<l?c:l,d=s>r?s>o?s:o:r>o?r:o,f=a>c?a>l?a:l:c>l?c:l;let g=n.next;for(;g!==t;){if(g.x>=u&&g.x<=d&&g.y>=h&&g.y<=f&&is(s,a,r,c,o,l,g.x,g.y)&&Te(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function s_(i,t,e,n){const s=i.prev,r=i,o=i.next;if(Te(s,r,o)>=0)return!1;const a=s.x,c=r.x,l=o.x,u=s.y,h=r.y,d=o.y,f=a<c?a<l?a:l:c<l?c:l,g=u<h?u<d?u:d:h<d?h:d,x=a>c?a>l?a:l:c>l?c:l,m=u>h?u>d?u:d:h>d?h:d,p=ic(f,g,t,e,n),w=ic(x,m,t,e,n);let M=i.prevZ,_=i.nextZ;for(;M&&M.z>=p&&_&&_.z<=w;){if(M.x>=f&&M.x<=x&&M.y>=g&&M.y<=m&&M!==s&&M!==o&&is(a,u,c,h,l,d,M.x,M.y)&&Te(M.prev,M,M.next)>=0||(M=M.prevZ,_.x>=f&&_.x<=x&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&is(a,u,c,h,l,d,_.x,_.y)&&Te(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;M&&M.z>=p;){if(M.x>=f&&M.x<=x&&M.y>=g&&M.y<=m&&M!==s&&M!==o&&is(a,u,c,h,l,d,M.x,M.y)&&Te(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;_&&_.z<=w;){if(_.x>=f&&_.x<=x&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&is(a,u,c,h,l,d,_.x,_.y)&&Te(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function r_(i,t,e){let n=i;do{const s=n.prev,r=n.next.next;!go(s,r)&&dh(s,n,n.next,r)&&$s(s,r)&&$s(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Ks(n),Ks(n.next),n=i=r),n=n.next}while(n!==i);return bi(n)}function o_(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&m_(o,a)){let c=fh(o,a);o=bi(o,o.next),c=bi(c,c.next),js(o,t,e,n,s,r,0),js(c,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function a_(i,t,e,n){const s=[];let r,o,a,c,l;for(r=0,o=t.length;r<o;r++)a=t[r]*n,c=r<o-1?t[r+1]*n:i.length,l=hh(i,a,c,n,!1),l===l.next&&(l.steiner=!0),s.push(p_(l));for(s.sort(c_),r=0;r<s.length;r++)e=l_(s[r],e);return e}function c_(i,t){return i.x-t.x}function l_(i,t){const e=u_(i,t);if(!e)return t;const n=fh(e,i);return bi(n,n.next),bi(e,e.next)}function u_(i,t){let e=t,n=-1/0,s;const r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,c=s.x,l=s.y;let u=1/0,h;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&is(o<l?r:n,o,c,l,o<l?n:r,o,e.x,e.y)&&(h=Math.abs(o-e.y)/(r-e.x),$s(e,i)&&(h<u||h===u&&(e.x>s.x||e.x===s.x&&h_(s,e)))&&(s=e,u=h)),e=e.next;while(e!==a);return s}function h_(i,t){return Te(i.prev,i,t.prev)<0&&Te(t.next,i,i.next)<0}function d_(i,t,e,n){let s=i;do s.z===0&&(s.z=ic(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,f_(s)}function f_(i){let t,e,n,s,r,o,a,c,l=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,l*=2}while(o>1);return i}function ic(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function p_(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function is(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function m_(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!g_(i,t)&&($s(i,t)&&$s(t,i)&&__(i,t)&&(Te(i.prev,i,t.prev)||Te(i,t.prev,t))||go(i,t)&&Te(i.prev,i,i.next)>0&&Te(t.prev,t,t.next)>0)}function Te(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function go(i,t){return i.x===t.x&&i.y===t.y}function dh(i,t,e,n){const s=Nr(Te(i,t,e)),r=Nr(Te(i,t,n)),o=Nr(Te(e,n,i)),a=Nr(Te(e,n,t));return!!(s!==r&&o!==a||s===0&&Ur(i,e,t)||r===0&&Ur(i,n,t)||o===0&&Ur(e,i,n)||a===0&&Ur(e,t,n))}function Ur(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Nr(i){return i>0?1:i<0?-1:0}function g_(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&dh(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function $s(i,t){return Te(i.prev,i,i.next)<0?Te(i,t,i.next)>=0&&Te(i,i.prev,t)>=0:Te(i,t,i.prev)<0||Te(i,i.next,t)<0}function __(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function fh(i,t){const e=new sc(i.i,i.x,i.y),n=new sc(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Gl(i,t,e,n){const s=new sc(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Ks(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function sc(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function x_(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class li{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return li.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];Wl(t),Xl(n,t);let o=t.length;e.forEach(Wl);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,Xl(n,e[c]);const a=n_.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function Wl(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Xl(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Ri extends Se{constructor(t=new Ci([new ft(.5,.5),new ft(-.5,.5),new ft(-.5,-.5),new ft(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){const l=t[a];o(l)}this.setAttribute("position",new $t(s,3)),this.setAttribute("uv",new $t(r,2)),this.computeVertexNormals();function o(a){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,h=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,w=e.UVGenerator!==void 0?e.UVGenerator:v_;let M,_=!1,E,b,v,A;p&&(M=p.getSpacedPoints(u),_=!0,d=!1,E=p.computeFrenetFrames(u,!1),b=new C,v=new C,A=new C),d||(m=0,f=0,g=0,x=0);const S=a.extractPoints(l);let y=S.shape;const R=S.holes;if(!li.isClockWise(y)){y=y.reverse();for(let k=0,Z=R.length;k<Z;k++){const P=R[k];li.isClockWise(P)&&(R[k]=P.reverse())}}const q=li.triangulateShape(y,R),z=y;for(let k=0,Z=R.length;k<Z;k++){const P=R[k];y=y.concat(P)}function O(k,Z,P){return Z||console.error("THREE.ExtrudeGeometry: vec does not exist"),k.clone().addScaledVector(Z,P)}const B=y.length,j=q.length;function H(k,Z,P){let mt,ot,vt;const lt=k.x-Z.x,V=k.y-Z.y,nt=P.x-k.x,D=P.y-k.y,T=lt*lt+V*V,K=lt*D-V*nt;if(Math.abs(K)>Number.EPSILON){const ht=Math.sqrt(T),gt=Math.sqrt(nt*nt+D*D),dt=Z.x-V/ht,Ft=Z.y+lt/ht,Tt=P.x-D/gt,Dt=P.y+nt/gt,te=((Tt-dt)*D-(Dt-Ft)*nt)/(lt*D-V*nt);mt=dt+lt*te-k.x,ot=Ft+V*te-k.y;const Mt=mt*mt+ot*ot;if(Mt<=2)return new ft(mt,ot);vt=Math.sqrt(Mt/2)}else{let ht=!1;lt>Number.EPSILON?nt>Number.EPSILON&&(ht=!0):lt<-Number.EPSILON?nt<-Number.EPSILON&&(ht=!0):Math.sign(V)===Math.sign(D)&&(ht=!0),ht?(mt=-V,ot=lt,vt=Math.sqrt(T)):(mt=lt,ot=V,vt=Math.sqrt(T/2))}return new ft(mt/vt,ot/vt)}const Y=[];for(let k=0,Z=z.length,P=Z-1,mt=k+1;k<Z;k++,P++,mt++)P===Z&&(P=0),mt===Z&&(mt=0),Y[k]=H(z[k],z[P],z[mt]);const yt=[];let X,et=Y.concat();for(let k=0,Z=R.length;k<Z;k++){const P=R[k];X=[];for(let mt=0,ot=P.length,vt=ot-1,lt=mt+1;mt<ot;mt++,vt++,lt++)vt===ot&&(vt=0),lt===ot&&(lt=0),X[mt]=H(P[mt],P[vt],P[lt]);yt.push(X),et=et.concat(X)}for(let k=0;k<m;k++){const Z=k/m,P=f*Math.cos(Z*Math.PI/2),mt=g*Math.sin(Z*Math.PI/2)+x;for(let ot=0,vt=z.length;ot<vt;ot++){const lt=O(z[ot],Y[ot],mt);st(lt.x,lt.y,-P)}for(let ot=0,vt=R.length;ot<vt;ot++){const lt=R[ot];X=yt[ot];for(let V=0,nt=lt.length;V<nt;V++){const D=O(lt[V],X[V],mt);st(D.x,D.y,-P)}}}const pt=g+x;for(let k=0;k<B;k++){const Z=d?O(y[k],et[k],pt):y[k];_?(v.copy(E.normals[0]).multiplyScalar(Z.x),b.copy(E.binormals[0]).multiplyScalar(Z.y),A.copy(M[0]).add(v).add(b),st(A.x,A.y,A.z)):st(Z.x,Z.y,0)}for(let k=1;k<=u;k++)for(let Z=0;Z<B;Z++){const P=d?O(y[Z],et[Z],pt):y[Z];_?(v.copy(E.normals[k]).multiplyScalar(P.x),b.copy(E.binormals[k]).multiplyScalar(P.y),A.copy(M[k]).add(v).add(b),st(A.x,A.y,A.z)):st(P.x,P.y,h/u*k)}for(let k=m-1;k>=0;k--){const Z=k/m,P=f*Math.cos(Z*Math.PI/2),mt=g*Math.sin(Z*Math.PI/2)+x;for(let ot=0,vt=z.length;ot<vt;ot++){const lt=O(z[ot],Y[ot],mt);st(lt.x,lt.y,h+P)}for(let ot=0,vt=R.length;ot<vt;ot++){const lt=R[ot];X=yt[ot];for(let V=0,nt=lt.length;V<nt;V++){const D=O(lt[V],X[V],mt);_?st(D.x,D.y+M[u-1].y,M[u-1].x+P):st(D.x,D.y,h+P)}}}Q(),it();function Q(){const k=s.length/3;if(d){let Z=0,P=B*Z;for(let mt=0;mt<j;mt++){const ot=q[mt];rt(ot[2]+P,ot[1]+P,ot[0]+P)}Z=u+m*2,P=B*Z;for(let mt=0;mt<j;mt++){const ot=q[mt];rt(ot[0]+P,ot[1]+P,ot[2]+P)}}else{for(let Z=0;Z<j;Z++){const P=q[Z];rt(P[2],P[1],P[0])}for(let Z=0;Z<j;Z++){const P=q[Z];rt(P[0]+B*u,P[1]+B*u,P[2]+B*u)}}n.addGroup(k,s.length/3-k,0)}function it(){const k=s.length/3;let Z=0;_t(z,Z),Z+=z.length;for(let P=0,mt=R.length;P<mt;P++){const ot=R[P];_t(ot,Z),Z+=ot.length}n.addGroup(k,s.length/3-k,1)}function _t(k,Z){let P=k.length;for(;--P>=0;){const mt=P;let ot=P-1;ot<0&&(ot=k.length-1);for(let vt=0,lt=u+m*2;vt<lt;vt++){const V=B*vt,nt=B*(vt+1),D=Z+mt+V,T=Z+ot+V,K=Z+ot+nt,ht=Z+mt+nt;L(D,T,K,ht)}}}function st(k,Z,P){c.push(k),c.push(Z),c.push(P)}function rt(k,Z,P){U(k),U(Z),U(P);const mt=s.length/3,ot=w.generateTopUV(n,s,mt-3,mt-2,mt-1);G(ot[0]),G(ot[1]),G(ot[2])}function L(k,Z,P,mt){U(k),U(Z),U(mt),U(Z),U(P),U(mt);const ot=s.length/3,vt=w.generateSideWallUV(n,s,ot-6,ot-3,ot-2,ot-1);G(vt[0]),G(vt[1]),G(vt[3]),G(vt[1]),G(vt[2]),G(vt[3])}function U(k){s.push(c[k*3+0]),s.push(c[k*3+1]),s.push(c[k*3+2])}function G(k){r.push(k.x),r.push(k.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return y_(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new ec[s.type]().fromJSON(s)),new Ri(n,t.options)}}const v_={generateTopUV:function(i,t,e,n,s){const r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[s*3],u=t[s*3+1];return[new ft(r,o),new ft(a,c),new ft(l,u)]},generateSideWallUV:function(i,t,e,n,s,r){const o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],u=t[n*3+1],h=t[n*3+2],d=t[s*3],f=t[s*3+1],g=t[s*3+2],x=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(a-u)<Math.abs(o-l)?[new ft(o,1-c),new ft(l,1-h),new ft(d,1-g),new ft(x,1-p)]:[new ft(a,1-c),new ft(u,1-h),new ft(f,1-g),new ft(m,1-p)]}};function y_(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Pi extends Se{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],c=[],l=[],u=[];let h=t;const d=(e-t)/s,f=new C,g=new ft;for(let x=0;x<=s;x++){for(let m=0;m<=n;m++){const p=r+m/n*o;f.x=h*Math.cos(p),f.y=h*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,u.push(g.x,g.y)}h+=d}for(let x=0;x<s;x++){const m=x*(n+1);for(let p=0;p<n;p++){const w=p+m,M=w,_=w+n+1,E=w+n+2,b=w+1;a.push(M,_,b),a.push(_,E,b)}}this.setIndex(a),this.setAttribute("position",new $t(c,3)),this.setAttribute("normal",new $t(l,3)),this.setAttribute("uv",new $t(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pi(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Ec extends Se{constructor(t=new Ci([new ft(0,.5),new ft(-.5,-.5),new ft(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],s=[],r=[],o=[];let a=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let u=0;u<t.length;u++)l(t[u]),this.addGroup(a,c,u),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new $t(s,3)),this.setAttribute("normal",new $t(r,3)),this.setAttribute("uv",new $t(o,2));function l(u){const h=s.length/3,d=u.extractPoints(e);let f=d.shape;const g=d.holes;li.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=g.length;m<p;m++){const w=g[m];li.isClockWise(w)===!0&&(g[m]=w.reverse())}const x=li.triangulateShape(f,g);for(let m=0,p=g.length;m<p;m++){const w=g[m];f=f.concat(w)}for(let m=0,p=f.length;m<p;m++){const w=f[m];s.push(w.x,w.y,0),r.push(0,0,1),o.push(w.x,w.y)}for(let m=0,p=x.length;m<p;m++){const w=x[m],M=w[0]+h,_=w[1]+h,E=w[2]+h;n.push(M,_,E),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return M_(e,t)}static fromJSON(t,e){const n=[];for(let s=0,r=t.shapes.length;s<r;s++){const o=e[t.shapes[s]];n.push(o)}return new Ec(n,t.curveSegments)}}function M_(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}class ee extends Se{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const u=[],h=new C,d=new C,f=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){const w=[],M=p/n;let _=0;p===0&&o===0?_=.5/e:p===n&&c===Math.PI&&(_=-.5/e);for(let E=0;E<=e;E++){const b=E/e;h.x=-t*Math.cos(s+b*r)*Math.sin(o+M*a),h.y=t*Math.cos(o+M*a),h.z=t*Math.sin(s+b*r)*Math.sin(o+M*a),g.push(h.x,h.y,h.z),d.copy(h).normalize(),x.push(d.x,d.y,d.z),m.push(b+_,1-M),w.push(l++)}u.push(w)}for(let p=0;p<n;p++)for(let w=0;w<e;w++){const M=u[p][w+1],_=u[p][w],E=u[p+1][w],b=u[p+1][w+1];(p!==0||o>0)&&f.push(M,_,b),(p!==n-1||c<Math.PI)&&f.push(_,E,b)}this.setIndex(f),this.setAttribute("position",new $t(g,3)),this.setAttribute("normal",new $t(x,3)),this.setAttribute("uv",new $t(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ee(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Pe extends Se{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],c=[],l=[],u=new C,h=new C,d=new C;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){const x=g/s*r,m=f/n*Math.PI*2;h.x=(t+e*Math.cos(m))*Math.cos(x),h.y=(t+e*Math.cos(m))*Math.sin(x),h.z=e*Math.sin(m),a.push(h.x,h.y,h.z),u.x=t*Math.cos(x),u.y=t*Math.sin(x),d.subVectors(h,u).normalize(),c.push(d.x,d.y,d.z),l.push(g/s),l.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){const x=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,w=(s+1)*f+g;o.push(x,m,w),o.push(m,p,w)}this.setIndex(o),this.setAttribute("position",new $t(a,3)),this.setAttribute("normal",new $t(c,3)),this.setAttribute("uv",new $t(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pe(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class S_ extends Oe{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}}class An extends fi{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Wt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hu,this.normalScale=new ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class _o extends An{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ft(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ue(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Wt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Wt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Wt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class Tc extends De{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Wt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class w_ extends Tc{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(De.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Wt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Qo=new re,ql=new C,Yl=new C;class ph{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ft(512,512),this.map=null,this.mapPass=null,this.matrix=new re,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new vc,this._frameExtents=new ft(1,1),this._viewportCount=1,this._viewports=[new ge(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;ql.setFromMatrixPosition(t.matrixWorld),e.position.copy(ql),Yl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Yl),e.updateMatrixWorld(),Qo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Qo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Zl=new re,Ls=new C,ta=new C;class b_ extends ph{constructor(){super(new an(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ft(4,2),this._viewportCount=6,this._viewports=[new ge(2,1,1,1),new ge(0,1,1,1),new ge(3,1,1,1),new ge(1,1,1,1),new ge(3,0,1,1),new ge(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ls.setFromMatrixPosition(t.matrixWorld),n.position.copy(Ls),ta.copy(n.position),ta.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(ta),n.updateMatrixWorld(),s.makeTranslation(-Ls.x,-Ls.y,-Ls.z),Zl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Zl)}}class Tn extends Tc{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new b_}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class E_ extends ph{constructor(){super(new ho(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ea extends Tc{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(De.DEFAULT_UP),this.updateMatrix(),this.target=new De,this.shadow=new E_}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class T_{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=jl(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=jl();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function jl(){return performance.now()}const Ac="\\[\\]\\.:\\/",A_=new RegExp("["+Ac+"]","g"),Cc="[^"+Ac+"]",C_="[^"+Ac.replace("\\.","")+"]",R_=/((?:WC+[\/:])*)/.source.replace("WC",Cc),P_=/(WCOD+)?/.source.replace("WCOD",C_),D_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Cc),I_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Cc),L_=new RegExp("^"+R_+P_+D_+I_+"$"),U_=["material","materials","bones","map"];class N_{constructor(t,e,n){const s=n||le.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class le{constructor(t,e,n){this.path=e,this.parsedPath=n||le.parseTrackName(e),this.node=le.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new le.Composite(t,e,n):new le(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(A_,"")}static parseTrackName(t){const e=L_.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);U_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===e||a.uuid===e)return a;const c=n(a.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,n=e.objectName,s=e.propertyName;let r=e.propertyIndex;if(t||(t=le.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===l){l=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}const o=t[s];if(o===void 0){const l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}le.Composite=N_;le.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};le.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};le.prototype.GetterByBindingType=[le.prototype._getValue_direct,le.prototype._getValue_array,le.prototype._getValue_arrayElement,le.prototype._getValue_toArray];le.prototype.SetterByBindingTypeAndVersioning=[[le.prototype._setValue_direct,le.prototype._setValue_direct_setNeedsUpdate,le.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[le.prototype._setValue_array,le.prototype._setValue_array_setNeedsUpdate,le.prototype._setValue_array_setMatrixWorldNeedsUpdate],[le.prototype._setValue_arrayElement,le.prototype._setValue_arrayElement_setNeedsUpdate,le.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[le.prototype._setValue_fromArray,le.prototype._setValue_fromArray_setNeedsUpdate,le.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const $l=new re;class F_{constructor(t,e,n=0,s=1/0){this.ray=new Js(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new xc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return $l.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4($l),this}intersectObject(t,e=!0,n=[]){return rc(t,this,n,e),n.sort(Kl),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)rc(t[s],this,n,e);return n.sort(Kl),n}}function Kl(i,t){return i.distance-t.distance}function rc(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)rc(r[o],t,e,!0)}}class Jl{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Ue(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class O_ extends Mc{constructor(t=10,e=10,n=4473924,s=8947848){n=new Wt(n),s=new Wt(s);const r=e/2,o=t/e,a=t/2,c=[],l=[];for(let d=0,f=0,g=-a;d<=e;d++,g+=o){c.push(-a,0,g,a,0,g),c.push(g,0,-a,g,0,a);const x=d===r?n:s;x.toArray(l,f),f+=3,x.toArray(l,f),f+=3,x.toArray(l,f),f+=3,x.toArray(l,f),f+=3}const u=new Se;u.setAttribute("position",new $t(c,3)),u.setAttribute("color",new $t(l,3));const h=new po({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class B_ extends Ei{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:co}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=co);const Ql={type:"change"},Rc={type:"start"},mh={type:"end"},Fr=new Js,tu=new Rn,k_=Math.cos(70*Kr.DEG2RAD),Fe=new C,Je=2*Math.PI,me={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},na=1e-6;class z_ extends B_{constructor(t,e=null){super(t,e),this.state=me.NONE,this.enabled=!0,this.target=new C,this.cursor=new C,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ss.ROTATE,MIDDLE:ss.DOLLY,RIGHT:ss.PAN},this.touches={ONE:es.ROTATE,TWO:es.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new C,this._lastQuaternion=new di,this._lastTargetPosition=new C,this._quat=new di().setFromUnitVectors(t.up,new C(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Jl,this._sphericalDelta=new Jl,this._scale=1,this._panOffset=new C,this._rotateStart=new ft,this._rotateEnd=new ft,this._rotateDelta=new ft,this._panStart=new ft,this._panEnd=new ft,this._panDelta=new ft,this._dollyStart=new ft,this._dollyEnd=new ft,this._dollyDelta=new ft,this._dollyDirection=new C,this._mouse=new ft,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=H_.bind(this),this._onPointerDown=V_.bind(this),this._onPointerUp=G_.bind(this),this._onContextMenu=$_.bind(this),this._onMouseWheel=q_.bind(this),this._onKeyDown=Y_.bind(this),this._onTouchStart=Z_.bind(this),this._onTouchMove=j_.bind(this),this._onMouseDown=W_.bind(this),this._onMouseMove=X_.bind(this),this._interceptControlDown=K_.bind(this),this._interceptControlUp=J_.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Ql),this.update(),this.state=me.NONE}update(t=null){const e=this.object.position;Fe.copy(e).sub(this.target),Fe.applyQuaternion(this._quat),this._spherical.setFromVector3(Fe),this.autoRotate&&this.state===me.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Je:n>Math.PI&&(n-=Je),s<-Math.PI?s+=Je:s>Math.PI&&(s-=Je),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Fe.setFromSpherical(this._spherical),Fe.applyQuaternion(this._quatInverse),e.copy(this.target).add(Fe),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Fe.length();o=this._clampDistance(a*this._scale);const c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){const a=new C(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;const l=new C(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=Fe.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Fr.origin.copy(this.object.position),Fr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Fr.direction))<k_?this.object.lookAt(this.target):(tu.setFromNormalAndCoplanarPoint(this.object.up,this.target),Fr.intersectPlane(tu,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>na||8*(1-this._lastQuaternion.dot(this.object.quaternion))>na||this._lastTargetPosition.distanceToSquared(this.target)>na?(this.dispatchEvent(Ql),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Je/60*this.autoRotateSpeed*t:Je/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Fe.setFromMatrixColumn(e,0),Fe.multiplyScalar(-t),this._panOffset.add(Fe)}_panUp(t,e){this.screenSpacePanning===!0?Fe.setFromMatrixColumn(e,1):(Fe.setFromMatrixColumn(e,0),Fe.crossVectors(this.object.up,Fe)),Fe.multiplyScalar(t),this._panOffset.add(Fe)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Fe.copy(s).sub(this.target);let r=Fe.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Je*this._rotateDelta.x/e.clientHeight),this._rotateUp(Je*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(Je*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-Je*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(Je*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-Je*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Je*this._rotateDelta.x/e.clientHeight),this._rotateUp(Je*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new ft,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function V_(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function H_(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function G_(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(mh),this.state=me.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function W_(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case ss.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=me.DOLLY;break;case ss.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=me.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=me.ROTATE}break;case ss.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=me.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=me.PAN}break;default:this.state=me.NONE}this.state!==me.NONE&&this.dispatchEvent(Rc)}function X_(i){switch(this.state){case me.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case me.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case me.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function q_(i){this.enabled===!1||this.enableZoom===!1||this.state!==me.NONE||(i.preventDefault(),this.dispatchEvent(Rc),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(mh))}function Y_(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function Z_(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case es.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=me.TOUCH_ROTATE;break;case es.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=me.TOUCH_PAN;break;default:this.state=me.NONE}break;case 2:switch(this.touches.TWO){case es.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=me.TOUCH_DOLLY_PAN;break;case es.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=me.TOUCH_DOLLY_ROTATE;break;default:this.state=me.NONE}break;default:this.state=me.NONE}this.state!==me.NONE&&this.dispatchEvent(Rc)}function j_(i){switch(this._trackPointer(i),this.state){case me.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case me.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case me.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case me.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=me.NONE}}function $_(i){this.enabled!==!1&&i.preventDefault()}function K_(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function J_(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const gh={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Di{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Q_=new ho(-1,1,1,-1,0,1);class tx extends Se{constructor(){super(),this.setAttribute("position",new $t([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new $t([0,2,0,0,2,0],2))}}const ex=new tx;class xo{constructor(t){this._mesh=new N(ex,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Q_)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class nx extends Di{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof Oe?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=ms.clone(t.uniforms),this.material=new Oe({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new xo(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class eu extends Di{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class ix extends Di{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class sx{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new ft);this._width=n.width,this._height=n.height,e=new gn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ln}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new nx(gh),this.copyPass.material.blending=In,this.clock=new T_}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){const a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}eu!==void 0&&(o instanceof eu?n=!0:o instanceof ix&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new ft);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class rx extends Di{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Wt}render(t,e,n){const s=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=s}}const ox={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Wt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class _s extends Di{constructor(t,e,n,s){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new ft(t.x,t.y):new ft(256,256),this.clearColor=new Wt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new gn(r,o,{type:Ln}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const d=new gn(r,o,{type:Ln});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const f=new gn(r,o,{type:Ln});f.texture.name="UnrealBloomPass.v"+h,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}const a=ox;this.highPassUniforms=ms.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Oe({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const c=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new ft(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const u=gh;this.copyUniforms=ms.clone(u.uniforms),this.blendMaterial=new Oe({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:ve,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Wt,this.oldClearAlpha=1,this.basic=new hn,this.fsQuad=new xo(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new ft(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[c].uniforms.direction.value=_s.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[c]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=_s.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[c]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new Oe({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new ft(.5,.5)},direction:{value:new ft(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(t){return new Oe({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}_s.BlurDirectionX=new ft(1,0);_s.BlurDirectionY=new ft(0,1);const ax={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class cx extends Di{constructor(){super();const t=ax;this.uniforms=ms.clone(t.uniforms),this.material=new S_({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new xo(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},oe.getTransfer(this._outputColorSpace)===fe&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Eu?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Tu?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Au?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===cc?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Cu?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Ru&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const lx={defines:{DEPTH_PACKING:1,PERSPECTIVE_CAMERA:1},uniforms:{tColor:{value:null},tDepth:{value:null},focus:{value:1},aspect:{value:1},aperture:{value:.025},maxblur:{value:.01},nearClip:{value:1},farClip:{value:1e3}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		#include <common>

		varying vec2 vUv;

		uniform sampler2D tColor;
		uniform sampler2D tDepth;

		uniform float maxblur; // max blur amount
		uniform float aperture; // aperture - bigger values for shallower depth of field

		uniform float nearClip;
		uniform float farClip;

		uniform float focus;
		uniform float aspect;

		#include <packing>

		float getDepth( const in vec2 screenPosition ) {
			#if DEPTH_PACKING == 1
			return unpackRGBAToDepth( texture2D( tDepth, screenPosition ) );
			#else
			return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		float getViewZ( const in float depth ) {
			#if PERSPECTIVE_CAMERA == 1
			return perspectiveDepthToViewZ( depth, nearClip, farClip );
			#else
			return orthographicDepthToViewZ( depth, nearClip, farClip );
			#endif
		}


		void main() {

			vec2 aspectcorrect = vec2( 1.0, aspect );

			float viewZ = getViewZ( getDepth( vUv ) );

			float factor = ( focus + viewZ ); // viewZ is <= 0, so this is a difference equation

			vec2 dofblur = vec2 ( clamp( factor * aperture, -maxblur, maxblur ) );

			vec2 dofblur9 = dofblur * 0.9;
			vec2 dofblur7 = dofblur * 0.7;
			vec2 dofblur4 = dofblur * 0.4;

			vec4 col = vec4( 0.0 );

			col += texture2D( tColor, vUv.xy );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.15,  0.37 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37,  0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.40,  0.0  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37, -0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15, -0.37 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15,  0.37 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37,  0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37, -0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.15, -0.37 ) * aspectcorrect ) * dofblur );

			col += texture2D( tColor, vUv.xy + ( vec2(  0.15,  0.37 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37,  0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37, -0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15, -0.37 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15,  0.37 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37,  0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37, -0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.15, -0.37 ) * aspectcorrect ) * dofblur9 );

			col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.40,  0.0  ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur7 );

			col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.4,   0.0  ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur4 );

			gl_FragColor = col / 41.0;
			gl_FragColor.a = 1.0;

		}`};class ux extends Di{constructor(t,e,n){super(),this.scene=t,this.camera=e;const s=n.focus!==void 0?n.focus:1,r=n.aperture!==void 0?n.aperture:.025,o=n.maxblur!==void 0?n.maxblur:1;this.renderTargetDepth=new gn(1,1,{minFilter:Xe,magFilter:Xe,type:Ln}),this.renderTargetDepth.texture.name="BokehPass.depth",this.materialDepth=new sh,this.materialDepth.depthPacking=Vu,this.materialDepth.blending=In;const a=lx,c=ms.clone(a.uniforms);c.tDepth.value=this.renderTargetDepth.texture,c.focus.value=s,c.aspect.value=e.aspect,c.aperture.value=r,c.maxblur.value=o,c.nearClip.value=e.near,c.farClip.value=e.far,this.materialBokeh=new Oe({defines:Object.assign({},a.defines),uniforms:c,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.uniforms=c,this.fsQuad=new xo(this.materialBokeh),this._oldClearColor=new Wt}render(t,e,n){this.scene.overrideMaterial=this.materialDepth,t.getClearColor(this._oldClearColor);const s=t.getClearAlpha(),r=t.autoClear;t.autoClear=!1,t.setClearColor(16777215),t.setClearAlpha(1),t.setRenderTarget(this.renderTargetDepth),t.clear(),t.render(this.scene,this.camera),this.uniforms.tColor.value=n.texture,this.uniforms.nearClip.value=this.camera.near,this.uniforms.farClip.value=this.camera.far,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),t.clear(),this.fsQuad.render(t)),this.scene.overrideMaterial=null,t.setClearColor(this._oldClearColor),t.setClearAlpha(s),t.autoClear=r}setSize(t,e){this.materialBokeh.uniforms.aspect.value=t/e,this.renderTargetDepth.setSize(t,e)}dispose(){this.renderTargetDepth.dispose(),this.materialDepth.dispose(),this.materialBokeh.dispose(),this.fsQuad.dispose()}}class hx extends Qr{constructor(){super();const t=new bt;t.deleteAttribute("uv");const e=new An({side:$e}),n=new An,s=new Tn(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);const r=new N(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const o=new N(t,n);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);const a=new N(t,n);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);const c=new N(t,n);c.position.set(6.167,.857,7.803),c.rotation.set(0,.561,0),c.scale.set(3.927,6.285,3.687),this.add(c);const l=new N(t,n);l.position.set(-2.017,.018,6.124),l.rotation.set(0,.333,0),l.scale.set(2.002,4.566,2.064),this.add(l);const u=new N(t,n);u.position.set(2.291,-.756,-2.621),u.rotation.set(0,-.286,0),u.scale.set(1.546,1.552,1.496),this.add(u);const h=new N(t,n);h.position.set(-2.193,-.369,-5.547),h.rotation.set(0,.516,0),h.scale.set(3.875,3.487,2.986),this.add(h);const d=new N(t,Ji(50));d.position.set(-16.116,14.37,8.208),d.scale.set(.1,2.428,2.739),this.add(d);const f=new N(t,Ji(50));f.position.set(-16.109,18.021,-8.207),f.scale.set(.1,2.425,2.751),this.add(f);const g=new N(t,Ji(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);const x=new N(t,Ji(43));x.position.set(-.462,8.89,14.52),x.scale.set(4.38,5.441,.088),this.add(x);const m=new N(t,Ji(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);const p=new N(t,Ji(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){const t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(const e of t)e.dispose()}}function Ji(i){const t=new hn;return t.color.setScalar(i),t}const nu={POSITION:["byte","byte normalized","unsigned byte","unsigned byte normalized","short","short normalized","unsigned short","unsigned short normalized"],NORMAL:["byte normalized","short normalized"],TANGENT:["byte normalized","short normalized"],TEXCOORD:["byte","byte normalized","unsigned byte","short","short normalized","unsigned short"]};class so{constructor(){this.textureUtils=null,this.pluginCallbacks=[],this.register(function(t){return new Mx(t)}),this.register(function(t){return new Sx(t)}),this.register(function(t){return new Tx(t)}),this.register(function(t){return new Ax(t)}),this.register(function(t){return new Cx(t)}),this.register(function(t){return new Rx(t)}),this.register(function(t){return new wx(t)}),this.register(function(t){return new bx(t)}),this.register(function(t){return new Ex(t)}),this.register(function(t){return new Px(t)}),this.register(function(t){return new Dx(t)}),this.register(function(t){return new Ix(t)}),this.register(function(t){return new Lx(t)}),this.register(function(t){return new Ux(t)})}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}setTextureUtils(t){return this.textureUtils=t,this}parse(t,e,n,s){const r=new yx,o=[];for(let a=0,c=this.pluginCallbacks.length;a<c;a++)o.push(this.pluginCallbacks[a](r));r.setPlugins(o),r.setTextureUtils(this.textureUtils),r.writeAsync(t,e,s).catch(n)}parseAsync(t,e){const n=this;return new Promise(function(s,r){n.parse(t,s,r,e)})}}const ne={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,BYTE:5120,UNSIGNED_BYTE:5121,SHORT:5122,UNSIGNED_SHORT:5123,INT:5124,UNSIGNED_INT:5125,FLOAT:5126,ARRAY_BUFFER:34962,ELEMENT_ARRAY_BUFFER:34963,NEAREST:9728,LINEAR:9729,NEAREST_MIPMAP_NEAREST:9984,LINEAR_MIPMAP_NEAREST:9985,NEAREST_MIPMAP_LINEAR:9986,LINEAR_MIPMAP_LINEAR:9987,CLAMP_TO_EDGE:33071,MIRRORED_REPEAT:33648,REPEAT:10497},ia="KHR_mesh_quantization",ln={};ln[Xe]=ne.NEAREST;ln[Du]=ne.NEAREST_MIPMAP_NEAREST;ln[Os]=ne.NEAREST_MIPMAP_LINEAR;ln[En]=ne.LINEAR;ln[Hr]=ne.LINEAR_MIPMAP_NEAREST;ln[ai]=ne.LINEAR_MIPMAP_LINEAR;ln[oi]=ne.CLAMP_TO_EDGE;ln[qs]=ne.REPEAT;ln[jr]=ne.MIRRORED_REPEAT;const iu={scale:"scale",position:"translation",quaternion:"rotation",morphTargetInfluences:"weights"},dx=new Wt,su=12,fx=1179937895,px=2,ru=8,mx=1313821514,gx=5130562;function zs(i,t){return i.length===t.length&&i.every(function(e,n){return e===t[n]})}function _x(i){return new TextEncoder().encode(i).buffer}function xx(i){return zs(i.elements,[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}function vx(i,t,e){const n={min:new Array(i.itemSize).fill(Number.POSITIVE_INFINITY),max:new Array(i.itemSize).fill(Number.NEGATIVE_INFINITY)};for(let s=t;s<t+e;s++)for(let r=0;r<i.itemSize;r++){let o;i.itemSize>4?o=i.array[s*i.itemSize+r]:(r===0?o=i.getX(s):r===1?o=i.getY(s):r===2?o=i.getZ(s):r===3&&(o=i.getW(s)),i.normalized===!0&&(o=Kr.normalize(o,i.array))),n.min[r]=Math.min(n.min[r],o),n.max[r]=Math.max(n.max[r],o)}return n}function _h(i){return Math.ceil(i/4)*4}function sa(i,t=0){const e=_h(i.byteLength);if(e!==i.byteLength){const n=new Uint8Array(e);if(n.set(new Uint8Array(i)),t!==0)for(let s=i.byteLength;s<e;s++)n[s]=t;return n.buffer}return i}function ou(){return typeof document>"u"&&typeof OffscreenCanvas<"u"?new OffscreenCanvas(1,1):document.createElement("canvas")}function au(i,t){if(i.toBlob!==void 0)return new Promise(n=>i.toBlob(n,t));let e;return t==="image/jpeg"?e=.92:t==="image/webp"&&(e=.8),i.convertToBlob({type:t,quality:e})}class yx{constructor(){this.plugins=[],this.options={},this.pending=[],this.buffers=[],this.byteOffset=0,this.buffers=[],this.nodeMap=new Map,this.skins=[],this.extensionsUsed={},this.extensionsRequired={},this.uids=new Map,this.uid=0,this.json={asset:{version:"2.0",generator:"THREE.GLTFExporter r"+co}},this.cache={meshes:new Map,attributes:new Map,attributesNormalized:new Map,materials:new Map,textures:new Map,images:new Map},this.textureUtils=null}setPlugins(t){this.plugins=t}setTextureUtils(t){this.textureUtils=t}async writeAsync(t,e,n={}){this.options=Object.assign({binary:!1,trs:!1,onlyVisible:!0,maxTextureSize:1/0,animations:[],includeCustomExtensions:!1},n),this.options.animations.length>0&&(this.options.trs=!0),await this.processInputAsync(t),await Promise.all(this.pending);const s=this,r=s.buffers,o=s.json;n=s.options;const a=s.extensionsUsed,c=s.extensionsRequired,l=new Blob(r,{type:"application/octet-stream"}),u=Object.keys(a),h=Object.keys(c);if(u.length>0&&(o.extensionsUsed=u),h.length>0&&(o.extensionsRequired=h),o.buffers&&o.buffers.length>0&&(o.buffers[0].byteLength=l.size),n.binary===!0){const d=new FileReader;d.readAsArrayBuffer(l),d.onloadend=function(){const f=sa(d.result),g=new DataView(new ArrayBuffer(ru));g.setUint32(0,f.byteLength,!0),g.setUint32(4,gx,!0);const x=sa(_x(JSON.stringify(o)),32),m=new DataView(new ArrayBuffer(ru));m.setUint32(0,x.byteLength,!0),m.setUint32(4,mx,!0);const p=new ArrayBuffer(su),w=new DataView(p);w.setUint32(0,fx,!0),w.setUint32(4,px,!0);const M=su+m.byteLength+x.byteLength+g.byteLength+f.byteLength;w.setUint32(8,M,!0);const _=new Blob([p,m,x,g,f],{type:"application/octet-stream"}),E=new FileReader;E.readAsArrayBuffer(_),E.onloadend=function(){e(E.result)}}}else if(o.buffers&&o.buffers.length>0){const d=new FileReader;d.readAsDataURL(l),d.onloadend=function(){const f=d.result;o.buffers[0].uri=f,e(o)}}else e(o)}serializeUserData(t,e){if(Object.keys(t.userData).length===0)return;const n=this.options,s=this.extensionsUsed;try{const r=JSON.parse(JSON.stringify(t.userData));if(n.includeCustomExtensions&&r.gltfExtensions){e.extensions===void 0&&(e.extensions={});for(const o in r.gltfExtensions)e.extensions[o]=r.gltfExtensions[o],s[o]=!0;delete r.gltfExtensions}Object.keys(r).length>0&&(e.extras=r)}catch(r){console.warn("THREE.GLTFExporter: userData of '"+t.name+"' won't be serialized because of JSON.stringify error - "+r.message)}}getUID(t,e=!1){if(this.uids.has(t)===!1){const s=new Map;s.set(!0,this.uid++),s.set(!1,this.uid++),this.uids.set(t,s)}return this.uids.get(t).get(e)}isNormalizedNormalAttribute(t){if(this.cache.attributesNormalized.has(t))return!1;const n=new C;for(let s=0,r=t.count;s<r;s++)if(Math.abs(n.fromBufferAttribute(t,s).length()-1)>5e-4)return!1;return!0}createNormalizedNormalAttribute(t){const e=this.cache;if(e.attributesNormalized.has(t))return e.attributesNormalized.get(t);const n=t.clone(),s=new C;for(let r=0,o=n.count;r<o;r++)s.fromBufferAttribute(n,r),s.x===0&&s.y===0&&s.z===0?s.setX(1):s.normalize(),n.setXYZ(r,s.x,s.y,s.z);return e.attributesNormalized.set(t,n),n}applyTextureTransform(t,e){let n=!1;const s={};(e.offset.x!==0||e.offset.y!==0)&&(s.offset=e.offset.toArray(),n=!0),e.rotation!==0&&(s.rotation=e.rotation,n=!0),(e.repeat.x!==1||e.repeat.y!==1)&&(s.scale=e.repeat.toArray(),n=!0),n&&(t.extensions=t.extensions||{},t.extensions.KHR_texture_transform=s,this.extensionsUsed.KHR_texture_transform=!0)}async buildMetalRoughTextureAsync(t,e){if(t===e)return t;function n(f){return f.colorSpace===be?function(x){return x<.04045?x*.0773993808:Math.pow(x*.9478672986+.0521327014,2.4)}:function(x){return x}}t instanceof Zo&&(t=await this.decompressTextureAsync(t)),e instanceof Zo&&(e=await this.decompressTextureAsync(e));const s=t?t.image:null,r=e?e.image:null,o=Math.max(s?s.width:0,r?r.width:0),a=Math.max(s?s.height:0,r?r.height:0),c=ou();c.width=o,c.height=a;const l=c.getContext("2d",{willReadFrequently:!0});l.fillStyle="#00ffff",l.fillRect(0,0,o,a);const u=l.getImageData(0,0,o,a);if(s){l.drawImage(s,0,0,o,a);const f=n(t),g=l.getImageData(0,0,o,a).data;for(let x=2;x<g.length;x+=4)u.data[x]=f(g[x]/256)*256}if(r){l.drawImage(r,0,0,o,a);const f=n(e),g=l.getImageData(0,0,o,a).data;for(let x=1;x<g.length;x+=4)u.data[x]=f(g[x]/256)*256}l.putImageData(u,0,0);const d=(t||e).clone();return d.source=new _c(c),d.colorSpace=Xn,d.channel=(t||e).channel,t&&e&&t.channel!==e.channel&&console.warn("THREE.GLTFExporter: UV channels for metalnessMap and roughnessMap textures must match."),console.warn("THREE.GLTFExporter: Merged metalnessMap and roughnessMap textures."),d}async decompressTextureAsync(t,e=1/0){if(this.textureUtils===null)throw new Error("THREE.GLTFExporter: setTextureUtils() must be called to process compressed textures.");return await this.textureUtils.decompress(t,e)}processBuffer(t){const e=this.json,n=this.buffers;return e.buffers||(e.buffers=[{byteLength:0}]),n.push(t),0}processBufferView(t,e,n,s,r){const o=this.json;o.bufferViews||(o.bufferViews=[]);let a;switch(e){case ne.BYTE:case ne.UNSIGNED_BYTE:a=1;break;case ne.SHORT:case ne.UNSIGNED_SHORT:a=2;break;default:a=4}let c=t.itemSize*a;r===ne.ARRAY_BUFFER&&(c=Math.ceil(c/4)*4);const l=_h(s*c),u=new DataView(new ArrayBuffer(l));let h=0;for(let g=n;g<n+s;g++){for(let x=0;x<t.itemSize;x++){let m;t.itemSize>4?m=t.array[g*t.itemSize+x]:(x===0?m=t.getX(g):x===1?m=t.getY(g):x===2?m=t.getZ(g):x===3&&(m=t.getW(g)),t.normalized===!0&&(m=Kr.normalize(m,t.array))),e===ne.FLOAT?u.setFloat32(h,m,!0):e===ne.INT?u.setInt32(h,m,!0):e===ne.UNSIGNED_INT?u.setUint32(h,m,!0):e===ne.SHORT?u.setInt16(h,m,!0):e===ne.UNSIGNED_SHORT?u.setUint16(h,m,!0):e===ne.BYTE?u.setInt8(h,m):e===ne.UNSIGNED_BYTE&&u.setUint8(h,m),h+=a}h%c!==0&&(h+=c-h%c)}const d={buffer:this.processBuffer(u.buffer),byteOffset:this.byteOffset,byteLength:l};return r!==void 0&&(d.target=r),r===ne.ARRAY_BUFFER&&(d.byteStride=c),this.byteOffset+=l,o.bufferViews.push(d),{id:o.bufferViews.length-1,byteLength:0}}processBufferViewImage(t){const e=this,n=e.json;return n.bufferViews||(n.bufferViews=[]),new Promise(function(s){const r=new FileReader;r.readAsArrayBuffer(t),r.onloadend=function(){const o=sa(r.result),a={buffer:e.processBuffer(o),byteOffset:e.byteOffset,byteLength:o.byteLength};e.byteOffset+=o.byteLength,s(n.bufferViews.push(a)-1)}})}processAccessor(t,e,n,s){const r=this.json,o={1:"SCALAR",2:"VEC2",3:"VEC3",4:"VEC4",9:"MAT3",16:"MAT4"};let a;if(t.array.constructor===Float32Array)a=ne.FLOAT;else if(t.array.constructor===Int32Array)a=ne.INT;else if(t.array.constructor===Uint32Array)a=ne.UNSIGNED_INT;else if(t.array.constructor===Int16Array)a=ne.SHORT;else if(t.array.constructor===Uint16Array)a=ne.UNSIGNED_SHORT;else if(t.array.constructor===Int8Array)a=ne.BYTE;else if(t.array.constructor===Uint8Array)a=ne.UNSIGNED_BYTE;else throw new Error("THREE.GLTFExporter: Unsupported bufferAttribute component type: "+t.array.constructor.name);if(n===void 0&&(n=0),(s===void 0||s===1/0)&&(s=t.count),s===0)return null;const c=vx(t,n,s);let l;e!==void 0&&(l=t===e.index?ne.ELEMENT_ARRAY_BUFFER:ne.ARRAY_BUFFER);const u=this.processBufferView(t,a,n,s,l),h={bufferView:u.id,byteOffset:u.byteOffset,componentType:a,count:s,max:c.max,min:c.min,type:o[t.itemSize]};return t.normalized===!0&&(h.normalized=!0),r.accessors||(r.accessors=[]),r.accessors.push(h)-1}processImage(t,e,n,s="image/png"){if(t!==null){const r=this,o=r.cache,a=r.json,c=r.options,l=r.pending;o.images.has(t)||o.images.set(t,{});const u=o.images.get(t),h=s+":flipY/"+n.toString();if(u[h]!==void 0)return u[h];a.images||(a.images=[]);const d={mimeType:s},f=ou();f.width=Math.min(t.width,c.maxTextureSize),f.height=Math.min(t.height,c.maxTextureSize);const g=f.getContext("2d",{willReadFrequently:!0});if(n===!0&&(g.translate(0,f.height),g.scale(1,-1)),t.data!==void 0){e!==mn&&console.error("GLTFExporter: Only RGBAFormat is supported.",e),(t.width>c.maxTextureSize||t.height>c.maxTextureSize)&&console.warn("GLTFExporter: Image size is bigger than maxTextureSize",t);const m=new Uint8ClampedArray(t.height*t.width*4);for(let p=0;p<m.length;p+=4)m[p+0]=t.data[p+0],m[p+1]=t.data[p+1],m[p+2]=t.data[p+2],m[p+3]=t.data[p+3];g.putImageData(new ImageData(m,t.width,t.height),0,0)}else if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap||typeof OffscreenCanvas<"u"&&t instanceof OffscreenCanvas)g.drawImage(t,0,0,f.width,f.height);else throw new Error("THREE.GLTFExporter: Invalid image type. Use HTMLImageElement, HTMLCanvasElement, ImageBitmap or OffscreenCanvas.");c.binary===!0?l.push(au(f,s).then(m=>r.processBufferViewImage(m)).then(m=>{d.bufferView=m})):f.toDataURL!==void 0?d.uri=f.toDataURL(s):l.push(au(f,s).then(m=>new FileReader().readAsDataURL(m)).then(m=>{d.uri=m}));const x=a.images.push(d)-1;return u[h]=x,x}else throw new Error("THREE.GLTFExporter: No valid image data found. Unable to process texture.")}processSampler(t){const e=this.json;e.samplers||(e.samplers=[]);const n={magFilter:ln[t.magFilter],minFilter:ln[t.minFilter],wrapS:ln[t.wrapS],wrapT:ln[t.wrapT]};return e.samplers.push(n)-1}async processTextureAsync(t){const n=this.options,s=this.cache,r=this.json;if(s.textures.has(t))return s.textures.get(t);r.textures||(r.textures=[]),t instanceof Zo&&(t=await this.decompressTextureAsync(t,n.maxTextureSize));let o=t.userData.mimeType;o==="image/webp"&&(o="image/png");const a={sampler:this.processSampler(t),source:this.processImage(t.image,t.format,t.flipY,o)};t.name&&(a.name=t.name),await this._invokeAllAsync(async function(l){l.writeTexture&&await l.writeTexture(t,a)});const c=r.textures.push(a)-1;return s.textures.set(t,c),c}async processMaterialAsync(t){const e=this.cache,n=this.json;if(e.materials.has(t))return e.materials.get(t);if(t.isShaderMaterial)return console.warn("GLTFExporter: THREE.ShaderMaterial not supported."),null;n.materials||(n.materials=[]);const s={pbrMetallicRoughness:{}};t.isMeshStandardMaterial!==!0&&t.isMeshBasicMaterial!==!0&&console.warn("GLTFExporter: Use MeshStandardMaterial or MeshBasicMaterial for best results.");const r=t.color.toArray().concat([t.opacity]);if(zs(r,[1,1,1,1])||(s.pbrMetallicRoughness.baseColorFactor=r),t.isMeshStandardMaterial?(s.pbrMetallicRoughness.metallicFactor=t.metalness,s.pbrMetallicRoughness.roughnessFactor=t.roughness):(s.pbrMetallicRoughness.metallicFactor=0,s.pbrMetallicRoughness.roughnessFactor=1),t.metalnessMap||t.roughnessMap){const a=await this.buildMetalRoughTextureAsync(t.metalnessMap,t.roughnessMap),c={index:await this.processTextureAsync(a),texCoord:a.channel};this.applyTextureTransform(c,a),s.pbrMetallicRoughness.metallicRoughnessTexture=c}if(t.map){const a={index:await this.processTextureAsync(t.map),texCoord:t.map.channel};this.applyTextureTransform(a,t.map),s.pbrMetallicRoughness.baseColorTexture=a}if(t.emissive){const a=t.emissive;if(Math.max(a.r,a.g,a.b)>0&&(s.emissiveFactor=t.emissive.toArray()),t.emissiveMap){const l={index:await this.processTextureAsync(t.emissiveMap),texCoord:t.emissiveMap.channel};this.applyTextureTransform(l,t.emissiveMap),s.emissiveTexture=l}}if(t.normalMap){const a={index:await this.processTextureAsync(t.normalMap),texCoord:t.normalMap.channel};t.normalScale&&t.normalScale.x!==1&&(a.scale=t.normalScale.x),this.applyTextureTransform(a,t.normalMap),s.normalTexture=a}if(t.aoMap){const a={index:await this.processTextureAsync(t.aoMap),texCoord:t.aoMap.channel};t.aoMapIntensity!==1&&(a.strength=t.aoMapIntensity),this.applyTextureTransform(a,t.aoMap),s.occlusionTexture=a}t.transparent?s.alphaMode="BLEND":t.alphaTest>0&&(s.alphaMode="MASK",s.alphaCutoff=t.alphaTest),t.side===Re&&(s.doubleSided=!0),t.name!==""&&(s.name=t.name),this.serializeUserData(t,s),await this._invokeAllAsync(async function(a){a.writeMaterialAsync&&await a.writeMaterialAsync(t,s)});const o=n.materials.push(s)-1;return e.materials.set(t,o),o}async processMeshAsync(t){const e=this.cache,n=this.json,s=[t.geometry.uuid];if(Array.isArray(t.material))for(let _=0,E=t.material.length;_<E;_++)s.push(t.material[_].uuid);else s.push(t.material.uuid);const r=s.join(":");if(e.meshes.has(r))return e.meshes.get(r);const o=t.geometry;let a;t.isLineSegments?a=ne.LINES:t.isLineLoop?a=ne.LINE_LOOP:t.isLine?a=ne.LINE_STRIP:t.isPoints?a=ne.POINTS:a=t.material.wireframe?ne.LINES:ne.TRIANGLES;const c={},l={},u=[],h=[],d={uv:"TEXCOORD_0",uv1:"TEXCOORD_1",uv2:"TEXCOORD_2",uv3:"TEXCOORD_3",color:"COLOR_0",skinWeight:"WEIGHTS_0",skinIndex:"JOINTS_0"},f=o.getAttribute("normal");f!==void 0&&!this.isNormalizedNormalAttribute(f)&&(console.warn("THREE.GLTFExporter: Creating normalized normal attribute from the non-normalized one."),o.setAttribute("normal",this.createNormalizedNormalAttribute(f)));let g=null;for(let _ in o.attributes){if(_.slice(0,5)==="morph")continue;const E=o.attributes[_];if(_=d[_]||_.toUpperCase(),/^(POSITION|NORMAL|TANGENT|TEXCOORD_\d+|COLOR_\d+|JOINTS_\d+|WEIGHTS_\d+)$/.test(_)||(_="_"+_),e.attributes.has(this.getUID(E))){l[_]=e.attributes.get(this.getUID(E));continue}g=null;const v=E.array;_==="JOINTS_0"&&!(v instanceof Uint16Array)&&!(v instanceof Uint8Array)?(console.warn('GLTFExporter: Attribute "skinIndex" converted to type UNSIGNED_SHORT.'),g=new Ne(new Uint16Array(v),E.itemSize,E.normalized)):(v instanceof Uint32Array||v instanceof Int32Array)&&!_.startsWith("_")&&(console.warn(`GLTFExporter: Attribute "${_}" converted to type FLOAT.`),g=so.Utils.toFloat32BufferAttribute(E));const A=this.processAccessor(g||E,o);A!==null&&(_.startsWith("_")||this.detectMeshQuantization(_,E),l[_]=A,e.attributes.set(this.getUID(E),A))}if(f!==void 0&&o.setAttribute("normal",f),Object.keys(l).length===0)return null;if(t.morphTargetInfluences!==void 0&&t.morphTargetInfluences.length>0){const _=[],E=[],b={};if(t.morphTargetDictionary!==void 0)for(const v in t.morphTargetDictionary)b[t.morphTargetDictionary[v]]=v;for(let v=0;v<t.morphTargetInfluences.length;++v){const A={};let S=!1;for(const y in o.morphAttributes){if(y!=="position"&&y!=="normal"){S||(console.warn("GLTFExporter: Only POSITION and NORMAL morph are supported."),S=!0);continue}const R=o.morphAttributes[y][v],W=y.toUpperCase(),q=o.attributes[y];if(e.attributes.has(this.getUID(R,!0))){A[W]=e.attributes.get(this.getUID(R,!0));continue}const z=R.clone();if(!o.morphTargetsRelative)for(let O=0,B=R.count;O<B;O++)for(let j=0;j<R.itemSize;j++)j===0&&z.setX(O,R.getX(O)-q.getX(O)),j===1&&z.setY(O,R.getY(O)-q.getY(O)),j===2&&z.setZ(O,R.getZ(O)-q.getZ(O)),j===3&&z.setW(O,R.getW(O)-q.getW(O));A[W]=this.processAccessor(z,o),e.attributes.set(this.getUID(q,!0),A[W])}h.push(A),_.push(t.morphTargetInfluences[v]),t.morphTargetDictionary!==void 0&&E.push(b[v])}c.weights=_,E.length>0&&(c.extras={},c.extras.targetNames=E)}const x=Array.isArray(t.material);if(x&&o.groups.length===0)return null;let m=!1;if(x&&o.index===null){const _=[];for(let E=0,b=o.attributes.position.count;E<b;E++)_[E]=E;o.setIndex(_),m=!0}const p=x?t.material:[t.material],w=x?o.groups:[{materialIndex:0,start:void 0,count:void 0}];for(let _=0,E=w.length;_<E;_++){const b={mode:a,attributes:l};if(this.serializeUserData(o,b),h.length>0&&(b.targets=h),o.index!==null){let A=this.getUID(o.index);(w[_].start!==void 0||w[_].count!==void 0)&&(A+=":"+w[_].start+":"+w[_].count),e.attributes.has(A)?b.indices=e.attributes.get(A):(b.indices=this.processAccessor(o.index,o,w[_].start,w[_].count),e.attributes.set(A,b.indices)),b.indices===null&&delete b.indices}const v=await this.processMaterialAsync(p[w[_].materialIndex]);v!==null&&(b.material=v),u.push(b)}m===!0&&o.setIndex(null),c.primitives=u,n.meshes||(n.meshes=[]),await this._invokeAllAsync(function(_){_.writeMesh&&_.writeMesh(t,c)});const M=n.meshes.push(c)-1;return e.meshes.set(r,M),M}detectMeshQuantization(t,e){if(this.extensionsUsed[ia])return;let n;switch(e.array.constructor){case Int8Array:n="byte";break;case Uint8Array:n="unsigned byte";break;case Int16Array:n="short";break;case Uint16Array:n="unsigned short";break;default:return}e.normalized&&(n+=" normalized");const s=t.split("_",1)[0];nu[s]&&nu[s].includes(n)&&(this.extensionsUsed[ia]=!0,this.extensionsRequired[ia]=!0)}processCamera(t){const e=this.json;e.cameras||(e.cameras=[]);const n=t.isOrthographicCamera,s={type:n?"orthographic":"perspective"};return n?s.orthographic={xmag:t.right*2,ymag:t.top*2,zfar:t.far<=0?.001:t.far,znear:t.near<0?0:t.near}:s.perspective={aspectRatio:t.aspect,yfov:Kr.degToRad(t.fov),zfar:t.far<=0?.001:t.far,znear:t.near<0?0:t.near},t.name!==""&&(s.name=t.type),e.cameras.push(s)-1}processAnimation(t,e){const n=this.json,s=this.nodeMap;n.animations||(n.animations=[]),t=so.Utils.mergeMorphTargetTracks(t.clone(),e);const r=t.tracks,o=[],a=[];for(let c=0;c<r.length;++c){const l=r[c],u=le.parseTrackName(l.name);let h=le.findNode(e,u.nodeName);const d=iu[u.propertyName];if(u.objectName==="bones"&&(h.isSkinnedMesh===!0?h=h.skeleton.getBoneByName(u.objectIndex):h=void 0),!h||!d){console.warn('THREE.GLTFExporter: Could not export animation track "%s".',l.name);continue}const f=1;let g=l.values.length/l.times.length;d===iu.morphTargetInfluences&&(g/=h.morphTargetInfluences.length);let x;l.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline===!0?(x="CUBICSPLINE",g/=3):l.getInterpolation()===Jh?x="STEP":x="LINEAR",a.push({input:this.processAccessor(new Ne(l.times,f)),output:this.processAccessor(new Ne(l.values,g)),interpolation:x}),o.push({sampler:a.length-1,target:{node:s.get(h),path:d}})}return n.animations.push({name:t.name||"clip_"+n.animations.length,samplers:a,channels:o}),n.animations.length-1}processSkin(t){const e=this.json,n=this.nodeMap,s=e.nodes[n.get(t)],r=t.skeleton;if(r===void 0)return null;const o=t.skeleton.bones[0];if(o===void 0)return null;const a=[],c=new Float32Array(r.bones.length*16),l=new re;for(let h=0;h<r.bones.length;++h)a.push(n.get(r.bones[h])),l.copy(r.boneInverses[h]),l.multiply(t.bindMatrix).toArray(c,h*16);return e.skins===void 0&&(e.skins=[]),e.skins.push({inverseBindMatrices:this.processAccessor(new Ne(c,16)),joints:a,skeleton:n.get(o)}),s.skin=e.skins.length-1}async processNodeAsync(t){const e=this.json,n=this.options,s=this.nodeMap;e.nodes||(e.nodes=[]);const r={};if(n.trs){const a=t.quaternion.toArray(),c=t.position.toArray(),l=t.scale.toArray();zs(a,[0,0,0,1])||(r.rotation=a),zs(c,[0,0,0])||(r.translation=c),zs(l,[1,1,1])||(r.scale=l)}else t.matrixAutoUpdate&&t.updateMatrix(),xx(t.matrix)===!1&&(r.matrix=t.matrix.elements);if(t.name!==""&&(r.name=String(t.name)),this.serializeUserData(t,r),t.isMesh||t.isLine||t.isPoints){const a=await this.processMeshAsync(t);a!==null&&(r.mesh=a)}else t.isCamera&&(r.camera=this.processCamera(t));if(t.isSkinnedMesh&&this.skins.push(t),t.children.length>0){const a=[];for(let c=0,l=t.children.length;c<l;c++){const u=t.children[c];if(u.visible||n.onlyVisible===!1){const h=await this.processNodeAsync(u);h!==null&&a.push(h)}}a.length>0&&(r.children=a)}await this._invokeAllAsync(function(a){a.writeNode&&a.writeNode(t,r)});const o=e.nodes.push(r)-1;return s.set(t,o),o}async processSceneAsync(t){const e=this.json,n=this.options;e.scenes||(e.scenes=[],e.scene=0);const s={};t.name!==""&&(s.name=t.name),e.scenes.push(s);const r=[];for(let o=0,a=t.children.length;o<a;o++){const c=t.children[o];if(c.visible||n.onlyVisible===!1){const l=await this.processNodeAsync(c);l!==null&&r.push(l)}}r.length>0&&(s.nodes=r),this.serializeUserData(t,s)}async processObjectsAsync(t){const e=new Qr;e.name="AuxScene";for(let n=0;n<t.length;n++)e.children.push(t[n]);await this.processSceneAsync(e)}async processInputAsync(t){const e=this.options;t=t instanceof Array?t:[t],await this._invokeAllAsync(function(s){s.beforeParse&&s.beforeParse(t)});const n=[];for(let s=0;s<t.length;s++)t[s]instanceof Qr?await this.processSceneAsync(t[s]):n.push(t[s]);n.length>0&&await this.processObjectsAsync(n);for(let s=0;s<this.skins.length;++s)this.processSkin(this.skins[s]);for(let s=0;s<e.animations.length;++s)this.processAnimation(e.animations[s],t[0]);await this._invokeAllAsync(function(s){s.afterParse&&s.afterParse(t)})}async _invokeAllAsync(t){for(let e=0,n=this.plugins.length;e<n;e++)await t(this.plugins[e])}}class Mx{constructor(t){this.writer=t,this.name="KHR_lights_punctual"}writeNode(t,e){if(!t.isLight)return;if(!t.isDirectionalLight&&!t.isPointLight&&!t.isSpotLight){console.warn("THREE.GLTFExporter: Only directional, point, and spot lights are supported.",t);return}const n=this.writer,s=n.json,r=n.extensionsUsed,o={};t.name&&(o.name=t.name),o.color=t.color.toArray(),o.intensity=t.intensity,t.isDirectionalLight?o.type="directional":t.isPointLight?(o.type="point",t.distance>0&&(o.range=t.distance)):t.isSpotLight&&(o.type="spot",t.distance>0&&(o.range=t.distance),o.spot={},o.spot.innerConeAngle=(1-t.penumbra)*t.angle,o.spot.outerConeAngle=t.angle),t.decay!==void 0&&t.decay!==2&&console.warn("THREE.GLTFExporter: Light decay may be lost. glTF is physically-based, and expects light.decay=2."),t.target&&(t.target.parent!==t||t.target.position.x!==0||t.target.position.y!==0||t.target.position.z!==-1)&&console.warn("THREE.GLTFExporter: Light direction may be lost. For best results, make light.target a child of the light with position 0,0,-1."),r[this.name]||(s.extensions=s.extensions||{},s.extensions[this.name]={lights:[]},r[this.name]=!0);const a=s.extensions[this.name].lights;a.push(o),e.extensions=e.extensions||{},e.extensions[this.name]={light:a.length-1}}}class Sx{constructor(t){this.writer=t,this.name="KHR_materials_unlit"}async writeMaterialAsync(t,e){if(!t.isMeshBasicMaterial)return;const s=this.writer.extensionsUsed;e.extensions=e.extensions||{},e.extensions[this.name]={},s[this.name]=!0,e.pbrMetallicRoughness.metallicFactor=0,e.pbrMetallicRoughness.roughnessFactor=.9}}class wx{constructor(t){this.writer=t,this.name="KHR_materials_clearcoat"}async writeMaterialAsync(t,e){if(!t.isMeshPhysicalMaterial||t.clearcoat===0)return;const n=this.writer,s=n.extensionsUsed,r={};if(r.clearcoatFactor=t.clearcoat,t.clearcoatMap){const o={index:await n.processTextureAsync(t.clearcoatMap),texCoord:t.clearcoatMap.channel};n.applyTextureTransform(o,t.clearcoatMap),r.clearcoatTexture=o}if(r.clearcoatRoughnessFactor=t.clearcoatRoughness,t.clearcoatRoughnessMap){const o={index:await n.processTextureAsync(t.clearcoatRoughnessMap),texCoord:t.clearcoatRoughnessMap.channel};n.applyTextureTransform(o,t.clearcoatRoughnessMap),r.clearcoatRoughnessTexture=o}if(t.clearcoatNormalMap){const o={index:await n.processTextureAsync(t.clearcoatNormalMap),texCoord:t.clearcoatNormalMap.channel};t.clearcoatNormalScale.x!==1&&(o.scale=t.clearcoatNormalScale.x),n.applyTextureTransform(o,t.clearcoatNormalMap),r.clearcoatNormalTexture=o}e.extensions=e.extensions||{},e.extensions[this.name]=r,s[this.name]=!0}}class bx{constructor(t){this.writer=t,this.name="KHR_materials_dispersion"}async writeMaterialAsync(t,e){if(!t.isMeshPhysicalMaterial||t.dispersion===0)return;const s=this.writer.extensionsUsed,r={};r.dispersion=t.dispersion,e.extensions=e.extensions||{},e.extensions[this.name]=r,s[this.name]=!0}}class Ex{constructor(t){this.writer=t,this.name="KHR_materials_iridescence"}async writeMaterialAsync(t,e){if(!t.isMeshPhysicalMaterial||t.iridescence===0)return;const n=this.writer,s=n.extensionsUsed,r={};if(r.iridescenceFactor=t.iridescence,t.iridescenceMap){const o={index:await n.processTextureAsync(t.iridescenceMap),texCoord:t.iridescenceMap.channel};n.applyTextureTransform(o,t.iridescenceMap),r.iridescenceTexture=o}if(r.iridescenceIor=t.iridescenceIOR,r.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],r.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1],t.iridescenceThicknessMap){const o={index:await n.processTextureAsync(t.iridescenceThicknessMap),texCoord:t.iridescenceThicknessMap.channel};n.applyTextureTransform(o,t.iridescenceThicknessMap),r.iridescenceThicknessTexture=o}e.extensions=e.extensions||{},e.extensions[this.name]=r,s[this.name]=!0}}class Tx{constructor(t){this.writer=t,this.name="KHR_materials_transmission"}async writeMaterialAsync(t,e){if(!t.isMeshPhysicalMaterial||t.transmission===0)return;const n=this.writer,s=n.extensionsUsed,r={};if(r.transmissionFactor=t.transmission,t.transmissionMap){const o={index:await n.processTextureAsync(t.transmissionMap),texCoord:t.transmissionMap.channel};n.applyTextureTransform(o,t.transmissionMap),r.transmissionTexture=o}e.extensions=e.extensions||{},e.extensions[this.name]=r,s[this.name]=!0}}class Ax{constructor(t){this.writer=t,this.name="KHR_materials_volume"}async writeMaterialAsync(t,e){if(!t.isMeshPhysicalMaterial||t.transmission===0)return;const n=this.writer,s=n.extensionsUsed,r={};if(r.thicknessFactor=t.thickness,t.thicknessMap){const o={index:await n.processTextureAsync(t.thicknessMap),texCoord:t.thicknessMap.channel};n.applyTextureTransform(o,t.thicknessMap),r.thicknessTexture=o}t.attenuationDistance!==1/0&&(r.attenuationDistance=t.attenuationDistance),r.attenuationColor=t.attenuationColor.toArray(),e.extensions=e.extensions||{},e.extensions[this.name]=r,s[this.name]=!0}}class Cx{constructor(t){this.writer=t,this.name="KHR_materials_ior"}async writeMaterialAsync(t,e){if(!t.isMeshPhysicalMaterial||t.ior===1.5)return;const s=this.writer.extensionsUsed,r={};r.ior=t.ior,e.extensions=e.extensions||{},e.extensions[this.name]=r,s[this.name]=!0}}class Rx{constructor(t){this.writer=t,this.name="KHR_materials_specular"}async writeMaterialAsync(t,e){if(!t.isMeshPhysicalMaterial||t.specularIntensity===1&&t.specularColor.equals(dx)&&!t.specularIntensityMap&&!t.specularColorMap)return;const n=this.writer,s=n.extensionsUsed,r={};if(t.specularIntensityMap){const o={index:await n.processTextureAsync(t.specularIntensityMap),texCoord:t.specularIntensityMap.channel};n.applyTextureTransform(o,t.specularIntensityMap),r.specularTexture=o}if(t.specularColorMap){const o={index:await n.processTextureAsync(t.specularColorMap),texCoord:t.specularColorMap.channel};n.applyTextureTransform(o,t.specularColorMap),r.specularColorTexture=o}r.specularFactor=t.specularIntensity,r.specularColorFactor=t.specularColor.toArray(),e.extensions=e.extensions||{},e.extensions[this.name]=r,s[this.name]=!0}}class Px{constructor(t){this.writer=t,this.name="KHR_materials_sheen"}async writeMaterialAsync(t,e){if(!t.isMeshPhysicalMaterial||t.sheen==0)return;const n=this.writer,s=n.extensionsUsed,r={};if(t.sheenRoughnessMap){const o={index:await n.processTextureAsync(t.sheenRoughnessMap),texCoord:t.sheenRoughnessMap.channel};n.applyTextureTransform(o,t.sheenRoughnessMap),r.sheenRoughnessTexture=o}if(t.sheenColorMap){const o={index:await n.processTextureAsync(t.sheenColorMap),texCoord:t.sheenColorMap.channel};n.applyTextureTransform(o,t.sheenColorMap),r.sheenColorTexture=o}r.sheenRoughnessFactor=t.sheenRoughness,r.sheenColorFactor=t.sheenColor.toArray(),e.extensions=e.extensions||{},e.extensions[this.name]=r,s[this.name]=!0}}class Dx{constructor(t){this.writer=t,this.name="KHR_materials_anisotropy"}async writeMaterialAsync(t,e){if(!t.isMeshPhysicalMaterial||t.anisotropy==0)return;const n=this.writer,s=n.extensionsUsed,r={};if(t.anisotropyMap){const o={index:await n.processTextureAsync(t.anisotropyMap)};n.applyTextureTransform(o,t.anisotropyMap),r.anisotropyTexture=o}r.anisotropyStrength=t.anisotropy,r.anisotropyRotation=t.anisotropyRotation,e.extensions=e.extensions||{},e.extensions[this.name]=r,s[this.name]=!0}}class Ix{constructor(t){this.writer=t,this.name="KHR_materials_emissive_strength"}async writeMaterialAsync(t,e){if(!t.isMeshStandardMaterial||t.emissiveIntensity===1)return;const s=this.writer.extensionsUsed,r={};r.emissiveStrength=t.emissiveIntensity,e.extensions=e.extensions||{},e.extensions[this.name]=r,s[this.name]=!0}}class Lx{constructor(t){this.writer=t,this.name="EXT_materials_bump"}async writeMaterialAsync(t,e){if(!t.isMeshStandardMaterial||t.bumpScale===1&&!t.bumpMap)return;const n=this.writer,s=n.extensionsUsed,r={};if(t.bumpMap){const o={index:await n.processTextureAsync(t.bumpMap),texCoord:t.bumpMap.channel};n.applyTextureTransform(o,t.bumpMap),r.bumpTexture=o}r.bumpFactor=t.bumpScale,e.extensions=e.extensions||{},e.extensions[this.name]=r,s[this.name]=!0}}class Ux{constructor(t){this.writer=t,this.name="EXT_mesh_gpu_instancing"}writeNode(t,e){if(!t.isInstancedMesh)return;const n=this.writer,s=t,r=new Float32Array(s.count*3),o=new Float32Array(s.count*4),a=new Float32Array(s.count*3),c=new re,l=new C,u=new di,h=new C;for(let f=0;f<s.count;f++)s.getMatrixAt(f,c),c.decompose(l,u,h),l.toArray(r,f*3),u.toArray(o,f*4),h.toArray(a,f*3);const d={TRANSLATION:n.processAccessor(new Ne(r,3)),ROTATION:n.processAccessor(new Ne(o,4)),SCALE:n.processAccessor(new Ne(a,3))};s.instanceColor&&(d._COLOR_0=n.processAccessor(s.instanceColor)),e.extensions=e.extensions||{},e.extensions[this.name]={attributes:d},n.extensionsUsed[this.name]=!0,n.extensionsRequired[this.name]=!0}}so.Utils={insertKeyframe:function(i,t){const n=i.getValueSize(),s=new i.TimeBufferType(i.times.length+1),r=new i.ValueBufferType(i.values.length+n),o=i.createInterpolant(new i.ValueBufferType(n));let a;if(i.times.length===0){s[0]=t;for(let c=0;c<n;c++)r[c]=0;a=0}else if(t<i.times[0]){if(Math.abs(i.times[0]-t)<.001)return 0;s[0]=t,s.set(i.times,1),r.set(o.evaluate(t),0),r.set(i.values,n),a=0}else if(t>i.times[i.times.length-1]){if(Math.abs(i.times[i.times.length-1]-t)<.001)return i.times.length-1;s[s.length-1]=t,s.set(i.times,0),r.set(i.values,0),r.set(o.evaluate(t),i.values.length),a=s.length-1}else for(let c=0;c<i.times.length;c++){if(Math.abs(i.times[c]-t)<.001)return c;if(i.times[c]<t&&i.times[c+1]>t){s.set(i.times.slice(0,c+1),0),s[c+1]=t,s.set(i.times.slice(c+1),c+2),r.set(i.values.slice(0,(c+1)*n),0),r.set(o.evaluate(t),(c+1)*n),r.set(i.values.slice((c+1)*n),(c+2)*n),a=c+1;break}}return i.times=s,i.values=r,a},mergeMorphTargetTracks:function(i,t){const e=[],n={},s=i.tracks;for(let r=0;r<s.length;++r){let o=s[r];const a=le.parseTrackName(o.name),c=le.findNode(t,a.nodeName);if(a.propertyName!=="morphTargetInfluences"||a.propertyIndex===void 0){e.push(o);continue}if(o.createInterpolant!==o.InterpolantFactoryMethodDiscrete&&o.createInterpolant!==o.InterpolantFactoryMethodLinear){if(o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline)throw new Error("THREE.GLTFExporter: Cannot merge tracks with glTF CUBICSPLINE interpolation.");console.warn("THREE.GLTFExporter: Morph target interpolation mode not yet supported. Using LINEAR instead."),o=o.clone(),o.setInterpolation(Qh)}const l=c.morphTargetInfluences.length,u=c.morphTargetDictionary[a.propertyIndex];if(u===void 0)throw new Error("THREE.GLTFExporter: Morph target name not found: "+a.propertyIndex);let h;if(n[c.uuid]===void 0){h=o.clone();const f=new h.ValueBufferType(l*h.times.length);for(let g=0;g<h.times.length;g++)f[g*l+u]=h.values[g];h.name=(a.nodeName||"")+".morphTargetInfluences",h.values=f,n[c.uuid]=h,e.push(h);continue}const d=o.createInterpolant(new o.ValueBufferType(1));h=n[c.uuid];for(let f=0;f<h.times.length;f++)h.values[f*l+u]=d.evaluate(h.times[f]);for(let f=0;f<o.times.length;f++){const g=this.insertKeyframe(h,o.times[f]);h.values[g*l+u]=o.values[f]}}return i.tracks=e,i},toFloat32BufferAttribute:function(i){const t=new Ne(new Float32Array(i.count*i.itemSize),i.itemSize,!1);if(!i.normalized&&!i.isInterleavedBufferAttribute)return t.array.set(i.array),t;for(let e=0,n=i.count;e<n;e++)for(let s=0;s<i.itemSize;s++)t.setComponent(e,s,i.getComponent(e,s));return t}};const xh=288.6,Nx=xh/134,ro={length:xh,saucerR:59.25*Nx/2},Fx=ro.length*.5,Ox=154.5,St={half:Fx,saucerZ:78,saucerY:0,saucerRimHalf:2.85,saucerTop:7.7,bDeckTop:8.6,cDeckTop:10.9,bridgeBaseTop:13.1,bridgeTop:16.9,lowerDomeBottom:-14.7,nacelleX:41.5,nacelleY:10.5,nacelleL:Ox,nacelleZ:-66.5,nacelleR:8,nacelleRY:.94,secondaryZ:-11,secondaryY:-35.4,secR:14.2,secFrontZ:40,secSternZ:-62,dishTipZ:53,dishR:9.2,hangarLift:3.3,neck:{topZ:[16.2,46.4],topYLead:-6.2,topYTrail:-3.4,botZ:[-3.1,24.5],botY:-23,thick:6.2},pylon:{rootX:8,rootY:-29.5,rootZ:-33.3,tipX:36,tipY:5.5,tipZ:-33.3,chordRoot:10.6,chordTip:10.6,thick:2.8}},ra=[{id:1,name:"Main Bridge",hull:"saucer",role:"command",note:"Command well, helm, science, comms"},{id:2,name:"Science Labs",hull:"saucer",role:"science",note:"Chemistry, biology, geology"},{id:3,name:"Science & Weapons",hull:"saucer",role:"science",note:"Physics, photon torpedo bay"},{id:4,name:"Junior Officers",hull:"saucer",role:"crew",note:"Quarters and briefing"},{id:5,name:"Officers' Country",hull:"saucer",role:"crew",note:"Senior quarters, upper phasers"},{id:6,name:"Crew Quarters",hull:"saucer",role:"crew",note:"Mess hall, impulse machinery"},{id:7,name:"Main Deck",hull:"saucer",role:"medical",note:"Sickbay, transporters, battle bridge"},{id:8,name:"Recreation",hull:"saucer",role:"crew",note:"Gym, computer core, food prep"},{id:9,name:"Fabrication",hull:"saucer",role:"engineering",note:"Reclamation and shops"},{id:10,name:"Cargo",hull:"saucer",role:"storage",note:"Stores and cargo transporter"},{id:11,name:"Fire Control",hull:"saucer",role:"tactical",note:"Lower sensors, forward phasers"},{id:12,name:"Dorsal Upper",hull:"dorsal",role:"engineering",note:"Jefferies tubes, power trunk"},{id:13,name:"Dorsal Mid",hull:"dorsal",role:"crew",note:"Observation, turbolift"},{id:14,name:"Dorsal Lower",hull:"dorsal",role:"engineering",note:"Separation collar"},{id:15,name:"Engineering Upper",hull:"secondary",role:"engineering",note:"Warp engineering galleries"},{id:16,name:"Main Engineering",hull:"secondary",role:"engineering",note:"Matter/antimatter, hangar loft"},{id:17,name:"Shuttle Operations",hull:"secondary",role:"flight",note:"Flight deck control"},{id:18,name:"Hangar",hull:"secondary",role:"flight",note:"Class F shuttle bay"},{id:19,name:"Hangar Support",hull:"secondary",role:"flight",note:"Turntable, maintenance"},{id:20,name:"Deflector Machinery",hull:"secondary",role:"engineering",note:"Navigational dish systems"},{id:21,name:"Cargo Lower",hull:"secondary",role:"storage",note:"Bulk stores"},{id:22,name:"Waste & Support",hull:"secondary",role:"engineering",note:"Life support, tanks"},{id:23,name:"Antimatter",hull:"secondary",role:"engineering",note:"Pod storage, intermix"}],Vs={command:13214247,science:4037519,medical:12868700,crew:4881077,engineering:13662764,tactical:10107707,flight:5937738,storage:7172728},jn={base:11975346,baseCss:"#b6bab2",accent:6186079,dark:2764075,copper:12088115},vh=new C(1,0,0),yh=new C(0,1,0),Or=new C(0,0,1);function Bx(i,t,e,n=32){const s=i*.5,r=t*.5,o=Math.min(e,s,r),a=[],c=[[s-o,r-o,0],[-s+o,r-o,Math.PI*.5],[-s+o,-r+o,Math.PI],[s-o,-r+o,Math.PI*1.5]],l=Math.max(3,Math.floor(n/4));for(const[u,h,d]of c)for(let f=0;f<l;f++){const g=d+f/l*(Math.PI*.5);a.push(new ft(u+Math.cos(g)*o,h+Math.sin(g)*o))}return a}function Mh(i,t,e,n,s,r=64,o=0){const a=[];for(let c=0;c<r;c++){const l=o+c/r*Math.PI*2;a.push(i.clone().addScaledVector(t,Math.cos(l)*n).addScaledVector(e,Math.sin(l)*s))}return a}function oa(i,t,e,n,s,r,o=40){return Bx(n,s,r,o).map(a=>i.clone().addScaledVector(t,a.x).addScaledVector(e,a.y))}function Pc(i,{flip:t=!1,vScale:e=1}={}){const n=i.length,s=i[0].length,r=s+1,o=[],a=[],c=[];for(let h=0;h<n;h++)for(let d=0;d<=s;d++){const f=i[h][d%s];o.push(f.x,f.y,f.z),a.push(d/s,h/(n-1)*e)}for(let h=0;h<n-1;h++)for(let d=0;d<s;d++){const f=h*r+d,g=f+1,x=f+r,m=x+1;t?c.push(f,g,x,g,m,x):c.push(f,x,g,g,x,m)}const l=new Se;l.setAttribute("position",new $t(o,3)),l.setAttribute("uv",new $t(a,2)),l.setIndex(c),l.computeVertexNormals();const u=l.attributes.normal;for(let h=0;h<n;h++){const d=h*r,f=d+s,g=u.getX(d)+u.getX(f),x=u.getY(d)+u.getY(f),m=u.getZ(d)+u.getZ(f),p=Math.hypot(g,x,m)||1;u.setXYZ(d,g/p,x/p,m/p),u.setXYZ(f,g/p,x/p,m/p)}return u.needsUpdate=!0,l}function oo(i,t,e=!1){const n=i.length,s=[t.x,t.y,t.z],r=[.5,.5],o=[];for(let c=0;c<n;c++)s.push(i[c].x,i[c].y,i[c].z),r.push(.5+Math.cos(c/n*Math.PI*2)*.5,.5+Math.sin(c/n*Math.PI*2)*.5);for(let c=0;c<n;c++){const l=c+1,u=(c+1)%n+1;e?o.push(0,u,l):o.push(0,l,u)}const a=new Se;return a.setAttribute("position",new $t(s,3)),a.setAttribute("uv",new $t(r,2)),a.setIndex(o),a.computeVertexNormals(),a}function _n(i=1){let t=i>>>0||1;return()=>(t=t*1664525+1013904223>>>0,t/4294967296)}const ao='Michroma, "Arial Black", Impact, sans-serif',Dc=[];typeof document<"u"&&document.fonts?.ready&&document.fonts.ready.then(()=>Dc.forEach(i=>i()));function Sh(i,t,e,n,s){const r=_n(n);for(let o=0;o<e;o++){const a=r()*t,c=r()*t,l=2+r()*48,u=2+r()*48,h=r();i.fillStyle=h>.5?`rgba(255,255,255,${(s*(h-.5)).toFixed(3)})`:`rgba(18,24,20,${(s*(.5-h)).toFixed(3)})`,i.fillRect(a,c,l,u)}}function cu(i,t,e,n,s,r,o,a=!1){i.save(),i.font=`700 ${o}px ${ao}`,i.textAlign="center",i.textBaseline="middle";const c=[...t],l=c.map(g=>i.measureText(g).width),u=o*.1,h=l.reduce((g,x)=>g+x,0)+u*(c.length-1),d=a?-1:1;let f=r-h/s/2*d;for(let g=0;g<c.length;g++){const x=l[g]/2/s;f+=x*d;const m=e+Math.cos(f)*s,p=n+Math.sin(f)*s;i.save(),i.translate(m,p),i.rotate(f+(a?-Math.PI/2:Math.PI/2)),i.fillText(c[g],0,0),i.restore(),f+=(x+u/s)*d}i.restore()}function Ic(){const t=document.createElement("canvas");t.width=t.height=1024;const e=t.getContext("2d");e.fillStyle=jn.baseCss,e.fillRect(0,0,1024,1024),Sh(e,1024,2600,7,.14),e.strokeStyle="rgba(40,46,42,0.07)",e.lineWidth=2;for(let s=0;s<=1024;s+=128)e.beginPath(),e.moveTo(s,0),e.lineTo(s,1024),e.stroke();for(let s=0;s<=1024;s+=256)e.beginPath(),e.moveTo(0,s),e.lineTo(1024,s),e.stroke();const n=new xn(t);return n.wrapS=n.wrapT=qs,n.colorSpace=be,n.anisotropy=8,n}function lu(i="top"){const e=document.createElement("canvas");e.width=e.height=2048;const n=e.getContext("2d"),s=2048/2,r=2048/2*(ro.saucerR/(ro.saucerR+1)),o=()=>{n.clearRect(0,0,2048,2048),n.fillStyle=jn.baseCss,n.fillRect(0,0,2048,2048),Sh(n,2048,4200,i==="top"?11:13,.11);for(let h=0;h<24;h+=2)n.beginPath(),n.moveTo(s,s),n.arc(s,s,r,h*Math.PI/12,(h+1)*Math.PI/12),n.closePath(),n.fillStyle="rgba(255,255,255,0.028)",n.fill();n.strokeStyle="rgba(44,50,46,0.34)",n.lineWidth=3;const c=i==="top"?[.2,.215,.47,.485,.72,.735,.95,.965]:[.29,.3,.6,.61,.92];for(const h of c)n.beginPath(),n.arc(s,s,r*h,0,Math.PI*2),n.stroke();const l=i==="top"?36:12,u=i==="top"?.22:.31;n.lineWidth=2,n.strokeStyle="rgba(44,50,46,0.24)";for(let h=0;h<l;h++){const d=h/l*Math.PI*2;n.beginPath(),n.moveTo(s+Math.cos(d)*r*u,s+Math.sin(d)*r*u),n.lineTo(s+Math.cos(d)*r*.985,s+Math.sin(d)*r*.985),n.stroke()}n.fillStyle="#1d201f",n.textAlign="center",n.textBaseline="middle",i==="top"?(cu(n,"U.S.S. ENTERPRISE",s,s,r*.8,-Math.PI/2,r*.08),n.font=`700 ${r*.13}px ${ao}`,n.fillText("NCC-1701",s,s-r*.45)):(n.font=`700 ${r*.19}px ${ao}`,n.fillText("NCC-1701",s,s-r*.5),cu(n,"U.S.S. ENTERPRISE",s,s,r*.79,Math.PI/2,r*.082,!0)),n.fillStyle="rgba(160,40,40,0.9)",i==="top"&&n.fillRect(s-r*.03,s+r*.36,r*.06,r*.02)};o();const a=new xn(e);return a.colorSpace=be,a.anisotropy=16,Dc.push(()=>{o(),a.needsUpdate=!0}),a}function kx(i=!1){const n=document.createElement("canvas");n.width=256,n.height=1024;const s=n.getContext("2d"),r=()=>{s.clearRect(0,0,256,1024),s.save(),s.translate(256/2,1024/2),s.rotate(i?Math.PI/2:-Math.PI/2),s.fillStyle="#1d201f",s.font=`700 132px ${ao}`,s.textAlign="center",s.textBaseline="middle",s.fillText("NCC-1701",0,0),s.restore()};r();const o=new xn(n);return o.colorSpace=be,o.anisotropy=16,Dc.push(()=>{r(),o.needsUpdate=!0}),o}function un(i=null,t={}){return new _o({color:i?16777215:jn.base,map:i,roughness:.52,metalness:.06,clearcoat:.18,clearcoatRoughness:.5,envMapIntensity:.55,side:Re,...t})}function en(i=jn.accent,t={}){return new An({color:i,roughness:.42,metalness:.35,side:Re,...t})}function Vt(i,t=2.4){return new An({color:i,emissive:i,emissiveIntensity:t,roughness:.25,metalness:0,side:Re})}function tr(i=16767114,t=3){return new An({color:i,emissive:i,emissiveIntensity:t,roughness:.15,metalness:0,side:Re})}function zx(){return new _o({color:16734750,emissive:8001024,emissiveIntensity:.9,roughness:.12,metalness:0,transmission:.55,thickness:2.5,ior:1.4,transparent:!0,opacity:.9,side:Re})}function Vx(){return new _o({color:jn.copper,emissive:2757124,emissiveIntensity:.6,roughness:.28,metalness:.9,clearcoat:.3,side:Re})}function _e(i){return new An({color:i,roughness:.7,metalness:.05,emissive:i,emissiveIntensity:.22,side:Re})}function Hx(i){return new An({map:i,transparent:!0,roughness:.5,metalness:.05,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,side:Re})}function ui(i,t=128){const e=document.createElement("canvas");e.width=t,e.height=t;const n=e.getContext("2d"),s=n.createRadialGradient(t/2,t/2,0,t/2,t/2,t/2);s.addColorStop(0,i),s.addColorStop(.4,i),s.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=s,n.fillRect(0,0,t,t);const r=new xn(e);return r.colorSpace=be,r}function oc(i,t=1){return new Oe({uniforms:{uColor:{value:new Wt(i)},uIntensity:{value:t}},vertexShader:`
      varying vec3 vN;
      varying vec3 vV;
      void main() {
        vec4 w = modelViewMatrix * vec4(position, 1.0);
        vN = normalize(normalMatrix * normal);
        vV = normalize(-w.xyz);
        gl_Position = projectionMatrix * w;
      }
    `,fragmentShader:`
      uniform vec3 uColor;
      uniform float uIntensity;
      varying vec3 vN;
      varying vec3 vV;
      void main() {
        float fres = pow(1.0 - max(dot(vN, vV), 0.0), 2.0);
        vec3 col = uColor * (0.55 + fres * 1.8) * uIntensity;
        gl_FragColor = vec4(col, 1.0);
      }
    `,blending:ve,transparent:!0,depthWrite:!1})}const uu={gold:13214247,blue:3108789,red:11546672,green:5208634},Gx=14267535,hu=1842210,aa=new Map;function Br(i){if(!aa.has(i)){const t=_e(i);t.emissiveIntensity=.06,t.envMapIntensity=.15,t.roughness=.8,aa.set(i,t)}return aa.get(i)}function Wx({shirt:i="red",pose:t="stand",height:e=1.8}={}){const n=new ie;n.name=`Crew ${i}`;const s=e/1.8,r=Br(uu[i]||uu.red),o=.82*s,a=.58*s,c=.115*s,l=.45*s,u=new N(new Ot(.09*s,.11*s,o,8),Br(hu)),h=u.clone(),d=new N(new Ot(.08*s,.09*s,l,8),Br(hu)),f=d.clone(),g=new N(new bc(.17*s,a-.34*s,4,10),r),x=new N(new ee(c,12,10),Br(Gx)),m=new N(new Ot(.05*s,.045*s,.6*s,8),r),p=m.clone();return n.add(u,h,d,f,g,x,m,p),n.userData.parts={legs:u,legs2:h,shinL:d,shinR:f,torso:g,head:x,armL:m,armR:p,s,legL:o,torsoH:a,headR:c,hip:l},ac(n,t),n}function ac(i,t){const e=i.userData.parts;if(!e||i.userData.pose===t)return;i.userData.pose=t;const{legs:n,legs2:s,shinL:r,shinR:o,torso:a,head:c,armL:l,armR:u,s:h,legL:d,torsoH:f,headR:g,hip:x}=e;for(const m of[n,s,r,o,a,c,l,u])m.rotation.set(0,0,0),m.scale.set(1,1,1);r.visible=o.visible=t==="sit",t==="lie"?(n.rotation.x=Math.PI/2,n.position.set(-.1*h,.11*h,-d/2),s.rotation.x=Math.PI/2,s.position.set(.1*h,.11*h,-d/2),a.rotation.x=Math.PI/2,a.position.set(0,.18*h,f/2),c.position.set(0,.2*h,f+g+.05*h),l.rotation.x=Math.PI/2,l.position.set(-.24*h,.14*h,f/2),u.rotation.x=Math.PI/2,u.position.set(.24*h,.14*h,f/2)):t==="sit"?(n.rotation.x=Math.PI/2,n.scale.y=.55,n.position.set(-.1*h,x,.22*h),s.rotation.x=Math.PI/2,s.scale.y=.55,s.position.set(.1*h,x,.22*h),r.position.set(-.1*h,x/2,.42*h),o.position.set(.1*h,x/2,.42*h),a.position.set(0,x+f/2,0),c.position.set(0,x+f+g+.04*h,0),l.rotation.x=-.9,l.position.set(-.24*h,x+f*.55,.12*h),u.rotation.x=-.9,u.position.set(.24*h,x+f*.55,.12*h)):(n.position.set(-.1*h,d/2,0),s.position.set(.1*h,d/2,0),a.position.set(0,d+f/2,0),c.position.set(0,d+f+g+.04*h,0),l.position.set(-.24*h,d+f*.5,0),l.rotation.z=.08,u.position.set(.24*h,d+f*.5,0),u.rotation.z=-.08),i.userData.headY=c.position.y}function xs(i,t){const e=[];for(const n of t){const s=Wx({shirt:n.shirt,pose:n.pose});s.position.set(n.x,n.y,n.z),s.rotation.y=n.rotY||0,s.userData.crew=!0,s.userData.homePose=n.pose||"stand",s.userData.home={x:n.x,z:n.z,rotY:n.rotY||0},n.station&&(s.userData.station={x:n.station.x,z:n.station.z,rotY:n.station.rotY??n.rotY??0,sit:!!n.station.sit}),i.add(s),e.push(s)}return e}function Xx(i,t,e){i.traverse(n=>{if(!n.userData.crew||!n.userData.station)return;const s=n.userData.home,r=n.userData.station,o=s.x+(r.x-s.x)*t,a=s.z+(r.z-s.z)*t,c=Math.min(1,e*3.5);n.position.x+=(o-n.position.x)*c,n.position.z+=(a-n.position.z)*c;const l=Math.hypot(o-n.position.x,a-n.position.z),u=l>.15,h=t>.95&&l<.08;let f=(u?Math.atan2(o-n.position.x,a-n.position.z):t>.5?r.rotY:s.rotY)-n.rotation.y;f=Math.atan2(Math.sin(f),Math.cos(f)),n.rotation.y+=f*Math.min(1,e*6),u||t<.5?ac(n,t<.5&&!u?n.userData.homePose:"stand"):h&&r.sit&&Math.abs(f)<.25&&ac(n,"sit");const g=n.userData.parts.head,x=u?Math.abs(Math.sin(performance.now()*.012))*.05:0;g.position.y=n.userData.headY+x})}function ca(i,t=256,e=128,n=["#3fd0ff","#ffb347","#ff5a5a","#7dff9a","#e8eef4"]){const s=document.createElement("canvas");s.width=t,s.height=e;const r=s.getContext("2d"),o=_n(i);r.fillStyle="#06090f",r.fillRect(0,0,t,e);const a=3+Math.floor(o()*3),c=2+Math.floor(o()*2);for(let u=0;u<a;u++)for(let h=0;h<c;h++){if(o()<.25)continue;r.fillStyle=n[Math.floor(o()*n.length)],r.globalAlpha=.55+o()*.45;const d=t/a-8,f=e/c-8;r.fillRect(4+u*(t/a),4+h*(e/c),d*(.4+o()*.6),f*(.3+o()*.7))}r.globalAlpha=1;const l=new xn(s);return l.colorSpace=be,l}function qx(){const i=document.createElement("canvas");i.width=512,i.height=256;const t=i.getContext("2d");t.fillStyle="#020408",t.fillRect(0,0,512,256);const e=_n(77);for(let s=0;s<260;s++){const r=e()<.9?1:2;t.fillStyle=`rgba(${200+e()*55},${210+e()*45},255,${.5+e()*.5})`,t.fillRect(e()*512,e()*256,r,r)}const n=new xn(i);return n.colorSpace=be,n}function kr(i,t=1.2){return new An({map:i,emissive:16777215,emissiveMap:i,emissiveIntensity:t,roughness:.4,metalness:0})}function Yx(){const i=new ie;i.name="BridgeInterior";const t=St.cDeckTop+.1,e=7.7,n=(z,O=.04)=>{const B=_e(z);return B.emissiveIntensity=O,B.envMapIntensity=.12,B.roughness=.85,B},s=n(4858404,.03),r=n(10131345,.04),o=n(1382427,.02),a=n(9315878,.08),c=n(2237738,.02),l=new N(new Ot(4.4,4.4,.12,64),s);l.position.y=t,i.add(l);const u=new N(new Ot(e,e,.42,96),n(5911090,.03));u.position.y=t+.15,i.add(u);const h=new N(new Pi(4.4,e,96),s);h.rotation.x=-Math.PI/2,h.position.y=t+.37,i.add(h);const d=new N(new Pe(4.55,.06,8,96,Math.PI*1.7),a);d.rotation.x=Math.PI/2,d.rotation.z=Math.PI*.15+Math.PI/2,d.position.y=t+1.05,i.add(d);for(let z=0;z<12;z++){const O=z/12*Math.PI*2;if(Math.cos(O)>.86)continue;const B=new N(new Ot(.05,.05,.7,8),a);B.position.set(Math.sin(O)*4.55,t+.72,Math.cos(O)*4.55),i.add(B)}const f=new N(new bt(.9,.5,.9),c);f.position.set(0,t+.55,-.9),i.add(f);const g=new N(new bt(.9,1,.18),c);g.position.set(0,t+1.25,-1.3),i.add(g);const x=new N(new Ot(.28,.4,.35,16),o);x.position.set(0,t+.2,-.9),i.add(x);for(const z of[-.62,.62]){const O=new N(new bt(.22,.18,.8),o);O.position.set(z,t+.95,-.95),i.add(O);const B=new N(new Gt(.16,.5),Vt(16757575,1.4));B.rotation.x=-Math.PI/2,B.position.set(z,t+1.05,-.95),i.add(B)}const m=new N(new bt(3.4,.85,.75),o);m.position.set(0,t+.45,1.5),i.add(m);const p=new N(new Gt(3.2,.6),kr(ca(5,512,96),1.4));p.rotation.x=-Math.PI/2+.2,p.position.set(0,t+.9,1.45),i.add(p);const w=new N(new Ot(.28,.28,.45,20),Vt(8247551,1.6));w.position.set(0,t+1.1,1.55),i.add(w);for(const z of[-.8,.8]){const O=new N(new bt(.6,.45,.6),c);O.position.set(z,t+.48,.55),i.add(O);const B=new N(new bt(.6,.6,.12),c);B.position.set(z,t+1,.25),i.add(B)}[-2.35,-1.75,-1.15,1.15,1.75,2.35,Math.PI-.55,Math.PI+.55].forEach((z,O)=>{const j=new N(new bt(1.9,.9,.55),o);j.position.set(Math.sin(z)*6.75,t+.82,Math.cos(z)*6.75),j.lookAt(0,t+.82,0),i.add(j);const H=new N(new Gt(1.7,.42),kr(ca(20+O,256,64),1.3));H.position.set(Math.sin(z)*(6.75-.05),t+1.3,Math.cos(z)*(6.75-.05)),H.lookAt(0,t+1.3+1.2,0),i.add(H);const Y=new N(new bt(.6,.45,.6),c);Y.position.set(Math.sin(z)*(6.75-1.1),t+.6,Math.cos(z)*(6.75-1.1)),i.add(Y);const yt=new N(new Gt(1.9,1),kr(ca(40+O),1.1));yt.position.set(Math.sin(z)*(e-.15),t+2.55,Math.cos(z)*(e-.15)),yt.lookAt(0,t+2.55,0),i.add(yt)});const _=new N(new Ot(e+.05,e+.05,3.6,96,1,!0),r);_.position.y=t+1.8,i.add(_);const E=new N(new Pe(e,.08,8,96),a);E.rotation.x=Math.PI/2,E.position.y=t+1.95,i.add(E);const b=new N(new bt(5.4,3,.2),o);b.position.set(0,t+2.1,e-.3),i.add(b);const v=new N(new Gt(4.9,2.6),kr(qx(),1.6));v.position.set(0,t+2.1,e-.42),v.rotation.y=Math.PI,i.add(v);const A=new ie;for(const z of[-1,1]){const O=new N(new bt(.35,3,.3),r);O.position.set(z*1.05,t+1.5,-7.4),A.add(O)}const S=new N(new bt(2.4,.4,.3),r);S.position.set(0,t+2.8,-7.4),A.add(S),i.add(A);const y=[];for(const z of[-1,1]){const O=new N(new bt(.86,2.5,.1),a);O.position.set(z*.43,t+1.3,-7.2),O.userData.homeX=z*.43,O.userData.side=z,i.add(O),y.push(O)}i.userData.setDoor=z=>{for(const O of y)O.position.x=O.userData.homeX+O.userData.side*.86*z};const R=(z,O=5.6)=>({x:Math.sin(z)*O,z:Math.cos(z)*O,rotY:z+Math.PI,sit:!0});xs(i,[{x:0,y:t,z:-.85,rotY:0,shirt:"gold",pose:"sit"},{x:-.8,y:t,z:.45,rotY:0,shirt:"gold",pose:"sit"},{x:.8,y:t,z:.45,rotY:0,shirt:"gold",pose:"sit"},{x:-1.6,y:t+.37,z:-3.2,rotY:.4,shirt:"blue",pose:"stand",station:R(-1.75)},{x:Math.sin(1.75)*5.6,y:t+.37,z:Math.cos(1.75)*5.6,rotY:1.75+Math.PI,shirt:"red",pose:"sit"},{x:2.2,y:t+.37,z:-3.6,rotY:-.6,shirt:"red",pose:"stand",station:R(2.35)},{x:Math.sin(-1.15)*5.6,y:t+.37,z:Math.cos(-1.15)*5.6,rotY:-1.15+Math.PI,shirt:"blue",pose:"sit"},{x:-.6,y:t+.37,z:-6.3,rotY:0,shirt:"red",pose:"stand",station:R(Math.PI-.55)},{x:.7,y:t+.37,z:-6.3,rotY:0,shirt:"gold",pose:"stand",station:R(Math.PI+.55)}]);for(let z=0;z<8;z++){const O=z/8*Math.PI*2+Math.PI/8,B=new N(new Gt(.5,.22),Vt(16757575,.25));B.position.set(Math.sin(O)*(e-.12),t+3.3,Math.cos(O)*(e-.12)),B.lookAt(0,t+3.3,0),B.userData.kind="alertlight",i.add(B)}const W=new N(new Pe(5.6,.12,8,96),Vt(16773852,1.3));W.rotation.x=Math.PI/2,W.position.y=t+3.9,W.userData.kind="alertring",i.add(W);const q=new N(new ee(.9,24,12,0,Math.PI*2,Math.PI/2,Math.PI/2),Vt(16774886,1.2));return q.position.y=t+4.9,q.userData.kind="glow",i.add(q),i}function Qe(i,t=.04){const e=_e(i);return e.emissiveIntensity=t,e.envMapIntensity=.12,e.roughness=.85,e}function wh(i,t,e,n,s,r,o,a,c){const l=new N(new Gt(s,o),c);l.rotation.x=-Math.PI/2,l.position.set(t,e,n),i.add(l);const u=new N(new Gt(s,o),a);u.rotation.x=Math.PI/2,u.position.set(t,e+r,n),i.add(u);for(const h of[-1,1]){const d=new N(new Gt(o,r),a);d.rotation.y=-h*Math.PI/2,d.position.set(t+h*s/2,e+r/2,n),i.add(d);const f=new N(new Gt(s,r),a);f.rotation.y=h>0?Math.PI:0,f.position.set(t,e+r/2,n+h*o/2),i.add(f)}}function Zx({cx:i=28,floorY:t=1.25,cz:e=-8}={}){const n=new ie;n.name="TransporterRoom";const s=9,r=2.7,o=9,a=Qe(10131345,.04),c=Qe(3816512,.03),l=Qe(9315878,.08),u=Qe(1382427,.02);wh(n,i,t,e,s,r,o,a,c);const h=new N(new Gt(s-1,r-.2),Qe(12081706,.12));h.rotation.y=Math.PI,h.position.set(i,t+r/2,e+o/2-.05),n.add(h);for(let S=0;S<6;S++){const y=new N(new bt(.12,r-.4,.06),u);y.position.set(i-3.2+S*1.28,t+r/2,e+o/2-.12),n.add(y)}const d=e+1.9,f=new N(new Ot(2.6,2.7,.28,48),Qe(2764081,.02));f.position.set(i,t+.14,d),n.add(f);const g=Vt(16773320,1.4),x=[];for(let S=0;S<6;S++){const y=S/6*Math.PI*2+Math.PI/6,R=new N(new Ot(.45,.45,.04,24),g);R.position.set(i+Math.cos(y)*1.6,t+.3,d+Math.sin(y)*1.6),n.add(R),x.push(R)}const m=new N(new Ot(2.5,2.5,.22,48),Qe(2764081,.02));m.position.set(i,t+r-.12,d),n.add(m);const p=new N(new Pi(1.2,2.3,48),Vt(16767400,1.1));p.rotation.x=Math.PI/2,p.position.set(i,t+r-.24,d),n.add(p);const w=new N(new bt(2.6,.14,.7),Qe(2764081,.02));w.position.set(i,t+.07,d-2.9),n.add(w);const M=e-o/2+1.6,_=new N(new bt(2.8,1,.8),u);_.position.set(i,t+.5,M),n.add(_);const E=new N(new Gt(2.6,.6),Vt(4182271,.9));E.rotation.x=-Math.PI/2+.25,E.position.set(i,t+1.02,M+.05),n.add(E);for(let S=-1;S<=1;S++){const y=new N(new bt(.08,.06,.4),l);y.position.set(i+S*.5,t+1.06,M+.1),n.add(y)}const b=new N(new Pe(.03,.03,6,8),l);b.visible=!1,n.add(b);const v=new Tn(16769216,10,14,1.6);v.position.set(i,t+r-.4,e-1),n.add(v);const A=new Tn(16770760,8,8,1.4);return A.position.set(i,t+r-.6,d),n.add(A),xs(n,[{x:i+.3,y:t,z:M-.9,rotY:0,shirt:"red",pose:"stand"},{x:i+Math.cos(Math.PI/6)*1.6,y:t+.3,z:d+Math.sin(Math.PI/6)*1.6,rotY:Math.PI,shirt:"gold",pose:"stand"},{x:i+Math.cos(Math.PI*5/6)*1.6,y:t+.3,z:d+Math.sin(Math.PI*5/6)*1.6,rotY:Math.PI,shirt:"blue",pose:"stand"},{x:i+Math.cos(Math.PI*1.5)*1.6,y:t+.3,z:d+Math.sin(Math.PI*1.5)*1.6,rotY:Math.PI,shirt:"red",pose:"stand"}]),n.userData={pads:x,padMat:g},n}function jx({cx:i=-30,floorY:t=1.25,cz:e=22}={}){const n=new ie;n.name="Sickbay";const s=12,r=2.7,o=9,a=Qe(10462106,.04),c=Qe(4869458,.03),l=Qe(1382427,.02),u=Qe(4098694,.08);wh(n,i,t,e,s,r,o,a,c);for(let p=0;p<3;p++){const w=e-3+p*3,M=i-s/2+1.5,_=new N(new bt(1,.45,2.3),Qe(14605008,.05));_.position.set(M,t+.45,w),n.add(_);const E=new N(new bt(.8,.25,1.6),l);E.position.set(M,t+.12,w),n.add(E);const b=new N(new bt(.15,1,1.9),l);b.position.set(i-s/2+.15,t+1.8,w),n.add(b);const v=new N(new Gt(1.7,.8),Vt([8257434,16757575,4182271][p],1));v.rotation.y=Math.PI/2,v.position.set(i-s/2+.24,t+1.8,w),n.add(v);for(let A=0;A<5;A++){const S=new N(new bt(.02,.1+Math.random()*.5,.12),Vt(16777215,1.6));S.position.set(i-s/2+.26,t+1.55+.1,w-.7+A*.35),n.add(S)}p===1&&xs(n,[{x:M,y:t+.68,z:w-.9,rotY:0,shirt:"red",pose:"lie"}])}const h=new N(new bt(s-.4,.3,.06),u);h.position.set(i,t+r-.3,e+o/2-.08),n.add(h);const d=new N(new bt(2,.8,1),l);d.position.set(i+s/2-1.8,t+.4,e+2.6),n.add(d);const f=new N(new bt(.5,.5,.35),l);f.position.set(i+s/2-1.8,t+1.05,e+2.8),n.add(f);const g=new N(new Gt(.4,.3),Vt(10475775,1.3));g.position.set(i+s/2-1.8,t+1.08,e+2.62),g.rotation.y=Math.PI,n.add(g);const x=new N(new bt(2.6,r-.6,.5),Qe(9080200,.03));x.position.set(i+1.5,t+(r-.6)/2,e-o/2+.3),n.add(x);for(let p=0;p<4;p++){const w=new N(new Ot(.06,.06,.25,8),Vt([8257434,16734810,4182271,16757575][p],.9));w.position.set(i+.6+p*.5,t+1.3,e-o/2+.62),n.add(w)}const m=new Tn(15791359,12,16,1.6);return m.position.set(i,t+r-.4,e),n.add(m),xs(n,[{x:i-s/2+2.6,y:t,z:e,rotY:Math.PI/2,shirt:"blue",pose:"stand"},{x:i+s/2-1.8,y:t,z:e+3.6,rotY:0,shirt:"blue",pose:"sit"},{x:i-1,y:t,z:e-2.4,rotY:-.6,shirt:"gold",pose:"stand"}]),n}const Ce=ro.saucerR,du=Ce+1;function la(i,t,e){const n=new Qs(i.map(([s,r])=>new ft(Math.max(.01,s),r)),t);if(e){const s=n.attributes.position,r=n.attributes.uv;for(let o=0;o<s.count;o++){const a=s.getX(o),c=s.getZ(o),l=(e==="bottom"?a:-a)/(2*du)+.5,u=c/(2*du)+.5;r.setXY(o,l,u)}r.needsUpdate=!0}return n}function $x(i,t,e){const n=new Ci;return n.absarc(0,0,i,Math.PI,Math.PI*2,!1),n.lineTo(e,t*.72),n.quadraticCurveTo(0,t,-e,t*.72),n.lineTo(-i,0),n}function fu(i,t,e,n,s,r){const o=new Ri($x(i,t,e),{depth:s-n,bevelEnabled:!0,bevelThickness:.3,bevelSize:.3,bevelSegments:3,curveSegments:56}),a=new N(o,r);return a.rotation.x=-Math.PI/2,a.position.y=n,a.castShadow=!0,a.receiveShadow=!0,a}function Kx(i,t,e){const n=_n(e),s=new Gt(1.05,.42);for(const[r,o]of[[.9,110],[-.9,90]])for(let a=0;a<o;a++){const c=a/o*Math.PI*2+n()*.01;if(Math.floor(a/5)%3!==0&&n()<.8||n()<.25||Math.cos(c)<-.94)continue;const u=new N(s,t),h=Ce+.5;u.position.set(Math.sin(c)*h,r,Math.cos(c)*h),u.lookAt(0,r,0),u.rotateY(Math.PI),u.userData.kind="window",i.add(u)}}function Jx(i,t,e){const n=_n(e),s=new Gt(1.4,.55),r=[{rad:Ce*.62,y:4.9,tilt:-.5,count:48},{rad:Ce*.56,y:-6,tilt:.7,count:36}];for(const o of r)for(let a=0;a<o.count;a++){if(n()<.62)continue;const c=a/o.count*Math.PI*2;if(Math.cos(c)<-.9&&o.y>0)continue;const l=new N(s,t);l.position.set(Math.sin(c)*o.rad,o.y,Math.cos(c)*o.rad),l.lookAt(0,o.y,0),l.rotateY(Math.PI),l.rotateX(o.tilt),l.userData.kind="window",i.add(l)}}function Qx(){const i=new ie;i.name="Saucer";const t=Ic(),e=un(lu("top")),n=un(lu("bottom")),s=t.clone();s.repeat.set(36,1),s.needsUpdate=!0;const r=un(s),o=un(null),a=en(jn.dark),c=tr(16767114,2.1),l=St.saucerRimHalf,u=St.saucerTop,h=new N(la([[.01,-6.4],[11,-6.4],[12.2,-6.4],[12.5,-4.3],[19,-4.3],[22,-4.8],[25,-5.6],[30,-6.2],[36,-5.9],[46,-5],[56,-3.9],[Ce,-l]],192,"bottom"),n),d=new N(la([[Ce,-l],[Ce+.4,-l*.55],[Ce+.55,0],[Ce+.4,l*.55],[Ce,l]],192),r),f=new N(la([[Ce,l],[56,3.4],[46,3.9],[36,4.5],[28,5.6],[23,7],[20.2,u],[.01,u]],192,"top"),e);for(const st of[h,d,f])st.castShadow=!0,st.receiveShadow=!0,i.add(st);i.add(fu(20,24,9,u-.05,St.bDeckTop,o)),i.add(fu(11.3,18.9,5.6,St.bDeckTop-.05,St.cDeckTop,o));const g=new N(new Ot(8,8.2,St.bridgeBaseTop-St.cDeckTop,64,1,!0),o);g.position.y=(St.bridgeBaseTop+St.cDeckTop)/2,i.add(g),i.add(Yx()),i.add(Zx()),i.add(jx());const x=St.bridgeTop-.6-St.bridgeBaseTop,m=new N(new ee(7.8,64,32,0,Math.PI*2,0,Math.PI*.5),o);m.scale.set(1,x/7.8,1),m.position.y=St.bridgeBaseTop,m.castShadow=!0,i.add(m);const p=new N(new Pe(7.85,.16,8,64),a);p.rotation.x=Math.PI/2,p.position.y=St.bridgeBaseTop+.05,i.add(p);const w=new N(new Ot(2.6,2.8,.5,32),o);w.position.y=St.bridgeTop-.6,i.add(w);const M=new N(new Ot(.5,.7,.7,16),a);M.position.y=St.bridgeTop-.1,i.add(M);const _=new N(new Ot(2.4,2.6,1.1,32),o);_.position.set(0,St.cDeckTop+.5,-14.5),i.add(_);for(let st=0;st<26;st++){const rt=st/26*Math.PI*2;if(Math.cos(rt)<-.55)continue;const L=new N(new Gt(.9,.4),c);L.position.set(Math.sin(rt)*8.15,St.bridgeBaseTop-1,Math.cos(rt)*8.15),L.lookAt(0,St.bridgeBaseTop-1,0),L.rotateY(Math.PI),L.userData.kind="window",i.add(L)}const E=new ie,b=11.5,v=new N(new bt(14,1.3,b),o);v.position.set(0,3.45,-Ce+.4+b/2),v.castShadow=!0,E.add(v);const A=12,S=new N(new bt(8,1.1,A),o);S.position.set(0,3.55,-Ce+.4+b+A/2-.6),S.rotation.x=-.04,E.add(S);const y=new N(new Ot(4,4,1.1,32,1,!1,Math.PI*.5,Math.PI),o);y.position.set(0,3.5,-Ce+.4+b+A-.6),y.scale.set(1,1,.6),E.add(y);const R=new N(new bt(14.2,.4,.4),a);R.position.set(0,3.9,-Ce+.4+b*.55),E.add(R);const W=new N(new bt(13.2,1.1,.4),a);W.position.set(0,3.5,-Ce+.15),E.add(W);const q=Vt(16742954,3.6);for(const st of[-4,0,4]){const rt=new N(new Gt(3.2,.7),q);rt.position.set(st,3.5,-Ce-.08),rt.rotation.y=Math.PI,rt.userData.kind="glow",E.add(rt)}i.add(E);const z=11,O=-6.4-St.lowerDomeBottom,B=new N(new ee(z,64,32,0,Math.PI*2,0,Math.PI*.42),o);B.scale.set(1,O/(z*(1-Math.cos(Math.PI*.42))),1),B.rotation.x=Math.PI,B.position.y=-6.4,i.add(B);const j=new N(new mo(z*Math.sin(Math.PI*.42),48),o);j.rotation.x=Math.PI/2,j.position.y=St.lowerDomeBottom+.02,i.add(j);for(const[st,rt]of[[10.6,-7.6],[9.2,-11],[7.2,-12.7]]){const L=new N(new Pe(st,.16,8,72),a);L.rotation.x=Math.PI/2,L.position.y=rt,i.add(L)}const H=new N(new Pe(12.4,.18,8,96),a);H.rotation.x=Math.PI/2,H.position.y=-5.4,i.add(H);for(let st=0;st<3;st++){const rt=st/3*Math.PI*2+Math.PI/6,L=new N(new ee(1.3,24,12,0,Math.PI*2,0,Math.PI*.5),o);L.rotation.x=Math.PI,L.position.set(Math.sin(rt)*15.8,-4.3,Math.cos(rt)*15.8),i.add(L)}const Y=new N(new Ot(.6,.8,1,16),a);Y.position.y=St.lowerDomeBottom-.4,i.add(Y),Kx(i,c,21),Jx(i,c,33);for(const st of[Math.PI*.28,-Math.PI*.28,Math.PI*.72,-Math.PI*.72]){const rt=Ce*.66,L=new N(new bt(2.6,.5,2),o);L.position.set(Math.sin(st)*rt,3.75,Math.cos(st)*rt),L.rotation.y=st,i.add(L);const U=new N(new bt(2.4,.5,1.8),o);U.position.set(Math.sin(st)*rt,-5.4,Math.cos(st)*rt),U.rotation.y=st,i.add(U)}for(const st of[.3,-.3,Math.PI-.3,Math.PI+.3]){const rt=Ce*.45,L=new N(new ee(.9,16,10,0,Math.PI*2,0,Math.PI*.5),o);L.rotation.x=Math.PI,L.position.set(Math.sin(st)*rt,-6,Math.cos(st)*rt),i.add(L)}const yt=Vt(16722474,6),X=Vt(2817898,6),et=Vt(16777215,6),pt=new N(new ee(.55,12,12),yt);pt.position.set(Ce+.3,.2,0);const Q=new N(new ee(.55,12,12),X);Q.position.set(-Ce-.3,.2,0);const it=new N(new ee(.45,12,12),et);it.position.set(0,St.bridgeTop+.3,0);const _t=new N(new ee(.45,12,12),et);return _t.position.set(0,St.lowerDomeBottom-1.1,0),i.add(pt,Q,it,_t),i.userData.blinkers=[{mesh:it,mat:et,phase:0,period:1.6},{mesh:_t,mat:et,phase:.8,period:1.6}],i.position.set(0,St.saucerY,St.saucerZ),i.userData.home=i.position.clone(),i.userData.explode=new C(0,32,14),i}function bh(){const i=St.secFrontZ-St.secondaryZ,t=e=>e-St.secondaryZ;return[{z:i,rx:9.3,ry:9.3,cy:0},{z:t(37),rx:11.4,ry:11.4,cy:0},{z:t(33),rx:13,ry:13,cy:0},{z:t(27),rx:14,ry:14,cy:0},{z:t(18),rx:St.secR,ry:St.secR,cy:0},{z:t(8),rx:14,ry:13.9,cy:0},{z:t(-2),rx:13.3,ry:13.2,cy:0},{z:t(-13),rx:12.5,ry:12.3,cy:0},{z:t(-24),rx:11.7,ry:11.5,cy:0},{z:t(-34),rx:11,ry:10.8,cy:0},{z:t(-45),rx:10.1,ry:8,cy:2.2},{z:t(-53),rx:9.5,ry:6.6,cy:3.1},{z:t(-58),rx:8.4,ry:6.2,cy:3.4},{z:t(-61),rx:6.2,ry:5.8,cy:3.4},{z:t(St.secSternZ),rx:4.4,ry:4.8,cy:St.hangarLift}]}const tv=bh();function Qi(i){const t=tv;if(i>t[0].z||i<t.at(-1).z)return null;for(let e=0;e<t.length-1;e++){const n=t[e],s=t[e+1];if(i<=n.z&&i>=s.z){const r=(n.z-i)/(n.z-s.z||1),o=n.rx+(s.rx-n.rx)*r,a=n.ry+(s.ry-n.ry)*r;return{rx:o,ry:a,r:o,cy:n.cy+(s.cy-n.cy)*r}}}return null}function ev(i,t,e=1){const n=Qi(t);if(!n)return 0;const s=(i-n.cy)/n.ry,r=1-s*s;return r<=0?0:Math.max(0,n.rx*Math.sqrt(r)-e)}function pu(i){const t=document.createElement("canvas");t.width=512,t.height=96;const e=t.getContext("2d");e.clearRect(0,0,512,96),e.fillStyle="#1d201f",e.font='700 44px Michroma, "Arial Black", sans-serif',e.textAlign="center",e.textBaseline="middle",e.fillText(i,256,48);const n=new xn(t);return n.colorSpace=be,n}function mu(i="GALILEO",t="NCC-1701/7"){const e=new ie;e.name=`Shuttle ${i}`;const n=un(null),s=en(2764075),r=tr(16770736,2.4),o=7.3,a=2.3,c=new Ci;c.moveTo(-o/2,0),c.lineTo(-o/2,a),c.lineTo(o/2-1.9,a),c.lineTo(o/2-.3,a-.9),c.lineTo(o/2,.55),c.lineTo(o/2-.4,0),c.closePath();const l=new N(new Ri(c,{depth:2.4,bevelEnabled:!0,bevelThickness:.08,bevelSize:.08,bevelSegments:2}),n);l.rotation.y=-Math.PI/2,l.position.x=1.2+.08,l.castShadow=!0,e.add(l);for(const p of[-.55,.55]){const w=new N(new Gt(.9,.55),r);w.position.set(p,a-.55,o/2-.62),w.rotation.x=-.5,w.userData.kind="window",e.add(w)}for(const p of[-1,1]){for(let M=0;M<3;M++){const _=new N(new Gt(.5,.3),r);_.position.set(p*1.29,a-.7,o/2-2.4-M*1.1),_.rotation.y=p*Math.PI/2,_.userData.kind="window",e.add(_)}const w=new N(new Gt(3.2,.6),new An({map:pu(t),transparent:!0,roughness:.6}));w.position.set(p*1.29,.8,-.6),w.rotation.y=p*Math.PI/2,e.add(w)}const u=new N(new Gt(2.4,.45),new An({map:pu(i),transparent:!0,roughness:.6}));u.position.set(0,a+.01,-.8),u.rotation.x=-Math.PI/2,e.add(u);const h=new N(new bt(1.6,1.6,.08),s);h.position.set(0,.95,-o/2-.02),e.add(h);const d=Vt(16722474,4),f=Vt(2817898,4),g=new N(new ee(.08,8,6),d);g.position.set(1.25,a-.1,.5);const x=new N(new ee(.08,8,6),f);x.position.set(-1.25,a-.1,.5),e.add(g,x);const m=Vt(16742970,2.4);for(const p of[-1,1]){const w=new N(new bt(.7,.22,3.4),n);w.position.set(p*1.45,.25,-.2),w.rotation.z=p*.25,e.add(w);const M=new N(new Ot(.42,.42,5.6,20),n);M.rotation.x=Math.PI/2,M.position.set(p*1.75,.05,-.3),M.castShadow=!0,e.add(M);const _=new N(new ee(.42,16,10),n);_.position.set(p*1.75,.05,2.5),e.add(_);const E=new N(new Ot(.3,.3,.2,16),m);E.rotation.x=Math.PI/2,E.position.set(p*1.75,.05,-3.15),E.userData.kind="glow",e.add(E);const b=new N(new bt(.02,.5,5.2),s);b.position.set(p*(1.75+.42),.05,-.3),e.add(b)}for(const p of[-1,1]){const w=new N(new bt(.22,.16,4.6),s);w.position.set(p*.9,-.08,-.2),e.add(w)}return e.userData.length=o,e}const nv=new Wt(16751184),gu=new re,iv=new C,sv=new C(0,1,0);function rv(i,t){const e=new ie;e.name="Hangar";const n=i.rx-.2,s=i.ry-.2,r=i.z,o=i.cy,a=26,c=r+a,l=7.4,u=o-s+.5,h=o+s-.6,d=_e(12170406);d.emissiveIntensity=.08;const f=_e(9341566);f.emissiveIntensity=.05;const g=en(2764075),x=Vt(16773590,2.6),m=Vt(16766570,.8),p=tr(16770736,1.8),w=new N(new Gt(l*2,a),f);w.rotation.x=-Math.PI/2,w.position.set(0,u,r+a/2),w.receiveShadow=!0,e.add(w);const M=new N(new Gt(l*2,a),d);M.rotation.x=Math.PI/2,M.position.set(0,h,r+a/2),e.add(M);for(const U of[-1,1]){const G=new N(new Gt(a,h-u),d);G.rotation.y=-U*Math.PI/2,G.position.set(U*l,(u+h)/2,r+a/2),e.add(G);for(let k=0;k<6;k++){const Z=new N(new Gt(2.2,.9),p);Z.rotation.y=-U*Math.PI/2,Z.position.set(U*(l-.05),h-1.6,r+5+k*3.6),e.add(Z)}for(let k=0;k<=6;k++){const Z=new N(new bt(.3,h-u,.4),g);Z.position.set(U*(l-.15),(u+h)/2,r+2+k*4),e.add(Z)}}const _=new N(new Gt(l*2,h-u),d);_.rotation.y=Math.PI,_.position.set(0,(u+h)/2,c),e.add(_);const E=new N(new bt(5.5,4.2,.2),g);E.position.set(0,u+2.1,c-.15),e.add(E);const b=new N(new Gt(6,1.2),Vt(10475775,1.4));b.rotation.y=Math.PI,b.position.set(0,h-1.5,c-.1),e.add(b);for(const U of[-4.5,0,4.5]){const G=new N(new Gt(.5,a-3),x);G.rotation.x=Math.PI/2,G.position.set(U,h-.05,r+a/2),G.userData.kind="glow",e.add(G)}const v=new N(new Gt(.35,a-2),m);v.rotation.x=-Math.PI/2,v.position.set(0,u+.02,r+a/2),e.add(v);const A=r+9,S=new N(new Pi(4.2,4.6,64),m);S.rotation.x=-Math.PI/2,S.position.set(0,u+.03,A),e.add(S);const y=new N(new Ot(4.2,4.2,.12,64),_e(8157293));y.position.set(0,u+.06,A),e.add(y);for(let U=0;U<8;U++){const G=new N(new ee(.16,8,6),Vt(16751162,2.5));G.position.set(-l+.6+U*2,u+.15,r+1.2),G.userData.kind="glow",e.add(G)}const R=new Tn(16769728,0,40,1.6);R.position.set(0,h-1,r+a*.4),e.add(R);const W=en(3159098,{roughness:.6,metalness:.3}),q=new N(new Pe(1,.32,10,80),t);q.scale.set(n+.25,s+.25,1),q.position.set(0,o,r),e.add(q);const z=[];for(const U of[-1,1]){const G=new N(new ee(1,28,14,U<0?-Math.PI/2:Math.PI/2,Math.PI,0,Math.PI*.5),W);G.rotation.x=-Math.PI/2,G.scale.set(n,s,3.4);const k=new ie;k.add(G),k.position.set(0,o,r),k.userData.side=U,e.add(k),z.push(k);for(let Z=-2;Z<=2;Z++){const P=Z*2,mt=n*Math.sqrt(Math.max(0,1-(P/s)**2))*.9,ot=new N(new bt(mt/2,.2,.4),en(4869975));ot.position.set(U*mt/4,P,-3*Math.sqrt(Math.max(.05,1-(P/s)**2))),k.add(ot)}}const O=mu("GALILEO","NCC-1701/7");O.position.set(0,u+.12,A),O.rotation.y=Math.PI,e.add(O);const B=mu("COLUMBUS","NCC-1701/2");B.position.set(-4.3,u+.12,c-6),B.rotation.y=Math.PI*.86,e.add(B),xs(e,[{x:-5.2,y:u+.12,z:A+5,rotY:Math.PI*.75,shirt:"red",pose:"stand",station:{x:-l+.9,z:c-3,rotY:Math.PI/2}},{x:5.6,y:u+.12,z:A-2,rotY:-Math.PI*.6,shirt:"red",pose:"stand",station:{x:l-.9,z:c-3,rotY:-Math.PI/2}}]);const j=new gs([new C(0,u+.12,A),new C(0,u+1.2,r+3),new C(0,o-.5,r-8),new C(0,o+6,r-40),new C(0,o+22,r-120),new C(0,o+48,r-300)],!1,"centripetal"),H=O.position.clone(),Y=new ie;Y.visible=!1;const yt=new hn({color:16747068,transparent:!0,opacity:0,blending:ve,depthWrite:!1,side:Re}),X=new N(new io(2.4,7.5,24,1,!0),yt);X.rotation.x=-Math.PI/2,X.position.set(0,.9,2.6),Y.add(X);const et=new N(new io(1.6,9.5,20,1,!0),new hn({color:16773572,transparent:!0,opacity:0,blending:ve,depthWrite:!1,side:Re}));et.rotation.x=-Math.PI/2,et.position.set(0,.9,1.8),Y.add(et);const pt=new tn(new je({map:ui("rgba(255,150,70,1)"),blending:ve,depthWrite:!1,transparent:!0,opacity:0}));pt.scale.setScalar(14),pt.position.set(0,.9,4.5),Y.add(pt);const Q=new hn({color:16742960,transparent:!0,opacity:0,blending:ve,depthWrite:!1}),it=new N(new Ot(.2,1.8,46,12,1,!0),Q);it.rotation.x=Math.PI/2,it.position.set(0,.9,-24),Y.add(it),O.add(Y);const _t=[yt,et.material,pt.material,Q];let st=0;const rt={open:0,target:0,launch:-1,launchDur:28,mode:"away",path:null,atmo:null},L=U=>U*U*(3-2*U);return e.userData={doors:z,shuttle:O,bayLight:R,get isOpen(){return rt.target>.5},get launching(){return rt.launch>=0},setOpen(U){rt.target=U?1:0},launch(){rt.launch>=0||(rt.target=1,rt.launch=0,rt.mode="away",rt.path=j,rt.launchDur=28)},launchTo(U,G,k=46){if(rt.launch>=0)return;const Z=new C(0,o-.5,r-8),P=new C(0,o+4,r-60),mt=U.clone().sub(P).normalize(),ot=U.clone().addScaledVector(mt,-G*1.28),vt=U.clone().addScaledVector(mt,-G*1.02),lt=new C().crossVectors(mt,new C(0,1,0)).normalize(),V=P.clone().lerp(ot,.45).addScaledVector(lt,G*.09).add(new C(0,G*.05,0));rt.path=new gs([new C(0,u+.12,A),new C(0,u+1.2,r+3),Z,P,V,ot,vt],!1,"centripetal"),rt.path.arcLengthDivisions=600;const nt=rt.path.getLengths(600),D=nt[nt.length-1];let T=0;const K=rt.path.points;for(let ht=0;ht<3;ht++)T+=K[ht].distanceTo(K[ht+1]);rt.taxiFrac=Math.min(.3,T/D),rt.atmo={center:U.clone(),radius:G},rt.mode="descent",rt.launchDur=k,rt.target=1,rt.launch=0},get descending(){return rt.launch>=0&&rt.mode==="descent"},get heat(){return st},get progress(){return rt.launch},get pathPoints(){return(rt.path||j).points.map(U=>U.toArray().map(G=>Math.round(G)))},shuttleWorld(U=new C){return O.getWorldPosition(U)},shuttleHeading(U=new C){return O.getWorldDirection(U)},recall(){rt.launch=-1,rt.mode="away",st=0,Y.visible=!1,O.position.copy(H),O.rotation.set(0,Math.PI,0),O.visible=!0},animate(U){rt.open+=(rt.target-rt.open)*Math.min(1,U*1.4);const G=L(Math.min(1,Math.max(0,rt.open)));for(const k of z)k.position.x=k.userData.side*n*.92*G,k.scale.x=1-.86*G,k.position.z=r+1.2*G;if(R.intensity=30*G,rt.launch>=0){if(rt.open<.85&&rt.launch<.02)return;rt.launch+=U/rt.launchDur;const k=Math.min(1,rt.launch),Z=rt.path||j;if(O.visible=!0,rt.mode==="descent"){const P=rt.taxiFrac??.08,mt=k<.22?L(k/.22)*P:P+Math.pow((k-.22)/.78,1.3)*(1-P),ot=Z.getPointAt(Math.min(1,mt)),vt=Z.getTangentAt(Math.min(.999,mt));O.position.copy(ot),gu.lookAt(vt,iv,sv),O.quaternion.setFromRotationMatrix(gu),O.rotateZ(Math.sin(k*9)*.05*Math.min(1,st*3));const lt=ot.distanceTo(rt.atmo.center),V=rt.atmo.radius,nt=Math.min(1,Math.max(0,(V*1.3-lt)/(V*.24)));st+=(nt-st)*Math.min(1,U*2);const D=.82+.18*Math.sin(performance.now()*.031)*Math.sin(performance.now()*.0173);Y.visible=st>.01,yt.opacity=st*.55*D,et.material.opacity=st*st*.5*D,pt.material.opacity=st*.7*D,Q.opacity=st*.4*D,pt.scale.setScalar(14+st*14),it.scale.y=.4+st*1.6;const T=1-st*.35;O.traverse(K=>{K.isMesh&&K.material?.color&&!_t.includes(K.material)&&K.userData.kind!=="glow"&&(K.userData.baseColor||(K.userData.baseColor=K.material.color.clone()),K.material.color.copy(K.userData.baseColor).multiplyScalar(T).lerp(nv,st*.45))}),k>=1&&(O.visible=!1,Y.visible=!1,rt.launch=-1)}else{const P=k<.35?L(k/.35)*.3:.3+Math.pow((k-.35)/.65,1.6)*.7,mt=Z.getPoint(P),ot=Z.getTangent(Math.min(.999,P));O.position.copy(mt),O.rotation.set(0,Math.PI,0),O.rotation.x=-Math.atan2(ot.y,Math.abs(ot.z))*.6,k>=1&&(O.visible=!1,rt.launch=-1)}}}},e}function ov({centerZ:i=-12,floorY:t=2.2}={}){const e=new ie;e.name="EngineeringInterior";const n=13.5,s=7.4,r=24,o=(O,B=.04)=>{const j=_e(O);return j.emissiveIntensity=B,j.envMapIntensity=.12,j.roughness=.85,j},a=o(10328722,.04),c=o(3816512,.03),l=o(9315878,.08),u=o(7106419,.05),h=o(4935509,.04),d=i+r/2,f=i-r/2,g=new N(new Gt(n,r),c);g.rotation.x=-Math.PI/2,g.position.set(0,t,i),e.add(g);const x=new N(new Gt(n,r),a);x.rotation.x=Math.PI/2,x.position.set(0,t+s,i),e.add(x);for(const O of[-1,1]){const B=new N(new Gt(r,s),a);B.rotation.y=-O*Math.PI/2,B.position.set(O*n/2,t+s/2,i),e.add(B);for(let H=0;H<4;H++){const Y=d-3-H*5,yt=new N(new bt(.6,1.1,2.6),o(1711392,.02));yt.position.set(O*(n/2-.35),t+.55,Y),e.add(yt);const X=new N(new Gt(2.4,1.2),Vt([4182271,16757575,8257434,16734810][H],.9));X.rotation.y=-O*Math.PI/2,X.position.set(O*(n/2-.08),t+2.2,Y),e.add(X)}const j=new N(new bt(.1,.35,r-1),l);j.position.set(O*(n/2-.06),t+3.6,i),e.add(j)}const m=new N(new Gt(n,s),a);m.rotation.y=Math.PI,m.position.set(0,t+s/2,d),e.add(m);const p=-3.5,w=[];for(const O of[-1,1]){const B=new N(new bt(1,2.6,.12),l);B.position.set(p+O*.5,t+1.3,d-.1),B.userData.homeX=p+O*.5,B.userData.side=O,e.add(B),w.push(B)}e.userData.setDoor=O=>{for(const B of w)B.position.x=B.userData.homeX+B.userData.side*1*O},e.userData.door={x:p,y:t,z:d},xs(e,[{x:1.6,y:t,z:i+3.6,rotY:Math.PI*.9,shirt:"red",pose:"stand",station:{x:n/2-1.2,z:d-8,rotY:Math.PI/2}},{x:-n/2+1.6,y:t,z:d-8,rotY:-Math.PI/2,shirt:"red",pose:"stand",station:{x:-n/2+1.2,z:d-13,rotY:-Math.PI/2}},{x:3,y:t,z:f+7,rotY:Math.PI,shirt:"gold",pose:"stand",station:{x:.9,z:i+3.4,rotY:Math.PI}}]);for(let O=0;O<4;O++){const B=new N(new Gt(.6,.25),Vt(16757575,.25)),j=O%2===0?-1:1;B.rotation.y=-j*Math.PI/2,B.position.set(j*(n/2-.06),t+s-1,d-5-Math.floor(O/2)*10),B.userData.kind="alertlight",e.add(B)}const M=new ie,_=f+3.2;for(let O=0;O<=12;O++){const B=new N(new bt(.12,s-.4,.12),u);B.position.set(-n/2+.8+O*((n-1.6)/12),t+s/2,_),M.add(B)}for(let O=0;O<=5;O++){const B=new N(new bt(n-1.4,.1,.1),u);B.position.set(0,t+.6+O*((s-1.2)/5),_),M.add(B)}e.add(M);const E=new N(new Gt(n,s),o(2830134,.02));E.position.set(0,t+s/2,f),e.add(E);const b=Vt(16751178,2.6);for(let O=0;O<5;O++){const B=new N(new Ot(.42,.42,s-1.2,16),h);B.position.set(-4.4+O*2.2,t+s/2,f+1.6),e.add(B);const j=new N(new Pe(.55,.08,8,24),b);j.rotation.x=Math.PI/2,j.position.set(-4.4+O*2.2,t+1.8+O%2*2.4,f+1.6),j.userData.kind="glow",e.add(j)}const v=new N(new Gt(n-2,s-2),Vt(16742954,.55));v.position.set(0,t+s/2,f+.4),v.userData.kind="glow",e.add(v);for(const O of[-2.2,2.2]){const B=new N(new Ot(.5,.5,r-2,20),h);B.rotation.x=Math.PI/2,B.position.set(O,t+s-.9,i),e.add(B);for(let j=0;j<6;j++){const H=new N(new Pe(.56,.08,8,24),Vt(8050687,1.6));H.rotation.x=0,H.position.set(O,t+s-.9,d-2.5-j*3.6),H.userData.kind="glow",e.add(H)}}const A=new N(new Ot(1.5,1.7,.9,32),o(1711392,.02));A.position.set(0,t+.45,i+2),e.add(A);const S=new N(new Ot(.7,.7,.5,24),o(2764081,.02));S.position.set(0,t+1.15,i+2),e.add(S);const y=new N(new Ot(0,.42,.8,6),Vt(16734880,2.4));y.position.set(0,t+1.7,i+2),y.userData.kind="glow",e.add(y);const R=new N(new Gt(4.2,1.6),Vt(10475775,1.1));R.rotation.y=Math.PI,R.position.set(3.2,t+3.2,d-.15),R.userData.kind="glow",e.add(R);const W=new N(new bt(n-2,.08,.08),l);W.position.set(0,t+1.05,f+5.2),e.add(W);for(let O=0;O<6;O++){const B=new N(new Ot(.05,.05,1,8),l);B.position.set(-n/2+1.2+O*((n-2.4)/5),t+.55,f+5.2),e.add(B)}const q=new Tn(16766896,18,30,1.6);q.position.set(0,t+s-1.5,i),e.add(q);const z=new Tn(16747066,22,26,1.6);return z.position.set(0,t+s/2,f+2.6),e.add(z),e.userData.floorY=t,e.userData.centerZ=i,e}const av=St.secR,cv=bh;function lv(){const i=new ie;i.name="SecondaryHull";const t=Ic();t.repeat.set(6,4);const e=un(t),n=un(null),s=en(jn.dark),r=Vx(),o=tr(16767114,2.8),a=cv(),c=a.length-3,l=a.slice(0,c+1).map(it=>Mh(new C(0,it.cy,it.z),vh,yh,it.rx,it.ry,72)),u=new N(Pc(l,{vScale:4}),e);u.castShadow=!0,u.receiveShadow=!0,i.add(u);const h=a[0],d=new N(oo(l[0],new C(0,h.cy,h.z),!1),n);i.add(d);const f=new N(new Pe(h.rx-.3,.35,10,72),s);f.position.set(0,h.cy,h.z+.1),i.add(f);const g=new N(new Ot(1.6,3.2,3,40),r);g.rotation.x=Math.PI/2,g.position.set(0,h.cy,h.z+1.5),i.add(g);const x=new N(new Pe(3.4,.5,12,48),r);x.position.set(0,h.cy,h.z+.4),i.add(x);const m=St.dishR,p=3.2,w=[];for(let it=0;it<=28;it++){const _t=it/28;w.push(new ft(Math.max(.01,m*_t),p*_t*_t))}const M=h.z+3,_=new N(new Qs(w,80),r);_.rotation.x=Math.PI/2,_.position.set(0,h.cy,M),_.castShadow=!0,i.add(_);const E=new N(new Pe(m,.26,10,80),s);E.position.set(0,h.cy,M+p),i.add(E);const b=St.dishTipZ-St.secondaryZ-M,v=new N(new Ot(.16,.42,b,16),r);v.rotation.x=Math.PI/2,v.position.set(0,h.cy,M+b/2),i.add(v);const A=new N(new ee(.5,16,12),Vt(16761466,4));A.position.set(0,h.cy,M+b),A.userData.kind="glow",i.add(A);const S=new N(new ee(3,24,16),Vt(9098495,2.2));S.scale.set(1,1,.35),S.position.set(0,h.cy,M+.8),S.userData.kind="glow",i.add(S);const y=rv(a[c],n);i.add(y),i.userData.hangar=y;const R=ov({centerZ:St.pylon.rootZ-St.secondaryZ+14,floorY:2.4});i.add(R),i.userData.engineering=R;const W=Vt(10477823,2),q=a[c];for(const it of[-1,1]){const _t=new N(new ee(.3,12,8),W);_t.position.set(it*(q.rx+.3),q.cy-q.ry*.35,q.z-.6),_t.userData.kind="glow",i.add(_t)}const z=_n(51),O=new Gt(.85,.48);for(const it of[4.6,-2.2])for(let _t=34;_t>-40;_t-=4.1){if(z()<.35)continue;const st=Qi(_t);if(st)for(const rt of[-1,1]){const L=1-((it-st.cy)/st.ry)**2;if(L<=.05)continue;const U=st.rx*Math.sqrt(L)+.06;if(U<3)continue;const G=new N(O,o);G.position.set(rt*U,it,_t),G.lookAt(rt*U*2,it*2-st.cy,_t),G.userData.kind="window",i.add(G)}}const B=.27,j=20,H=Qi(j).rx+.1;for(const it of[-1,1]){const _t=kx(it>0),st=new Ot(H,H,24,32,1,!0,(it>0?Math.PI/2:-Math.PI/2)-B,B*2),rt=new N(st,Hx(_t));rt.rotation.x=Math.PI/2,rt.position.set(0,1,j),rt.userData.kind="decal",i.add(rt)}const Y=en(10234402,{roughness:.5,metalness:.1}),yt=en(1776924,{roughness:.5,metalness:.1}),X=38,et=Qi(X).rx;for(const it of[-1,1])for(const[_t,st,rt]of[[1.4,yt,.22],[.9,Y,.5],[.4,yt,.22]]){const L=4+_t,U=Math.sqrt(Math.max(0,et*et-L*L))+.05,G=new N(new Gt(10,rt),st);G.position.set(it*U,L,X),G.lookAt(it*U*2,L*2,X),i.add(G)}const pt=new N(new bt(2.4,.6,50),n);pt.position.set(0,av-.6,6),pt.rotation.x=.03,i.add(pt);const Q=new N(new Pe(Qi(36).rx+.04,.16,8,96),s);Q.position.set(0,0,36),i.add(Q);for(const it of[-1,1]){const st=Qi(-20),rt=new N(new bt(.3,3.2,3.2),s);rt.position.set(it*(st.rx-.05)*Math.cos(.45),-st.ry*Math.sin(.45)+st.cy,-20),rt.rotation.z=it*.45,i.add(rt)}return i.position.set(0,St.secondaryY,St.secondaryZ),i.userData.home=i.position.clone(),i.userData.explode=new C(0,-30,-16),i}function uv(){const i=new ie;i.name="Dorsal";const t=St.neck,e=un(null),n=tr(16767114,2.6),s=new Ci;s.moveTo(-46.4,t.topYLead+1.2),s.lineTo(-16.2,t.topYTrail+1.2),s.lineTo(3.1,t.botY),s.lineTo(-24.5,t.botY),s.closePath();const r=new Ri(s,{depth:t.thick,bevelEnabled:!0,bevelThickness:.9,bevelSize:.9,bevelSegments:5}),o=new N(r,e);o.rotation.y=Math.PI/2,o.position.x=-6.2/2,o.castShadow=!0,o.receiveShadow=!0,i.add(o);const a=new C(0,(t.topYLead+t.topYTrail)/2,(t.topZ[0]+t.topZ[1])/2),c=new C(0,t.botY,(t.botZ[0]+t.botZ[1])/2),l=new Gt(1.2,.48),u=_n(77);for(let g=0;g<4;g++){const x=.2+g*.2,m=a.clone().lerp(c,x);for(const p of[-1,1])for(const w of[-7,-3.5,0,3.5,7]){if(u()<.5)continue;const M=new N(l,n);M.position.set(p*(t.thick/2+.95),m.y,m.z+w),M.rotation.y=p*Math.PI/2,M.userData.kind="window",i.add(M)}}const h=en(jn.dark),d=Math.hypot(t.topZ[1]-t.botZ[1],t.topYLead-t.botY)*.8,f=new N(new bt(.6,d,.35),h);return f.position.set(0,(t.topYLead+t.botY)/2,(t.topZ[1]+t.botZ[1])/2+.7),f.rotation.x=-Math.atan2(t.topZ[1]-t.botZ[1],t.topYLead-t.botY),i.add(f),i.userData.home=new C,i.userData.explode=new C(0,2,0),i}function _u(i){const t=new ie;t.name=i>0?"PylonStarboard":"PylonPort";const e=St.pylon,n=un(null),s=new C(i*e.rootX,e.rootY,e.rootZ),r=new C(i*e.tipX,e.tipY,e.tipZ),o=r.clone().sub(s),a=new C().crossVectors(Or,o).normalize(),c=[oa(s,Or,a,e.chordRoot,e.thick,e.thick*.48,40),oa(s.clone().lerp(r,.5),Or,a,(e.chordRoot+e.chordTip)/2,e.thick,e.thick*.48,40),oa(r,Or,a,e.chordTip,e.thick*.9,e.thick*.44,40)],l=new N(Pc(c),n);l.castShadow=!0,l.receiveShadow=!0,t.add(l),t.add(new N(oo(c[0],s),n)),t.add(new N(oo(c[2],r,!0),n));const u=new N(new bt(e.thick*1.6,3.2,e.chordTip+8),n);u.position.set(i*(e.tipX+2.2),e.tipY-1.2,e.tipZ+3.5),u.rotation.z=i*.55,t.add(u);const h=new N(new bt(e.thick*1.8,2.6,e.chordRoot+3),n);return h.position.set(i*(e.rootX+.6),e.rootY+1.8,e.rootZ),h.rotation.z=i*.5,t.add(h),t.userData.home=new C,t.userData.explode=new C(i*14,8,0),t}const Ee=St.nacelleR,Us=St.nacelleRY;function hv(){const i=St.nacelleL*.5,t=-i;return[{z:i-7.6,r:Ee*.94},{z:i-9.6,r:Ee},{z:i-17,r:Ee*1.01},{z:-30,r:Ee*1.01},{z:t+28,r:Ee*.99},{z:t+16,r:Ee*.96},{z:t+9,r:Ee*.9},{z:t+4,r:Ee*.78},{z:t+1.5,r:Ee*.62}]}function xu(i,t){const e=new ie;e.name=i>0?"NacelleStarboard":"NacellePort";const n=en(jn.dark),s=un(null),r=hv(),o=-154.5*.5,a=r.map(O=>Mh(new C(0,0,O.z),vh,yh,O.r,O.r*Us,64)),c=new N(Pc(a,{vScale:6}),t);c.castShadow=!0,c.receiveShadow=!0,e.add(c);const l=r.at(-1),u=new N(oo(a.at(-1),new C(0,0,l.z),!1),n);e.add(u);const h=Vt(16751162,2.6),d=Vt(16761466,3),f=new N(new Pe(Ee*.7,.34,10,48),s);f.position.z=l.z-.2,e.add(f);const g=new N(new Pe(Ee*.5,.22,10,48),h);g.position.z=l.z-.6,g.userData.kind="glow",e.add(g);const x=new N(new ee(Ee*.38,32,20),d);x.position.z=l.z+.6,x.userData.kind="glow",e.add(x);const m=new N(new mo(Ee*.6,48),n);m.position.z=l.z+.05,m.rotation.y=Math.PI,e.add(m);for(let O=0;O<8;O++){const B=O/8*Math.PI*2,j=new N(new bt(.3,2.2,1.2),s);j.position.set(Math.cos(B)*Ee*.6,Math.sin(B)*Ee*.6,l.z-.6),j.rotation.z=B+Math.PI/2,e.add(j)}const p=r[0],w=Ee*.975,M=new N(new Pe(w-.15,.55,12,64),n);M.position.z=p.z+.1,M.scale.y=Us,e.add(M);const _=new N(new ee(w,64,40,0,Math.PI*2,0,Math.PI*.5),zx());_.rotation.x=Math.PI/2,_.scale.set(1,1,Us),_.position.z=p.z+.2,_.userData.kind="bussard",e.add(_);const E=new ie;E.position.z=p.z+2.6;const b=[16765562,16742954,16757575,16731418,16769162];for(let O=0;O<5;O++){const B=new N(new Gt(1.5,5.4),Vt(b[O],3.4));B.position.y=3.2;const j=new ie;j.rotation.z=O/5*Math.PI*2,j.add(B),E.add(j)}const v=new N(new ee(2.3,24,16),Vt(16771520,5.5));v.userData.kind="glow",E.add(v),E.userData.kind="fan",e.add(E),e.userData.fan=E,e.userData.fanDir=i;const A=new N(new bt(2.4,.8,118),s);A.position.set(0,Ee*Us-.1,2),A.castShadow=!0,e.add(A);const S=o+24,y=en(3817020,{roughness:.6}),R=Vt(8373247,.9);for(const O of[-1,1]){const B=new N(new bt(.5,4.6,28),n);B.position.set(O*(Ee-.05),.5,S),e.add(B);for(let j=0;j<16;j++){const H=new N(new bt(.7,4.2,.36),y);if(H.position.set(O*(Ee+.05),.5,S-13.5+j*1.8),e.add(H),j%2===0){const Y=new N(new Gt(.1,3.9),R);Y.position.set(O*(Ee+.42),.5,S-13.5+j*1.8+.9),Y.rotation.y=O*Math.PI/2,Y.userData.kind="glow",e.add(Y)}}}for(const O of[-1,1]){const B=new N(new bt(.4,1.6,9),n);B.position.set(O*(Ee-.05),2.6,p.z-16),e.add(B)}const W=en(10234402,{roughness:.5,metalness:.1}),q=en(1776924,{roughness:.5,metalness:.1});for(const[O,B,j]of[[-3.2,q,.35],[-4.6,W,.6],[-6.2,q,.35]]){const H=new N(new Pe(Ee*1.005,j*.5,6,96),B);H.position.z=p.z+O,H.scale.y=Us,e.add(H)}const z=Vt(7321855,.35);for(const O of[-1,1]){const B=new N(new Gt(.16,96),z);B.position.set(O*(Ee*1.005),-2.4,4),B.rotation.y=O*Math.PI/2,B.rotation.z=Math.PI/2,B.userData.kind="warpstrip",e.add(B)}return e.userData.warpStrip=z,e.position.set(i*St.nacelleX,St.nacelleY,St.nacelleZ),e.userData.home=e.position.clone(),e.userData.explode=new C(i*34,16,-8),e}function dv(){const i=new ie;i.name="Nacelles";const t=Ic();t.repeat.set(4,6);const e=un(t);return i.add(xu(-1,e)),i.add(xu(1,e)),i}const ts=14275263,fv=15394524;function ua(i,t){const e=document.createElement("canvas");e.width=512,e.height=128;const n=e.getContext("2d");n.fillStyle="rgba(6,8,12,0.6)",n.fillRect(8,24,496,80),n.strokeStyle=t,n.lineWidth=2,n.strokeRect(8,24,496,80),n.fillStyle="#e8eef4",n.font="30px 'Share Tech Mono', monospace",n.textBaseline="middle",n.fillText(i,24,64);const s=new xn(e),r=new tn(new je({map:s,transparent:!0,depthTest:!1}));return r.scale.set(20,5,1),r.userData.kind="label",r}class pv{constructor(t=fv){this.items=[],this.mat=_e(t),this.mat.emissiveIntensity=.1}add(t,e,n,s,r,o,a=0){this.items.push({cx:t,cy:e,cz:n,sx:s,sy:r,sz:o,rotY:a})}build(){const t=new bt(1,1,1),e=new zg(t,this.mat,this.items.length),n=new De,s=new re;return this.items.forEach((r,o)=>{n.position.set(r.cx,r.cy,r.cz),n.rotation.set(0,r.rotY,0),n.scale.set(r.sx,r.sy,r.sz),n.updateMatrix(),s.copy(n.matrix),e.setMatrixAt(o,s)}),e.instanceMatrix.needsUpdate=!0,e}}const mv=[{y:13.9,r:7.3},{y:11.4,r:10.5},{y:9.2,r:19},{y:7.2,r:23},{y:5.4,r:31},{y:3.6,r:52},{y:1.8,r:62},{y:0,r:62},{y:-1.8,r:61},{y:-3.6,r:50},{y:-5.3,r:36,inner:26}];function Xs(i,t){const e=new Wt(i);return e.offsetHSL(0,0,t),e.getHex()}function Ns(i,t,e,n,s,r){const o=new N(new Pi(t,e,128),_e(r));o.rotation.x=-Math.PI/2,o.position.set(0,n,s),i.add(o)}function gv(i,t,e,n,s){const r=St.saucerZ,o=_n(n),a=Vs[t.role],c=1.5,l=e.y-.55;if(e.inner){const M=new N(new Pi(e.inner,e.r,128),_e(Xs(a,-.08)));M.rotation.x=-Math.PI/2,M.position.set(0,l-.1,r),i.add(M)}else{const M=new N(new Ot(e.r,e.r,.18,128),_e(Xs(a,-.08)));M.position.set(0,l-.1,r),i.add(M)}if(e.r<20){if(t.id===1){Ns(i,3,5.2,l+.05,r,ts);for(let b=0;b<10;b++){const v=b/10*Math.PI*2+.63;if(b===5)continue;const A=new N(new bt(1.4,.9,.7),Vt(7000575,.9));A.position.set(Math.sin(v)*5.3,l+.55,r+Math.cos(v)*5.3),A.lookAt(0,l+.55,r),i.add(A)}const M=new N(new bt(.9,.9,.9),_e(13214247));M.position.set(0,l+.55,r-.6),i.add(M);const _=new N(new bt(2.8,.8,.9),Vt(10475775,1.2));_.position.set(0,l+.5,r+1.6),i.add(_);const E=new N(new bt(3.8,1.8,.2),Vt(10475775,1.8));E.position.set(0,l+1.3,r+5.6),i.add(E),s.add(0,l+c/2,r-5.9,2.6,c,.2)}else{const M=t.id===2?6:8;for(let E=0;E<M;E++){const b=E/M*Math.PI*2+.2;s.add(Math.sin(b)*e.r*.6,l+c/2,r+Math.cos(b)*e.r*.6,.18,c,e.r*.7,b)}Ns(i,e.r*.25,e.r*.35,l+.05,r,ts);const _=new N(new Ot(1.3,1.3,c,16),_e(8945772));_.position.set(0,l+c/2,r-6.5),i.add(_)}return}const u=e.r,h=e.inner?e.inner+.6:u*.4,d=[h,h+2.4],f=[u*.85,u*.85+2.2];Ns(i,d[0],d[1],l+.05,r,ts),Ns(i,f[0],f[1],l+.05,r,ts);for(let M=0;M<8;M++){const _=M/8*Math.PI*2,E=f[0]-d[1],b=(f[0]+d[1])/2,v=new N(new bt(2.2,.08,E),_e(ts));v.position.set(Math.sin(_)*b,l+.05,r+Math.cos(_)*b),v.rotation.y=_,i.add(v)}const g=(M,_,E)=>{for(let b=0;b<_;b++){if(b%E===0)continue;const v=b/_*Math.PI*2,A=(b+1)/_*Math.PI*2,S=(v+A)/2,y=M*(A-v)*.92;s.add(Math.sin(S)*M,l+c/2,r+Math.cos(S)*M,y,c,.16,S)}};e.inner||g(d[0]-.1,Math.round(u*.5),5),g(d[1]+.1,Math.round(u*.55),4),g(f[0]-.1,Math.round(u),6),g(f[1]+.1,Math.round(u*1.1),5);const x=[d[1]+.2,f[0]-.2],m=[f[1]+.2,u*.985],p=(M,_)=>{for(let E=0;E<_;E++){const b=E/_*Math.PI*2+.07,v=(M[0]+M[1])/2,A=M[1]-M[0];if(s.add(Math.sin(b)*v,l+c/2,r+Math.cos(b)*v,.16,c,A,b),o()<.35){const S=M[0]+A*(.35+o()*.3),y=b+Math.PI*2/_/2;s.add(Math.sin(y)*S,l+c/2,r+Math.cos(y)*S,S*Math.PI*2/_*.9,c,.14,y)}}};p(x,Math.max(12,Math.round(u*.32))),p(m,Math.max(16,Math.round(u*.6)));const w=Math.round(u*.3);for(let M=0;M<w;M++){if(o()<.4)continue;const _=M/w*Math.PI*2+.07+Math.PI*2/w/2,E=o()<.6?x:m,b=(E[0]+E[1])/2,v=E[1]-E[0],A=b*Math.PI*2/(E===x?Math.max(12,Math.round(u*.32)):Math.max(16,Math.round(u*.6)))*.9,S=new N(new bt(A,.06,v*.92),_e(Xs(a,o()*.16-.04)));S.position.set(Math.sin(_)*b,l+.06,r+Math.cos(_)*b),S.rotation.y=_,i.add(S)}if(t.id===3)for(const M of[-4.2,4.2]){const _=new N(new Ot(.9,.9,14,16),Vt(16738874,1.2));_.rotation.x=Math.PI/2,_.position.set(M,l+.9,r+u*.8),i.add(_)}if(t.id===6)for(const M of[-8,8]){const _=new N(new bt(6,1.4,12),Vt(16747066,1.2));_.position.set(M,l+.7,r-u*.86),i.add(_)}if(t.id===7&&Ns(i,2.2,4.6,l+.08,r-4,13214247),t.id===8){const M=new N(new Ot(3.4,3.4,3,32),Vt(7000575,1.1));M.position.set(0,l+1.5,r-10),i.add(M);const _=new N(new bt(16,.1,10),_e(5937738));_.position.set(24,l+.08,r+26),i.add(_)}if(t.id===11)for(const[M,_]of[[-18,26],[18,26],[-18,-26],[18,-26]]){const E=new N(new Ot(1.6,1.6,1.2,20),Vt(16734810,1));E.position.set(M,l+.6,r+_),i.add(E)}}const ri=[];function _v(){const i=new ie;i.name="Interiors",i.visible=!1;const t=new pv;ri.length=0,ra.filter(S=>S.hull==="saucer").forEach((S,y)=>{const R=mv[y];gv(i,S,R,100+y,t);const W=ua(`DECK ${S.id}  ${S.name}`,"#d4b45a");W.position.set(-R.r*.35-12,R.y+2.2,St.saucerZ+R.r*.3),W.userData.deck=S.id,i.add(W),ri.push({id:S.id,name:S.name,y:R.y,z:St.saucerZ,r:R.r})});const n=St.neck,s=new C(0,(n.topYLead+n.topYTrail)/2,(n.topZ[0]+n.topZ[1])/2),r=new C(0,n.botY,(n.botZ[0]+n.botZ[1])/2);ra.filter(S=>S.hull==="dorsal").forEach((S,y)=>{const R=.25+y*.25,W=s.clone().lerp(r,R),q=_e(Vs[S.role]),z=new N(new bt(n.thick-1,.2,24),q);z.position.copy(W),i.add(z);for(const B of[-8,-3,3,8])t.add(0,W.y+.8,W.z+B,n.thick-1.2,1.5,.14);const O=ua(`DECK ${S.id}  ${S.name}`,"#d4b45a");O.position.set(-14,W.y+1.5,W.z),O.userData.deck=S.id,i.add(O),ri.push({id:S.id,name:S.name,y:W.y,z:W.z,r:20})});const a=_e(8945772),c=new N(new Ot(1.2,1.2,19,16),a);c.position.set(0,.2,St.saucerZ-7),i.add(c);const l=s.distanceTo(r),u=new N(new Ot(1.1,1.1,l,16),a);u.position.copy(s).lerp(r,.5),u.rotation.x=-Math.atan2(r.z-s.z,r.y-s.y),i.add(u);for(const S of[-8,8]){const y=new N(new Ot(.5,.5,l*.8,10),Vt(16756838,.9));y.position.copy(u.position).add(new C(0,0,S)),y.rotation.x=u.rotation.x,i.add(y)}const h=St.secondaryY,d=St.secSternZ+26,f=ra.filter(S=>S.hull==="secondary"),g=St.secondaryZ;f.forEach((S,y)=>{const R=h+12.6-y*2.9,W=R-h,q=y>=1&&y<=3,z=Vs[S.role],O=_e(Xs(z,-.08)),B=_n(300+y),j=3;let H=null,Y=null;for(let et=St.secFrontZ-2;et>St.secSternZ+2&&!(q&&et<d);et-=j){const pt=ev(W-.55,et-g,1.1);if(pt<1.6)continue;H===null&&(H=et+j/2),Y=et-j/2;const Q=new N(new bt(pt*2,.18,j),O);if(Q.position.set(0,R-.55,et),i.add(Q),Math.round((St.secFrontZ-et)/j)%2===0)for(const it of[-1,1])B()<.2||t.add(it*(1.3+(pt-1.3)/2),R+.3,et-j/2,pt-1.3,1.5,.14);if(B()<.35){const it=B()<.5?-1:1,_t=new N(new bt(pt-1.6,.05,j*.9),_e(Xs(z,B()*.14-.03)));_t.position.set(it*(1.3+(pt-1.3)/2),R-.44,et),i.add(_t)}}if(H===null)return;const yt=new N(new bt(2.4,.06,H-Y-1),_e(ts));yt.position.set(0,R-.42,(H+Y)/2),i.add(yt);for(const et of[-1,1])t.add(et*1.3,R+.3,(H+Y)/2,.14,1.5,H-Y-1);const X=ua(`DECK ${S.id}  ${S.name}`,"#d4b45a");X.position.set(-18,R+1.1,H-14-y%3*12),X.userData.deck=S.id,i.add(X),ri.push({id:S.id,name:S.name,y:R,z:(H+Y)/2,r:55})});const x=h+St.hangarLift,m=new ie,p=new N(new bt(2.6,2.1,7.2),_e(14474452));m.add(p);for(const S of[-1.9,1.9]){const y=new N(new Ot(.55,.55,6.4,16),_e(13225156));y.rotation.x=Math.PI/2,y.position.set(S,-.6,.2),m.add(y)}m.position.set(-2.4,x-9,d+2),m.rotation.y=Math.PI,i.add(m);const w=St.pylon.rootZ+6,M=new N(new Ot(1.8,1.8,20,24),Vt(8050687,3));M.position.set(0,h-1,w),i.add(M);for(let S=0;S<5;S++){const y=new N(new Pe(3,.3,10,32),Vt(16747050,2));y.rotation.x=Math.PI/2,y.position.set(0,h-8+S*3.4,w),i.add(y)}const _=St.secFrontZ-8-w,E=new N(new Ot(1,1,_,20),Vt(16756838,1.6));E.rotation.x=Math.PI/2,E.position.set(0,h+3.5,w+_/2),i.add(E);const b=new N(new bt(3.2,1.2,3.2),Vt(16734880,1.6));b.position.set(0,h+4.8,w+8),i.add(b);const v=new N(new Ot(3.6,5.6,9,32),_e(Vs.engineering));v.rotation.x=Math.PI/2,v.position.set(0,h-.3,St.secFrontZ-6),i.add(v);for(let S=0;S<6;S++){const y=new N(new ee(1.4,20,14),_e(9067162));y.position.set(-4.2+S%3*4.2,h-10.2,8-Math.floor(S/3)*5),i.add(y)}const A=new N(new Ot(3.2,5.4,6.5,24),_e(Vs.science));return A.position.set(0,-10.2,St.saucerZ),i.add(A),i.add(t.build()),i.userData.setLabels=(S,y=null)=>{i.traverse(R=>{R.userData.kind==="label"&&(R.visible=S&&(y===null||R.userData.deck===y))})},i.userData.setLabels(!1),ri.sort((S,y)=>S.id-y.id),i}function xv(){const i=new ie;i.name="Effects";const t=St.saucerZ,e=[new C(18,-5.6,t+26),new C(-18,-5.6,t+26)],n=new C(0,4.6,t+62.5),s=new C(0,-30,760),r=oc(9427199,1.6),o=new hn({color:16777215,blending:ve,transparent:!0,opacity:.9,depthWrite:!1}),a=ui("rgba(160,220,255,1)"),c=ui("rgba(255,120,60,1)"),l=[];function u(w,M,_,E){const b=w.distanceTo(M),v=new N(new Ot(_,_*.6,b,12,1,!0),E);return v.position.copy(w).lerp(M,.5),v.lookAt(M),v.rotateX(Math.PI/2),v}function h(w=s){i.userData.onImpact?.(w,"phaser");const M=new ie;for(const E of e){M.add(u(E,w,.55,r)),M.add(u(E,w,.18,o));const b=new tn(new je({map:a,blending:ve,depthWrite:!1,transparent:!0}));b.position.copy(E),b.scale.setScalar(6),M.add(b)}const _=new tn(new je({map:a,blending:ve,depthWrite:!1,transparent:!0}));_.position.copy(w),_.scale.setScalar(26),M.add(_),i.add(M),l.push({kind:"phaser",group:M,t:0,dur:1.7})}function d(w=s){const M=new ie,_=new N(new ee(1.4,16,12),new hn({color:16765088,blending:ve,transparent:!0,depthWrite:!1})),E=new tn(new je({map:c,blending:ve,depthWrite:!1,transparent:!0}));E.scale.setScalar(14),_.add(E);const b=new tn(new je({map:c,blending:ve,depthWrite:!1,transparent:!0,opacity:.5}));b.scale.set(6,6,1),M.add(_,b);const v=new tn(new je({map:c,blending:ve,depthWrite:!1,transparent:!0}));v.position.copy(n),v.scale.setScalar(10),M.add(v),i.add(M),l.push({kind:"torpedo",group:M,ball:_,tail:b,muzzle:v,from:n.clone(),to:w.clone(),t:0,dur:3.2,speed:1,hit:!1})}function f(w){for(let M=l.length-1;M>=0;M--){const _=l[M];_.t+=w;const E=_.t/_.dur;if(_.kind==="phaser"){const b=.75+Math.random()*.5,v=E<.15?E/.15:E>.75?1-(E-.75)/.25:1;_.group.traverse(A=>{A.isSprite?A.material.opacity=v*b:A.isMesh&&A.scale.set(b*v,1,b*v)})}else{const b=Math.min(1,E*E*.4+E*.6);if(_.ball.position.lerpVectors(_.from,_.to,b),_.tail.position.copy(_.ball.position).lerp(_.from,.06),_.tail.material.opacity=.5*(1-E),_.muzzle.material.opacity=Math.max(0,1-E*6),_.muzzle.scale.setScalar(10+E*40),E>.92){_.hit||(_.hit=!0,i.userData.onImpact?.(_.to,"torpedo"));const v=1+(E-.92)*40;_.ball.children[0].scale.setScalar(14*v),_.ball.children[0].material.opacity=1-(E-.92)/.08}}E>=1&&(i.remove(_.group),_.group.traverse(b=>{b.geometry&&b.geometry.dispose(),b.material&&b.material!==r&&b.material!==o&&b.material.dispose()}),l.splice(M,1))}}const g=new N(new ee(1,40,24),oc(10473727,0));g.scale.set(140,62,165),g.position.set(0,-14,0),g.material.transparent=!0,g.material.depthWrite=!1,i.add(g);let x=0;const m=f;function p(w){m(w),x=Math.max(0,x-w*1.6),g.material.uniforms.uIntensity.value=x*x*.9}return i.userData={firePhasers:h,fireTorpedo:d,animate:p,shieldHit(){x=1},onImpact:null,get busy(){return l.length>0}},i}function vv({bridgeDoor:i,engineeringDoor:t}){const e=new ie;e.name="Turbolift";const n=(A,S=.04)=>{const y=_e(A);return y.emissiveIntensity=S,y.envMapIntensity=.1,y.roughness=.85,y},s=n(9407622,.05),r=n(9315878,.08),o=n(1382427,.02),a=2.4,c=2.6,l=2.4,u=new ie;u.name="TurboliftCar";const h=new N(new Gt(a,l),n(3816512,.03));h.rotation.x=-Math.PI/2,u.add(h);const d=new N(new Gt(a,l),s);d.rotation.x=Math.PI/2,d.position.y=c,u.add(d);const f=new N(new Gt(a-.6,l-.6),Vt(16773596,1.6));f.rotation.x=Math.PI/2,f.position.y=c-.02,f.userData.kind="glow",u.add(f);for(const A of[-1,1]){const S=new N(new Gt(l,c),s);S.rotation.y=-A*Math.PI/2,S.position.set(A*a/2,c/2,0),u.add(S);const y=new N(new Ot(.05,.05,.36,10),o);y.position.set(A*(a/2-.12),1.35,.5),u.add(y);const R=new N(new bt(.04,.25,l-.2),r);R.position.set(A*(a/2-.03),1.75,0),u.add(R)}const g=new N(new Gt(.6,.18),Vt(8257434,1.2));g.rotation.y=-Math.PI/2,g.position.set(a/2-.04,2.15,-.6),g.userData.kind="glow",u.add(g);const x=new Tn(16771536,4,6,1.6);x.position.set(0,c-.3,0),u.add(x);const m={front:[],back:[]};for(const[A,S,y]of[[1,l/2,"front"],[-1,-l/2,"back"]]){for(const W of[-1,1]){const q=new N(new bt(a/2,c,.08),r);q.position.set(W*a/4,c/2,S),q.userData.homeX=W*a/4,q.userData.side=W,u.add(q),m[y].push(q)}const R=new N(new bt(a+.3,.2,.2),o);R.position.set(0,c+.05,S),u.add(R)}e.add(u);const p=new C(0,St.cDeckTop+.1,St.saucerZ-7.7-l/2-.4),w=new C(t.x,t.y,t.z+l/2+.5),M=new gs([p,new C(0,4,St.saucerZ-8.6),new C(0,-3,St.saucerZ-9),new C(0,-6.5,50),new C(0,-14.5,36),new C(0,-22.5,22),new C(0,-27.5,8),new C(t.x*.5,-30.5,w.z+6),w],!1,"centripetal");let _=0,E=0;const b=A=>A*A*(3-2*A);function v(){const A=M.getPoint(_);u.position.copy(A);const S=_<.02,y=_>.98,R=b(Math.min(1,Math.max(0,E)));for(const W of m.front)W.position.x=W.userData.homeX+W.userData.side*(a/2)*(S?R:0);for(const W of m.back)W.position.x=W.userData.homeX+W.userData.side*(a/2)*(y?R:0);i?.(S?R:0),t.set?.(y?R:0),g.material.emissiveIntensity=.6+Math.sin(_*Math.PI*24)*.5}return v(),e.userData={car:u,path:M,setProgress(A){_=Math.min(1,Math.max(0,A)),v()},setDoors(A){E=A,v()},cameraAt(A){return M.getPoint(Math.min(1,Math.max(0,A))).add(new C(0,1.55,0))},lookAt(A){const S=Math.min(1,Math.max(0,A)),y=M.getPoint(S),R=Math.PI*Math.min(1,Math.max(0,(S-.1)/.8));return y.add(new C(Math.sin(R)*6,1.5,Math.cos(R)*6))}},e}function yv(i){const t=document.createElement("canvas");t.width=512,t.height=96;const e=t.getContext("2d");e.fillStyle="rgba(6,8,12,0.55)",e.fillRect(6,18,500,60),e.strokeStyle="#d4b45a",e.lineWidth=2,e.strokeRect(6,18,500,60),e.fillStyle="#e8eef4",e.font="26px Michroma, 'Share Tech Mono', monospace",e.textAlign="center",e.textBaseline="middle",e.fillText(i,256,48);const n=new xn(t),s=new tn(new je({map:n,transparent:!0,depthTest:!1}));return s.scale.set(34,6.4,1),s.visible=!1,s.userData.kind="partlabel",s}function Mv(){const i=new ie;i.name="USSEnterprise";const t=Qx(),e=lv(),n=uv(),s=_u(-1),r=_u(1),o=dv(),a=_v(),c=xv(),l=t.getObjectByName("BridgeInterior"),u=e.userData.engineering,h=u.userData.door,d=new C(h.x,h.y,h.z).add(e.position),f=vv({bridgeDoor:X=>l?.userData.setDoor?.(X),engineeringDoor:{x:d.x,y:d.y,z:d.z,set:X=>u.userData.setDoor?.(X)}});i.add(t,e,n,s,r,o,a,c,f);const g=[t,e,n,s,r,...o.children],x=[[t,"Primary hull · 11 decks",new C(0,30,0)],[e,"Engineering hull · decks 15–23",new C(0,-24,0)],[n,"Interconnecting dorsal",new C(0,-14,36)],[s,"Port pylon",new C(-24,-6,-33)],[r,"Starboard pylon",new C(24,-6,-33)],[o.children[0],"Port warp nacelle",new C(0,16,0)],[o.children[1],"Starboard warp nacelle",new C(0,16,0)]].map(([X,et,pt])=>{const Q=yv(et);return Q.position.copy(pt),X.add(Q),Q}),m=new Rn(new C(-1,0,0),0),p=new Rn(new C(0,-1,0),0),w=new Set;a.traverse(X=>{(X.isMesh||X.isInstancedMesh)&&X.material&&!X.isSprite&&w.add(X.material)});const M=new Set;i.traverse(X=>{if(!X.isMesh||X.isSprite)return;let et=!1,pt=X.parent;for(;pt;)(pt===a||pt===c||pt===f)&&(et=!0),pt=pt.parent;et||M.add(X.material)});const _=[],E=[],b=[],v=[];i.traverse(X=>{X.userData.blinkers&&_.push(...X.userData.blinkers),X.userData.fan&&E.push({fan:X.userData.fan,dir:X.userData.fanDir}),X.userData.warpStrip&&b.push(X.userData.warpStrip),X.userData.kind==="bussard"&&v.push(X.material)});let A=0,S=0;const y=new Set,R=[],W=[];i.traverse(X=>{X.userData.kind==="window"&&X.material&&y.add(X.material),X.userData.kind==="alertlight"&&R.push(X),X.userData.kind==="alertring"&&W.push(X)});const q=new Map([...y].map(X=>[X,{color:X.emissive.getHex(),intensity:X.emissiveIntensity}]));let z=0,O=0;const B=new Wt(16724e3),j=new po({color:13939802,transparent:!0,opacity:.85}),H=[],Y=[];i.traverse(X=>{if(!X.isMesh||X.isSprite||X.isInstancedMesh)return;let et=X.parent,pt=!1;for(;et;)(et===a||et===c||et===f)&&(pt=!0),et=et.parent;if(pt)return;if(X.userData.kind==="window"||X.userData.kind==="glow"||X.userData.kind==="decal"||X.userData.kind==="warpstrip"||X.userData.kind==="partlabel"){Y.push(X);return}if((X.geometry.attributes.position?.count||0)<400)return;const it=new e_(X.geometry,18),_t=new Mc(it,j);_t.position.copy(X.position),_t.rotation.copy(X.rotation),_t.scale.copy(X.scale),_t.visible=!1,_t.userData.kind="edges",X.parent.add(_t),H.push(_t)});const yt=new Map;return i.userData={interiors:a,parts:g,saucer:t,secondary:e,nacelles:o,clipPlane:m,cutaway:!1,setExplode(X){const et=Math.min(1,Math.max(0,X));for(const pt of g){const Q=pt.userData.home,it=pt.userData.explode;!Q||!it||pt.position.set(Q.x+it.x*et,Q.y+it.y*et,Q.z+it.z*et)}for(const pt of x)pt.visible=et>.3},setCutaway(X,et=.5){i.userData.cutaway=X,a.visible=X||a.visible,m.constant=-75+150*et;for(const pt of M)pt.clippingPlanes=X?[m]:null,pt.clipShadows=X,pt.needsUpdate=!0;j.clippingPlanes=X?[m]:null,j.needsUpdate=!0,X||(a.visible=!1)},setClip(X){m.constant=-75+150*X},setDeckCut(X,et=0,pt=null){i.userData.deckCut=X,p.constant=et;for(const Q of M)Q.clippingPlanes=X?[p]:i.userData.cutaway?[m]:null,Q.clipShadows=X||i.userData.cutaway,Q.needsUpdate=!0;for(const Q of w)Q.clippingPlanes=X?[p]:null,Q.needsUpdate=!0;j.clippingPlanes=X?[p]:i.userData.cutaway?[m]:null,j.needsUpdate=!0,a.visible=X||i.userData.cutaway,a.userData.setLabels(X,pt)},setWarp(X){S=X?1:0},setAlert(X){O=X?1:0},get alert(){return O>.5},hangar:e.userData.hangar.userData,effects:c.userData,turbolift:f.userData,setHangar(X){e.userData.hangar.userData.setOpen(X)},launchShuttle(){e.userData.hangar.userData.launch()},launchShuttleTo(X,et,pt){const Q=e.userData.hangar;Q.updateWorldMatrix(!0,!1);const it=Q.worldToLocal(X.clone());Q.userData.launchTo(it,et,pt)},recallShuttle(){e.userData.hangar.userData.recall()},setBlueprint(X){for(const et of H)et.visible=X;for(const et of Y)et.visible=!X&&!(i.userData.cutaway&&(et.userData.kind==="window"||et.userData.kind==="decal"));for(const et of M){if(X)yt.has(et)||yt.set(et,{color:et.color.getHex(),transparent:et.transparent,opacity:et.opacity,map:et.map,roughness:et.roughness,metalness:et.metalness,emissive:et.emissive?et.emissive.getHex():null,emissiveIntensity:et.emissiveIntensity,depthWrite:et.depthWrite}),et.color.set(2375774),et.map=null,et.transparent=!0,et.opacity=.32,et.roughness=1,et.metalness=0,et.depthWrite=!1,et.emissive&&(et.emissive.set(793132),et.emissiveIntensity=1);else if(yt.has(et)){const pt=yt.get(et);et.color.set(pt.color),et.map=pt.map,et.transparent=pt.transparent,et.opacity=pt.opacity,et.roughness=pt.roughness,et.metalness=pt.metalness,et.depthWrite=pt.depthWrite,et.emissive&&pt.emissive!==null&&(et.emissive.set(pt.emissive),et.emissiveIntensity=pt.emissiveIntensity)}et.needsUpdate=!0}},animate(X,et){e.userData.hangar.userData.animate(et),c.userData.animate(et),A+=(S-A)*Math.min(1,et*1.8);for(const pt of E)pt.fan.rotation.z+=et*(2.2+A*9)*pt.dir;for(const pt of b)pt.emissiveIntensity=.35+A*4.2;for(const pt of v)pt.emissiveIntensity=.9+A*2.6;if(z+=(O-z)*Math.min(1,et*2.5),z>.002||O>0){const pt=.5+.5*Math.sin(X*7);for(const Q of R)Q.material.emissive.setHex(z>.3?16719904:16757575),Q.material.emissiveIntensity=.25+z*(1.2+pt*3.2);for(const Q of W)Q.material.emissive.setRGB(1,1-z*.8,1-z*.85),Q.material.emissiveIntensity=1.3-z*.5+z*pt*.8;for(const[Q,it]of q)Q.emissive.setHex(it.color).lerp(B,z*.85),Q.emissiveIntensity=it.intensity*(1-z*.35)+z*pt*1.6}Xx(i,z,et);for(const pt of _){const Q=(X/pt.period+pt.phase)%1,it=Q<.08||Q>.16&&Q<.22;pt.mesh.scale.setScalar(it?1.8:.6),pt.mat.emissiveIntensity=it?9:.6}}},i.userData.setCutaway(!1),i}function Sv(){const t=document.createElement("canvas");t.width=1024,t.height=1024/2;const e=t.getContext("2d"),n=_n(404);e.fillStyle="#123a6b",e.fillRect(0,0,1024,1024/2);for(let o=0;o<90;o++){const a=n()*1024,c=n()*(1024/2),l=20+n()*110,u=e.createRadialGradient(a,c,0,a,c,l),h=n()<.6;u.addColorStop(0,h?"rgba(86,120,62,0.95)":"rgba(160,120,70,0.9)"),u.addColorStop(.7,h?"rgba(70,100,52,0.6)":"rgba(130,100,60,0.5)"),u.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=u,e.fillRect(a-l,c-l,l*2,l*2)}for(let o=0;o<120;o++){const a=n()*1024,c=n()*(1024/2),l=40+n()*200,u=6+n()*22;e.fillStyle=`rgba(255,255,255,${.08+n()*.2})`,e.beginPath(),e.ellipse(a,c,l,u,n()*.6-.3,0,Math.PI*2),e.fill()}const s=e.createLinearGradient(0,0,0,1024/2);s.addColorStop(0,"rgba(255,255,255,0.85)"),s.addColorStop(.12,"rgba(255,255,255,0)"),s.addColorStop(.88,"rgba(255,255,255,0)"),s.addColorStop(1,"rgba(255,255,255,0.85)"),e.fillStyle=s,e.fillRect(0,0,1024,1024/2);const r=new xn(t);return r.colorSpace=be,r}function wv(){const i=new ie;i.name="Space";const t=7e3,e=new Float32Array(t*3),n=new Float32Array(t*3),s=new Wt,r=_n(9);for(let v=0;v<t;v++){const A=1400+r()*3200,S=r()*Math.PI*2,y=Math.acos(2*r()-1);e[v*3]=A*Math.sin(y)*Math.cos(S),e[v*3+1]=A*Math.sin(y)*Math.sin(S),e[v*3+2]=A*Math.cos(y);const R=r();s.setHSL(.55+R*.12,.2,.7+r()*.3),n[v*3]=s.r,n[v*3+1]=s.g,n[v*3+2]=s.b}const o=new Se;o.setAttribute("position",new $t(e,3)),o.setAttribute("color",new $t(n,3));const a=new Hg(o,new oh({size:2.2,vertexColors:!0,transparent:!0,opacity:.9,depthWrite:!1,blending:ve,sizeAttenuation:!0}));a.name="Stars",i.add(a);const c=new tn(new je({map:ui("rgba(70,110,160,0.5)"),blending:ve,depthWrite:!1,opacity:.28}));c.scale.set(2400,1100,1),c.position.set(-900,300,-2400),i.add(c);const l=new tn(new je({map:ui("rgba(150,80,120,0.4)"),blending:ve,depthWrite:!1,opacity:.18}));l.scale.set(1800,900,1),l.position.set(1600,-500,-2e3),i.add(l);const u=new C(2500,-1e3,-3300),h=new C(4700,4400,-1800),d=h.clone().sub(u).normalize(),f=900,g=new Oe({uniforms:{map:{value:Sv()},sunDir:{value:d},atmoColor:{value:new Wt(5939455)}},vertexShader:`
      varying vec3 vN;
      varying vec3 vW;
      varying vec2 vUv;
      void main() {
        vN = normalize(mat3(modelMatrix) * normal);
        vec4 wp = modelMatrix * vec4(position, 1.0);
        vW = wp.xyz;
        vUv = uv;
        gl_Position = projectionMatrix * viewMatrix * wp;
      }
    `,fragmentShader:`
      uniform sampler2D map;
      uniform vec3 sunDir;
      uniform vec3 atmoColor;
      varying vec3 vN;
      varying vec3 vW;
      varying vec2 vUv;
      void main() {
        vec3 base = texture2D(map, vUv).rgb;
        vec3 N = normalize(vN);
        vec3 V = normalize(cameraPosition - vW);
        float nl = dot(N, sunDir);
        float day = smoothstep(-0.04, 0.3, nl);
        float twilight = exp(-pow((nl - 0.02) / 0.07, 2.0));
        float ndv = max(dot(N, V), 0.0);
        float rim = pow(1.0 - ndv, 3.0);
        vec3 col = base * (0.012 + 1.05 * day);
        col += vec3(1.0, 0.45, 0.18) * twilight * 0.09;
        // Faint city lights on the night side where there's land
        float land = smoothstep(0.35, 0.6, base.g - base.b * 0.6);
        col += vec3(1.0, 0.85, 0.55) * land * (1.0 - day) * 0.05;
        col += atmoColor * rim * (0.06 + 0.4 * day);
        col = mix(col, atmoColor, rim * rim * day * 0.35);
        gl_FragColor = vec4(col, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }
    `}),x=new N(new ee(f,96,64),g);x.position.copy(u),x.rotation.z=.35,x.name="Planet",i.add(x);const m=new N(new ee(f*1.028,96,64),new Oe({uniforms:{sunDir:{value:d},atmoColor:{value:new Wt(6992127)}},transparent:!0,depthWrite:!1,blending:ve,vertexShader:`
        varying vec3 vN;
        varying vec3 vW;
        void main() {
          vN = normalize(mat3(modelMatrix) * normal);
          vec4 wp = modelMatrix * vec4(position, 1.0);
          vW = wp.xyz;
          gl_Position = projectionMatrix * viewMatrix * wp;
        }
      `,fragmentShader:`
        uniform vec3 sunDir;
        uniform vec3 atmoColor;
        varying vec3 vN;
        varying vec3 vW;
        void main() {
          vec3 N = normalize(vN);
          vec3 V = normalize(cameraPosition - vW);
          float ndv = max(dot(N, V), 0.0);
          float rim = pow(1.0 - ndv, 2.6) * smoothstep(0.0, 0.35, 1.0 - ndv);
          float day = smoothstep(-0.35, 0.3, dot(N, sunDir));
          vec3 col = atmoColor * rim * (0.06 + 0.9 * day);
          gl_FragColor = vec4(col, rim * (0.15 + 0.85 * day));
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }
      `}));m.position.copy(u),i.add(m);const p=new tn(new je({map:ui("rgba(255,240,215,1)"),blending:ve,depthWrite:!1,opacity:.95}));p.scale.set(520,520,1),p.position.copy(h),i.add(p);const w=900,M=new Float32Array(w*6),_=_n(1701);for(let v=0;v<w;v++){const A=_()*Math.PI*2,S=120+_()*700,y=Math.cos(A)*S,R=Math.sin(A)*S*.7,W=-1600+_()*3200,q=40+_()*220;M.set([y,R,W,y,R,W-q],v*6)}const E=new Se;E.setAttribute("position",new $t(M,3));const b=new Mc(E,new po({color:12573183,transparent:!0,opacity:0,blending:ve,depthWrite:!1}));return b.name="WarpField",b.visible=!1,i.add(b),i.userData={stars:a,warp:b,planet:x,atmo:m,sun:p,nebula:[c,l],setWarp(v){b.visible=v,i.userData.warpOn=v},animate(v){x.rotation.y+=v*.004;const A=i.userData.warpOn?.85:0;b.material.opacity+=(A-b.material.opacity)*Math.min(1,v*2.5);const S=i.userData.warpOn?.25:.9;if(a.material.opacity+=(S-a.material.opacity)*Math.min(1,v*2.5),b.visible){const y=b.geometry.attributes.position,R=2400*v;for(let W=0;W<y.count;W+=2){let q=y.getZ(W)-R,z=y.getZ(W+1)-R;if(q<-1600){const O=q-z;q+=3200,z=q-O}y.setZ(W,q),y.setZ(W+1,z)}y.needsUpdate=!0}!b.visible&&b.material.opacity<.01&&(b.visible=!1)}},i.userData.warpOn=!1,i}const zr=St.saucerZ,ha=St.secondaryY,bv=[{id:"bridge",name:"Main Bridge · Deck 1",pos:[0,St.bridgeTop-1.5,zr],view:{dir:[.5,.55,.7],dist:60},facts:["Command well with helm/navigation console","Rotated 36° from centerline on the studio set","Turbolift alcove aft, viewer forward","Use the Bridge interior camera to step inside"],body:"The bridge dome tops the stepped B/C deck superstructure. Cushman's cutaway keeps the set's 36° rotation and solves the turbolift by running the shaft down the aft housing. This reconstruction faces the set forward, as Botaitis argues the dome geometry allows."},{id:"impulse",name:"Impulse Engines · Decks 6–7",pos:[0,4.4,zr-56],view:{dir:[.4,.5,-.8],dist:70},facts:["Fusion reactors forward of the housing","Twin exhaust vents aft","Independent saucer propulsion"],body:"The low shelf at the saucer's aft edge is the only external sign of the impulse drive; the reactors and power units sit two decks deep behind it."},{id:"sensor",name:"Lower Sensor Dome · Deck 11",pos:[0,St.lowerDomeBottom-.6,zr],view:{dir:[.4,-.85,.5],dist:60},facts:["Planetary sensor array","Auxiliary fire control above","Forward phaser banks flank it"],body:"The dome and its three pods are the ship's primary planetary scanners. Fire control for the saucer phasers shares the deck above."},{id:"deflector",name:"Navigational Deflector",pos:[0,ha,St.secFrontZ+6],view:{dir:[.75,-.3,.75],dist:70},facts:["Copper parabolic dish on a central emitter spike","Sweeps debris ahead at warp","Machinery spans decks 15–20 behind it"],body:"The dish was recolored copper for the production model. Its machinery fills the truncated forward face of the engineering hull."},{id:"engineering",name:"Main Engineering · Deck 16",pos:[0,ha+4,St.pylon.rootZ+6],view:{dir:[.9,.2,.3],dist:80},facts:["Matter/antimatter reactor core","Intermix conduit runs forward to the dish","Dilithium crystal converter assembly","Use the Engineering interior camera to step inside"],body:"The engine room set's grille-covered 'cathedral' is read here as the vertical reactor with the horizontal intermix trunk feeding the warp plasma system."},{id:"hangar",name:"Hangar Deck · Decks 17–19",pos:[0,ha+St.hangarLift,St.secSternZ-1.5],view:{dir:[.55,.25,-.8],dist:80},facts:["Clamshell doors on the fantail","Observation gallery over the flight deck","Turntable elevator to the lower hangar"],body:"The flight deck is one of the largest open volumes on the ship. Shuttles are stored on the deck below and raised through the turntable."},{id:"bussard",name:"Bussard Collectors",pos:[St.nacelleX,St.nacelleY,St.nacelleZ+St.nacelleL*.5-4],view:{dir:[.7,.4,.6],dist:55},facts:["Spinning fan-blade light effect on the 11-footer","Added for the second pilot","Interstellar hydrogen intake"],body:"The domes were lit with rotating color wheels and mirror fans, which is why they shimmer. This model spins the blades inside a translucent shell."},{id:"nacelle",name:"Warp Nacelles",pos:[-41.5,St.nacelleY,St.nacelleZ-40],view:{dir:[-.8,.45,-.4],dist:70},facts:["154 m long, 15 m diameter","Aft grilles and ball-and-ring end caps","Pylons meet them at the forward third, unswept"],body:"Warp coils run the length of each nacelle. The vertical grilles near the aft end are the plasma vents; the end cap houses the field coil terminus."},{id:"torpedo",name:"Photon Torpedo Bay · Deck 3",pos:[0,5.8,zr+30],view:{dir:[.4,.6,.7],dist:60},facts:["Forward-firing launchers","Magazine on the deck above","Fires from the saucer's leading edge"],body:"Photon torpedoes launch from tubes just under the saucer's upper skin. The bay shares Deck 3 with the physics and botany labs."}];function Ev(){const t=document.createElement("canvas");t.width=t.height=128;const e=t.getContext("2d");e.strokeStyle="rgba(212,180,90,0.95)",e.lineWidth=6,e.beginPath(),e.arc(128/2,128/2,44,0,Math.PI*2),e.stroke(),e.fillStyle="rgba(212,180,90,0.9)",e.beginPath(),e.arc(128/2,128/2,10,0,Math.PI*2),e.fill();const n=new xn(t);return n.colorSpace=be,n}function Tv(i,t){const e=new ie;e.name="Hotspots";const n=Ev(),s=new ee(6,12,8),r=new hn({visible:!1}),o=[];for(const d of bv){const f=new N(s,r);f.position.set(...d.pos),f.userData.system=d,e.add(f);const g=new tn(new je({map:n,transparent:!0,depthTest:!1,opacity:.85}));g.position.copy(f.position),g.scale.set(5,5,1),g.userData.kind="marker",e.add(g),o.push({sys:d,hit:f,sprite:g})}const a=new F_,c=new ft,l=new ft;let u=0;const h={group:e,onSelect:null,selected:null,visible:!0,setVisible(d){h.visible=d;for(const f of o)f.sprite.visible=d},animate(d,f){const g=1+Math.sin(d*3)*.12;for(const x of o){const m=f.isOrthographicCamera?1e3/f.zoom:f.position.distanceTo(x.hit.position),p=Math.max(2.5,m*.012)*g*(h.selected===x.sys?1.6:1);x.sprite.scale.set(p,p,1),x.sprite.material.opacity=h.selected===x.sys?1:.7}},pick(d,f){const g=t.getBoundingClientRect();c.set((d-g.left)/g.width*2-1,-((f-g.top)/g.height)*2+1),a.setFromCamera(c,i());const x=a.intersectObjects(o.map(m=>m.hit),!1);return x.length?x[0].object.userData.system:null}};return t.addEventListener("pointerdown",d=>{l.set(d.clientX,d.clientY),u=performance.now()}),t.addEventListener("pointerup",d=>{if(!h.visible||Math.hypot(d.clientX-l.x,d.clientY-l.y)>5||performance.now()-u>400)return;const g=h.pick(d.clientX,d.clientY);g&&(h.selected=g,h.onSelect?.(g))}),t.addEventListener("pointermove",d=>{if(!h.visible)return;const f=h.pick(d.clientX,d.clientY);t.style.cursor=f?"pointer":""}),h}function Av(i,t){const e=new ie;e.name="Reference";const n=new hn({transparent:!0,opacity:.55,side:Re,depthWrite:!1,toneMapped:!1}),s=new N(new Gt(1,1),n);s.visible=!1,s.renderOrder=-1,e.add(s);const r={width:300,aspect:1,dx:0,dy:0,has:!1,rot:0};function o(){if(!r.has)return;const u=i().position.clone().sub(t.target).normalize(),h=Math.abs(u.x),d=Math.abs(u.y),f=Math.abs(u.z),g=r.width,x=g/r.aspect;s.scale.set(g,x,1);const m={x:0,y:0,z:0};h>=d&&h>=f?(s.rotation.set(0,Math.sign(u.x)*Math.PI/2,0),s.position.set(-Math.sign(u.x)*120,m.y+r.dy,m.z+r.dx*-Math.sign(u.x))):d>=h&&d>=f?(s.rotation.set(-Math.sign(u.y)*Math.PI/2,0,0),s.position.set(m.x+r.dx,-Math.sign(u.y)*120,m.z+r.dy*Math.sign(u.y))):(s.rotation.set(0,u.z>0?0:Math.PI,0),s.position.set(m.x+r.dx*Math.sign(u.z),m.y+r.dy,-Math.sign(u.z)*260)),r.rot&&s.rotateZ(r.rot)}function a(l){const u=new Ve(l);u.colorSpace=be,u.needsUpdate=!0,n.map&&n.map.dispose(),n.map=u,n.needsUpdate=!0,r.aspect=l.width/l.height,r.has=!0,s.visible=!0,o()}addEventListener("dragover",l=>{l.preventDefault()}),addEventListener("drop",l=>{l.preventDefault();const u=l.dataTransfer?.files?.[0];if(!u||!u.type.startsWith("image/"))return;const h=URL.createObjectURL(u),d=new Image;d.onload=()=>{a(d),URL.revokeObjectURL(h),c.onLoad?.(u.name)},d.src=h});const c={group:e,onLoad:null,loadFromURL(l,u="reference"){return new Promise((h,d)=>{const f=new Image;f.crossOrigin="anonymous",f.onload=()=>{a(f),c.onLoad?.(u),h(f)},f.onerror=d,f.src=l})},setOpacity(l){n.opacity=l},setWidth(l){r.width=l,o()},setOffset(l,u){r.dx=l,r.dy=u,o()},rotate(){r.rot=(r.rot+Math.PI/2)%(Math.PI*2),o()},setFlip(l,u){n.map&&(n.map.repeat.set(l?-1:1,u?-1:1),n.map.offset.set(l?1:0,u?1:0),n.map.needsUpdate=!0)},clear(){r.has=!1,s.visible=!1},update:o,get active(){return r.has}};return c}const Cv={BASE_URL:"/enterprise/",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_BASE:"/enterprise/"};function Rv(){let i=null,t=null,e=null,n=null,s=!1,r=null,o=!0;const a=Cv&&"/enterprise/"||"/",c=new Map;let l=null,u=null,h=!1;function d(){return u||(u=(async()=>{try{const L=await fetch(`${a}audio/manifest.json`);if(!L.ok)return;l=await L.json();const U=Object.entries(l.sounds||{});await Promise.all(U.map(async([G,k])=>{try{const Z=await fetch(`${a}audio/${k.file}`);if(!Z.ok)return;const P=await Z.arrayBuffer();c.set(G,await i.decodeAudioData(P))}catch{}})),h=c.size>0,h&&s&&(x(),B&&_t(B.mood))}catch{}})(),u)}const f=L=>o&&c.has(L);function g(L,{gain:U=1,rate:G=1,loop:k=!1,fadeIn:Z=0,offset:P=0,when:mt=0,dest:ot=null}={}){const vt=c.get(L);if(!vt)return null;const lt=i.createBufferSource();lt.buffer=vt,lt.loop=k,lt.playbackRate.value=G;const V=i.createGain(),nt=i.currentTime+mt;return Z>0?(V.gain.setValueAtTime(1e-4,nt),V.gain.exponentialRampToValueAtTime(Math.max(1e-4,U),nt+Z)):V.gain.value=U,lt.connect(V),V.connect(ot||t),lt.start(nt,P),{src:lt,g:V,stop(D=.05){const T=i.currentTime;V.gain.cancelScheduledValues(T),V.gain.setValueAtTime(Math.max(1e-4,V.gain.value),T),V.gain.exponentialRampToValueAtTime(1e-4,T+D);try{lt.stop(T+D+.05)}catch{}}}}function x(){!e||e.sample||!f("engineLow")||(e.sample=g("engineLow",{gain:.42,loop:!0,fadeIn:2}),e.g.gain.linearRampToValueAtTime(.07,i.currentTime+2))}function m(){if(i)return i;i=new(window.AudioContext||window.webkitAudioContext),t=i.createGain(),t.gain.value=0;const L=i.createDynamicsCompressor();return L.threshold.value=-18,L.ratio.value=4,t.connect(L),L.connect(i.destination),n=i.createMediaStreamDestination(),L.connect(n),i}function p(L=2){const U=i.createBuffer(1,i.sampleRate*L,i.sampleRate),G=U.getChannelData(0);for(let k=0;k<G.length;k++)G[k]=Math.random()*2-1;return U}function w(){if(e)return;const L=i.createGain();L.gain.value=.16;const U=i.createBiquadFilter();U.type="lowpass",U.frequency.value=180,U.Q.value=.7;const G=[[55,"sine",1],[82.5,"triangle",.35],[110.5,"sine",.18]].map(([P,mt,ot])=>{const vt=i.createOscillator();vt.type=mt,vt.frequency.value=P;const lt=i.createGain();return lt.gain.value=ot,vt.connect(lt),lt.connect(U),vt.start(),vt}),k=i.createOscillator();k.frequency.value=.18;const Z=i.createGain();Z.gain.value=.05,k.connect(Z),Z.connect(L.gain),k.start(),U.connect(L),L.connect(t),e={oscs:G,g:L,lp:U}}function M(L){if(s=L,!L){t&&t.gain.linearRampToValueAtTime(0,i.currentTime+.4),W&&q(!1),B&&Y(.5),Q(.5);return}m(),i.state==="suspended"&&i.resume(),w(),d(),h&&x(),t.gain.cancelScheduledValues(i.currentTime),t.gain.linearRampToValueAtTime(.8,i.currentTime+.6)}function _(L,U,G,k,Z,P=i.currentTime){L.gain.cancelScheduledValues(P),L.gain.setValueAtTime(1e-4,P),L.gain.exponentialRampToValueAtTime(U,P+G),L.gain.setValueAtTime(U,P+G+k),L.gain.exponentialRampToValueAtTime(1e-4,P+G+k+Z)}function E(){if(s){if(f("laserLarge")){g("laserLarge",{gain:.55,rate:.72}),g("laserLarge",{gain:.45,rate:.68,when:.14}),g("laserRetro",{gain:.2,rate:.85,when:.05});return}b()}}function b(){const L=i.currentTime,U=i.createGain();_(U,.35,.03,1.1,.45,L);const G=i.createOscillator();G.type="sawtooth",G.frequency.setValueAtTime(760,L),G.frequency.linearRampToValueAtTime(880,L+1.4);const k=i.createOscillator();k.frequency.value=28;const Z=i.createGain();Z.gain.value=60,k.connect(Z),Z.connect(G.frequency);const P=i.createBiquadFilter();P.type="bandpass",P.frequency.value=1400,P.Q.value=1.5,G.connect(P),P.connect(U),U.connect(t),G.start(L),k.start(L),G.stop(L+1.7),k.stop(L+1.7)}function v(){if(s){if(f("laserLarge2")){g("explosionLow",{gain:.5,rate:.9}),g("laserLarge2",{gain:.6,rate:.5,when:.04});return}A()}}function A(){const L=i.currentTime,U=i.createGain();_(U,.55,.02,.25,1.6,L);const G=i.createOscillator();G.type="sine",G.frequency.setValueAtTime(220,L),G.frequency.exponentialRampToValueAtTime(48,L+1.8),G.connect(U);const k=i.createBufferSource();k.buffer=p(2);const Z=i.createGain();_(Z,.25,.01,.1,.9,L);const P=i.createBiquadFilter();P.type="lowpass",P.frequency.setValueAtTime(3e3,L),P.frequency.exponentialRampToValueAtTime(200,L+1),k.connect(P),P.connect(Z),Z.connect(t),U.connect(t),G.start(L),G.stop(L+2),k.start(L),k.stop(L+1.2)}function S(L){if(!s)return;const U=i.currentTime;if(L){const G=i.createGain();_(G,.5,.9,.3,1.6,U);const k=i.createOscillator();k.type="sine",k.frequency.setValueAtTime(90,U),k.frequency.exponentialRampToValueAtTime(1400,U+1.3),k.frequency.exponentialRampToValueAtTime(420,U+2.8),k.connect(G),G.connect(t),k.start(U),k.stop(U+3);const Z=i.createBufferSource();Z.buffer=p(3);const P=i.createBiquadFilter();P.type="highpass",P.frequency.setValueAtTime(200,U),P.frequency.exponentialRampToValueAtTime(4e3,U+1.4);const mt=i.createGain();if(_(mt,.3,.6,.4,1.4,U),Z.connect(P),P.connect(mt),mt.connect(t),Z.start(U),Z.stop(U+3),!r){const ot=i.createGain();ot.gain.value=0;const vt=i.createOscillator();vt.type="triangle",vt.frequency.value=164;const lt=i.createBiquadFilter();lt.type="lowpass",lt.frequency.value=420,vt.connect(lt),lt.connect(ot),ot.connect(t),vt.start(),r={bg:ot,bo:vt}}r.bg.gain.cancelScheduledValues(U),r.bg.gain.linearRampToValueAtTime(.08,U+2.5),e&&e.lp.frequency.linearRampToValueAtTime(320,U+2.5),f("engineCircular")&&(g("engineCircular",{gain:.6,rate:1.1}),r.sample||(r.sample=g("engineLarge",{gain:.32,loop:!0,fadeIn:2.5,when:.8})))}else{r&&r.bg.gain.linearRampToValueAtTime(0,U+1.2),e&&e.lp.frequency.linearRampToValueAtTime(180,U+1.2),r?.sample&&(r.sample.stop(1.5),r.sample=null),f("engineCircular")&&g("engineCircular",{gain:.35,rate:.7});const G=i.createGain();_(G,.3,.05,.2,1.2,U);const k=i.createOscillator();k.type="sine",k.frequency.setValueAtTime(900,U),k.frequency.exponentialRampToValueAtTime(70,U+1.4),k.connect(G),G.connect(t),k.start(U),k.stop(U+1.5)}}function y(L){if(!s)return;const U=i.currentTime,G=i.createGain();_(G,.18,.2,2,.6,U);const k=i.createOscillator();k.type="triangle",k.frequency.setValueAtTime(L?120:200,U),k.frequency.linearRampToValueAtTime(L?200:120,U+2.4);const Z=i.createBiquadFilter();if(Z.type="lowpass",Z.frequency.value=900,k.connect(Z),Z.connect(G),G.connect(t),k.start(U),k.stop(U+2.9),f("doorClose")){g(L?"doorOpen":"doorClose",{gain:.55,rate:.55,when:2.4});return}const P=i.createBufferSource();P.buffer=p(.3);const mt=i.createGain();_(mt,.2,.005,.03,.25,U+2.5),P.connect(mt),mt.connect(t),P.start(U+2.5)}function R(){if(!s)return;if(f("thruster")){const Z=g("thruster",{gain:.38,rate:.9,loop:!0,fadeIn:1.5});Z.src.playbackRate.linearRampToValueAtTime(1.25,i.currentTime+9),setTimeout(()=>Z.stop(4),8e3);return}const L=i.currentTime,U=i.createGain();_(U,.22,1.5,4,6,L);const G=i.createOscillator();G.type="sawtooth",G.frequency.setValueAtTime(70,L),G.frequency.linearRampToValueAtTime(240,L+8);const k=i.createBiquadFilter();k.type="lowpass",k.frequency.value=500,G.connect(k),k.connect(U),U.connect(t),G.start(L),G.stop(L+12)}let W=null;function q(L){if(!L){W&&(clearInterval(W.timer),W.g.gain.linearRampToValueAtTime(0,i.currentTime+.3),W=null);return}if(!s||W)return;const U=i.createGain();U.gain.value=.22;const G=i.createBiquadFilter();G.type="lowpass",G.frequency.value=2400,G.connect(U),U.connect(t);const k=()=>{const Z=i.currentTime,P=i.createOscillator();P.type="sawtooth",P.frequency.setValueAtTime(330,Z),P.frequency.exponentialRampToValueAtTime(760,Z+.55);const mt=i.createGain();_(mt,.9,.04,.42,.25,Z);const ot=i.createOscillator();ot.type="sine",ot.frequency.setValueAtTime(660,Z),ot.frequency.exponentialRampToValueAtTime(1520,Z+.55);const vt=i.createGain();_(vt,.35,.04,.42,.25,Z),P.connect(mt),ot.connect(vt),mt.connect(G),vt.connect(G),P.start(Z),ot.start(Z),P.stop(Z+.8),ot.stop(Z+.8)};k(),W={g:U,timer:setInterval(k,1e3)}}function z(L){if(!s)return;f("forceField2")&&g("forceField2",{gain:.5,rate:L?.32:.4});const U=i.currentTime,G=i.createGain();_(G,.3,.4,1.6,1.4,U);const k=i.createOscillator();k.type="sine",k.frequency.setValueAtTime(L?620:180,U),k.frequency.exponentialRampToValueAtTime(L?140:900,U+2.6);const Z=i.createOscillator();Z.frequency.value=9;const P=i.createGain();P.gain.value=40,Z.connect(P),P.connect(k.frequency),k.connect(G),G.connect(t),k.start(U),Z.start(U),k.stop(U+3.5),Z.stop(U+3.5)}function O(){if(!s)return;if(f("explosionLow")){g("explosionLow",{gain:.7,rate:.45}),g("forceField",{gain:.35,rate:.5,when:.1});return}const L=i.currentTime,U=i.createGain();_(U,.4,.1,1.6,2.2,L);const G=i.createOscillator();G.type="sawtooth",G.frequency.setValueAtTime(70,L),G.frequency.linearRampToValueAtTime(48,L+3.5);const k=i.createBiquadFilter();k.type="lowpass",k.frequency.setValueAtTime(600,L),k.frequency.linearRampToValueAtTime(180,L+3.5),G.connect(k),k.connect(U),U.connect(t),G.start(L),G.stop(L+4)}let B=null;const j={calm:[[48,55,60,67],[44,51,56,63],[41,48,53,60],[43,50,55,62]],wonder:[[45,52,57,64],[41,48,55,60],[43,50,55,62],[46,53,58,65]],tense:[[48,51,55,58],[49,53,56,61],[48,51,55,58],[46,50,53,58]],swell:[[48,52,55,60,64,67],[53,57,60,65,69,72],[48,52,55,60,64,67]]},H=L=>440*Math.pow(2,(L-69)/12);function Y(L=3){if(!B)return;const U=B;B=null,clearInterval(U.timer),U.pulse&&clearInterval(U.pulse);const G=i.currentTime;U.g.gain.cancelScheduledValues(G),U.g.gain.setValueAtTime(U.g.gain.value,G),U.g.gain.linearRampToValueAtTime(0,G+L);for(const k of U.voices)k.oscs.forEach(Z=>Z.stop(G+L+.2))}const yt={calm:"musicAphelion",wonder:"musicStarfire",swell:"musicStarfire",tense:"musicLegionnaire"},X={calm:.3,wonder:.38,swell:.52,tense:.4};let et=null;const pt=new Map;function Q(L=3){if(!et)return;const U=et;et=null;const G=c.get(U.name);G&&pt.set(U.name,(U.offset+(i.currentTime-U.startedAt))%G.duration),U.handle.stop(L)}function it(L){const U=yt[L];if(!U||!f(U))return!1;if(et&&et.name===U){const P=i.currentTime;return et.handle.g.gain.cancelScheduledValues(P),et.handle.g.gain.setValueAtTime(Math.max(1e-4,et.handle.g.gain.value),P),et.handle.g.gain.linearRampToValueAtTime(X[L],P+3),!0}et&&Q(3);const G=c.get(U);let k=pt.get(U)||0;k>G.duration-30&&(k=0);const Z=g(U,{gain:X[L],loop:!0,fadeIn:3,offset:k});return et={name:U,handle:Z,startedAt:i.currentTime,offset:k},!0}function _t(L){if(!L||L==="off"){Y(),Q();return}if(!s)return;if(it(L)){B&&Y(2);return}if(B&&B.mood===L)return;if(!B){const P=i.createGain();P.gain.value=0;const mt=i.createBiquadFilter();mt.type="lowpass",mt.frequency.value=1100,mt.Q.value=.5,mt.connect(P),P.connect(t),B={g:P,lp:mt,timer:null,pulse:null,mood:L,step:0,voices:[]}}const U=B;U.mood=L,U.step=0,clearInterval(U.timer),U.pulse&&(clearInterval(U.pulse),U.pulse=null);const G=L==="tense"?4:L==="swell"?10:8,k=()=>{const P=j[L]||j.calm,mt=P[U.step%P.length];U.step++;const ot=i.currentTime,vt=G*.3;for(const T of U.voices)T.g.gain.cancelScheduledValues(ot),T.g.gain.setValueAtTime(T.g.gain.value,ot),T.g.gain.linearRampToValueAtTime(0,ot+vt),T.oscs.forEach(K=>K.stop(ot+vt+.1));U.voices=[];const lt=i.createGain();lt.gain.setValueAtTime(0,ot),lt.gain.linearRampToValueAtTime(1,ot+vt),lt.connect(U.lp);const V=[];mt.forEach((T,K)=>{for(const ht of[-6,6]){const gt=i.createOscillator();gt.type=K===0?"triangle":"sawtooth",gt.frequency.value=H(T),gt.detune.value=ht;const dt=i.createGain();dt.gain.value=(K===0?.9:.42)/mt.length,gt.connect(dt),dt.connect(lt),gt.start(ot),V.push(gt)}});const nt=i.createOscillator();nt.type="sine",nt.frequency.value=H(mt[0]-12);const D=i.createGain();D.gain.value=.3,nt.connect(D),D.connect(lt),nt.start(ot),V.push(nt),U.voices.push({g:lt,oscs:V})};if(k(),U.timer=setInterval(k,G*1e3),L==="tense"){const P=()=>{const mt=i.currentTime,ot=i.createOscillator();ot.type="sine",ot.frequency.setValueAtTime(72,mt),ot.frequency.exponentialRampToValueAtTime(36,mt+.35);const vt=i.createGain();_(vt,.45,.005,.04,.42,mt),ot.connect(vt),vt.connect(t),ot.start(mt),ot.stop(mt+.6)};P(),U.pulse=setInterval(P,1500)}const Z=L==="swell"?.26:L==="tense"?.13:.16;U.g.gain.cancelScheduledValues(i.currentTime),U.g.gain.setValueAtTime(U.g.gain.value,i.currentTime),U.g.gain.linearRampToValueAtTime(Z,i.currentTime+2.5)}function st(){if(!s)return;if(f("laserSmall")){g("laserSmall",{gain:.5,rate:.7}),g("laserSmall",{gain:.4,rate:.66,when:.12});return}const L=i.currentTime,U=i.createGain();_(U,.3,.02,.5,.5,L);const G=i.createOscillator();G.type="square",G.frequency.setValueAtTime(320,L),G.frequency.exponentialRampToValueAtTime(140,L+1);const k=i.createBiquadFilter();k.type="lowpass",k.frequency.value=900,G.connect(k),k.connect(U),U.connect(t),G.start(L),G.stop(L+1.1)}function rt(L){if(!s)return;if(f("forceField")){g("forceField",{gain:.6,rate:L==="plasma"?.7:.9}),g("impactMetal",{gain:.35,rate:.8,when:.08}),L==="plasma"&&g("explosionCrunch",{gain:.45,rate:.7,when:.05});return}const U=i.currentTime,G=i.createBufferSource();G.buffer=p(1);const k=i.createGain();_(k,.35,.01,.08,.7,U);const Z=i.createBiquadFilter();Z.type="lowpass",Z.frequency.setValueAtTime(1800,U),Z.frequency.exponentialRampToValueAtTime(120,U+.8),G.connect(Z),Z.connect(k),k.connect(t),G.start(U),G.stop(U+.9)}return{get enabled(){return s},setEnabled:M,phasers:E,torpedo:v,warp:S,servo:y,shuttle:R,disruptor:st,impact:rt,alert:q,cloak:z,plasma:O,score:_t,get samplesReady(){return h},get running(){return!!i&&i.state==="running"},whenReady(){return u||Promise.resolve()},get useSamples(){return o},setUseSamples(L){o=L,L?s&&x():(Q(1),e?.sample&&(e.sample.stop(1),e.sample=null,e.g.gain.linearRampToValueAtTime(.16,i.currentTime+1)))},credits(){return l?.credits||[]},recordingTrack(){return!s||!n?null:n.stream.getAudioTracks()[0]||null}}}function Pv(){const i=new ie;i.name="KlingonD7";const t=un(null,{color:7175018,roughness:.6,metalness:.15}),e=en(2896684,{roughness:.6}),n=un(null,{color:5990234,roughness:.65,metalness:.1}),s=new N(new ee(13,40,24),t);s.scale.set(1.35,.62,1.55),s.position.set(0,0,96),s.castShadow=!0,i.add(s);const r=new N(new ee(5,24,14),n);r.scale.set(1.1,.55,1.3),r.position.set(0,7.2,100),i.add(r);const o=new N(new Ot(3.2,6,10,24),e);o.rotation.x=Math.PI/2,o.position.set(0,-1,114),i.add(o);const a=new N(new Ot(1.6,1.6,2,16),Vt(16730666,1.6));a.rotation.x=Math.PI/2,a.position.set(0,-1,119.5),a.userData.kind="glow",i.add(a);const c=new N(new Ot(3.2,4.4,84,20),t);c.rotation.x=Math.PI/2,c.position.set(0,1.5,44),c.castShadow=!0,i.add(c);for(let w=0;w<6;w++){const M=new N(new Ot(4.2,4.2,1.2,20),e);M.rotation.x=Math.PI/2,M.position.set(0,1.5,14+w*12),i.add(M)}const l=new Ci;l.moveTo(0,14),l.lineTo(22,4),l.lineTo(36,-22),l.lineTo(30,-62),l.lineTo(0,-70),l.lineTo(-30,-62),l.lineTo(-36,-22),l.lineTo(-22,4),l.closePath();const u=new N(new Ri(l,{depth:11,bevelEnabled:!0,bevelThickness:2.5,bevelSize:3,bevelSegments:4}),t);u.rotation.x=Math.PI/2,u.position.set(0,5.5,0),u.castShadow=!0,u.receiveShadow=!0,i.add(u);const h=new N(new bt(14,9,34),n);h.position.set(0,9.5,-34),i.add(h);const d=new N(new bt(10,5,2),Vt(16738874,2.4));d.position.set(0,9.5,-52),d.userData.kind="glow",i.add(d);const f=new N(new bt(2.2,12,26),t);f.position.set(0,16,-40),i.add(f);for(const w of[-1,1]){const M=new N(new bt(2.8,9,46),t),_=new C(w*24,1,-26),E=new C(w*70,-22,-74);M.position.copy(_).lerp(E,.5),M.lookAt(E),M.scale.z=_.distanceTo(E)/46,M.castShadow=!0,i.add(M);const b=new N(new Ot(5.5,6.5,62,24),t);b.rotation.x=Math.PI/2,b.position.set(w*72,-23,-78),b.castShadow=!0,i.add(b);const v=new N(new ee(5.5,20,12),n);v.position.set(w*72,-23,-47),i.add(v);const A=new N(new Ot(4.6,4.6,1.2,24),Vt(16734762,2.6));A.rotation.x=Math.PI/2,A.position.set(w*72,-23,-109.5),A.userData.kind="glow",i.add(A);const S=new N(new Ot(.8,1.2,6,12),e);S.rotation.x=Math.PI/2,S.position.set(w*72,-19,-44),i.add(S);for(let y=0;y<3;y++){const R=new N(new bt(.4,3,20),e);R.position.set(w*(72+5.6),-23,-70+y*0),R.rotation.z=w*.3,R.position.z=-90+y*14,i.add(R)}}const g=new N(new ee(1,32,20),oc(8257418,0));g.scale.set(95,50,135),g.position.set(0,-4,10),g.material.transparent=!0,g.material.blending=ve,g.material.depthWrite=!1,i.add(g);const x=ui("rgba(120,255,120,1)"),m=[];let p=0;return i.userData={aimPoint(){return s.getWorldPosition(new C)},hit(){p=1},fire(w){const M=m.length%2===0?-1:1,_=new C(M*72,-19,-41);i.localToWorld(_);const E=new N(new ee(1.2,12,8),new hn({color:12582832,blending:ve,transparent:!0,depthWrite:!1})),b=new tn(new je({map:x,blending:ve,depthWrite:!1,transparent:!0}));b.scale.setScalar(12),E.add(b),E.position.copy(_),i.parent?.add(E),m.push({mesh:E,from:_,to:w.clone(),t:0,dur:1.1})},animate(w){p=Math.max(0,p-w*1.8),g.material.uniforms.uIntensity.value=p*p*1.1;for(let M=m.length-1;M>=0;M--){const _=m[M];_.t+=w;const E=Math.min(1,_.t/_.dur);_.mesh.position.lerpVectors(_.from,_.to,E),E>=1&&(_.mesh.parent?.remove(_.mesh),m.splice(M,1),i.userData.onBoltHit?.(_.to))}},onBoltHit:null},i}function Dv(){const e=document.createElement("canvas");e.width=1024,e.height=1024;const n=e.getContext("2d");n.fillStyle="#59636a",n.fillRect(0,0,1024,1024),n.strokeStyle="rgba(20,25,30,0.18)",n.lineWidth=3;for(let a=0;a<1024;a+=96)n.beginPath(),n.moveTo(a,0),n.lineTo(a,1024),n.stroke();const s=1024/2,r=a=>{const c=[["#f0a030",1],["#d8502a",.82],["#9a2f6a",.64],["#5a2a8a",.46]];for(const[l,u]of c)n.fillStyle=l,n.beginPath(),n.moveTo(s,380),n.bezierCurveTo(s+a*120*u,300-40*u,s+a*420*u,260,s+a*480*u,420+60*(1-u)),n.bezierCurveTo(s+a*400*u,520,s+a*240*u,640-40*u,s,700),n.closePath(),n.fill();n.fillStyle="#f6d060";for(let l=0;l<6;l++){const u=l/5,h=s+a*(300+u*180),d=300+u*200;n.beginPath(),n.moveTo(h,d),n.lineTo(h+a*60,d-30+u*20),n.lineTo(h+a*20,d+40),n.closePath(),n.fill()}};r(1),r(-1),n.fillStyle="#e0602c",n.beginPath(),n.ellipse(s,480,70,210,0,0,Math.PI*2),n.fill(),n.fillStyle="#f0a030",n.beginPath(),n.moveTo(s-90,660),n.lineTo(s,900),n.lineTo(s+90,660),n.closePath(),n.fill(),n.fillStyle="#e0602c",n.beginPath(),n.moveTo(s-60,300),n.bezierCurveTo(s-80,200,s-20,130,s+30,120),n.bezierCurveTo(s+90,110,s+110,170,s+70,200),n.lineTo(s+40,190),n.bezierCurveTo(s+70,240,s+60,290,s+40,320),n.closePath(),n.fill(),n.fillStyle="#f6d060",n.beginPath(),n.moveTo(s+70,200),n.lineTo(s+130,235),n.lineTo(s+40,190),n.closePath(),n.fill(),n.fillStyle="#1a1c22",n.beginPath(),n.arc(s+18,170,11,0,Math.PI*2),n.fill();const o=new xn(e);return o.colorSpace=be,o.anisotropy=8,o}function da(i,t){const e=new _o({...i,transparent:!0,side:2});return e.onBeforeCompile=n=>{n.uniforms.uCloak=t.uCloak,n.uniforms.uTime=t.uTime,n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vRomPos;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vRomPos = (modelMatrix * vec4(position, 1.0)).xyz;`),n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
uniform float uCloak;
uniform float uTime;
varying vec3 vRomPos;`).replace("#include <opaque_fragment>",`#include <opaque_fragment>
        {
          float cl = clamp(uCloak, 0.0, 1.0);
          vec3 vd = normalize(vViewPosition);
          float fres = pow(1.0 - abs(dot(normalize(normal), vd)), 2.2);
          float ripple = 0.5 + 0.5 * sin(vRomPos.x * 0.22 + vRomPos.z * 0.16 + vRomPos.y * 0.3 + uTime * 7.0);
          float band = sin(cl * 3.14159);
          float a = (1.0 - cl) * (1.0 - band * 0.45 * ripple) + band * fres * (0.35 + 0.65 * ripple);
          gl_FragColor.rgb += vec3(0.25, 1.0, 0.45) * band * fres * (0.8 + 1.4 * ripple);
          gl_FragColor.a *= clamp(a, 0.0, 1.0);
        }`)},e.customProgramCacheKey=()=>"romulan-cloak-v1",e}function Iv(){const i=new ie;i.name="BirdOfPrey";const t={uCloak:{value:0},uTime:{value:0}},e=da({color:6976634,roughness:.55,metalness:.2,envMapIntensity:.4},t),n=da({color:2896440,roughness:.6,metalness:.2},t),s=da({map:Dv(),roughness:.6,metalness:.1},t),r=new Ci;r.moveTo(0,62),r.lineTo(18,40),r.lineTo(64,-10),r.lineTo(66,-32),r.lineTo(30,-24),r.lineTo(0,-34),r.lineTo(-30,-24),r.lineTo(-66,-32),r.lineTo(-64,-10),r.lineTo(-18,40),r.closePath();const o=new N(new Ri(r,{depth:4.5,bevelEnabled:!0,bevelThickness:1.2,bevelSize:1.6,bevelSegments:3}),e);o.rotation.x=Math.PI/2,o.rotation.z=Math.PI,o.position.set(0,2.2,0),o.castShadow=!0,i.add(o);const a=new Ec(r,8),c=a.attributes.uv;for(let _=0;_<c.count;_++)c.setXY(_,(c.getX(_)+66)/132,1-(c.getY(_)+34)/96);const l=new N(a,s);l.rotation.x=Math.PI/2,l.rotation.z=Math.PI,l.position.set(0,-3.75,0),i.add(l);const u=new N(new ee(13,40,24),e);u.scale.set(1,.55,1.15),u.position.set(0,4,22),u.castShadow=!0,i.add(u);const h=new N(new ee(4.2,24,14),n);h.scale.set(1,.6,1.2),h.position.set(0,10.2,24),i.add(h);const d=new N(new Ot(2.2,3,8,20),n);d.rotation.x=Math.PI/2,d.position.set(0,-1.5,38),i.add(d);const f=new N(new Ot(1.4,1.4,1.2,16),Vt(16734762,1.4));f.rotation.x=Math.PI/2,f.position.set(0,-1.5,42.3),f.userData.kind="glow",i.add(f);for(const _ of[-1,1]){const E=new N(new Ot(3.2,3.6,46,20),e);E.rotation.x=Math.PI/2,E.position.set(_*62,3.5,-8),E.castShadow=!0,i.add(E);const b=new N(new ee(3.2,18,12),n);b.position.set(_*62,3.5,15),i.add(b);const v=new N(new Ot(2.6,2.6,.8,18),Vt(16742970,2.2));v.rotation.x=Math.PI/2,v.position.set(_*62,3.5,-31.5),v.userData.kind="glow",i.add(v);const A=new N(new bt(6,1.4,10),n);A.position.set(_*60,4.4,-8),i.add(A)}const g=new N(new bt(3,2.2,58),n);g.position.set(0,5.6,-4),i.add(g);const x=[];i.traverse(_=>{_.userData.kind==="glow"&&x.push(_.material)});const m=ui("rgba(255,120,60,1)"),p=[];let w=0,M=0;return i.userData={aimPoint(){return u.getWorldPosition(new C)},get cloak(){return w},get cloakTarget(){return M},setCloak(_){M=_?1:0},setCloakLevel(_){w=M=Math.min(1,Math.max(0,_))},fire(_){const E=f.getWorldPosition(new C),b=new N(new ee(3.2,20,14),new hn({color:16769200,blending:ve,transparent:!0,depthWrite:!1})),v=new tn(new je({map:m,blending:ve,depthWrite:!1,transparent:!0,opacity:.9}));v.scale.setScalar(30),b.add(v),b.position.copy(E),i.parent?.add(b),p.push({mesh:b,halo:v,from:E,to:_.clone(),t:0,dur:4.2})},onBoltHit:null,animate(_,E){w+=(M-w)*Math.min(1,_*.9),Math.abs(M-w)<.002&&(w=M),t.uCloak.value=w,t.uTime.value=E;const b=w<.5;for(const v of[e,n,s])v.depthWrite=b;for(const v of x)v.opacity=1-w;i.traverse(v=>{v.isMesh&&v.userData.kind==="glow"&&(v.material.transparent=!0,v.visible=w<.98)}),o.visible=u.visible=l.visible=w<.995;for(let v=p.length-1;v>=0;v--){const A=p[v];A.t+=_;const S=Math.min(1,A.t/A.dur);A.mesh.position.lerpVectors(A.from,A.to,S*S*.3+S*.7),A.halo.scale.setScalar(30+S*40),S>=1&&(A.mesh.parent?.remove(A.mesh),p.splice(v,1),i.userData.onBoltHit?.(A.to))}}},i}const Fs={beauty:{pos:[330,80,290],target:[0,-8,-5]},bow:{pos:[12,10,470],target:[0,-10,20]},bridge:{pos:[30,46,176],target:[0,10,78]},bridgeIn:{pos:[1.6,13,71],target:[0,12.5,84],fov:64},engineeringIn:{pos:[2.5,-31.2,-8],target:[0,-31,-30],fov:62},transporterIn:{pos:[28.4,2.9,66],target:[28,1.9,73.5],fov:60},sickbayIn:{pos:[-25.5,2.7,96.5],target:[-33.5,1.7,101.5],fov:62},saucer:{pos:[.5,300,78],target:[0,0,78]},deflector:{pos:[66,-22,140],target:[0,-35,42]},hangar:{pos:[14,-26,-150],target:[0,-33,-50]},nacelle:{pos:[126,36,62],target:[42,10,-10]},stern:{pos:[70,24,-420],target:[0,-12,-40]},profile:{pos:[500,-8,-8],target:[0,-10,-8]},plan:{pos:[.5,720,-6],target:[0,0,-6]},belly:{pos:[40,-320,10],target:[0,-10,10]}};function Lv(i){const t=new Fg({canvas:i,antialias:!0,alpha:!1,preserveDrawingBuffer:!0,powerPreference:"high-performance"});t.setPixelRatio(Math.min(devicePixelRatio,2)),t.setSize(innerWidth,innerHeight),t.shadowMap.enabled=!0,t.shadowMap.type=wu,t.toneMapping=cc,t.toneMappingExposure=1.12,t.localClippingEnabled=!0;const e=new Qr;e.background=new Wt(329483);const n=new an(40,innerWidth/innerHeight,.8,9e3);n.position.set(...Fs.beauty.pos);const s=1e3,r=new ho(-s*innerWidth/innerHeight/2,s*innerWidth/innerHeight/2,s/2,-s/2,-4e3,9e3);let o=n;const a=new z_(o,i);a.enableDamping=!0,a.dampingFactor=.06,a.target.set(...Fs.beauty.target),a.maxDistance=1800,a.minDistance=1.2;const c=new sx(t),l=new rx(e,o);c.addPass(l);const u=new ux(e,o,{focus:300,aperture:2e-5,maxblur:.012});u.enabled=!1,c.addPass(u);const h=new _s(new ft(innerWidth,innerHeight),.34,.55,.8);c.addPass(h),c.addPass(new cx),c.setSize(innerWidth,innerHeight);const d={enabled:!1,aperture:.35,focus:0,auto:!0};function f(){if(u.enabled=d.enabled,!d.enabled)return;const F=d.auto||d.focus<=0?o.position.distanceTo(a.target):d.focus;u.uniforms.focus.value=F,u.uniforms.aperture.value=(4e-6+d.aperture*9e-5)*Math.min(1,120/Math.max(20,F)),u.uniforms.maxblur.value=.006+d.aperture*.012}const g=new Ja(t);e.environment=g.fromScene(new hx,.04).texture,e.environmentIntensity=.5;const x=new w_(12044509,1315344,.5),m=new ea(16773596,2.3);m.position.set(260,300,220),m.castShadow=!0,m.shadow.mapSize.set(4096,4096),m.shadow.camera.near=50,m.shadow.camera.far=1200,m.shadow.camera.left=-200,m.shadow.camera.right=200,m.shadow.camera.top=200,m.shadow.camera.bottom=-200,m.shadow.bias=-4e-4,m.shadow.normalBias=.6;const p=new ea(9418751,.5);p.position.set(-260,40,-120);const w=new ea(16767392,.4);w.position.set(60,-120,-300);const M=new Tn(16734736,60,90,1.6),_=new Tn(16734736,60,90,1.6),E=new Tn(7001343,45,90,1.8);e.add(x,m,p,w,M,_,E);const b=wv();e.add(b);const v=Mv();e.add(v);const A=Tv(()=>o,i);v.add(A.group);const S=Av(()=>o,a);e.add(S.group);const y=Rv(),R=Pv();R.rotation.y=Math.PI,R.position.set(90,-40,820),R.visible=!1,e.add(R);const W=R.position.clone();let q=0;R.userData.onBoltHit=()=>{v.userData.effects.shieldHit(),y.impact?.("disruptor")};const z=Iv();z.position.set(-360,24,540),z.rotation.y=Math.PI+.55,z.visible=!1,z.userData.setCloakLevel(1),e.add(z);const O=z.position.clone();let B=0;z.userData.onBoltHit=()=>{v.userData.effects.shieldHit(),y.impact?.("plasma")};function j(){const F=z.visible&&z.userData.cloak<.6;if(R.visible&&(!F||R.position.distanceTo(v.position)<z.position.distanceTo(v.position)))return v.worldToLocal(R.userData.aimPoint());if(F)return v.worldToLocal(z.userData.aimPoint())}v.userData.effects.onImpact=(F,Et)=>{const Nt=v.localToWorld(F.clone());R.visible&&Nt.distanceTo(R.userData.aimPoint())<160&&(R.userData.hit(),y.impact?.(Et)),z.visible&&Nt.distanceTo(z.userData.aimPoint())<120&&y.impact?.(Et)};const H=new O_(700,70,2765632,1448738);H.position.y=-75,H.visible=!1,e.add(H);const Y={mode:"exterior",light:"studio",cam:"beauty",autoOrbit:!1,explode:0,clip:.5,labels:!1,warp:!1,tour:!1,ortho:!1,grid:!1,playback:!1,markers:!0,quality:"high",deck:7,alert:!1},yt=["beauty","bow","bridge","bridgeIn","transporterIn","sickbayIn","saucer","deflector","engineeringIn","nacelle","stern","hangar","belly","profile"],X={index:0,t:0,from:{pos:new C,target:new C},to:{pos:new C,target:new C},travel:6.5,hold:2.5},et=F=>F*F*(3-2*F);function pt(){X.index=(X.index+1)%yt.length,X.t=0,X.from.pos.copy(o.position),X.from.target.copy(a.target);const F=yt[X.index],Et=Fs[F];X.to.pos.set(...Et.pos),X.to.target.set(...Et.target),X.fovFrom=n.fov,X.fovTo=Et.fov||40,Y.cam=F,F==="profile"&&Y.mode==="exterior"?(X.openedCut=!0,G("cutaway")):X.openedCut&&F!=="profile"&&(X.openedCut=!1,G("exterior")),F==="hangar"?(Ae.setHangar(!0),setTimeout(()=>Y.tour&&Ae.launchShuttle(),3500)):F==="belly"&&Ae.setHangar(!1),Q?.(F)}let Q=null;function it(F){X.t+=F;const Et=et(Math.min(1,X.t/X.travel));o.position.lerpVectors(X.from.pos,X.to.pos,Et),a.target.lerpVectors(X.from.target,X.to.target,Et),X.fovTo&&(n.fov=X.fovFrom+(X.fovTo-X.fovFrom)*Et,n.updateProjectionMatrix()),X.t>=X.travel&&o.position.sub(a.target).applyAxisAngle(new C(0,1,0),F*.05).add(a.target),X.t>=X.travel+X.hold&&pt()}function _t(){return Y.mode==="blueprint"||Y.light==="studio"?1.12:Y.light==="space"?.95:.8}function st(F){Y.light=F,F==="studio"?(e.background.set(329483),m.color.set(16773596),m.intensity=2.3,p.intensity=.5,x.intensity=.5,e.environmentIntensity=.5,h.strength=.34,t.toneMappingExposure=1.12):F==="space"?(e.background.set(131848),m.color.set(14543103),m.intensity=1.4,p.intensity=.18,x.intensity=.16,e.environmentIntensity=.22,h.strength=.6,t.toneMappingExposure=.95):(e.background.set(65796),m.intensity=.12,p.intensity=.04,x.intensity=.06,e.environmentIntensity=.06,h.strength=1.1,t.toneMappingExposure=.8)}function rt(F){return ri.find(Et=>Et.id===F)||ri[0]}function L(F,Et=!0){Y.deck=F;const Nt=rt(F);Nt&&(v.userData.setDeckCut(!0,Nt.y+1.25,Nt.id),Et&&!Y.playback&&V(new C(.5,Nt.y+Math.max(120,Nt.r*2.6),Nt.z),new C(0,Nt.y,Nt.z),1),U?.(Nt))}let U=null;function G(F){const Et=Y.mode==="decks";Y.mode=F,A.setVisible(Y.markers&&F!=="explode"&&F!=="decks"&&F!=="blueprint");const Nt=F==="cutaway";if(Et&&F!=="decks"&&v.userData.setDeckCut(!1),v.userData.setCutaway(Nt,Y.clip),v.userData.interiors.visible=Nt||Y.labels,F==="explode"?v.userData.setExplode(Math.max(Y.explode,.75)):v.userData.setExplode(Y.explode),v.userData.setBlueprint(F==="blueprint"),b.visible=F!=="blueprint"&&F!=="decks",F==="decks"){L(Y.deck||7),v.userData.interiors.userData.setLabels(!0,Y.deck||7),e.background.set(793132),m.intensity=1.2,x.intensity=1,e.environmentIntensity=.6,h.strength=.12,H.visible=!0;return}else Nt||v.userData.interiors.userData.setLabels(Y.labels);F==="blueprint"?(e.background.set(925235),m.intensity=.3,x.intensity=1.2,e.environmentIntensity=.9,h.strength=.08,H.visible=!0):(H.visible=Y.grid,st(Y.light))}function k(F){if(F===Y.ortho)return;const Et=o,Nt=F?r:n;if(Nt.position.copy(Et.position),Nt.quaternion.copy(Et.quaternion),F){const qe=2*Et.position.distanceTo(a.target)*Math.tan(n.fov*Math.PI/360);r.zoom=s/qe,r.updateProjectionMatrix()}o=Nt,Y.ortho=F,a.object=o,l.camera=o,u.camera=o,a.update()}function Z(F,Et=!0){const Nt=Fs[F];Nt&&(Y.cam=F,n.fov=Nt.fov||40,n.updateProjectionMatrix(),Et?V(new C(...Nt.pos),new C(...Nt.target),1.4):(o.position.set(...Nt.pos),a.target.set(...Nt.target),a.update()))}function P(){if(Ie)return;n.aspect=innerWidth/innerHeight,n.updateProjectionMatrix();const F=innerWidth/innerHeight;r.left=-s*F/2,r.right=s*F/2,r.updateProjectionMatrix(),t.setSize(innerWidth,innerHeight),c.setSize(innerWidth,innerHeight)}addEventListener("resize",P);const mt=v.userData.nacelles.children[0],ot=v.userData.nacelles.children[1],vt=new C(0,0,St.half+St.nacelleZ+2),lt={active:!1,t:0,dur:1.6,from:{pos:new C,target:new C},to:{pos:new C,target:new C}};function V(F,Et,Nt=1.6){lt.active=!0,lt.t=0,lt.dur=Nt,lt.from.pos.copy(o.position),lt.from.target.copy(a.target),lt.to.pos.copy(F),lt.to.target.copy(Et)}A.onSelect=F=>{const Et=new C(...F.view.dir).normalize(),Nt=new C(...F.pos).addScaledVector(Et,F.view.dist);V(Nt,new C(...F.pos)),nt?.(F)};let nt=null;const D=new Set;let T=0,K=performance.now();function ht(F){const Et=Math.min(.05,(F-K)/1e3);K=F;for(const Nt of D)Nt(Et,F/1e3);if(Y.playback)Ft?.(Et),o.lookAt(a.target);else{if(lt.active){lt.t+=Et;const Nt=et(Math.min(1,lt.t/lt.dur));o.position.lerpVectors(lt.from.pos,lt.to.pos,Nt),a.target.lerpVectors(lt.from.target,lt.to.target,Nt),lt.t>=lt.dur&&(lt.active=!1)}else Y.tour?it(Et):Y.autoOrbit&&Y.mode!=="blueprint"&&o.position.sub(a.target).applyAxisAngle(new C(0,1,0),Et*.07).add(a.target);a.update()}if(v.userData.animate(F/1e3,Et),b.userData.animate(Et),R.visible&&(q+=Et,R.position.set(W.x+Math.sin(q*.18)*25,W.y+Math.sin(q*.11)*8,W.z),R.rotation.z=Math.sin(q*.14)*.08,R.userData.animate(Et)),z.visible&&(B+=Et,z.position.set(O.x+Math.sin(B*.15)*18,O.y+Math.sin(B*.1)*6,O.z+Math.cos(B*.12)*12),z.rotation.z=Math.sin(B*.17)*.06,z.userData.animate(Et,F/1e3)),A.animate(F/1e3,o),ut>0&&(ut=Math.max(0,ut-Et*1.6),t.toneMappingExposure=_t()+ut*ut*2.6),d.enabled&&f(),S.active&&S.update(),++T===3){dt=!0;for(const Nt of gt)Nt();gt.clear()}mt.getWorldPosition(M.position).add(vt.clone().applyQuaternion(v.quaternion)),ot.getWorldPosition(_.position).add(vt.clone().applyQuaternion(v.quaternion)),v.userData.secondary.getWorldPosition(E.position).add(new C(0,-.5,62).applyQuaternion(v.quaternion)),c.render(),requestAnimationFrame(ht)}requestAnimationFrame(ht);const gt=new Set;let dt=!1,Ft=null,Tt=null,Dt=null,te=null,Mt=null,Lt=null,Xt=null,qt=null,Ut=null;function se(){return{pos:o.position.toArray(),target:a.target.toArray(),state:{mode:Y.mode,light:Y.light,warp:Y.warp,labels:Y.labels,markers:Y.markers,hangar:v.userData.hangar.isOpen,shuttle:v.userData.hangar.launching&&!v.userData.hangar.descending,descent:v.userData.hangar.descending,klingon:R.visible,alert:Y.alert,romulan:z.visible,cloak:z.userData.cloakTarget,clip:Y.clip,explode:Y.explode,fov:n.fov,shipX:v.position.x,shipY:v.position.y,shipZ:v.position.z,shipYaw:v.rotation.y,shipPitch:v.rotation.x,shipRoll:v.rotation.z,lift:Zt.progress,liftDoors:Zt.doors,liftCam:0,chase:0,dof:d.enabled?d.aperture:0,focus:d.auto?0:d.focus,caption:"",score:"off",fade:0}}}const Zt={progress:0,doors:0};function de({x:F,y:Et,z:Nt,yaw:He,pitch:qe,roll:dn}){typeof F=="number"&&(v.position.x=F),typeof Et=="number"&&(v.position.y=Et),typeof Nt=="number"&&(v.position.z=Nt),typeof He=="number"&&(v.rotation.y=He),typeof qe=="number"&&(v.rotation.x=qe),typeof dn=="number"&&(v.rotation.z=dn)}function $(F,Et){o.position.copy(F),a.target.copy(Et)}function Ct(F){F.mode&&F.mode!==Y.mode&&G(F.mode),F.light&&F.light!==Y.light&&Y.mode!=="blueprint"&&st(F.light),typeof F.warp=="boolean"&&F.warp!==Y.warp&&Ae.setWarp(F.warp),typeof F.labels=="boolean"&&F.labels!==Y.labels&&Ae.setLabels(F.labels),typeof F.markers=="boolean"&&F.markers!==Y.markers&&Ae.setHotspots(F.markers),typeof F.hangar=="boolean"&&F.hangar!==v.userData.hangar.isOpen&&Ae.setHangar(F.hangar),F.shuttle===!0?Ae.launchShuttle():F.shuttle===!1&&v.userData.hangar.launching&&!v.userData.hangar.descending&&Ae.recallShuttle(),F.descent===!0?Ae.launchDescent():F.descent===!1&&v.userData.hangar.descending&&Ae.recallShuttle(),typeof F.klingon=="boolean"&&F.klingon!==R.visible&&Ae.setKlingon(F.klingon),typeof F.alert=="boolean"&&F.alert!==Y.alert&&Ae.setAlert(F.alert),typeof F.romulan=="boolean"&&F.romulan!==z.visible&&Ae.setRomulan(F.romulan),F.plasma===!0&&Ae.romulanFire(),typeof F.caption=="string"&&qt?.(F.caption),typeof F.score=="string"&&y.score?.(F.score),F.phasers===!0&&Ae.firePhasers(),F.torpedo===!0&&Ae.fireTorpedo(),F.disruptor===!0&&Ae.klingonFire(),Rt?.(F)}let ut=0;function xt(){ut=1}let Rt=null;function Pt(F){if(typeof F.clip=="number"&&Math.abs(F.clip-Y.clip)>1e-4&&(Y.clip=F.clip,v.userData.setClip(F.clip)),typeof F.explode=="number"&&Math.abs(F.explode-Y.explode)>1e-4&&(Y.explode=F.explode,v.userData.setExplode(Y.mode==="explode"?Math.max(F.explode,.75):F.explode)),typeof F.fov=="number"&&Math.abs(F.fov-n.fov)>.001&&(n.fov=F.fov,n.updateProjectionMatrix()),de({x:F.shipX,y:F.shipY,z:F.shipZ,yaw:F.shipYaw,pitch:F.shipPitch,roll:F.shipRoll}),typeof F.lift=="number"&&(Zt.progress=F.lift,v.userData.turbolift.setProgress(F.lift)),typeof F.liftDoors=="number"&&(Zt.doors=F.liftDoors,v.userData.turbolift.setDoors(F.liftDoors)),typeof F.cloak=="number"&&z.userData.setCloak(F.cloak>.5),typeof F.fade=="number"&&Ut?.(F.fade),typeof F.dof=="number"&&(d.enabled=F.dof>.005,d.aperture=F.dof,typeof F.focus=="number"&&(d.auto=F.focus<=0,d.focus=F.focus),f(),Mt?.()),typeof F.liftCam=="number"&&F.liftCam>.001){const Et=v.userData.turbolift,Nt=v.localToWorld(Et.cameraAt(Zt.progress)),He=v.localToWorld(Et.lookAt(Zt.progress));o.position.lerp(Nt,Math.min(1,F.liftCam)),a.target.lerp(He,Math.min(1,F.liftCam))}if(typeof F.chase=="number"&&F.chase>.001&&v.userData.hangar.launching){const Et=v.userData.hangar,Nt=Et.shuttleWorld(Yt.pos),He=Et.shuttleHeading(Yt.dir),qe=Yt.up.set(0,1,0),dn=Yt.side.crossVectors(He,qe).normalize(),$n=Yt.cam.copy(Nt).addScaledVector(He,-24).addScaledVector(qe,6).addScaledVector(dn,9),On=Yt.look.copy(Nt).addScaledVector(He,18);o.position.lerp($n,Math.min(1,F.chase)),a.target.lerp(On,Math.min(1,F.chase))}}const Yt={pos:new C,dir:new C,up:new C,side:new C,cam:new C,look:new C};function we(F){Y.playback=F,a.enabled=!F,F&&(Y.tour=!1,lt.active=!1)}let Ie=null;function ae(F,Et){if(F&&Et){Ie=[F,Et],t.setPixelRatio(1),t.setSize(F,Et,!1),c.setSize(F,Et),n.aspect=F/Et,n.updateProjectionMatrix();const Nt=F/Et;r.left=-s*Nt/2,r.right=s*Nt/2,r.updateProjectionMatrix(),i.style.width="100%",i.style.height="100%",i.style.objectFit="contain"}else Ie=null,t.setPixelRatio(Math.min(devicePixelRatio,2)),i.style.objectFit="",P()}async function nn({interiors:F=!1}={}){const Et=new so,Nt=v.userData.interiors.visible,He=v.userData.cutaway,qe=Y.mode==="blueprint";qe&&v.userData.setBlueprint(!1),v.userData.setCutaway(!1),v.userData.interiors.visible=F,F&&v.userData.interiors.userData.setLabels(!1),v.userData.setExplode(0),v.traverse(dn=>{dn.userData.kind==="edges"&&(dn.visible=!1)});try{const dn=await Et.parseAsync(v,{binary:!0,onlyVisible:!0}),$n=new Blob([dn],{type:"model/gltf-binary"}),On=document.createElement("a");On.href=URL.createObjectURL($n),On.download=F?"uss-enterprise-ncc-1701-cutaway.glb":"uss-enterprise-ncc-1701.glb",On.click(),setTimeout(()=>URL.revokeObjectURL(On.href),5e3)}finally{F&&v.userData.interiors.userData.setLabels(Y.labels),v.userData.interiors.visible=Nt,qe&&v.userData.setBlueprint(!0),v.userData.setCutaway(He,Y.clip),Y.mode==="explode"?v.userData.setExplode(Math.max(Y.explode,.75)):v.userData.setExplode(Y.explode)}}function vn(){ae(0,0)}function er(F="uss-enterprise"){c.render(),t.domElement.toBlob(Et=>{if(!Et)return;const Nt=document.createElement("a");Nt.href=URL.createObjectURL(Et),Nt.download=`${F}.png`,Nt.click(),setTimeout(()=>URL.revokeObjectURL(Nt.href),5e3)},"image/png")}const Ae={scene:e,get camera(){return o},controls:a,ship:v,state:Y,grid:H,renderer:t,composer:c,canvas:i,cameras:Fs,setOrtho:k,savePNG:er,setRenderSize:ae,restoreRenderSize:vn,captureState:se,setShipPose:de,getShipPose(){return{x:v.position.x,y:v.position.y,z:v.position.z,yaw:v.rotation.y,pitch:v.rotation.x,roll:v.rotation.z}},setCameraDirect:$,applyDiscrete:Ct,applyContinuous:Pt,setPlayback:we,onPlaybackTick(F){Ft=F},onDiscreteApplied(F){Rt=F},setFov(F){n.fov=F,n.updateProjectionMatrix()},onFrame(F){return D.add(F),()=>D.delete(F)},cancelFlight(){lt.active=!1},renderOnce(){c.render()},setGrid(F){Y.grid=F,H.visible=F||Y.mode==="blueprint"},setDeck(F,Et=!0){Y.mode!=="decks"&&G("decks"),L(F,Et)},onDeckChanged(F){U=F},deckLevels:ri,dof:d,setDof({enabled:F,aperture:Et,focus:Nt,auto:He}={}){typeof F=="boolean"&&(d.enabled=F),typeof Et=="number"&&(d.aperture=Et),typeof Nt=="number"&&(d.focus=Nt),typeof He=="boolean"&&(d.auto=He),f()},setQuality(F){Y.quality=F;const Et=F==="high";t.setPixelRatio(Et?Math.min(devicePixelRatio,2):1),t.shadowMap.enabled=Et,m.castShadow=Et,h.enabled=F!=="low",e.traverse(Nt=>{Nt.material&&Nt.material.needsUpdate!==void 0&&(Nt.material.needsUpdate=!0)}),P()},applyLight:st,applyMode:G,goCamera:Z,exportGLB:nn,hotspots:A,reference:S,flyTo:V,onReady(F){dt?F():gt.add(F)},onHotspot(F){nt=F},setHotspots(F){Y.markers=F,A.setVisible(F&&!["explode","decks","blueprint"].includes(Y.mode))},audio:y,setWarp(F){F&&!Y.warp&&xt(),F!==Y.warp&&y.warp(F),Y.warp=F,b.userData.setWarp(F),v.userData.setWarp(F),h.strength=F?Math.max(h.strength,.55):h.strength,Tt?.(F)},firePhasers(){v.userData.effects.firePhasers(j()),y.phasers()},fireTorpedo(){v.userData.effects.fireTorpedo(j()),y.torpedo()},setAlert(F){F!==Y.alert&&(Y.alert=F,v.userData.setAlert(F),y.alert(F),F&&!Y.warp&&(h.strength=Math.max(h.strength,.45)),Lt?.(F))},onAlertChanged(F){Lt=F},romulan:z,setRomulan(F){F?(z.visible=!0,z.userData.setCloak(!1),y.cloak?.(!1)):(z.userData.setCloak(!0),y.cloak?.(!0),setTimeout(()=>{z.userData.cloakTarget===1&&(z.visible=!1)},4500)),Xt?.(F)},setCloak(F){z.visible&&(z.userData.setCloak(F),y.cloak?.(F))},onRomulanChanged(F){Xt=F},onCaption(F){qt=F},onFade(F){Ut=F},romulanFire(){if(!z.visible||z.userData.cloak>.6)return;const F=v.localToWorld(new C(0,0,St.saucerZ));z.userData.fire(F),y.plasma?.()},klingon:R,setKlingon(F){R.visible=F,te?.(F)},onKlingonChanged(F){te=F},onDofApplied(F){Mt=F},klingonFire(){if(!R.visible)return;const F=v.localToWorld(new C(0,0,St.saucerZ));R.userData.fire(F),y.disruptor?.()},onWarpChanged(F){Tt=F},setHangar(F){F!==v.userData.hangar.isOpen&&y.servo(F),v.userData.setHangar(F),Dt?.(F)},onHangarChanged(F){Dt=F},launchShuttle(){v.userData.hangar.isOpen||y.servo(!0),v.userData.launchShuttle(),y.shuttle(),Dt?.(!0)},launchDescent(){if(v.userData.hangar.launching)return;v.userData.hangar.isOpen||y.servo(!0);const F=b.userData.planet;v.userData.launchShuttleTo(F.getWorldPosition(new C),F.geometry.parameters.radius,46),y.shuttle(),Dt?.(!0)},recallShuttle(){v.userData.recallShuttle()},setTour(F,Et){Y.tour=F,Q=Et||null,a.enabled=!F,F&&(X.index=-1,pt())},setExplode(F){Y.explode=F,v.userData.setExplode(Y.mode==="explode"?Math.max(F,.75):F)},setClip(F){Y.clip=F,v.userData.setClip(F)},setLabels(F){Y.labels=F,v.userData.interiors.userData.setLabels(F),v.userData.interiors.visible=F||Y.mode==="cutaway"}};return Ae}function Uv(i,t,e={}){const n=e.lift,s=[],r=["phasers","torpedo","disruptor","plasma"];let o={...t,light:"space",mode:"exterior",score:"calm",fade:0,caption:"",dof:.25};const a=(E,b,v,A={},S="smooth")=>{o={...o,...A},s.push({t:E,pos:[...b],target:[...v],state:{...o},ease:S});for(const y of r)o[y]=!1;return s[s.length-1]},c=()=>s[s.length-1],l=(E,b,v,A={})=>{const S=c();a(E-.45,S.pos,S.target,{fade:0},"linear"),a(E,S.pos,S.target,{fade:1},"linear"),a(E+.01,b,v,{fade:1,...A},"linear"),a(E+.6,b,v,{fade:0},"linear")},u=E=>i[E],h=E=>u(E).pos,d=E=>u(E).target,f=[60,26,980],g=[14,12,540],x=[0,-10,20],m=E=>f.map((b,v)=>b+(g[v]-b)*E);if(a(0,f,x,{fov:30,fade:1,dof:.25},"linear"),a(1.2,m(.075),x,{fade:.6,caption:"U.S.S. ENTERPRISE|NCC-1701 · Constitution class · 288.6 m"},"linear"),a(3,m(.19),x,{fade:0},"linear"),a(8,m(.5),x,{caption:""},"linear"),a(9.5,m(.59),x,{caption:"A reconstruction from the Smithsonian 11-foot studio model|and Alan Sinclair's orthographics"},"linear"),a(15.5,m(.97),x,{caption:""},"linear"),a(17,h("bow"),d("bow"),{fov:36,caption:"I · THE SHIP|Primary hull · dorsal · engineering hull · warp nacelles"}),a(22,[180,40,420],[0,-8,20],{caption:""}),a(26,h("beauty"),d("beauty"),{fov:40}),a(33,[12,168,0],[0,8,78],{fov:40,caption:"Saucer registry|Arched name and straight registry, as painted on the studio model"}),a(38,[34,150,-14],[0,8,78],{caption:""}),a(41,h("nacelle"),d("nacelle"),{fov:44}),a(47,[62,18,34],[41.5,10.5,12],{fov:40,dof:.6,caption:"Bussard collectors|Spinning fan blades behind the domes"}),a(52,[58,16,40],[41.5,10.5,12],{caption:"",dof:.3}),a(54,h("deflector"),d("deflector"),{fov:40,caption:"Main deflector|Copper dish forward of the engineering hull"}),a(59,[50,-30,150],[0,-35,42],{caption:""}),a(61,h("stern"),d("stern"),{fov:40}),a(63.5,[180,30,-380],[0,-12,-40],{light:"night",caption:"Running lights|Deep-space lighting scheme"}),a(69,[300,-30,-200],[0,-10,-8],{caption:""}),l(70,h("profile"),d("profile"),{mode:"cutaway",clip:.36,light:"space",fov:36,score:"wonder",caption:"II · INSIDE|Longitudinal section · 23 decks fitted to the hull"}),a(72,h("profile"),d("profile"),{clip:.38},"linear"),a(77,[470,0,-8],d("profile"),{clip:.47,caption:""},"linear"),a(82,[430,12,-8],d("profile"),{clip:.55},"linear"),a(83.5,[300,160,260],[0,-8,-5],{mode:"exterior",explode:0,fov:42,caption:"Exploded assembly|Primary hull · dorsal · engineering hull · pylons · warp nacelles"}),a(89.5,[260,180,300],[0,-8,-5],{explode:1}),a(92,[240,170,320],[0,-8,-5],{explode:1,caption:""}),a(95,[300,160,260],[0,-8,-5],{explode:0}),l(96,[430,-8,-8],[0,-10,-8],{mode:"blueprint",fov:36,caption:"Blueprint|Gold edge lines on a drafting-blue field"}),a(100,[300,300,0],[0,-4,0],{fov:38}),a(104,[.5,470,10],[0,0,10],{fov:40,caption:""}),l(105,[.5,380,60],[0,0,60],{mode:"decks",caption:"Deck plans|Deck 7 · main deck · horizontal section"}),a(112,[.5,360,75],[0,0,72],{caption:""},"linear"),l(113,[2.4,13.9,70.5],[0,12.3,84],{mode:"exterior",light:"studio",fov:64,caption:"The bridge|Command well · helm and navigation · perimeter stations"}),a(121,[1.2,13.7,74],[0,12.3,84],{caption:""}),a(124,[.4,13.2,75.5],[0,12.3,69],{fov:66}),a(126.5,[.2,12.8,72.6],[0,12.3,68],{fov:68,liftDoors:1}),n){const E=(b,v,A,S={},y="smooth")=>a(v,n.cameraAt(b).toArray(),n.lookAt(b).toArray(),{fov:70,lift:b,liftDoors:A,liftCam:1,...S},y);E(0,126.55,1,{},"linear"),E(0,128.3,1,{},"linear"),E(0,129.3,0,{caption:"Turbolift|Bridge to main engineering, down the saucer trunk and along the dorsal"},"linear"),E(.12,131.3,0,{},"in"),E(.5,135.3,0,{},"linear"),E(.88,139.3,0,{caption:""},"linear"),E(1,141.3,0,{},"out"),E(1,142.8,1,{},"smooth")}a(146,h("engineeringIn"),d("engineeringIn"),{fov:62,lift:1,liftDoors:1,liftCam:0,caption:"Main engineering|Reactor grille · intermix conduits · dilithium table"}),a(152,[1.6,-31.1,-14.5],[0,-31.3,-30],{fov:60},"linear"),a(157,[-1.5,-31,-19],[0,-31.5,-30],{liftDoors:0,caption:""}),l(158,h("transporterIn"),d("transporterIn"),{fov:60,lift:0,caption:"Transporter room|Six pads under the overhead disc · operator's console"}),a(165,[28.2,2.8,67.8],[28,1.9,73.5],{caption:""}),l(166,h("sickbayIn"),d("sickbayIn"),{fov:62,caption:"Sickbay|Three diagnostic beds with readouts · doctor's office"}),a(173,[-27,2.6,97.5],[-33.5,1.7,101.5],{caption:""}),l(174,h("stern"),d("stern"),{light:"space",fov:40,score:"calm",caption:"III · FLIGHT DECK|Clamshell doors · two Class F shuttlecraft"}),a(179,h("hangar"),d("hangar"),{fov:44,hangar:!0}),a(181,[16,-25,-148],[0,-33,-50],{caption:""}),a(183,[14,-26,-150],[0,-33,-50],{shuttle:!0}),a(191,[36,-24,-135],[0,-33,-72],{fov:46}),a(193,[36,-24,-135],[0,-33,-72],{chase:1},"in"),a(195,[36,-24,-135],[0,-33,-72],{chase:1,caption:"Shuttlecraft Galileo|Taxi out over the fantail, then climb away"},"linear"),a(201,[36,-24,-135],[0,-33,-72],{chase:1,fov:50,caption:""},"linear"),a(203,[36,-24,-135],[0,-33,-72],{chase:1,fov:50},"linear"),a(206.5,[-60,20,-330],[0,-10,-200],{chase:0,fov:40}),l(208,[2.4,13.9,70.5],[0,12.3,84],{light:"studio",fov:64,alert:!0,score:"tense",shuttle:!1,hangar:!1,caption:"IV · RED ALERT|All hands to battle stations"}),a(214,[3,13.8,73],[-1,12.3,84],{fov:60,caption:""}),l(215,[-130,30,520],[90,-40,820],{light:"space",klingon:!0,fov:40,caption:"Klingon D7|Battle cruiser off the starboard bow"}),a(219,[-40,20,610],[90,-40,820],{fov:38,disruptor:!0}),a(219.5,[-30,18,620],[90,-40,820],{caption:""}),a(222,[60,-20,200],[60,-30,700],{fov:42,phasers:!0}),a(225,[-30,20,180],[80,-40,800],{fov:40,torpedo:!0,disruptor:!0}),a(229,[220,60,620],[60,-30,780],{fov:36,phasers:!0},"linear"),a(233,[420,40,160],[0,-10,0],{fov:40,torpedo:!0}),a(236,[-90,34,300],[-360,24,540],{fov:36,cloak:1,romulan:!0}),a(237,[-90,34,300],[-360,24,540],{cloak:0,caption:"Romulan Bird-of-Prey|Decloaking off the port bow"},"linear"),a(241,[-300,-120,400],[-360,20,540],{fov:40,caption:""}),a(243,[-320,-110,430],[-360,20,540],{fov:40,plasma:!0,caption:"Plasma torpedo|Balance of Terror"}),a(245,[-330,-100,440],[-360,20,540],{caption:""}),a(247,[120,40,160],[-200,20,400],{fov:44}),a(249,[120,40,160],[-200,20,400],{phasers:!0}),a(252,[-250,60,480],[-360,24,540],{fov:38,torpedo:!0}),a(255,[320,70,320],[0,-10,240],{fov:52,caption:"All weapons|Phasers · photon torpedoes · disruptor and plasma return fire"}),a(256,[320,70,320],[0,-10,240],{phasers:!0,torpedo:!0}),a(257,[310,68,330],[0,-10,240],{disruptor:!0,plasma:!0}),a(258.5,[300,66,340],[0,-10,240],{phasers:!0}),a(259.5,[290,64,350],[0,-10,240],{torpedo:!0}),a(261,[280,62,360],[0,-10,240],{caption:""}),a(263.5,[-250,60,480],[-360,24,540],{fov:38,cloak:1}),a(266,h("stern"),d("stern"),{fov:40,klingon:!1,alert:!1,caption:"Warp factor 6|Bound for a Class-M planet"}),a(268,[80,26,-440],[0,-12,-40],{warp:!0},"in"),a(273,[10,30,-900],[0,-12,-300],{fov:48,caption:""});const p={shipX:1550,shipY:-450,shipZ:-2150,shipYaw:-.69,shipPitch:.04,shipRoll:.08},w=[p.shipX,p.shipY,p.shipZ],M=[1595,-485,-2204],_=[1882,-642,-2552];return l(274,[1290,-300,-1860],w,{warp:!1,romulan:!1,...p,fov:42,dof:.25,score:"wonder",caption:"V · ORBIT|Standard orbit · shuttlecraft descent"}),a(282,[1380,-380,-1960],[1580,-470,-2190],{fov:40,hangar:!0,caption:""}),a(283,[1660,-462,-2262],M,{fov:46,descent:!0,dof:.35}),a(291,[1650,-455,-2240],M,{fov:48}),a(294,[1650,-455,-2240],M,{chase:1,dof:.2},"in"),a(318,[1650,-455,-2240],M,{chase:1,fov:54},"linear"),a(320,[1650,-455,-2240],M,{chase:1,caption:"Atmospheric entry|Galileo · plasma sheath and ion trail"},"linear"),a(326,[1650,-455,-2240],M,{chase:1,fov:62},"linear"),a(326.05,[1755,-420,-2162],_,{chase:0,fov:30,dof:.3},"linear"),a(330,[1750,-417,-2158],_,{caption:""},"linear"),a(334,[1740,-410,-2150],_,{fov:26},"out"),l(335,h("stern"),d("stern"),{shipX:0,shipY:0,shipZ:0,shipYaw:0,shipPitch:0,shipRoll:0,hangar:!1,descent:!1,fov:40,score:"swell",dof:.2,caption:"U.S.S. ENTERPRISE|Built in Three.js · every part parametric · no imported models"}),a(340,[110,40,-470],[0,-12,-40],{warp:!0},"in"),a(342.5,[90,37,-530],[0,-12,-100],{caption:""}),a(343.5,[80,36,-560],[0,-12,-120],{caption:"Music: Scott Buckley — Starfire · Aphelion · Legionnaire|CC-BY 4.0 · www.scottbuckley.com.au · Effects: Kenney (CC0)"}),a(348,[40,39,-800],[0,-12,-240],{caption:""}),a(349,[30,40,-880],[0,-12,-280],{caption:"Boldly go.|"}),a(353,[20,40,-950],[0,-12,-300],{fov:46,fade:0},"linear"),a(355.5,[16,40,-990],[0,-12,-320],{fade:1,caption:""},"linear"),a(356,[16,40,-990],[0,-12,-320],{fade:1,score:"off"},"linear"),{name:"Showcase film",path:"curve",keys:s}}const Vr={linear:i=>i,smooth:i=>i*i*(3-2*i),in:i=>i*i*i,out:i=>1-Math.pow(1-i,3),inout:i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2},Nv=["mode","light","warp","labels","markers","hangar","shuttle","descent","phasers","torpedo","klingon","disruptor","alert","romulan","plasma","caption","score"],vu=["clip","explode","fov","shipX","shipY","shipZ","shipYaw","shipPitch","shipRoll","lift","liftDoors","liftCam","chase","dof","focus","cloak","fade"];function fa(i,t){return{t:i,pos:[...t.pos],target:[...t.target],state:{...t.state},ease:"smooth"}}function Fv(i){const t={name:"Untitled clip",keys:[],path:"curve",time:0,playing:!1,loop:!1,rate:1,listeners:new Set,lastDiscrete:null,_posCurve:null,_tgtCurve:null,_dirty:!0},e=(_,E)=>t.listeners.forEach(b=>b(_,E));function n(){return t.keys.length?t.keys[t.keys.length-1].t:0}function s(){t.keys.sort((_,E)=>_.t-E.t),t._dirty=!0}function r(){if(t._dirty)if(t._dirty=!1,t.keys.length>=2){const _=t.keys.map(b=>new C(...b.pos)),E=t.keys.map(b=>new C(...b.target));t._posCurve=new gs(_,!1,"centripetal",.5),t._tgtCurve=new gs(E,!1,"centripetal",.5)}else t._posCurve=t._tgtCurve=null}function o(_){const E=i.captureState(),b=t.keys.find(A=>Math.abs(A.t-_)<.05);if(b)return Object.assign(b,fa(b.t,E),{ease:b.ease}),t._dirty=!0,e("change"),b;const v=fa(_,E);return t.keys.push(v),s(),e("change"),v}function a(_){const E=i.captureState();Object.assign(_,fa(_.t,E),{ease:_.ease}),t._dirty=!0,e("change")}function c(_){t.keys=t.keys.filter(E=>E!==_),t._dirty=!0,e("change")}function l(_,E){_.t=Math.max(0,E),s(),e("change")}function u(_){r();const E=t.keys;if(!E.length)return null;if(E.length===1||_<=E[0].t){const B=E[0];return{pos:new C(...B.pos),target:new C(...B.target),state:{...B.state},index:0}}const b=E[E.length-1];if(_>=b.t)return{pos:new C(...b.pos),target:new C(...b.target),state:{...b.state},index:E.length-1};let v=0;for(;v<E.length-2&&_>=E[v+1].t;)v++;const A=E[v],S=E[v+1],y=Math.max(1e-4,S.t-A.t),R=(_-A.t)/y,W=(Vr[S.ease]||Vr.smooth)(Math.min(1,Math.max(0,R)));let q,z;if(t.path==="curve"&&E.length>=3){const B=E.length-1;q=t._posCurve.getPoint((v+W)/B),z=t._tgtCurve.getPoint((v+W)/B)}else q=new C(...A.pos).lerp(new C(...S.pos),W),z=new C(...A.target).lerp(new C(...S.target),W);const O={...A.state};for(const B of vu)typeof A.state[B]=="number"&&typeof S.state[B]=="number"&&(O[B]=A.state[B]+(S.state[B]-A.state[B])*W);return{pos:q,target:z,state:O,index:v}}function h(_){if(!_)return;i.setCameraDirect(_.pos,_.target);const E={};for(const A of Nv)E[A]=_.state[A];const b=JSON.stringify(E);b!==t.lastDiscrete&&(t.lastDiscrete=b,i.applyDiscrete(E));const v={};for(const A of vu)typeof _.state[A]=="number"&&(v[A]=_.state[A]);i.applyContinuous(v)}function d(_){t.time=Math.min(Math.max(0,_),n()),h(u(t.time)),e("time",t.time)}function f(){t.keys.length<2||(t.time>=n()-.001&&(t.time=0),t.playing=!0,t.lastDiscrete=null,i.setPlayback(!0),e("play"))}function g(){t.playing=!1,i.setPlayback(!1),e("pause")}function x(){g(),t.time=0,e("time",t.time)}function m(_){if(!t.playing)return;t.time+=_*t.rate;const E=n();if(t.time>=E)if(t.loop)t.time=t.time%Math.max(E,.001),t.lastDiscrete=null;else{t.time=E,h(u(t.time)),e("time",t.time),g(),e("ended");return}h(u(t.time)),e("time",t.time)}function p(){return{version:1,name:t.name,path:t.path,keys:t.keys}}function w(_){if(!_||!Array.isArray(_.keys))throw new Error("Not a clip file");t.name=_.name||"Untitled clip",t.path=_.path==="linear"?"linear":"curve",t.keys=_.keys.map(E=>({t:Number(E.t)||0,pos:E.pos.map(Number),target:E.target.map(Number),state:{...E.state||{}},ease:Vr[E.ease]?E.ease:"smooth"})),s(),t.time=0,e("change"),e("time",0)}function M(_){t.path=_,t._dirty=!0,e("change")}return{seq:t,duration:n,addKeyAt:o,updateKey:a,removeKey:c,setKeyTime:l,sample:u,seek:d,play:f,pause:g,stop:x,tick:m,toJSON:p,fromJSON:w,setPath:M,on(_){return t.listeners.add(_),()=>t.listeners.delete(_)},EASES:Object.keys(Vr)}}function yu(i,t,e,n={}){if(e={...e,...{shipX:0,shipY:0,shipZ:0,shipYaw:0,shipPitch:0,shipRoll:0,markers:!1,labels:!1,hangar:!1,shuttle:!1,phasers:!1,torpedo:!1,klingon:!1,disruptor:!1,alert:!1,romulan:!1,plasma:!1,cloak:1,descent:!1,chase:0,lift:0,liftDoors:0,liftCam:0,caption:"",score:"off",fade:0}},i==="film")return Uv(t,e,n);const r=(o,a,c={},l="smooth")=>({t:o,pos:[...t[a].pos],target:[...t[a].target],state:{...e,...c},ease:l});switch(i){case"flyby":return{name:"Fly-by",path:"curve",keys:[r(0,"bow",{fov:34}),r(6,"beauty",{fov:40}),r(11,"nacelle",{fov:44}),r(16,"stern",{fov:40}),r(22,"profile",{fov:36},"out")]};case"reveal":return{name:"Cutaway reveal",path:"curve",keys:[r(0,"beauty",{mode:"exterior"}),r(5,"profile",{mode:"exterior"}),r(6,"profile",{mode:"cutaway",clip:.5}),r(14,"profile",{mode:"cutaway",clip:.8},"linear"),r(20,"deflector",{mode:"cutaway",clip:.5}),r(26,"hangar",{mode:"cutaway",clip:.5}),r(32,"beauty",{mode:"exterior"},"out")]};case"warp":return{name:"Warp jump",path:"curve",keys:[r(0,"stern",{light:"space",warp:!1,fov:40}),r(5,"nacelle",{light:"space",warp:!1,fov:40}),r(7,"nacelle",{light:"space",warp:!0,fov:48},"in"),r(13,"bow",{light:"space",warp:!0,fov:60}),r(19,"beauty",{light:"space",warp:!0,fov:40},"out")]};case"battle":{const o={light:"space",klingon:!0,alert:!0},a={pos:[-140,30,330],target:[40,-30,500]},c=(l,u,h,d={},f="smooth")=>({t:l,pos:[...u],target:[...h],state:{...e,...o,...d},ease:f});return{name:"Battle stations",path:"curve",keys:[{t:0,pos:[...t.bridgeIn.pos],target:[...t.bridgeIn.target],state:{...e,light:"space",klingon:!0,alert:!0,fov:64},ease:"smooth"},{t:3.5,pos:[2.4,13.1,74],target:[-1,12.4,84],state:{...e,light:"space",klingon:!0,alert:!0,fov:60},ease:"smooth"},c(3.6,[-260,40,260],[0,-10,300],{fov:44},"linear"),c(7.5,a.pos,a.target,{fov:40,disruptor:!0}),c(7.9,a.pos,a.target,{fov:40,disruptor:!1}),c(10.5,[60,-20,200],[60,-30,700],{fov:42,phasers:!0}),c(10.9,[60,-20,200],[60,-30,700],{fov:42,phasers:!1}),c(13.5,[-30,20,180],[80,-40,800],{fov:40,torpedo:!0,disruptor:!0}),c(13.9,[-30,20,180],[80,-40,800],{fov:40,torpedo:!1,disruptor:!1}),c(17.5,[220,60,620],[60,-30,780],{fov:36,phasers:!0},"linear"),c(17.9,[220,60,620],[60,-30,780],{fov:36,phasers:!1},"linear"),c(22.5,[420,40,160],[0,-10,0],{fov:40,torpedo:!0}),c(22.9,[420,40,160],[0,-10,0],{fov:40,torpedo:!1}),c(28.5,[70,24,-420],[0,-12,-40],{fov:40,warp:!0},"in"),c(34.5,[10,30,-900],[0,-12,-300],{fov:48,warp:!0,alert:!1},"out")]}}case"orbit":{const o={shipX:1550,shipY:-450,shipZ:-2150,shipYaw:-.69,shipPitch:.04,shipRoll:.08},a={light:"space",hangar:!0,...o},c=(d,f,g,x={},m="smooth")=>({t:d,pos:[...f],target:[...g],state:{...e,...a,...x},ease:m}),l=[o.shipX,o.shipY,o.shipZ],u=[1595,-485,-2204],h=[1882,-642,-2552];return{name:"Orbit insertion",path:"curve",keys:[c(0,[1290,-300,-1860],l,{fov:42,hangar:!1,dof:.25}),c(8,[1380,-380,-1960],[1580,-470,-2190],{fov:40,hangar:!0,dof:.25}),c(9,[1660,-462,-2262],u,{fov:46,hangar:!0,descent:!0,dof:.35}),c(17,[1650,-455,-2240],u,{fov:48,hangar:!0,descent:!0,dof:.35}),c(20,[1650,-455,-2240],u,{fov:50,descent:!0,chase:1,dof:.2},"in"),c(44,[1650,-455,-2240],u,{fov:54,descent:!0,chase:1,dof:.2},"linear"),c(52,[1650,-455,-2240],u,{fov:62,descent:!0,chase:1,dof:.2},"linear"),c(52.05,[1755,-420,-2162],h,{fov:30,descent:!0,chase:0,dof:.3},"linear"),c(60,[1740,-410,-2150],h,{fov:26,descent:!0,dof:.3,hangar:!1},"out")]}}case"neutralzone":{const o={light:"space",romulan:!0},a=(c,l,u,h={},d="smooth")=>({t:c,pos:[...l],target:[...u],state:{...e,...o,...h},ease:d});return{name:"Neutral Zone",path:"curve",keys:[a(0,[-60,30,250],[-360,24,540],{fov:40,cloak:1,dof:.3}),a(4,[-90,34,300],[-360,24,540],{fov:36,cloak:1,dof:.3}),a(4.5,[-90,34,300],[-360,24,540],{fov:36,cloak:0,alert:!0},"linear"),a(10,[-200,40,420],[-360,24,540],{fov:34,cloak:0,alert:!0}),a(12,[-200,40,420],[-360,24,540],{fov:34,cloak:0,alert:!0,plasma:!0}),a(12.4,[-200,40,420],[-360,24,540],{fov:34,cloak:0,alert:!0,plasma:!1}),a(16,[120,40,160],[-200,20,400],{fov:44,cloak:0,alert:!0}),a(18.5,[120,40,160],[-200,20,400],{fov:44,cloak:0,alert:!0,phasers:!0}),a(18.9,[120,40,160],[-200,20,400],{fov:44,cloak:0,alert:!0,phasers:!1}),a(22,[-250,60,480],[-360,24,540],{fov:38,cloak:0,alert:!0,torpedo:!0}),a(22.4,[-250,60,480],[-360,24,540],{fov:38,cloak:0,alert:!0,torpedo:!1}),a(26,[-250,60,480],[-360,24,540],{fov:38,cloak:0,alert:!0}),a(26.5,[-250,60,480],[-360,24,540],{fov:38,cloak:1,alert:!0},"linear"),a(33,[-120,40,330],[-360,24,540],{fov:42,cloak:1,alert:!1},"out")]}}case"turbolift":{const o=n.lift;if(!o)return null;const a=t.bridgeIn,c=t.engineeringIn,l=(h,d,f,g={},x="smooth")=>({t:d,pos:o.cameraAt(h).toArray(),target:o.lookAt(h).toArray(),state:{...e,fov:70,lift:h,liftDoors:f,liftCam:1,...g},ease:x});return{name:"Turbolift ride",path:"linear",keys:[{t:0,pos:[...a.pos],target:[...a.target],state:{...e,fov:64,lift:0,liftDoors:0,liftCam:0},ease:"smooth"},{t:4,pos:[.4,12.9,75.5],target:[0,12.3,69],state:{...e,fov:66,lift:0,liftDoors:0,liftCam:0},ease:"smooth"},{t:6.5,pos:[.2,12.8,72.6],target:[0,12.3,68],state:{...e,fov:68,lift:0,liftDoors:1,liftCam:0},ease:"smooth"},l(0,6.55,1,{},"linear"),l(0,8.5,1,{},"linear"),l(0,10,0,{},"linear"),l(.12,13.5,0,{},"in"),l(.5,20,0,{},"linear"),l(.88,26.5,0,{},"linear"),l(1,30,0,{},"out"),l(1,31.5,1,{},"smooth"),{t:35,pos:[...c.pos],target:[...c.target],state:{...e,fov:62,lift:1,liftDoors:1,liftCam:0},ease:"smooth"},{t:39,pos:[-1.5,-31,-19],target:[0,-31.5,-30],state:{...e,fov:62,lift:1,liftDoors:0,liftCam:0},ease:"out"}]}}case"launch":return{name:"Shuttle launch",path:"curve",keys:[r(0,"stern",{light:"space",fov:40}),r(4,"hangar",{light:"space",hangar:!0,fov:44}),r(9,"hangar",{light:"space",hangar:!0,shuttle:!0,fov:44},"linear"),r(18,"stern",{light:"space",hangar:!0,shuttle:!0,fov:38}),r(26,"beauty",{light:"space",hangar:!1,shuttle:!1,fov:40},"out")]};case"flypast":{const o={pos:[0,30,520],target:[0,-10,0]},a=(c,l,u,h,d,f,g={},x="linear")=>({t:c,pos:[...o.pos],target:[...o.target],state:{...e,fov:46,shipX:l,shipY:u,shipZ:h,shipYaw:d,shipPitch:0,shipRoll:f,...g},ease:x});return{name:"Fly-past",path:"linear",keys:[a(0,-700,-80,-400,.9,0,{light:"space"}),a(6,-120,-20,60,.7,-.25,{light:"space"}),a(12,380,40,260,.35,-.45,{light:"space"}),a(18,1100,120,520,.1,-.1,{light:"space",warp:!0},"in")]}}case"circle":{const o=[],a=t.beauty.target,c=380;for(let l=0;l<=8;l++){const u=l/8*Math.PI*2+Math.PI/4;o.push({t:l*4,pos:[a[0]+Math.cos(u)*c,70+Math.sin(u*2)*40,a[2]+Math.sin(u)*c],target:[...a],state:{...e},ease:"linear"})}return{name:"Circle",path:"curve",keys:o}}default:return null}}async function Ov({canvas:i,duration:t,fps:e,step:n,onProgress:s,shouldCancel:r}){if(typeof window.showDirectoryPicker!="function")throw new Error("Folder access is not available in this browser; use WebM recording instead.");const o=await window.showDirectoryPicker({mode:"readwrite"}),a=Math.max(1,Math.round(t*e)),c=()=>new Promise(l=>i.toBlob(l,"image/png"));for(let l=0;l<=a;l++){if(r?.())return l;n(l/e);const u=await c(),d=await(await o.getFileHandle(`frame_${String(l).padStart(5,"0")}.png`,{create:!0})).createWritable();await d.write(u),await d.close(),s?.(l,a),await new Promise(f=>setTimeout(f,0))}return a+1}function Bv(i){let t=null,e=[];return{get active(){return!!t&&t.state==="recording"},start({fps:n=60,bitrate:s=24e6,audioTrack:r=null}={}){const o=i.captureStream(n);r&&o.addTrack(r);const a=["video/webm;codecs=vp9","video/webm;codecs=vp8","video/webm"].find(c=>MediaRecorder.isTypeSupported(c));return t=new MediaRecorder(o,{mimeType:a,videoBitsPerSecond:s}),e=[],t.ondataavailable=c=>{c.data.size&&e.push(c.data)},t.start(250),a},stop(){return new Promise(n=>{if(!t)return n(null);t.onstop=()=>{const s=new Blob(e,{type:t.mimeType});t=null,n(s)},t.stop()})}}}const Mu="enterprise.clip.v1";function kv(i,{status:t,setUIHidden:e}){const n=Fv(i);i.sequencer=n;const s=Bv(i.canvas),r=L=>document.getElementById(L),o=r("editor"),a=r("ed-list"),c=r("ed-track"),l=r("ed-timeline"),u=r("ed-playhead"),h=r("ed-time"),d=r("ed-play"),f=r("ed-key-time"),g=r("ed-ease"),x=r("ed-path"),m=r("ed-fov"),p=r("ed-fov-val"),w=r("ed-name"),M=r("letterbox");let _=null,E=!1,b=null;i.onPlaybackTick(L=>n.tick(L));const v=L=>L.toFixed(2);function A(){return Math.max(n.duration(),1)}function S(){c.innerHTML="";const L=A(),U=Math.min(60,Math.ceil(L));for(let G=0;G<=U;G++){const k=document.createElement("i");k.className="ed-tick"+(G%5===0?" major":""),k.style.left=`${G/L*100}%`,c.appendChild(k)}n.seq.keys.forEach((G,k)=>{const Z=document.createElement("button");Z.className="ed-key"+(G===_?" selected":""),Z.style.left=`${G.t/L*100}%`,Z.title=`Keyframe ${k+1} · ${v(G.t)} s · ${G.state.mode}`,Z.dataset.index=String(k),Z.addEventListener("pointerdown",P=>B(P,G)),c.appendChild(Z)}),y(),R()}function y(){a.innerHTML="",n.seq.keys.forEach((L,U)=>{const G=document.createElement("li");G.className=L===_?"selected":"";const k=[L.state.mode,L.state.light,L.state.warp?"warp":null,L.state.hangar?"doors":null,L.state.shuttle?"launch":null,L.state.phasers?"phasers":null,L.state.torpedo?"torpedo":null,L.state.klingon?"D7":null,L.state.disruptor?"disruptor":null,L.state.romulan?L.state.cloak>.5?"BoP cloaked":"BoP":null,L.state.plasma?"plasma":null,L.state.descent?"descent":null,L.state.chase>0?"chase cam":null,L.state.alert?"red alert":null,`fov ${Math.round(L.state.fov||40)}°`].filter(Boolean).join(" · ");G.innerHTML=`<span class="ed-mono">${String(U+1).padStart(2,"0")}</span><span class="ed-mono">${v(L.t)}s</span><span>${k}</span><span class="ed-mono dim">${L.ease}</span>`,G.addEventListener("click",()=>{W(L),n.seek(L.t)}),a.appendChild(G)})}function R(){const L=A();u.style.left=`${n.seq.time/L*100}%`,h.textContent=`${v(n.seq.time)} / ${v(n.duration())} s`,d.textContent=n.seq.playing?"⏸":"▶"}function W(L){_=L,f.value=L?v(L.t):"",g.value=L?L.ease:"smooth",r("ed-fx-phasers").checked=!!L?.state.phasers,r("ed-fx-torpedo").checked=!!L?.state.torpedo,r("ed-fx-disruptor").checked=!!L?.state.disruptor,r("ed-fx-plasma").checked=!!L?.state.plasma,L&&typeof L.state.fov=="number"&&(m.value=String(Math.round(L.state.fov)),p.textContent=`${Math.round(L.state.fov)}°`),S()}n.on(L=>{L==="change"?(_&&!n.seq.keys.includes(_)&&(_=null),S(),b||st()):L==="time"?(R(),X()):L==="play"||L==="pause"?(R(),j.checked&&!E&&(e(n.seq.playing,"playback"),M.hidden=!n.seq.playing)):L==="ended"&&(E?Q():b&&z())});async function q(){if(b)return;const L=i.captureState().state,U=yu("film",i.cameras,L,{lift:i.ship.userData.turbolift});U&&(b={saved:n.toJSON(),soundWas:i.audio.enabled,cinemaWas:j.checked},i.audio.enabled||i.audio.setEnabled(!0),i.onSoundChanged?.(!0),n.pause(),n.fromJSON(U),w.textContent=U.name,x.value=n.seq.path,n.seq.loop=!1,n.seq.rate=1,e(!0,"film"),M.hidden=!1,i.setFade?.(1),n.seek(0),t.textContent="Loading sound library…",await Promise.race([i.audio.whenReady(),new Promise(G=>setTimeout(G,6e3))]),b&&(n.play(),t.textContent=`${U.name} · ${Math.round(n.duration())} s · Esc to stop`))}function z(){if(!b)return;const L=b;b=null,n.pause(),i.audio.score?.("off"),i.setCaption?.(""),i.setFade?.(0),e(!1,"film"),M.hidden=!(j.checked&&n.seq.playing),i.applyDiscrete({warp:!1,alert:!1,klingon:!1,romulan:!1,hangar:!1,shuttle:!1,descent:!1,mode:"exterior",light:"space"}),i.applyContinuous({shipX:0,shipY:0,shipZ:0,shipYaw:0,shipPitch:0,shipRoll:0,dof:0,explode:0,lift:0,liftDoors:0}),i.recallShuttle(),L.soundWas||(i.audio.setEnabled(!1),i.onSoundChanged?.(!1));const U=L.saved&&L.saved.name!=="Showcase film"?L.saved:{name:"Untitled clip",path:"curve",keys:[]};n.fromJSON(U),w.textContent=n.seq.name,x.value=n.seq.path,n.seq.keys.length&&n.seek(0),i.setCaption?.(""),i.setFade?.(0),i.goCamera("beauty",!1),t.textContent="Showcase film ended · manual control"}i.playFilm=q,i.stopFilm=z,Object.defineProperty(i,"filmPlaying",{get:()=>!!b}),addEventListener("keydown",L=>{L.key==="Escape"&&b&&z()});function O(L){const U=l.getBoundingClientRect();return Math.min(1,Math.max(0,(L-U.left)/U.width))*A()}l.addEventListener("pointerdown",L=>{if(L.target.classList.contains("ed-key"))return;const U=O(L.clientX);if(L.shiftKey){W(n.addKeyAt(Math.round(U*10)/10));return}n.pause(),n.seek(U);const G=Z=>n.seek(O(Z.clientX)),k=()=>{removeEventListener("pointermove",G),removeEventListener("pointerup",k)};addEventListener("pointermove",G),addEventListener("pointerup",k)});function B(L,U){L.stopPropagation(),L.preventDefault(),W(U);const G=L.clientX,k=U.t;let Z=!1;const P=ot=>{const vt=l.getBoundingClientRect(),lt=(ot.clientX-G)/vt.width*A();Math.abs(ot.clientX-G)>2&&(Z=!0),U.t=Math.max(0,Math.round((k+lt)*20)/20),f.value=v(U.t),n.seq._dirty=!0,S()},mt=()=>{removeEventListener("pointermove",P),removeEventListener("pointerup",mt),n.setKeyTime(U,U.t),Z||n.seek(U.t)};addEventListener("pointermove",P),addEventListener("pointerup",mt)}r("ed-add").addEventListener("click",()=>{const L=n.seq.keys.length?Math.max(n.seq.time,0):0,U=Math.round(L*10)/10,G=n.addKeyAt(U);W(G),t.textContent=`Keyframe ${n.seq.keys.indexOf(G)+1} captured at ${v(G.t)} s`}),r("ed-update").addEventListener("click",()=>{_&&(n.updateKey(_),t.textContent="Keyframe updated from the current view")}),r("ed-delete").addEventListener("click",()=>{_&&(n.removeKey(_),_=null,S())}),f.addEventListener("change",()=>{_&&(n.setKeyTime(_,Number(f.value)||0),W(_))}),g.addEventListener("change",()=>{_&&(_.ease=g.value,n.seq._dirty=!0,S(),st())}),x.addEventListener("change",()=>n.setPath(x.value));for(const[L,U]of[["ed-fx-phasers","phasers"],["ed-fx-torpedo","torpedo"],["ed-fx-disruptor","disruptor"],["ed-fx-plasma","plasma"]])r(L).addEventListener("change",G=>{_&&(_.state[U]=G.target.checked,S(),st())});m.addEventListener("input",()=>{i.setFov(Number(m.value)),p.textContent=`${m.value}°`}),w.addEventListener("input",()=>{n.seq.name=w.textContent.trim()||"Untitled clip",st()}),d.addEventListener("click",()=>n.seq.playing?n.pause():n.play()),r("ed-first").addEventListener("click",()=>{n.pause(),n.seek(0)}),r("ed-last").addEventListener("click",()=>{n.pause(),n.seek(n.duration())}),r("ed-loop").addEventListener("change",L=>n.seq.loop=L.target.checked),r("ed-rate").addEventListener("change",L=>n.seq.rate=Number(L.target.value)||1);const j=r("ed-cinema"),H={x:"pose-x",y:"pose-y",z:"pose-z",yaw:"pose-yaw",pitch:"pose-pitch",roll:"pose-roll"},Y=Math.PI/180;function yt(){return{x:Number(r(H.x).value),y:Number(r(H.y).value),z:Number(r(H.z).value),yaw:Number(r(H.yaw).value)*Y,pitch:Number(r(H.pitch).value)*Y,roll:Number(r(H.roll).value)*Y}}function X(){const L=i.getShipPose();r(H.x).value=String(Math.round(L.x)),r(H.y).value=String(Math.round(L.y)),r(H.z).value=String(Math.round(L.z)),r(H.yaw).value=String(Math.round(L.yaw/Y)),r(H.pitch).value=String(Math.round(L.pitch/Y)),r(H.roll).value=String(Math.round(L.roll/Y))}for(const L of Object.values(H))r(L).addEventListener("input",()=>i.setShipPose(yt()));r("pose-reset").addEventListener("click",()=>{i.setShipPose({x:0,y:0,z:0,yaw:0,pitch:0,roll:0}),X()}),r("ed-clear").addEventListener("click",()=>{n.seq.keys.length&&confirm("Remove all keyframes from this clip?")&&(n.pause(),n.fromJSON({name:n.seq.name,path:n.seq.path,keys:[]}))}),r("ed-preset").addEventListener("change",L=>{const U=L.target.value;if(L.target.value="",!U)return;const G=i.captureState().state,k=yu(U,i.cameras,G,{lift:i.ship.userData.turbolift});k&&(n.pause(),n.fromJSON(k),w.textContent=k.name,x.value=n.seq.path,n.seek(0),t.textContent=`Preset loaded · ${k.name} (${k.keys.length} keyframes, ${v(n.duration())} s)`)}),r("ed-save").addEventListener("click",()=>{const L=new Blob([JSON.stringify(n.toJSON(),null,2)],{type:"application/json"}),U=document.createElement("a");U.href=URL.createObjectURL(L),U.download=`${(n.seq.name||"clip").replace(/[^\w-]+/g,"-").toLowerCase()}.clip.json`,U.click(),setTimeout(()=>URL.revokeObjectURL(U.href),5e3),t.textContent="Clip saved as JSON"}),r("ed-load").addEventListener("click",()=>r("ed-file").click()),r("ed-file").addEventListener("change",async L=>{const U=L.target.files?.[0];if(L.target.value="",!!U)try{n.pause(),n.fromJSON(JSON.parse(await U.text())),w.textContent=n.seq.name,x.value=n.seq.path,n.seek(0),t.textContent=`Clip loaded · ${n.seq.name}`}catch(G){console.error(G),t.textContent="Could not read that clip file"}});const et=r("ed-record");async function pt(){if(n.seq.keys.length<2){t.textContent="Add at least two keyframes before recording";return}if(typeof MediaRecorder>"u"){t.textContent="MediaRecorder is not available in this browser";return}const L=r("ed-res").value,U=Number(r("ed-fps").value);if(L!=="window"){const[P,mt]=L.split("x").map(Number);i.setRenderSize(P,mt)}const G=i.canvas.width*i.canvas.height,k=Math.min(8e7,Math.max(12e6,G*U*.12));E=!0,et.classList.add("active"),et.textContent="■ Stop",e(!0,"recording"),M.hidden=!0,n.pause(),n.seek(0),await new Promise(P=>setTimeout(P,250));const Z=s.start({fps:U,bitrate:k,audioTrack:i.audio?.recordingTrack()});t.textContent=`Recording ${i.canvas.width}×${i.canvas.height} @ ${U} fps (${Z})`,n.seq.loop=!1,r("ed-loop").checked=!1,n.play()}async function Q(){if(!E)return;E=!1,n.pause();const L=i.canvas.height,U=await s.stop();if(i.restoreRenderSize(),e(!1,"recording"),et.classList.remove("active"),et.textContent="● Record",U&&U.size){const G=document.createElement("a");G.href=URL.createObjectURL(U),G.download=`${(n.seq.name||"clip").replace(/[^\w-]+/g,"-").toLowerCase()}-${L}p.webm`,G.click(),setTimeout(()=>URL.revokeObjectURL(G.href),1e4),t.textContent=`Recording saved · ${(U.size/1048576).toFixed(1)} MB WebM`}else t.textContent="Recording produced no data"}et.addEventListener("click",()=>E?Q():pt());const it=r("ed-frames");let _t=!1;it.addEventListener("click",async()=>{if(it.classList.contains("active")){_t=!0;return}if(n.seq.keys.length<2){t.textContent="Add at least two keyframes before rendering";return}const L=r("ed-res").value,U=Number(r("ed-fps").value);_t=!1;try{if(n.pause(),L!=="window"){const[k,Z]=L.split("x").map(Number);i.setRenderSize(k,Z)}e(!0,"recording"),it.classList.add("active"),it.textContent="■ Stop",i.setPlayback(!0);const G=await Ov({canvas:i.canvas,duration:n.duration(),fps:U,step:k=>{n.seek(k),i.camera.lookAt(i.controls.target),i.renderOnce()},onProgress:(k,Z)=>{t.textContent=`Rendering frame ${k+1} / ${Z+1} · ${i.canvas.width}×${i.canvas.height}`},shouldCancel:()=>_t});t.textContent=_t?`Render stopped after ${G} frames`:`Rendered ${G} PNG frames at ${U} fps`}catch(G){console.error(G),t.textContent=G?.name==="AbortError"?"Render cancelled":`Render failed · ${G.message}`}finally{i.setPlayback(!1),i.restoreRenderSize(),e(!1,"recording"),it.classList.remove("active"),it.textContent="Render PNGs"}});function st(){try{localStorage.setItem(Mu,JSON.stringify(n.toJSON()))}catch{}}try{const L=localStorage.getItem(Mu),U=L?JSON.parse(L):null;U&&U.name!=="Showcase film"&&(n.fromJSON(U),w.textContent=n.seq.name,x.value=n.seq.path)}catch{}function rt(L){o.hidden=!L,document.getElementById("app").classList.toggle("editor-open",L),r("editor-toggle").classList.toggle("active",L),L?S():n.seq.playing&&n.pause()}return r("editor-toggle").addEventListener("click",()=>rt(o.hidden)),r("ed-close").addEventListener("click",()=>rt(!1)),addEventListener("keydown",L=>{if(L.target.tagName==="INPUT"||L.target.tagName==="SELECT"||L.target.isContentEditable||L.metaKey||L.ctrlKey||L.altKey)return;const U=L.key.toLowerCase();U==="c"&&rt(o.hidden),!o.hidden&&(U===" "?(L.preventDefault(),n.seq.playing?n.pause():n.play()):U==="k"?r("ed-add").click():U==="delete"||U==="backspace"?r("ed-delete").click():U==="home"?r("ed-first").click():U==="end"?r("ed-last").click():(U===","||U===".")&&(n.pause(),n.seek(n.seq.time+(U==="."?1/30:-1/30))))}),S(),{sequencer:n,setOpen:rt,get recording(){return E}}}function zv(i){const t=document.getElementById("status"),e=document.getElementById("app"),n=2500,s=new Set;let r=null,o=!1;const a=document.getElementById("ui-tab");function c(V,nt="user"){V?s.add(nt):s.delete(nt);const D=s.size>0;e.classList.toggle("ui-hidden",D),a.hidden=!s.has("user"),document.getElementById("hide-ui").classList.toggle("active",s.has("user"))}function l(){clearTimeout(r),r=setTimeout(()=>{o||e.classList.add("ui-idle")},n)}function u(){e.classList.remove("ui-idle"),l()}addEventListener("pointermove",u,{passive:!0}),addEventListener("pointerdown",u,{passive:!0}),addEventListener("keydown",u),document.querySelectorAll(".hud").forEach(V=>{V.addEventListener("pointerenter",()=>{o=!0,u()}),V.addEventListener("pointerleave",()=>{o=!1,l()})}),l(),document.getElementById("hide-ui").addEventListener("click",()=>c(!s.has("user"),"user")),a.addEventListener("click",()=>c(!1,"user"));const h=document.getElementById("mode-label"),d=document.getElementById("cam-label"),f=document.getElementById("part-note"),g=(V,nt)=>{document.querySelectorAll(`[data-${V}]`).forEach(D=>{D.classList.toggle("active",D.dataset[V]===nt)})},x={exterior:"Primary hull · command saucer",cutaway:"Longitudinal cutaway · drag Clip to sweep the section plane",explode:"Separated primary, dorsal, engineering, pylons, and warp units",blueprint:"Flat study lighting for silhouette checks",decks:"Horizontal section · drag Deck (or ↑/↓) to step through all 23 decks"},m=document.getElementById("deck"),p=document.getElementById("deck-val");m.addEventListener("input",V=>{i.setDeck(Number(V.target.value),!0)}),i.onDeckChanged(V=>{p.textContent=`${V.id} · ${V.name}`,m.value=String(V.id),t.textContent=`Deck ${V.id} · ${V.name}`,i.state.mode==="decks"&&(g("mode","decks"),h.textContent="Deck plans")}),document.querySelectorAll("[data-mode]").forEach(V=>{V.addEventListener("click",()=>{i.applyMode(V.dataset.mode),h.textContent=V.textContent,g("mode",V.dataset.mode),t.textContent=`Study mode · ${V.textContent}`,f.textContent=x[V.dataset.mode]||x.exterior})}),document.querySelectorAll("[data-light]").forEach(V=>{V.addEventListener("click",()=>{i.applyLight(V.dataset.light),g("light",V.dataset.light),t.textContent=`Lighting · ${V.textContent}`})}),document.querySelectorAll("[data-cam]").forEach(V=>{V.addEventListener("click",()=>{i.goCamera(V.dataset.cam),d.textContent=V.textContent,g("cam",V.dataset.cam),t.textContent=`Camera · ${V.textContent}`})}),document.getElementById("explode").addEventListener("input",V=>{i.setExplode(Number(V.target.value)/100),t.textContent=`Explode ${V.target.value}%`}),document.getElementById("clip").addEventListener("input",V=>{i.setClip(Number(V.target.value)/100),t.textContent=`Section plane ${V.target.value}%`}),document.getElementById("auto-orbit").addEventListener("change",V=>{i.state.autoOrbit=V.target.checked}),document.getElementById("labels").addEventListener("change",V=>{i.setLabels(V.target.checked)}),document.getElementById("grid").addEventListener("change",V=>{i.setGrid(V.target.checked)}),document.getElementById("ortho").addEventListener("change",V=>{i.setOrtho(V.target.checked),t.textContent=V.target.checked?"Orthographic projection":"Perspective projection"}),document.getElementById("snapshot").addEventListener("click",()=>{i.savePNG(`uss-enterprise-${i.state.cam}-${i.state.mode}`),t.textContent="PNG saved"});const w=document.getElementById("dof"),M=document.getElementById("dof-aperture"),_=document.getElementById("dof-focus"),E=document.getElementById("dof-focus-val"),b=()=>{const V=Number(_.value);E.textContent=V<=0?"auto · orbit target":`${V} m`};w.addEventListener("change",V=>{i.setDof({enabled:V.target.checked}),t.textContent=V.target.checked?"Depth of field on · focus follows the orbit target unless set":"Depth of field off"}),M.addEventListener("input",V=>i.setDof({aperture:Number(V.target.value)/100})),_.addEventListener("input",V=>{const nt=Number(V.target.value);i.setDof({focus:nt,auto:nt<=0}),b()}),i.onDofApplied(()=>{w.checked=i.dof.enabled,M.value=String(Math.round(i.dof.aperture*100)),_.value=String(i.dof.auto?0:Math.round(i.dof.focus)),b()}),document.getElementById("quality").addEventListener("change",V=>{i.setQuality(V.target.value),t.textContent=`Quality · ${V.target.value}`});function v(){const V=i.state,nt=`#cam=${V.cam}&mode=${V.mode}&light=${V.light}${V.warp?"&warp=1":""}${i.ship.userData.hangar.isOpen?"&hangar=1":""}`;history.replaceState(null,"",nt)}function A(){if(!location.hash)return;const V=new URLSearchParams(location.hash.slice(1)),nt=V.get("mode"),D=V.get("light"),T=V.get("cam");D&&document.querySelector(`[data-light="${D}"]`)&&document.querySelector(`[data-light="${D}"]`).click(),nt&&document.querySelector(`[data-mode="${nt}"]`)&&document.querySelector(`[data-mode="${nt}"]`).click(),T&&document.querySelector(`[data-cam="${T}"]`)&&(i.goCamera(T,!1),d.textContent=document.querySelector(`[data-cam="${T}"]`).textContent,g("cam",T)),V.get("warp")==="1"&&i.setWarp(!0),V.get("hangar")==="1"&&i.setHangar(!0)}document.querySelectorAll("[data-mode],[data-light],[data-cam]").forEach(V=>V.addEventListener("click",()=>setTimeout(v,0))),A(),document.getElementById("hotspots").addEventListener("change",V=>{i.setHotspots(V.target.checked)});const S=document.getElementById("dossier-ship"),y=document.getElementById("dossier-system"),R=document.getElementById("sys-name"),W=document.getElementById("sys-body"),q=document.getElementById("sys-facts");i.onHotspot(V=>{R.textContent=V.name,W.textContent=V.body,q.innerHTML="";for(const nt of V.facts){const D=document.createElement("li");D.textContent=nt,q.appendChild(D)}S.hidden=!0,y.hidden=!1,t.textContent=`Inspecting · ${V.name}`}),document.getElementById("dossier-back").addEventListener("click",()=>{y.hidden=!0,S.hidden=!1,i.hotspots.selected=null,i.goCamera(i.state.cam)});const z=document.getElementById("ref-dx"),O=document.getElementById("ref-dy");i.reference.onLoad=V=>{t.textContent=`Reference loaded · ${V} — use Orthographic + Profile/Plan/Bow`},document.getElementById("ref-opacity").addEventListener("input",V=>i.reference.setOpacity(Number(V.target.value)/100)),document.getElementById("ref-width").addEventListener("input",V=>i.reference.setWidth(Number(V.target.value)));const B=()=>i.reference.setOffset(Number(z.value),Number(O.value));z.addEventListener("input",B),O.addEventListener("input",B);const j=()=>i.reference.setFlip(document.getElementById("ref-flipx").checked,document.getElementById("ref-flipy").checked);document.getElementById("ref-flipx").addEventListener("change",j),document.getElementById("ref-flipy").addEventListener("change",j),document.getElementById("ref-rotate").addEventListener("click",()=>i.reference.rotate()),document.getElementById("ref-clear").addEventListener("click",()=>{i.reference.clear(),t.textContent="Reference cleared"});const H=V=>document.querySelector(V)?.click(),Y=V=>{const nt=document.getElementById(V);nt.checked=!nt.checked,nt.dispatchEvent(new Event("change"))};addEventListener("keydown",V=>{if(V.target.tagName==="INPUT"||V.target.tagName==="SELECT"||V.target.isContentEditable||V.metaKey||V.ctrlKey||V.altKey)return;const nt=V.key.toLowerCase(),D=["beauty","bow","bridge","bridgeIn","transporterIn","sickbayIn","saucer","deflector","engineeringIn","hangar","nacelle","stern","profile","plan","belly"];if(nt==="1")H('[data-mode="exterior"]');else if(nt==="2")H('[data-mode="cutaway"]');else if(nt==="3")H('[data-mode="explode"]');else if(nt==="4")H('[data-mode="blueprint"]');else if(nt==="5")H('[data-mode="decks"]');else if((nt==="arrowup"||nt==="arrowdown")&&i.state.mode==="decks"){V.preventDefault();const T=Math.min(23,Math.max(1,i.state.deck+(nt==="arrowup"?-1:1)));i.setDeck(T,!0)}else if(nt==="t")H("#tour");else if(nt==="v")H("#film");else if(nt==="w")H("#warp");else if(nt==="o")Y("ortho");else if(nt==="l")Y("labels");else if(nt==="m")Y("hotspots");else if(nt==="g")Y("grid");else if(nt==="r")Y("auto-orbit");else if(nt==="p")H("#snapshot");else if(nt==="e")H("#export");else if(nt==="h")H("#hide-ui");else if(nt==="b")H("#hangar-doors");else if(nt==="j")H("#launch");else if(nt==="f")H("#phasers");else if(nt==="y")H("#torpedo");else if(nt==="s")H("#sound");else if(nt==="d")H("#klingon");else if(nt==="x")Y("dof");else if(nt==="a")H("#alert");else if(nt==="n")H("#romulan");else if(nt==="z")H("#cloak");else if(nt==="arrowright"||nt==="arrowleft"){const T=D.indexOf(i.state.cam),K=D[(T+(nt==="arrowright"?1:D.length-1))%D.length];H(`[data-cam="${K}"]`)}else nt==="escape"&&document.getElementById("dossier-back").click()}),i.onDiscreteApplied(V=>{if(V.mode){g("mode",V.mode);const nt=document.querySelector(`[data-mode="${V.mode}"]`);nt&&(h.textContent=nt.textContent)}V.light&&g("light",V.light),typeof V.labels=="boolean"&&(document.getElementById("labels").checked=V.labels),typeof V.markers=="boolean"&&(document.getElementById("hotspots").checked=V.markers)}),i.onWarpChanged(V=>et.classList.toggle("active",V)),kv(i,{status:t,setUIHidden:c});const yt=document.getElementById("loading");i.onReady(()=>{yt.classList.add("done"),setTimeout(()=>yt.remove(),900)});const X=document.getElementById("tour");X.addEventListener("click",()=>{const V=!i.state.tour;X.classList.toggle("active",V),i.setTour(V,nt=>{const D=document.querySelector(`[data-cam="${nt}"]`);D&&(d.textContent=D.textContent,g("cam",nt)),t.textContent=`Auto tour · ${D?D.textContent:nt}`}),V||(t.textContent="Auto tour ended · manual control")});const et=document.getElementById("warp");et.addEventListener("click",()=>{const V=!i.state.warp;i.setWarp(V),t.textContent=V?"Warp factor 6 · engage":"Sublight · impulse power"});const pt=document.getElementById("hangar-doors");pt.addEventListener("click",()=>{const V=!i.ship.userData.hangar.isOpen;i.setHangar(V),t.textContent=V?"Hangar doors opening":"Hangar doors closing"}),i.onHangarChanged(()=>pt.classList.toggle("active",i.ship.userData.hangar.isOpen)),document.getElementById("launch").addEventListener("click",()=>{i.ship.userData.hangar.launching?(i.recallShuttle(),t.textContent="Galileo recalled to the flight deck"):(i.launchShuttle(),t.textContent="Flight deck: Galileo cleared for launch")});const Q=document.getElementById("sound");Q.addEventListener("click",()=>{const V=!i.audio.enabled;i.audio.setEnabled(V),Q.classList.toggle("active",V),t.textContent=V?"Sound on · procedural engine hum and effects":"Sound off"}),i.onSoundChanged=V=>Q.classList.toggle("active",V),document.getElementById("sound-samples").addEventListener("change",V=>{i.audio.setUseSamples(V.target.checked),t.textContent=V.target.checked?"Sampled sound library":"Procedural synth only"});const it=document.getElementById("audio-credits"),_t=()=>{const V=i.audio.credits();if(!V.length)return!1;const nt=V.map(D=>`${D.work} — ${D.author} (${D.license})`);return it.textContent=`Sound: ${nt.join(" · ")}`,it.hidden=!1,!0},st=setInterval(()=>{i.audio.samplesReady&&_t()&&clearInterval(st)},1500),rt=document.getElementById("caption"),L=rt.querySelector(".cap-title"),U=rt.querySelector(".cap-sub"),G=document.getElementById("fade");i.setCaption=V=>{if(!V){rt.classList.remove("show");return}const[nt,D=""]=V.split("|");L.textContent=nt.trim(),U.textContent=D.trim(),rt.classList.add("show")},i.setFade=V=>{G.style.opacity=String(Math.min(1,Math.max(0,V)))},i.onCaption(i.setCaption),i.onFade(i.setFade);const k=document.getElementById("film");k.addEventListener("click",()=>{i.filmPlaying?i.stopFilm():(i.state.tour&&X.click(),i.playFilm()),k.classList.toggle("active",i.filmPlaying)}),i.sequencer.on(V=>{(V==="pause"||V==="ended")&&k.classList.toggle("active",!!i.filmPlaying)}),new URLSearchParams(location.hash.slice(1)).get("film")==="1"&&(history.replaceState(null,"",location.pathname+location.search),i.onReady(()=>{setTimeout(()=>{k.click();const V=document.getElementById("sound-hint"),nt=()=>{i.audio.enabled&&i.audio.setEnabled(!0),V.hidden=!0,removeEventListener("pointerdown",nt),removeEventListener("keydown",nt)};addEventListener("pointerdown",nt),addEventListener("keydown",nt),setTimeout(()=>{i.filmPlaying&&!i.audio.running&&(V.hidden=!1)},2500)},1200)}));const Z=document.getElementById("alert");Z.addEventListener("click",()=>{const V=!i.state.alert;i.setAlert(V),t.textContent=V?"RED ALERT · all hands to battle stations":"Condition green · stand down from red alert"}),i.onAlertChanged(V=>{Z.classList.toggle("active",V),e.classList.toggle("red-alert",V)});const P=document.getElementById("romulan"),mt=document.getElementById("cloak");P.addEventListener("click",()=>{const V=!i.romulan.visible||i.romulan.userData.cloakTarget===1;i.setRomulan(V),t.textContent=V?"Romulan Bird-of-Prey decloaking off the port bow":"Bird-of-Prey cloaking — sensors lose contact"}),mt.addEventListener("click",()=>{if(!i.romulan.visible){i.setRomulan(!0);return}const V=i.romulan.userData.cloakTarget<.5;i.setCloak(V),mt.classList.toggle("active",V),t.textContent=V?"Cloaking device engaged":"Decloaking"}),i.onRomulanChanged(V=>{P.classList.toggle("active",V),mt.classList.toggle("active",!V)});let ot=0;setInterval(()=>{!i.romulan.visible||i.romulan.userData.cloak>.5||i.state.playback||(ot++,ot%4===0&&i.romulanFire())},2e3);const vt=document.getElementById("klingon");vt.addEventListener("click",()=>{const V=!i.klingon.visible;i.setKlingon(V),t.textContent=V?"Klingon battle cruiser decloaking off the bow — shields up":"Klingon cruiser withdrawn"}),i.onKlingonChanged(V=>vt.classList.toggle("active",V));let lt=0;setInterval(()=>{!i.klingon.visible||i.state.playback||(lt++,lt%3===0&&i.klingonFire())},2e3),document.getElementById("phasers").addEventListener("click",()=>{i.firePhasers(),t.textContent="Phasers firing"}),document.getElementById("torpedo").addEventListener("click",()=>{i.fireTorpedo(),t.textContent="Photon torpedo away"}),document.getElementById("export").addEventListener("click",async V=>{const nt=V.shiftKey;t.textContent=nt?"Exporting GLB with interiors…":"Exporting GLB…";try{await i.exportGLB({interiors:nt}),t.textContent=nt?"GLB exported · cutaway variant":"GLB exported · uss-enterprise-ncc-1701.glb"}catch(D){console.error(D),t.textContent="Export failed · see console"}}),t.textContent="Reconstruction online · 11-foot studio model scale"}const Vv=document.getElementById("stage"),Eh=Lv(Vv);zv(Eh);window.viewer=Eh;
//# sourceMappingURL=index-D89yoaqF.js.map
