/**
 * Modeling spring motion.
 */
export class Spring {

  /**
   * Construct a spring motion.
   * 
   * @param {Object} opt
   * @param {THREE.Vector3} opt.p Position
   * @param {THREE.Vector3} opt.q Equilibrium position
   * @param {number} opt.f Frequency
   * @param {number} opt.k Amplitude attenuation per period
   * @param {number} opt.A Max amplitude
   */
  constructor({ p, q, f, k, A }) {
    this.p = p;
    this.q = q;
    this.f = f;
    this.k = k;
    this.A = A;
    this.reset();
  }

  /**
   * Reset motion ( t = 0 ).
   */
  reset() {
    this._t = 0; // curr time
    this._p = this.p.clone(); // init
  }

  /**
   * Update motion.
   * 
   * @param {number} dt Delta time in second 
   */
  update(dt) {
    const t = (this._t += dt);
    const f = this.f * t;
    const k = this.k ** f;
    const a = this.p.distanceTo(this.q) * k;
    const n = Math.sin(2 * Math.PI * f + t);
    const l = Math.min(this.A, a) * n;
    this._p.copy(this.q).add(this.q.clone().sub(this.p).setLength(l));
  }

  /**
   * Current position.
   */
  get position() {
    return this._p;
  }
}