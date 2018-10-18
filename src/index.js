class ScrollProgress {
  constructor (options) {
    this.options = Object.assign({}, {
      position: 'top',
      height: '3px',
      color: '#2980B9',
      onReachBottom: () => {},
      onReachTop: () => {}
    }, options)
    this.generate()
    this.listen() 
  }

  generate () {
    const { height, color, barPosition } = this.options
    this.el = document.createElement('div')
    this.el.className = this.className
    this.el.style.position = 'fixed'
    this.el.style.height = height
    this.el.style.background = color
    this.el.style.borderRadius = '2px'

    this.el.style.top = 0
    this.el.style.left = 0
    document.body.appendChild(this.el)
  }

  listen () {
    const _this = this
    window.addEventListener('scroll', () => {
      if (document.documentElement.scrollTop === (document.documentElement.scrollHeight - document.documentElement.clientHeight)) {
        _this.options.onReachBottom()
      }

      if (document.documentElement.scrollTop === 0) {
        _this.options.onReachTop()
      }
      _this.calc()
    })
    window.addEventListener('resize', this.calc.bind(this))
  }

  calc () {
    const totalHeight = document.documentElement.scrollHeight
    const availableHeight = document.documentElement.clientHeight
    const ratio = (document.documentElement.scrollTop / (totalHeight - availableHeight)) * 100 + '%'
    this.el.style.width = ratio
  }
}

export default ScrollProgress