function drawSquare(x = 10, y = 10, width = 100, height = 100, color = "lightgrey") {
    this.canvas = document.createElement('canvas');
    if (this.canvas.getContext) {
        this.ctx = this.canvas.getContext('2d');
        this.ctx.fillStyle = color;
        this.ctx.fillRect(x, y, width, height);
        document.body.appendChild(this.canvas);
    }
}

function drawTriangle(X1 = 50, Y1 = 10, X2 = 0, Y2 = 100, X3 = 100, Y3 = 100, color = "pink") {
    this.canvas = document.createElement('canvas');
    if (this.canvas.getContext) {
        this.ctx = this.canvas.getContext('2d');

        this.ctx.beginPath();

        this.ctx.moveTo(X1, Y1);
        this.ctx.lineTo(X2, Y2);
        this.ctx.lineTo(X3, Y3);
        this.ctx.closePath();

        this.ctx.fillStyle = color;
        this.ctx.fill();
        document.body.appendChild(this.canvas);
    }
}