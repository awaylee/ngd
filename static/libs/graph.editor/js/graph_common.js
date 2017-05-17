!function(Q){
    //animation
    function animateScrollTo(x, y) {
        if (x instanceof HTMLElement) {
            y = x.offsetTop;
            x = window.scrollX || 0;
        }
        var oldX = window.scrollX || 0;
        var oldY = window.scrollY || 0;
        var time = Math.min(500, Math.abs(x - oldX) + Math.abs(y - oldY));
        var perX = (x - oldX) / time;
        var perY = (y - oldY) / time;

        var now = Date.now();
        var end = now + time;

        function A() {
            var spend = Date.now() - now;
            now = Date.now();
            if (now >= end) {
                window.scrollTo(x, y);
            } else {
                window.scrollTo(oldX = oldX + perX * spend, oldY = oldY + perY
                * spend);
                Q.nextFrame(A);
            }
        }

        A();
    }

    function showDivCenterAt(div, x, y) {
        var width = div.offsetWidth;
        var height = div.offsetHeight;
        div.style.left = (x - width / 2) + 'px';
        div.style.top = (y - height / 2) + 'px';
    }

    Q.showDivCenterAt = showDivCenterAt;
}(Q)
!function(Q, $){
    var createElement = function (options) {
        options = options || {};
        var element = document.createElement(options.tagName || 'div');
        if(options.class){
            $(element).addClass(options.class);
        }
        if (options.parent) {
            options.parent.appendChild(element);
        }
        if(options.style){
            element.setAttribute('style', options.style);
        }
        if(options.css){
            $(element).css(options.css);
        }
        if(options.html){
            $(element).html(options.html);
        }
        //$(element).attr(options);
        return element;
    }

    Q.createElement = createElement;

}(Q, jQuery)

    !function (Q) {
        ///drag and drop
        var DRAGINFO_PREFIX = "draginfo";

        function ondrag(evt) {
            evt = evt || window.event;
            var dataTransfer = evt.dataTransfer;
            var img = evt.target;
            dataTransfer.setData("text", img.getAttribute(DRAGINFO_PREFIX));
        }

        function createDNDImage(parent, src, title, info) {
            var img = document.createElement("img");
            img.src = src;
            img.setAttribute("title", title);
            info = info || {};
            info.label = info.label || title;
            info.title = title;
            if (!info.image && (!info.type || info.type == "Node")) {
                info.image = src;
            }
            appendDragInfo(img, info);
            parent.appendChild(img);
            return img;
        }

        function appendDragInfo(img, info) {
            img.setAttribute("draggable", "true");
            img.setAttribute(DRAGINFO_PREFIX, Q.exportJSON ? Q.exportJSON(info, true) : JSON.stringify(info));
            img.ondragstart = ondrag;
            return img;
        }

        var isIE9_10 = /MSIE 9/i.test(navigator.userAgent) || /MSIE 10/i.test(navigator.userAgent);
        var dragSupport = !isIE9_10;
        if (!dragSupport) {
            var DRAG_INFO = {};
            var getMousePageLocation = function (evt) {
                return {
                    x: evt.pageX,
                    y: evt.pageY
                }
            }
            var body = document.documentElement;
            var enableDrag = function () {

                body.addEventListener('mousemove', function (evt) {
                    if (!DRAG_INFO.target) {
                        return;
                    }
                    Q.stopEvent(evt);
                    var point = getMousePageLocation(evt);
                    if (!DRAG_INFO.dragElement) {
                        var target = DRAG_INFO.target;
                        if (Math.abs(point.x - DRAG_INFO.dragPoint.x) <= 5 || Math.abs(point.y - DRAG_INFO.dragPoint.y) <= 5) {
                            return
                        }
                        var div = document.createElement('div');
                        div.style.position = 'absolute';
                        div.style.zIndex = 10000;

                        var dragButton = target.cloneNode(true);
                        if (/canvas/i.test(dragButton.tagName)) {
                            dragButton.getContext('2d').drawImage(target, 0, 0);
                        } else {
                            div.style.maxWidth = '30px';
                            div.style.maxWidth = '30px';
                            div.style.cursor = 'move'
                        }
                        //dragButton.style.pointerEvents = 'none';
                        //div.style.pointerEvents = 'none';
                        dragButton.id = null;
                        //div.setAttribute('class', 'drag-element');
                        div.appendChild(dragButton);
                        body.appendChild(div);
                        DRAG_INFO.dragElement = div;

                        var event = {target: target}
                        //start drag
                        if (target.ondragstart instanceof Function) {
                            DRAG_INFO.dataTransfer = event.dataTransfer = {
                                datas: {},
                                setData: function (name, value) {
                                    this.datas[name] = value;
                                },
                                getData: function (name) {
                                    return this.datas[name];
                                }
                            }
                            target.ondragstart(event);
                        }
                    }
                    DRAG_INFO.dragElement.style.left = (point.x - DRAG_INFO.dragElement.clientWidth / 2) + 'px';
                    DRAG_INFO.dragElement.style.top = (point.y - DRAG_INFO.dragElement.clientHeight / 2) + 'px';
                }, false);
                body.addEventListener('mouseup', function (evt) {
                    if (!DRAG_INFO.target) {
                        return;
                    }
                    delete DRAG_INFO.dragPoint;
                    delete DRAG_INFO.target;

                    if (DRAG_INFO.dragElement) {
                        body.removeChild(DRAG_INFO.dragElement);
                        delete DRAG_INFO.dragElement;
                    }

                    var point = getMousePageLocation(evt);

                    var graphs = document.getElementsByClassName('Q-Graph');
                    var i = 0;
                    while (i < graphs.length) {
                        var graph = graphs[i];
                        ++i;
                        var viewport = getClientRect(graph);
                        if (!containPoint(viewport, point)) {
                            continue;
                        }
                        if (graph.ondrop instanceof Function) {
                            evt.dataTransfer = DRAG_INFO.dataTransfer;

                            graph.ondrop(evt);
                        }
                        break;
                    }
                    delete DRAG_INFO.dataTransfer;
                }, false);
            }
            var containPoint = function (rect, point) {
                return point.x >= rect.x && point.x <= rect.x + rect.width && point.y >= rect.y && point.y <= rect.y + rect.height;
            }
            var getOffset = function (element) {
                var left = 0;
                var top = 0;
                while (element.offsetParent) {
                    left += element.clientLeft + element.offsetLeft - element.scrollLeft;
                    top += element.clientTop + element.offsetTop - element.scrollTop;
                    element = element.offsetParent;
                }
                return {x: left, y: top};
            }
            var getClientRect = function (root) {
                var offset = getOffset(root);
                var x = offset.x + root.scrollLeft;
                var y = offset.y + root.scrollTop;
                var width = root.clientWidth;
                var height = root.clientHeight;
                return {
                    x: x,
                    y: y,
                    left: x,
                    top: y,
                    right: x + width,
                    bottom: y + height,
                    width: width,
                    height: height
                }
            }
            var appendDragInfo2 = function (button) {
                button.onmousedown = function (evt) {
                    DRAG_INFO.dragPoint = getMousePageLocation(evt);
                    DRAG_INFO.target = button;
                    Q.stopEvent(evt);
                }
                return button;
            }

            appendDragInfo = function (img, info) {
                img.setAttribute("draggable", "true");
                img.setAttribute(DRAGINFO_PREFIX, JSON.stringify(info));
                img.ondragstart = ondrag;

                appendDragInfo2(img)
                return img;
            }
            enableDrag();
        }

        Q.createDNDImage = createDNDImage;
        Q.appendDNDInfo = appendDragInfo;
    }(Q)
;
(function (Q, $) {
    var template = '<div class="graph-export-panel modal fade">\
  <div class="modal-dialog">\
  <div class="modal-content">\
  <div class="modal-body">\
  <h3 style="text-align: center;">图片导出预览</h3>\
  <div>\
  <label>画布大小</label>\
  <span class ="graph-export-panel__canvas_size"></span>\
  </div>\
  <div style="text-align: center;" title="双击选择全画布范围">\
  <div class ="graph-export-panel__export_canvas" style="position: relative; display: inline-block;">\
  </div>\
  </div>\
  <div>\
  <label>导出范围</label>\
  <span class ="graph-export-panel__export_bounds"></span>\
  </div>\
  <div>\
  <label>缩放比例: <input class ="graph-export-panel__export_scale" type="range" value="1" step="0.2" min="0.2" max="3"><span class ="graph-export-panel__export_scale_label">1</span></label>\
  </div>\
  <div>\
  <label>输出大小: </label><span class ="graph-export-panel__export_size"></span>\
  </div>\
  <div style="text-align: right">\
  <button type="submit" class="btn btn-primary graph-export-panel__export_submit">导出</button>\
  <button type="submit" class="btn btn-primary graph-export-panel__print_submit">打印</button>\
  </div>\
  </div>\
  </div>\
  </div>\
  </div>';

///ExportPanel
    function ResizeBox(parent, onBoundsChange) {
        this.onBoundsChange = onBoundsChange;
        this.parent = parent;
        this.handleSize = Q.isTouchSupport ? 20 : 8;

        this.boundsDiv = this._createDiv(this.parent);
        this.boundsDiv.type = "border";
        this.boundsDiv.style.position = "absolute";
        this.boundsDiv.style.border = "dashed 1px #888";
        var handles = "lt,t,rt,l,r,lb,b,rb";
        handles = handles.split(",");
        for (var i = 0, l = handles.length; i < l; i++) {
            var name = handles[i];
            var handle = this._createDiv(this.parent);
            handle.type = "handle";
            handle.name = name;
            handle.style.position = "absolute";
            handle.style.backgroundColor = "#FFF";
            handle.style.border = "solid 1px #555";
            handle.style.width = handle.style.height = this.handleSize + "px";
            var cursor;
            if (name == 'lt' || name == 'rb') {
                cursor = "nwse-resize";
            } else if (name == 'rt' || name == 'lb') {
                cursor = "nesw-resize";
            } else if (name == 't' || name == 'b') {
                cursor = "ns-resize";
            } else {
                cursor = "ew-resize";
            }
            handle.style.cursor = cursor;
            this[handles[i]] = handle;
        }
        this.interaction = new Q.DragSupport(this.parent, this);
    }

    ResizeBox.prototype = {
        destroy: function () {
            this.interaction.destroy();
        },
        update: function (width, height) {
            this.wholeBounds = new Q.Rect(0, 0, width, height);
            this._setBounds(this.wholeBounds.clone());
        },
        ondblclick: function (evt) {
            if (this._bounds.equals(this.wholeBounds)) {
                if (!this.oldBounds) {
                    this.oldBounds = this.wholeBounds.clone().grow(-this.wholeBounds.height / 5, -this.wholeBounds.width / 5);
                }
                this._setBounds(this.oldBounds, true);
                return;
            }
            this._setBounds(this.wholeBounds.clone(), true);
        },
        startdrag: function (evt) {
            if (evt.target.type) {
                this.dragItem = evt.target;
            }
        },
        ondrag: function (evt) {
            if (!this.dragItem) {
                return;
            }
            Q.stopEvent(evt);
            var dx = evt.dx;
            var dy = evt.dy;
            if (this.dragItem.type == "border") {
                this._bounds.offset(dx, dy);
                this._setBounds(this._bounds, true);
            } else if (this.dragItem.type == "handle") {
                var name = this.dragItem.name;
                if (name[0] == 'l') {
                    this._bounds.x += dx;
                    this._bounds.width -= dx;
                } else if (name[0] == 'r') {
                    this._bounds.width += dx;
                }
                if (name[name.length - 1] == 't') {
                    this._bounds.y += dy;
                    this._bounds.height -= dy;
                } else if (name[name.length - 1] == 'b') {
                    this._bounds.height += dy;
                }
                this._setBounds(this._bounds, true);
            }

        },
        enddrag: function (evt) {
            if (!this.dragItem) {
                return;
            }
            this.dragItem = false;
            if (this._bounds.width < 0) {
                this._bounds.x += this._bounds.width;
                this._bounds.width = -this._bounds.width;
            } else if (this._bounds.width == 0) {
                this._bounds.width = 1;
            }
            if (this._bounds.height < 0) {
                this._bounds.y += this._bounds.height;
                this._bounds.height = -this._bounds.height;
            } else if (this._bounds.height == 0) {
                this._bounds.height = 1;
            }
            if (this._bounds.width > this.wholeBounds.width) {
                this._bounds.width = this.wholeBounds.width;
            }
            if (this._bounds.height > this.wholeBounds.height) {
                this._bounds.height = this.wholeBounds.height;
            }
            if (this._bounds.x < 0) {
                this._bounds.x = 0;
            }
            if (this._bounds.y < 0) {
                this._bounds.y = 0;
            }
            if (this._bounds.right > this.wholeBounds.width) {
                this._bounds.x -= this._bounds.right - this.wholeBounds.width;
            }
            if (this._bounds.bottom > this.wholeBounds.height) {
                this._bounds.y -= this._bounds.bottom - this.wholeBounds.height;
            }

            this._setBounds(this._bounds, true);
        },
        _createDiv: function (parent) {
            var div = document.createElement("div");
            parent.appendChild(div);
            return div;
        },
        _setHandleLocation: function (handle, x, y) {
            handle.style.left = (x - this.handleSize / 2) + "px";
            handle.style.top = (y - this.handleSize / 2) + "px";
        },
        _setBounds: function (bounds) {
            if (!bounds.equals(this.wholeBounds)) {
                this.oldBounds = bounds;
            }
            this._bounds = bounds;
            bounds = bounds.clone();
            bounds.width += 1;
            bounds.height += 1;
            this.boundsDiv.style.left = bounds.x + "px";
            this.boundsDiv.style.top = bounds.y + "px";
            this.boundsDiv.style.width = bounds.width + "px";
            this.boundsDiv.style.height = bounds.height + "px";

            this._setHandleLocation(this.lt, bounds.x, bounds.y);
            this._setHandleLocation(this.t, bounds.cx, bounds.y);
            this._setHandleLocation(this.rt, bounds.right, bounds.y);
            this._setHandleLocation(this.l, bounds.x, bounds.cy);
            this._setHandleLocation(this.r, bounds.right, bounds.cy);
            this._setHandleLocation(this.lb, bounds.x, bounds.bottom);
            this._setHandleLocation(this.b, bounds.cx, bounds.bottom);
            this._setHandleLocation(this.rb, bounds.right, bounds.bottom);
            if (this.onBoundsChange) {
                this.onBoundsChange(this._bounds);
            }
        }
    }
    Object.defineProperties(ResizeBox.prototype, {
        bounds: {
            get: function () {
                return this._bounds;
            },
            set: function (v) {
                this._setBounds(v);
            }
        }
    });

    function ExportPanel() {
        var export_panel = $('<div/>').html(template).contents();
        this.html = export_panel = export_panel[0];
        document.body.appendChild(this.html);
        export_panel.addEventListener("mousedown", function (evt) {
            if (evt.target == export_panel) {
                this.destroy();
            }
        }.bind(this), false);
        var export_scale = this._getChild(".graph-export-panel__export_scale");
        var export_scale_label = this._getChild(".graph-export-panel__export_scale_label");
        export_scale.onchange = function (evt) {
            export_scale_label.textContent = this.scale = export_scale.value;
            this.updateOutputSize();
        }.bind(this);
        this.export_scale = export_scale;
        var saveImage = function(saveAs){
            //var blob = new Blob([json], {type: "text/plain;charset=utf-8"});
            //saveAs(blob, "data.json");
            var imageInfo = this.exportImageInfo();
            if (!imageInfo) {
                return;
            }
            var canvas = imageInfo.canvas;
            var name = this.graph.name || 'graph';
            canvas.toBlob(function(blob){
                saveAs(blob, name + ".png");
            }, "image/png");
        }
        var exportImage = function (print, evt) {
            var imageInfo = this.exportImageInfo();
            if (!imageInfo) {
                return;
            }
            var win = window.open();
            var doc = win.document;
            doc.title = this.graph.name || "";
        //doc.title = "export image - " + imageInfo.width + " x " + imageInfo.height;
            var img = doc.createElement("img");
            img.src = imageInfo.data;
            doc.body.style.textAlign = "center";
            doc.body.style.margin = "0px";
            doc.body.appendChild(img);

            if (print === true) {
                var style = doc.createElement("style");
                style.setAttribute("type", "text/css");
                style.setAttribute("media", "print");
                var printCSS = "img {max-width: 100%; max-height: 100%;}";
                if (this.clipBounds.width / this.clipBounds.height > 1.2) {
                    printCSS += "\n @page { size: landscape; }";
                }
                style.appendChild(document.createTextNode(printCSS));
                doc.head.appendChild(style);

                img.style.maxWidth = "100%";
                img.style.maxHeight = "100%";

                setTimeout(function () {
                    win.print();
                    win.onfocus = function () {
                        win.close();
                    }
                }, 100);
            }
        }
        var export_submit = this._getChild(".graph-export-panel__export_submit");
        if(window.saveAs && HTMLCanvasElement.prototype.toBlob){
            export_submit.onclick = saveImage.bind(this, window.saveAs);
        }else{
            export_submit.onclick = exportImage.bind(this);
        }

        var print_submit = this._getChild(".graph-export-panel__print_submit");
        print_submit.onclick = exportImage.bind(this, true);
    }

    ExportPanel.prototype = {
        canvas: null,
        html: null,
        exportImageInfo: function(graph){
            var graph = this.graph;
            if (!graph) {
                return;
            }
            var scale = this.export_scale.value;
            var s = this.imageInfo.scale;
            var clipBounds = new Q.Rect(this.clipBounds.x / s, this.clipBounds.y / s, this.clipBounds.width / s, this.clipBounds.height / s);
            clipBounds.offset(this.bounds.x, this.bounds.y);
            var imageInfo = graph.exportImage(scale, clipBounds);
            if (!imageInfo || !imageInfo.data) {
                return;
            }
            return imageInfo;
        },
        _getChild: function (selector) {
            return $(this.html).find(selector)[0];
        },
        initCanvas: function () {
            var export_canvas = this._getChild('.graph-export-panel__export_canvas');
            export_canvas.innerHTML = "";

            var canvas = Q.createCanvas(true);
            export_canvas.appendChild(canvas);
            this.canvas = canvas;

            var export_bounds = this._getChild(".graph-export-panel__export_bounds");
            var export_size = this._getChild(".graph-export-panel__export_size");
            var clipBounds;
            var drawPreview = function () {
                var canvas = this.canvas;
                var g = canvas.g;
                var ratio = canvas.ratio || 1;
                g.save();
                //g.scale(1/g.ratio, 1/g.ratio);
                g.clearRect(0, 0, canvas.width, canvas.height);
                g.drawImage(this.imageInfo.canvas, 0, 0);
                g.beginPath();
                g.moveTo(0, 0);
                g.lineTo(canvas.width, 0);
                g.lineTo(canvas.width, canvas.height);
                g.lineTo(0, canvas.height);
                g.lineTo(0, 0);

                var x = clipBounds.x * ratio, y = clipBounds.y * ratio, width = clipBounds.width * ratio, height = clipBounds.height * ratio;
                g.moveTo(x, y);
                g.lineTo(x, y + height);
                g.lineTo(x + width, y + height);
                g.lineTo(x + width, y);
                g.closePath();
                g.fillStyle = "rgba(0, 0, 0, 0.3)";
                g.fill();
                g.restore();
            }
            var onBoundsChange = function (bounds) {
                clipBounds = bounds;
                this.clipBounds = clipBounds;
                drawPreview.call(this);
                var w = clipBounds.width / this.imageInfo.scale | 0;
                var h = clipBounds.height / this.imageInfo.scale | 0;
                export_bounds.textContent = (clipBounds.x / this.imageInfo.scale | 0) + ", "
                + (clipBounds.y / this.imageInfo.scale | 0) + ", " + w + ", " + h;
                this.updateOutputSize();
            }
            this.updateOutputSize = function () {
                var export_scale = this._getChild(".graph-export-panel__export_scale");
                var scale = export_scale.value;
                var w = clipBounds.width / this.imageInfo.scale * scale | 0;
                var h = clipBounds.height / this.imageInfo.scale * scale | 0;
                var info = w + " X " + h;
                if (w * h > 3000 * 4000) {
                    info += "<span style='color: #F66;'>图幅太大，导出时可能出现内存不足</span>";
                }
                export_size.innerHTML = info;
            }
            var resizeHandler = new ResizeBox(canvas.parentNode, onBoundsChange.bind(this));
            this.update = function () {
                var ratio = this.canvas.ratio || 1;
                var width = this.imageInfo.width / ratio;
                var height = this.imageInfo.height / ratio;
                this.canvas.setSize(width, height);
                resizeHandler.update(width, height);
            }
        },
        destroy: function () {
            this.graph = null;
            this.imageInfo = null
            this.clipBounds = null;
            this.bounds = null;
        },
        show: function (graph) {
            $(this.html).modal("show");

            this.graph = graph;
            var bounds = graph.bounds;
            this.bounds = bounds;

            var canvas_size = this._getChild(".graph-export-panel__canvas_size");
            canvas_size.textContent = (bounds.width | 0) + " X " + (bounds.height | 0);

            var size = Math.min(500, screen.width / 1.3);
            var imageScale;
            if (bounds.width > bounds.height) {
                imageScale = Math.min(1, size / bounds.width);
            } else {
                imageScale = Math.min(1, size / bounds.height);
            }
            if (!this.canvas) {
                this.initCanvas();
            }
            this.imageInfo = graph.exportImage(imageScale * this.canvas.ratio);
            this.imageInfo.scale = imageScale;

            this.update();
        }
    }
    var exportPanel;

    function showExportPanel(graph) {
        if (!exportPanel) {
            exportPanel = new ExportPanel();
        }
        exportPanel.show(graph);
    }

    Q.showExportPanel = showExportPanel;
})(Q, jQuery);

/* FileSaver.js
 * A saveAs() FileSaver implementation.
 * 2014-11-29
 *
 * By Eli Grey, http://eligrey.com
 * License: X11/MIT
 *   See https://github.com/eligrey/FileSaver.js/blob/master/LICENSE.md
 */

/*global self */
/*jslint bitwise: true, indent: 4, laxbreak: true, laxcomma: true, smarttabs: true, plusplus: true */

/*! @source http://purl.eligrey.com/github/FileSaver.js/blob/master/FileSaver.js */

!function(window, document){
    var saveAs = saveAs
            // IE 10+ (native saveAs)
        || (typeof navigator !== "undefined" &&
        navigator.msSaveOrOpenBlob && navigator.msSaveOrOpenBlob.bind(navigator))
            // Everyone else
        || (function(view) {
            "use strict";
            // IE <10 is explicitly unsupported
            if (typeof navigator !== "undefined" &&
                /MSIE [1-9]\./.test(navigator.userAgent)) {
                return;
            }
            var
                doc = view.document
            // only get URL when necessary in case Blob.js hasn't overridden it yet
                , get_URL = function() {
                    return view.URL || view.webkitURL || view;
                }
                , save_link = doc.createElementNS("http://www.w3.org/1999/xhtml", "a")
                , can_use_save_link = "download" in save_link
                , click = function(node) {
                    var event = doc.createEvent("MouseEvents");
                    event.initMouseEvent(
                        "click", true, false, view, 0, 0, 0, 0, 0
                        , false, false, false, false, 0, null
                    );
                    node.dispatchEvent(event);
                }
                , webkit_req_fs = view.webkitRequestFileSystem
                , req_fs = view.requestFileSystem || webkit_req_fs || view.mozRequestFileSystem
                , throw_outside = function(ex) {
                    (view.setImmediate || view.setTimeout)(function() {
                        throw ex;
                    }, 0);
                }
                , force_saveable_type = "application/octet-stream"
                , fs_min_size = 0
            // See https://code.google.com/p/chromium/issues/detail?id=375297#c7 and
            // https://github.com/eligrey/FileSaver.js/commit/485930a#commitcomment-8768047
            // for the reasoning behind the timeout and revocation flow
                , arbitrary_revoke_timeout = 500 // in ms
                , revoke = function(file) {
                    var revoker = function() {
                        if (typeof file === "string") { // file is an object URL
                            get_URL().revokeObjectURL(file);
                        } else { // file is a File
                            file.remove();
                        }
                    };
                    if (view.chrome) {
                        revoker();
                    } else {
                        setTimeout(revoker, arbitrary_revoke_timeout);
                    }
                }
                , dispatch = function(filesaver, event_types, event) {
                    event_types = [].concat(event_types);
                    var i = event_types.length;
                    while (i--) {
                        var listener = filesaver["on" + event_types[i]];
                        if (typeof listener === "function") {
                            try {
                                listener.call(filesaver, event || filesaver);
                            } catch (ex) {
                                throw_outside(ex);
                            }
                        }
                    }
                }
                , FileSaver = function(blob, name) {
                    // First try a.download, then web filesystem, then object URLs
                    var
                        filesaver = this
                        , type = blob.type
                        , blob_changed = false
                        , object_url
                        , target_view
                        , dispatch_all = function() {
                            dispatch(filesaver, "writestart progress write writeend".split(" "));
                        }
                    // on any filesys errors revert to saving with object URLs
                        , fs_error = function() {
                            // don't create more object URLs than needed
                            if (blob_changed || !object_url) {
                                object_url = get_URL().createObjectURL(blob);
                            }
                            if (target_view) {
                                target_view.location.href = object_url;
                            } else {
                                var new_tab = view.open(object_url, "_blank");
                                if (new_tab == undefined && typeof safari !== "undefined") {
                                    //Apple do not allow window.open, see http://bit.ly/1kZffRI
                                    view.location.href = object_url
                                }
                            }
                            filesaver.readyState = filesaver.DONE;
                            dispatch_all();
                            revoke(object_url);
                        }
                        , abortable = function(func) {
                            return function() {
                                if (filesaver.readyState !== filesaver.DONE) {
                                    return func.apply(this, arguments);
                                }
                            };
                        }
                        , create_if_not_found = {create: true, exclusive: false}
                        , slice
                        ;
                    filesaver.readyState = filesaver.INIT;
                    if (!name) {
                        name = "download";
                    }
                    if (can_use_save_link) {
                        object_url = get_URL().createObjectURL(blob);
                        save_link.href = object_url;
                        save_link.download = name;
                        click(save_link);
                        filesaver.readyState = filesaver.DONE;
                        dispatch_all();
                        revoke(object_url);
                        return;
                    }
                    // Object and web filesystem URLs have a problem saving in Google Chrome when
                    // viewed in a tab, so I force save with application/octet-stream
                    // http://code.google.com/p/chromium/issues/detail?id=91158
                    // Update: Google errantly closed 91158, I submitted it again:
                    // https://code.google.com/p/chromium/issues/detail?id=389642
                    if (view.chrome && type && type !== force_saveable_type) {
                        slice = blob.slice || blob.webkitSlice;
                        blob = slice.call(blob, 0, blob.size, force_saveable_type);
                        blob_changed = true;
                    }
                    // Since I can't be sure that the guessed media type will trigger a download
                    // in WebKit, I append .download to the filename.
                    // https://bugs.webkit.org/show_bug.cgi?id=65440
                    if (webkit_req_fs && name !== "download") {
                        name += ".download";
                    }
                    if (type === force_saveable_type || webkit_req_fs) {
                        target_view = view;
                    }
                    if (!req_fs) {
                        fs_error();
                        return;
                    }
                    fs_min_size += blob.size;
                    req_fs(view.TEMPORARY, fs_min_size, abortable(function(fs) {
                        fs.root.getDirectory("saved", create_if_not_found, abortable(function(dir) {
                            var save = function() {
                                dir.getFile(name, create_if_not_found, abortable(function(file) {
                                    file.createWriter(abortable(function(writer) {
                                        writer.onwriteend = function(event) {
                                            target_view.location.href = file.toURL();
                                            filesaver.readyState = filesaver.DONE;
                                            dispatch(filesaver, "writeend", event);
                                            revoke(file);
                                        };
                                        writer.onerror = function() {
                                            var error = writer.error;
                                            if (error.code !== error.ABORT_ERR) {
                                                fs_error();
                                            }
                                        };
                                        "writestart progress write abort".split(" ").forEach(function(event) {
                                            writer["on" + event] = filesaver["on" + event];
                                        });
                                        writer.write(blob);
                                        filesaver.abort = function() {
                                            writer.abort();
                                            filesaver.readyState = filesaver.DONE;
                                        };
                                        filesaver.readyState = filesaver.WRITING;
                                    }), fs_error);
                                }), fs_error);
                            };
                            dir.getFile(name, {create: false}, abortable(function(file) {
                                // delete file if it already exists
                                file.remove();
                                save();
                            }), abortable(function(ex) {
                                if (ex.code === ex.NOT_FOUND_ERR) {
                                    save();
                                } else {
                                    fs_error();
                                }
                            }));
                        }), fs_error);
                    }), fs_error);
                }
                , FS_proto = FileSaver.prototype
                , saveAs = function(blob, name) {
                    return new FileSaver(blob, name);
                }
                ;
            FS_proto.abort = function() {
                var filesaver = this;
                filesaver.readyState = filesaver.DONE;
                dispatch(filesaver, "abort");
            };
            FS_proto.readyState = FS_proto.INIT = 0;
            FS_proto.WRITING = 1;
            FS_proto.DONE = 2;

            FS_proto.error =
                FS_proto.onwritestart =
                    FS_proto.onprogress =
                        FS_proto.onwrite =
                            FS_proto.onabort =
                                FS_proto.onerror =
                                    FS_proto.onwriteend =
                                        null;

            return saveAs;
        }(
            typeof self !== "undefined" && self
            || typeof window !== "undefined" && window
            || this.content
        ));
// `self` is undefined in Firefox for Android content script context
// while `this` is nsIContentFrameMessageManager
// with an attribute `content` that corresponds to the window

    if (typeof module !== "undefined" && module !== null) {
        module.exports = saveAs;
    } else if ((typeof define !== "undefined" && define !== null) && (define.amd != null)) {
        define([], function() {
            return saveAs;
        });
    }
    window.saveAs = saveAs;
}(window, document);

!function (Q) {
    window.requestFileSystem = window.requestFileSystem || window.webkitRequestFileSystem;
    Q.isFileSupported = window.requestFileSystem != null;

    if (Q.isFileSupported) {
        function readerSingleFile(file, ext, cb) {
            var name = file.name;
            if (Q.isString(ext)) {
                var reg = new RegExp('.' + ext + '$', 'gi');
                if (!reg.test(name)) {
                    alert('Please selects .' + ext + ' file');
                    return;
                }
            } else if (ext instanceof Function) {
                cb = ext;
            }
            var fileReader = new FileReader();
            fileReader.onload = function (evt) {
                cb(fileReader.result);
            }
            fileReader.readAsText(file, 'utf-8');
        }

        Q.readerSingleFile = readerSingleFile;
    }
}(Q)
function GridBackground(graph) {
    this.graph = graph;
    graph.onPropertyChange('viewport', this.update.bind(this));
    graph.onPropertyChange('transform', this.update.bind(this));

    this.canvas = Q.createCanvas(graph.width, graph.height, true);
    //this.canvas.style.backgroundColor = '#FFD';
    this.canvas.style.position = 'absolute';
    this.canvas.style.top = '0px';
    this.canvas.style['-webkit-user-select'] = 'none';
    this.canvas.style['-webkit-tap-highlight-color'] = 'rgba(0, 0, 0, 0)';

    this.scaleCanvas = Q.createCanvas(graph.width, graph.height, true);
    this.scaleCanvas.style.position = 'absolute';
    this.scaleCanvas.style.top = '0px';
    this.scaleCanvas.style['-webkit-user-select'] = 'none';
    this.scaleCanvas.style['-webkit-tap-highlight-color'] = 'rgba(0, 0, 0, 0)';

    graph.canvasPanel.insertBefore(this.canvas, graph.canvasPanel.firstChild);
    graph.canvasPanel.appendChild(this.scaleCanvas);

    this.update();
}

GridBackground.prototype = {
    update: function () {
        var graph = this.graph;
        var canvas = this.canvas;
        var scaleCanvas = this.scaleCanvas;
        graph.callLater(function () {
            canvas.setSize(graph.width, graph.height);
            canvas.width = canvas.width;//clear canvas
            scaleCanvas.setSize(graph.width, graph.height);
            scaleCanvas.width = canvas.width;//clear canvas

            var scale = graph.scale;
            var gap = 50 / scale;
            var currentCell = this.currentCell = 10 * (Math.round(gap / 10) || 1);

            scale = graph.scale * canvas.ratio;
            var bounds = graph.viewportBounds;
            var g = canvas.g;

            g.save();
            this._doTransform(g, scale, bounds);

            g.beginPath();
            var x = bounds.x, y = bounds.y, right = bounds.right, bottom = bounds.bottom;
            if (x % currentCell !== 0) {
                x -= (x % currentCell);
            }
            if (y % currentCell !== 0) {
                y -= (y % currentCell);
            }
            while (x < right) {
                g.moveTo(x, bounds.y);
                g.lineTo(x, bottom);
                x += currentCell;
            }
            while (y < bottom) {
                g.moveTo(bounds.x, y);
                g.lineTo(right, y);
                y += currentCell;
            }

            g.lineWidth = 1 / scale;
            g.strokeStyle = '#CCC';
            g.stroke();

            scaleCanvas.g.save();
            this._doTransform(scaleCanvas.g, scale, bounds);
            this.drawScales(scaleCanvas.g, bounds, scale, scaleCanvas.ratio);
            scaleCanvas.g.restore();

            g.restore();
        }, this);
    },
    _doTransform: function(g, scale, bounds){
        g.translate(-scale * bounds.x, -scale * bounds.y);
        g.scale(scale, scale);
    },
    drawText: function (g, text, x, y, fontSize, textAlign, textBaseline, rotate) {
        fontSize = fontSize || 7;
        g.save();
        var fontScale = 3;
        fontSize *= fontScale;
        g.font = 'normal ' + fontSize + 'px helvetica arial';
        g.fillStyle = '#555';
        g.textAlign = textAlign || 'center';
        g.textBaseline = textBaseline || 'top';
        g.translate(x, y);
        if (rotate) {
            g.rotate(rotate);
        }
        g.scale(1 / fontScale, 1 / fontScale);
        g.fillText(text, 0, 0);
        g.restore();
    },
    drawScales: function (g, bounds, scale, ratio) {
        g.beginPath();

        var scaleLength = 5 * ratio / scale;

        //g.moveTo(bounds.x, bounds.y);
        //g.lineTo(bounds.right, bounds.y);
        //g.moveTo(bounds.x, bounds.y);
        //g.lineTo(bounds.x, bounds.bottom);
        //
        //g.lineWidth = 5 / scale;
        //g.strokeStyle = '#2898E0';
        //g.stroke();

        var fontSize = 12 * ratio / scale;

        g.beginPath();
        var x = bounds.x;
        x = this.currentCell * Math.ceil(x / this.currentCell);
        while (x < bounds.right) {
            g.moveTo(x, bounds.y);
            g.lineTo(x, bounds.y + scaleLength + scaleLength);
            this.drawText(g, '' + x | 0, x, bounds.y + scaleLength + scaleLength, fontSize);
            x += this.currentCell;
        }
        var y = bounds.y;
        y = this.currentCell * Math.ceil(y / this.currentCell);
        while (y < bounds.bottom) {
            g.moveTo(bounds.x, y);
            g.lineTo(bounds.x + scaleLength + scaleLength, y);
            this.drawText(g, '' + y | 0, bounds.x + scaleLength + scaleLength, y, fontSize, 'center', 'top', -Math.PI / 6);
            y += this.currentCell;
        }
        g.lineWidth = 1 / scale;
        g.strokeStyle = '#000';
        g.stroke();
    }
}
var i18n = {
    'zh-cn': {
        'Name': '名称',
        'Render Color': '渲染色',
        'Border': '边框',
        'Border Color': '边框颜色',
        'Location': '坐标',
        'Size': '尺寸',
        'Rotate': '旋转',
        'Label Color': '文本颜色',
        'Background Color': '背景色',
        'Font Size': '字体大小',
        'json file is empty': 'JSON文件为空',
        'Save Error': '保存错误',
        'Save Success': '保存成功',
        'Update': '更新',
        'Submit': '提交',
        'Export JSON': '导出JSON',
        'Load File ...': '加载文件 ...',
        'Download File': '下载文件',
        'Save': '保存',
        'Rename': '重命名',
        'Input Element Name': '输入图元名称',
        'Solid Line': '实线样式',
        'Dashed Line': '虚线样式',
        'Line Width': '连线宽度',
        'Input Line Width': '输入连线宽度',
        'Line Color': '连线颜色',
        'Input Line Color': '输入连线颜色',
        'Out of Group': '脱离分组',
        'Send to Top': '置顶显示',
        'Send to Bottom': '置底显示',
        'Reset Layer': '恢复默认层',
        'Clear Graph': '清空画布',
        'Zoom In': '放大',
        'Zoom Out': '缩小',
        '1:1': '1:1',
        'Pan Mode': '平移模式',
        'Rectangle Select': '框选模式',
        'Text': '文字',
        'Basic Nodes': '基本节点',
        'Register Images': '注册图片',
        'Default Shapes': '默认形状'
    }
}

var lang = navigator.language || navigator.browserLanguage;
lang = lang.toLowerCase();

function getI18NString(key) {
    if(!i18n[lang]){
        return key;
    }
    var result = i18n[lang][key];
    if (result === undefined) {
        return key;
    }
    return result;
}
//json export and parse support
!function (Q, window, document) {
    if (Q.Graph.prototype.parseJSON) {
        return;
    }

    //<=v1.7
    function JSONSerializer1_7(options) {
        this._refs = {};
        if (options) {
            this.root = options.root;
        }
    }

    JSONSerializer1_7.prototype = {
        _refs: null,
        _index: 1,
        root: null,
        reset: function () {
            this._refs = {};
            this._index = 1;
        },
        getREF: function (id) {
            return this._refs[id];
        },
        clearRef: function () {
            for (var id in this._refs) {
                var json = this._refs[id];
                var value = json._value;
                if (value) {
                    if (!value._refed) {
                        delete json._refId;
                    }
                    delete value._refed;
                    delete value._refId;
                    delete json._value;
                }
            }
            this.reset();
        },
        toJSON: function (value) {
            if (!(value instanceof Object)) {
                return value;
            }
            if (value instanceof Function && !value._classPath) {
                return null;
            }
            if (value._refId !== undefined) {
                value._refed = true;
                return {_ref: value._refId};
            }
            var refId = this._index++;
            value._refId = refId;
            var json = this._toJSON(value);
            json._refId = refId;
            json._value = value;
            this._refs[refId] = json;
            return json;
        },
        _toJSON: function (value) {
            if (value._classPath) {
                return {_classPath: value._classPath};
            }
            if (!value._className) {
                return value;
            }
            var result = {_className: value._className};
            if (value.toJSON) {
                result.json = value.toJSON(this);
            } else {
                result.json = value;
            }
            return result;
        },
        parseJSON: function (json) {
            if (!(json instanceof Object)) {
                return json;
            }
            if (json._ref !== undefined) {
                return this._refs[json._ref];
            }
            if (json._refId !== undefined) {
                return this._refs[json._refId] = this._parseJSON(json);
            }
            return this._parseJSON(json);
        },
        _parseJSON: function (json) {
            if (json._classPath) {
                return getByPath(json._classPath);
            }
            if (json._className) {
                var F = getByPath(json._className);
                var v = new F();
                ///防止相互引用导致的问题
                if (json._refId !== undefined) {
                    this._refs[json._refId] = v;
                }
                if (v && json.json) {
                    json = json.json;
                    if (v.parseJSON) {
                        v.parseJSON(json, this);
                    } else {
                        for (var n in json) {
                            v[n] = json[n];
                        }
                    }
                }
                return v;
            }
            return json;
        }
    }

    //v1.8
    function isEmptyObject(obj) {
        if (!(obj instanceof Object)) {
            return !obj;
        }
        if (Array.isArray(obj)) {
            return obj.length == 0;
        }
        for (var key in obj) {
            return false;
        }
        return true;
    }

    function getByPath(pathName, scope) {
        var paths = pathName.split('.');
        scope = scope || window;
        var i = -1;
        while (scope && ++i < paths.length) {
            var path = paths[i];
            scope = scope[path];
        }
        return scope;
    }

    function loadClassPath(object, namespace, loadChild) {
        object._classPath = namespace;
        if (object instanceof Function) {
            object.prototype._className = object._classPath;
            object.prototype._class = object;
//            Q.log(v._className);
//            continue;
        }
        if (loadChild === false) {
            return;
        }
        for (var name in object) {
            if (name[0] == '_' || name[0] == '$' || name == 'superclass' || name == 'constructor' || name == 'prototype' || name.indexOf('.') >= 0) {
                continue;
            }
            var v = object[name];
            if (!v || !(v instanceof Object) || v._classPath) {
                continue;
            }
            loadClassPath(v, namespace + '.' + name);
        }
    }

    var prototypes = {};

    function getPrototype(data) {
        var className = data._className;
        if (!className) {
            return null;
        }
        var prototype = prototypes[className];
        if (!prototype) {
            var clazz = data._class;
            prototype = prototypes[className] = new clazz();
        }
        return prototype;
    }

    function equals(a, b) {
        return a == b || (a && b && a.equals && a.equals(b));
    }

    Q.HashList.prototype.toJSON = function (serializer) {
        var datas = [];
        this.forEach(function (data) {
            datas.push(serializer.toJSON(data));
        })
        return datas;
    }

    Q.HashList.prototype.parseJSON = function (json, serializer) {
        var result = [];
        json.forEach(function (item) {
            var data = serializer.parseJSON(item);
            this.add(data);
            result.push(data);
        }, this)
        return result;
    }

    function exportElementProperties(serializer, properties, info, element) {
        var prototype = getPrototype(element);
        properties.forEach(function (name) {
            var value = element[name];
            if (!equals(value, prototype[name])) {
                var json = serializer.toJSON(value);
                if (json || !value) {
                    info[name] = json;
                }
            }
        }, element);
    }

    function exportProperties(serializer, properties) {
        var info;
        for (var s in properties) {
            if (!info) {
                info = {};
            }
            info[s] = serializer.toJSON(properties[s]);
        }
        return info;
    }

    var wirtableUIProperties = {
        class: false,
        id: false,
        "fillGradient": false,
        "syncSelectionStyles": false,
        "originalBounds": false,
        "parent": false,
        "font": false,
        "$data": false,
        "$x": false,
        "$y": false
    };

    Q.BaseUI.prototype.toJSON = function (serializer) {
        var json = {};
        for (var name in this) {
            if (name[0] == '_' || (name[0] == '$' && name[1] == '_') || (name.indexOf('$invalidate') == 0) || wirtableUIProperties[name] === false) {
                continue;
            }
            var value = this[name];
            if(value instanceof Function || value == this.class.prototype[name]){
                continue;
            }
            //wirtableUIProperties[name] = true;

            try{
                json[name] = serializer.toJSON(value);
            }catch(error){

            }

        }

        return json;
    }
    //new Q.ImageUI().toJSON();
    //new Q.LabelUI().toJSON();
    //Q.log(JSON.stringify(wirtableUIProperties))

    Q.BaseUI.prototype.parseJSON = function (info, serializer) {
        for (var name in info) {
            var v = serializer.parseJSON(info[name]);
            this[name] = v;
        }
    }

    var OUTPUT_PROPERTIES = ['enableSubNetwork', 'zIndex', 'tooltipType', 'tooltip', 'movable', 'selectable', 'resizable', 'uiClass', 'name', 'parent', 'host'];

    Q.Element.prototype.addOutProperty = function(name){
        if(!this.outputProperties){
            this.outputProperties = [];
        }
        this.outputProperties.push(name);
    }
    Q.Element.prototype.toJSON = function (serializer) {
        var info = {};
        var outputProperties = OUTPUT_PROPERTIES;
        if (this.outputProperties) {
            outputProperties = outputProperties.concat(this.outputProperties);
        }
        exportElementProperties(serializer, outputProperties, info, this);
        if (this.styles) {
            var styles = exportProperties(serializer, this.styles);
            if (styles) {
                info.styles = styles;
            }
        }
        if (this.properties) {
            var properties = exportProperties(serializer, this.properties);
            if (properties) {
                info.properties = properties;
            }
        }
        var bindingUIs = this.bindingUIs;
        if (bindingUIs) {
            var bindingJSONs = [];
            //var binding = {id: ui.id, ui: ui, bindingProperties: bindingProperties};
            bindingUIs.forEach(function (binding) {
                var uiJSON = serializer.toJSON(binding.ui);
                bindingJSONs.push({
                    ui: uiJSON,
                    bindingProperties: binding.bindingProperties
                })
            })
            info.bindingUIs = bindingJSONs;
        }
        return info;
    }
    Q.Element.prototype.parseJSON = function (info, serializer) {
        if (info.styles) {
            var styles = {};
            for (var n in info.styles) {
                styles[n] = serializer.parseJSON(info.styles[n]);
            }
            this.putStyles(styles, true);
            //delete info.styles;
        }
        if (info.properties) {
            var properties = {};
            for (var n in info.properties) {
                properties[n] = serializer.parseJSON(info.properties[n]);
            }
            this.properties = properties;
        }
        if (info.bindingUIs) {
            info.bindingUIs.forEach(function (binding) {
                var ui = serializer.parseJSON(binding.ui);
                if (!ui) {
                    return;
                }
                this.addUI(ui, binding.bindingProperties);

                //var circle = new Q.ImageUI(ui.data);
                //circle.lineWidth = 2;
                //circle.strokeStyle = '#ff9f00';
                //this.addUI(circle);
            }, this)
        }
        for (var n in info) {
            if (n == 'styles' || n == 'properties' || n == 'bindingUIs') {
                continue;
            }
            var v = serializer.parseJSON(info[n]);
            this[n] = v;
        }
    }
    Q.Node.prototype.toJSON = function (serializer) {
        var info = Q.doSuper(this, Q.Node, 'toJSON', arguments);
        exportElementProperties(serializer, ['location', 'size', 'image', 'rotate', 'anchorPosition'], info, this);
        return info;
    }
    Q.Group.prototype.toJSON = function (serializer) {
        var info = Q.doSuper(this, Q.Group, 'toJSON', arguments);
        exportElementProperties(serializer, ['minSize', 'groupType', 'padding', 'groupImage', 'expanded'], info, this);
        return info;
    }
    Q.ShapeNode.prototype.toJSON = function (serializer) {
        var info = Q.doSuper(this, Q.Node, 'toJSON', arguments);
        exportElementProperties(serializer, ['location', 'rotate', 'anchorPosition', 'path'], info, this);
        return info;
    }
    Q.Edge.prototype.toJSON = function (serializer) {
        var info = Q.doSuper(this, Q.Edge, 'toJSON', arguments);
        exportElementProperties(serializer, ['from', 'to', 'edgeType', 'angle', 'bundleEnabled', 'pathSegments'], info, this);
        return info;
    }

    function JSONSerializer(options) {
        if (options) {
            this.withGlobalRefs = options.withGlobalRefs !== false;
        }
        this.reset();
    }

    JSONSerializer.prototype = {
        _refs: null,
        _refValues: null,
        _index: 1,
        root: null,
        reset: function () {
            this._globalRefs = {};
            this._elementRefs = {};
            this._refs = {};
            this._refValues = {};
            this._index = 1;
        },
        getREF: function (id) {
            return this._refs[id];
        },
        clearRef: function () {
            for (var id in this._globalRefs) {
                delete this._globalRefs[id]._value;
            }
            for (var id in this._refValues) {
                delete this._refValues[id]._refId;
            }
            this.reset();
        },
        elementToJSON: function (element) {
            return this._toJSON(element);
        },
        _elementRefs: null,
        _globalRefs: null,
        withGlobalRefs: true,
        toJSON: function (value) {
            if (!(value instanceof Object)) {
                return value;
            }
            if (value instanceof Function && !value._classPath) {
                return null;
            }
            if(!this.withGlobalRefs){
                return this._toJSON(value);
            }
            if (value instanceof Q.Element) {
                this._elementRefs[value.id] = true;
                return {_ref: value.id};
            }
            if (value._refId === undefined) {
                var json = this._toJSON(value);
                if (!json) {
                    return json;
                }
                //添加引用标记，下次遇到这个对象时，不需要再toJSON，而是直接输出引用，比如{"$ref": 1}
                var id = value._refId = this._index++;
                //将对象暂时存放在_refValues中，以便在导出完成后，删除掉上一步对value增加的_refId属性
                this._refValues[id] = value;
                this._refs[id] = json;
                return json;
            }
            //遇到相同的对象，将对象信息存放到全局map，网元属性只需要存放引用id，比如{"$ref": 1}
            //全局map中存放在g属性中，以id为key，json为value，如下：
            //"refs": {
            //  "1": {
            //    "_classPath": "Q.Position.LEFT_BOTTOM"
            //  }
            //},
            //"datas": [
            //  {
            //    "_className": "Q.Node",
            //    "json": {
            //      "name": "A",
            //      "styles": {
            //        "property": {
            //          "$ref": 1
            //        }
            //      },
            var id = value._refId;
            if (!this._globalRefs[id]) {
                //如果还没有加入到全局引用区，则将json放入到_globalRefs，同时将原来的json变成引用方式
                var json = this._refs[id];
                if (!json) {
                    return json;
                }
                var clone = {};
                for (var name in json) {
                    clone[name] = json[name];
                    delete json[name];
                }
                json.$ref = id;
                this._globalRefs[id] = clone;
            }
            return {$ref: id};
        },
        _toJSON: function (value) {
            if (value._classPath) {
                return {_classPath: value._classPath};
            }
            if (!value._className) {
                if(Q.isArray(value)){
                    var json = [];
                    value.forEach(function(v){
                        json.push(this.toJSON(v));
                    }, this)
                    return json;
                }else {
                    json = {};
                    var prototype;
                    if(value.class){
                        prototype = value.class.prototype;
                    }
                    for (var name in value) {
                        var v = value[name];
                        if(v instanceof Function || (prototype && v == prototype[name])){
                            continue;
                        }
                        json[name] = this.toJSON(value[name]);
                    }
                    return json;
                }

                return value;
            }
            var result = {_className: value._className};
            if (value.toJSON) {
                result.json = value.toJSON(this);
            } else {
                result.json = value;
            }
            return result;
        },
        jsonToElement: function (json) {
            //如果之前解析的数据中引用到了此节点，此节点其实已经被解析了，这里只需要返回引用就可以了
            if (json._refId !== undefined && json._refId in this._refs) {
                return this._refs[json._refId];
            }
            return this._parseJSON(json);
        },
        parseJSON: function (json) {
            if (!(json instanceof Object)) {
                return json;
            }
            if(!this.withGlobalRefs){
                return this._parseJSON(json);
            }
            //全局引用
            if (json.$ref !== undefined) {
                //从全局引用中获取json信息
                var gJson = this._globalRefs[json.$ref];
                if (!gJson) {
                    return;
                }
                //将json信息解析成对象，并缓存在json的_value属性中
                if (gJson._value === undefined) {
                    gJson._value = this.parseJSON(gJson);
                }
                return gJson._value;
            }
            //如果属性为element引用，先从_elementRefs中找到对应element的json信息，然后将此json信息解析成element
            if (json._ref !== undefined) {
                var elementJson = this._elementRefs[json._ref];
                if (!elementJson) {
                    return;
                }
                return this.jsonToElement(elementJson);
            }
            ////如果json包含_refId属性，说明这是一个element类型，直接调用jsonToElement，不过应该不会出现
            //if (json._refId !== undefined) {
            //  return this.jsonToElement(json);
            //}
            return this._parseJSON(json);
        },
        _parseJSON: function (json) {
            if(!(json instanceof Object)){
                return json;
            }
            if (json._classPath) {
                return getByPath(json._classPath);
            }
            if (json._className) {
                var F = getByPath(json._className);
                var v = new F();
                ///防止相互引用导致的问题
                if (this.withGlobalRefs && json._refId !== undefined) {
                    this._refs[json._refId] = v;
                }
                if (v && json.json) {
                    json = json.json;
                    if (v.parseJSON) {
                        v.parseJSON(json, this);
                    } else {
                        for (var n in json) {
                            v[n] = json[n];
                        }
                    }
                }
                return v;
            }
            if(Q.isArray(json)){
                var result = [];
                json.forEach(function(j){
                    result.push(this.parseJSON(j));
                }, this)
                return result;
            }
            var result = {};
            for(var name in json){
                result[name] = this.parseJSON(json[name])
            }
            return result;
        }
    }

    //var json = {
    //  refs: {//
    //    1: {},
    //    2: {}
    //  },
    //  datas: [{
    //    type: '',
    //    json: {
    //      parent: {_ref: 1},
    //      image: {_g: 1}
    //    }
    //  },{
    //    type: 'group',
    //    _refId: 1,
    //    json: {}
    //  }, {}],
    //  version: '1.8'
    //}
    function graphModelToJSON(model, filter) {
        var serializer = new JSONSerializer();
        var json = {
            version: '2.0',
            refs: {}
        };
        var datas = [];
        var map = {};
        if (model.currentSubNetwork) {
            var elementJson = serializer.elementToJSON(model.currentSubNetwork);
            if (elementJson) {
                json.currentSubNetwork = {_ref: elementJson._refId = model.currentSubNetwork.id};
            }
        }
        model.forEach(function (d) {
            if (filter && filter(d) === false) {
                return;
            }
            var elementJson = serializer.elementToJSON(d);
            if (elementJson) {
                datas.push(elementJson);
                map[d.id] = elementJson;
            }
        });
        if (serializer._elementRefs) {
            for (var id in serializer._elementRefs) {
                map[id]._refId = id;
            }
        }
        if (serializer._globalRefs) {
            json.refs = serializer._globalRefs;
        }
        serializer.clearRef();

        json.datas = datas;
        for (var name in json) {
            if (isEmptyObject(json[name])) {
                delete json[name];
            }
        }
        return json;
    }

    Q.GraphModel.prototype.toJSON = function (filter) {
        return graphModelToJSON(this, filter);
    }
    function versionToNumber(version) {
        var index = version.indexOf('.');
        if (index < 0) {
            return parseFloat(version);
        }
        version = version.substring(0, index) + '.' + version.substring(index).replace(/\./g, '');
        return parseFloat(version);
    }

    Q.GraphModel.prototype.parseJSON = function (json, options) {
        options = options || {};
        var datas = json.datas;
        if (!datas || !(datas.length > 0)) {
            return;
        }
        var result = [];
        var serializer = new JSONSerializer(options, json.g);
        var elementRefs = {};
        datas.forEach(function (info) {
            if (info._refId) {
                elementRefs[info._refId] = info;
            }
        })
        serializer._globalRefs = json.refs || {};
        serializer._elementRefs = elementRefs;

        datas.forEach(function (json) {
            var element = serializer.jsonToElement(json);
            if (element instanceof Q.Element) {
                result.push(element);
                this.add(element);
            }
        }, this);

        if(this.currentSubNetwork){
            var currentSubNetwork = this.currentSubNetwork;
            result.forEach(function(e){
                if(!e.parent){
                    e.parent = currentSubNetwork;
                }
            })
        }

        if (json.currentSubNetwork) {
            var currentSubNetwork = serializer.getREF(json.currentSubNetwork._ref);
            if (currentSubNetwork) {
                this.currentSubNetwork = currentSubNetwork;
            }
        }
        serializer.clearRef();

        return result;
    }

    Q.Graph.prototype.toJSON = Q.Graph.prototype.exportJSON = function (toString, options) {
        options = options || {};
        var json = this.graphModel.toJSON(options.filter);
        json.scale = this.scale;
        json.tx = this.tx;
        json.ty = this.ty;
        if (toString) {
            json = JSON.stringify(json, options.replacer, options.space || '\t')
        }
        return json;
    }
    Q.Graph.prototype.parseJSON = function (json, options) {
        if (Q.isString(json)) {
            json = JSON.parse(json);
        }
        options = options || {}
        var result = this.graphModel.parseJSON(json, options);
        var scale = json.scale;
        if(scale && options.transform !== false){
            this.originAtCenter = false;
            this.translateTo(json.tx || 0, json.ty || 0, scale);
        }
        return result;
    }

    loadClassPath(Q, 'Q');
    Q.loadClassPath = loadClassPath;

    Q.exportJSON = function(object, toString){
        try{
            var json = new JSONSerializer({withGlobalRefs: false}).toJSON(object);
            return toString? JSON.stringify(json) : json;
        }catch(error){
        }
    }
    Q.parseJSON = function(json){
        try{
            if(Q.isString(json)){
                json = JSON.parse(json);
            }
            return new JSONSerializer({withGlobalRefs: false}).parseJSON(json);
        }catch(error){
        }
    }
}(Q, window, document);
/**
 * by sam@qunee.com
 */
;(function ($){
  'use strict';
  function _isNumber(n) {
    return n instanceof Number || (typeof n == "number");
  }
  $.fn.borderLayout = function() {
    var setBounds = function(element, bounds){
      element.style.position = 'absolute';
      element.style.boxSizing = 'border-box';
      for(var name in bounds){
        var v = bounds[name];
        if(_isNumber(v)){
          v = parseInt(v) + 'px';
        }
        element.style[name] = v;
      }
      $(element).trigger('size.change');
    };
    var toNumber = function(sNumber, sum){
      if(sNumber[sNumber.length - 1] === '%'){
        return sum * parseInt(sNumber) / 100;
      }
      return parseInt(sNumber);
    }
    var calculateLength = function(sNumber, sum, min, max){
      var n = toNumber(sNumber, sum);
      if(min){
        min = toNumber(min, sum);
        if(n < min){
          return min;
        }
      }
      if(max){
        max = toNumber(max, sum);
        if(n > max){
          return max;
        }
      }
      return n;
    };
    return this.each(function() {
      this.style.boxSizing = 'border-box';
      this.style.overflow = 'hidden';
      if(this == document.body || $(this).hasClass('layout--body')){
        setBounds(this, {top: 0, bottom: 0, left: 0, right: 0})
      }
      var isH = $(this).hasClass('layout--h');

      var width = this.clientWidth;
      var height = this.clientHeight;
      var i = 0;
      var children = this.children;
      var center, north, south, east, west;
      while(i < children.length){
        var child = children[i++];
        var data = child.getAttribute('data-options');
        if(!data){
          continue;
        }
        //http://stackoverflow.com/questions/4210160/safely-parsing-a-json-string-with-unquoted-keys
        data = data.replace(/(['"])?([a-zA-Z0-9\-]+)(['"])?:/g, '"$2":');
        data = data.replace(/'/g, '"');
        data = '{' + data + '}';
        try{
          data = JSON.parse(data);
        }catch(error){
          continue;
        }
        var region = data.region;
        if(!region){
          continue;
        }
        child._data = data;
        if(/center/i.test(region)){
          center = child;
          continue;
        }
        if(/north/i.test(region)){
          north = child;
          continue;
        }
        if(/south/i.test(region)){
          south = child;
          continue;
        }
        if(/east/i.test(region)){
          east = child;
          continue;
        }
        if(/west/i.test(region)){
          west = child;
        }
      }
      var widthRest = width, heightRest = height, top = 0, left = 0, temp, temp2;
      function setWestAndEast(){
        if(west){
          temp = west._data.width;
          if(temp){
            temp = calculateLength(temp, width, west._data['min-width'], west._data['max-width']);
            left = temp;
            temp2 = parseInt(west._data.left) || 0;
            if(temp2){
              widthRest -= temp2;
              left += temp2;
            }
            widthRest -= temp;
            setBounds(west, {top: top, left: temp2, width: temp, height: heightRest});
          }
        }
        if(east){
          temp = east._data.width;
          if(temp){
            temp = calculateLength(temp, width, east._data['min-width'], east._data['max-width']);
            temp2 = parseInt(east._data.right) || 0;
            if(temp2){
              widthRest -= temp2;
            }
            widthRest -= temp;
            setBounds(east, {top: top, right: temp2, width: temp, height: heightRest});
          }
        }
      }
      function setNorthAndSouth(){
        if(north){
          temp = north._data.height;
          if(temp){
            temp = calculateLength(temp, height, north._data['min-height'], north._data['max-height']);
            heightRest -= temp;
            top = temp;
            setBounds(north, {top: 0, left: left, width: widthRest, height: temp});
          }
        }
        if(south){
          temp = south._data.height;
          if(temp){
            temp = calculateLength(temp, height, south._data['min-height'], south._data['max-height']);
            heightRest -= temp;
            setBounds(south, {bottom: 0, left: left, height: temp, width: widthRest});
          }
        }
      }
      if(isH){
        setWestAndEast();
        setNorthAndSouth();
      }else{
        setNorthAndSouth();
        setWestAndEast();
      }
      if(center){
        setBounds(center, {top: top, left: left, width: widthRest, height: heightRest});
      }
    });
  };
  $(function(){
    $('.layout').borderLayout();
    $(window).resize(function(){
      $('.layout').borderLayout();
    });
  });
})(jQuery);

;(function (Q) {
//PopupMenu
  function showDivAt(div, x, y) {
    var body = document.documentElement;
    var bounds = new Q.Rect(window.pageXOffset, window.pageYOffset, body.clientWidth - 2, body.clientHeight - 2);
    var width = div.offsetWidth;
    var height = div.offsetHeight;

    if (x + width > bounds.x + bounds.width) {
      x = bounds.x + bounds.width - width;
    }
    if (y + height > bounds.y + bounds.height) {
      y = bounds.y + bounds.height - height;
    }
    if (x < bounds.x) {
      x = bounds.x;
    }
    if (y < bounds.y) {
      y = bounds.y;
    }
    div.style.left = x + 'px';
    div.style.top = y + 'px';
  }

  function isDescendant(parent, child) {
    var node = child.parentNode;
    while (node != null) {
      if (node == parent) {
        return true;
      }
      node = node.parentNode;
    }
    return false;
  }

  var PopupMenu = function (items) {
    this.items = items || [];
  }

  var menuClassName = 'dropdown-menu';
  PopupMenu.Separator = 'divider';

  PopupMenu.prototype = {
    dom: null,
    _invalidateFlag: true,
    add: function (item) {
      this.items.push(item);
      this._invalidateFlag = true;
    },
    addSeparator: function () {
      this.add(PopupMenu.Separator);
    },
    showAt: function (x, y) {
      if (!this.items || !this.items.length) {
        return false;
      }
      if (this._invalidateFlag) {
        this.render();
      }
      this.dom.style.display = "block";
      document.body.appendChild(this.dom);
      showDivAt(this.dom, x, y);
    },
    hide: function () {
      if (this.dom && this.dom.parentNode) {
        this.dom.parentNode.removeChild(this.dom);
      }
    },
    isShowing: function(){
      return this.dom.parentNode !== null;
    },
    render: function () {
      this._invalidateFlag = false;
      if (!this.dom) {
        this.dom = document.createElement('ul');
        this.dom.setAttribute("role", "menu");
        this.dom.className = menuClassName;
        var startEventName = Q.isTouchSupport ? "touchstart" : "mousedown";

        if (!this.stopEditWhenClickOnWindow) {
          this.stopEditWhenClickOnWindow = function (evt) {
            if (this.isShowing() && !isDescendant(this.dom, evt.target)) {
              this.hide();
            }
          }.bind(this)
        }
        window.addEventListener("mousedown", this.stopEditWhenClickOnWindow, true);
        this.dom.addEventListener(startEventName, function (evt) {
          Q.stopEvent(evt);
        }, false);
      } else {
        this.dom.innerHTML = "";
      }
      for (var i = 0, l = this.items.length; i < l; i++) {
        var item = this.renderItem(this.items[i]);
        this.dom.appendChild(item);
      }
    },
    html2Escape: function (sHtml) {
      return sHtml.replace(/[<>&"]/g, function (c) {
        return {'<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;'}[c];
      });
    },
    renderItem: function (menuItem, zIndex) {
      var dom = document.createElement('li');
      dom.setAttribute("role", "presentation");
      if (menuItem == PopupMenu.Separator) {
        dom.className = PopupMenu.Separator;
        dom.innerHTML = " ";
        return dom;
      }
      if (Q.isString(menuItem)) {
        dom.innerHTML = '<a role="menuitem" tabindex="-1" href="#">' + this.html2Escape(menuItem) + '</a>';
        return dom;
      }
      if (menuItem.selected) {
        dom.style.backgroundPosition = '3px 5px';
        dom.style.backgroundRepeat = 'no-repeat';
        dom.style.backgroundImage = "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAPklEQVQ4y2P4//8/AyWYYdQA7AYAAZuamlo7ED+H4naQGNEGQDX/R8PtpBjwHIsBz+lqAGVeoDgQR1MiaRgAnxW7Q0QEK0cAAAAASUVORK5CYII=')";
      }
      var a = document.createElement("a");
      a.setAttribute("role", "menuitem");
      a.setAttribute("tabindex", "-1");
      a.setAttribute("href", "javascript:void(0)");
      dom.appendChild(a);

      if (menuItem.html) {
        a.innerHTML = menuItem.html;
      } else {
        var text = menuItem.text || menuItem.name;
        if (text) {
          a.innerHTML = this.html2Escape(text);
        }
      }
      var className = menuItem.className;
      if (className) {
        dom.className = className;
      }
      var call = menuItem.action;
      var self = this;

      var onclick = function (evt) {
        if (call) {
          call.call(menuItem.scope, evt, menuItem);
        }
        if (!Q.isIOS) {
          evt.target.focus();
        }
        setTimeout(function () {
          self.hide();
        }, 100);
      };
      if (Q.isTouchSupport) {
//            dom.ontouchstart = onclick;
        a.ontouchstart = onclick;
      } else {
        dom.onclick = onclick;
      }
      return dom;
    },
    getMenuItems: function(graph, data, evt){
      var items = [];
      //items.push({
      //  text: '添加主机',
      //  action: function(evt, item){
      //    alert('添加主机');//这里实现弹出页面
      //  }
      //})
      if (data) {
        var isShapeNode = data instanceof Q.ShapeNode;
        var isGroup = data instanceof Q.Group;
        var isNode = !isShapeNode && data instanceof Q.Node;
        var isEdge = data instanceof Q.Edge;

        items.push({
          text: getI18NString('Rename'), action: function (evt, item) {
            Q.prompt(getI18NString('Input Element Name'), data.name || '', function (name) {
              if (name === null) {
                return;
              }
              data.name = name;
            })
          }
        });
        if (isEdge) {
          var isDashLine = data.getStyle(Q.Styles.EDGE_LINE_DASH) || Q.DefaultStyles[Q.Styles.EDGE_LINE_DASH];
          items.push({
            text: isDashLine ? getI18NString('Solid Line') : getI18NString('Dashed Line'), action: function (evt, item) {
              data.setStyle(Q.Styles.EDGE_LINE_DASH, isDashLine ? null : [5, 3]);
            }
          });
          items.push({
            text: getI18NString('Line Width'), action: function (evt, item) {
              Q.prompt(getI18NString('Input Line Width'), data.getStyle(Q.Styles.EDGE_WIDTH) || Q.DefaultStyles[Q.Styles.EDGE_WIDTH], function (lineWidth) {
                if (lineWidth === null) {
                  return;
                }
                lineWidth = parseFloat(lineWidth);
                data.setStyle(Q.Styles.EDGE_WIDTH, lineWidth);
              })
            }
          });
          items.push({
            text: getI18NString('Line Color'), action: function (evt, item) {
              Q.prompt(getI18NString('Input Line Color'), data.getStyle(Q.Styles.EDGE_COLOR) || Q.DefaultStyles[Q.Styles.EDGE_COLOR], function (color) {
                if (color === null) {
                  return;
                }
                data.setStyle(Q.Styles.EDGE_COLOR, color);
              })
            }
          });
        } else if (data.parent instanceof Q.Group) {
          items.push({
            text: getI18NString('Out of Group'), action: function () {
              data.parent = null;
            }
          })
        }
        items.push(Q.PopupMenu.Separator);
        items.push({
          text: getI18NString('Send to Top'), action: function (evt, item) {
            data.zIndex = 1;
            graph.sendToTop(data);
            graph.invalidate();
          }
        });
        items.push({
          text: getI18NString('Send to Bottom'), action: function (evt, item) {
            data.zIndex = -1;
            graph.sendToBottom(data);
            graph.invalidate();
          }
        });
        items.push({
          text: getI18NString('Reset Layer'), action: function (evt, item) {
            data.zIndex = 0;
            graph.invalidate();
          }
        });
        items.push(Q.PopupMenu.Separator);
      }
      items.push({
        text: getI18NString('Clear Graph'), action: function () {
          graph.clear();
        }
      })
      items.push(Q.PopupMenu.Separator);

      items.push({
        text: getI18NString('Zoom In'), action: function (evt, item) {
          var localXY = graph.globalToLocal(evt);
          graph.zoomIn(localXY.x, localXY.y, true);
        }
      });
      items.push({
        text: getI18NString('Zoom Out'), action: function (evt, item) {
          var localXY = graph.globalToLocal(evt);
          graph.zoomOut(localXY.x, localXY.y, true);
        }
      });
      items.push({
        text: getI18NString('1:1'), action: function (evt, item) {
          var localXY = graph.globalToLocal(evt);
          graph.scale = 1;
        }
      });
      items.push(Q.PopupMenu.Separator);
      var currentMode = graph.interactionMode;
      var interactons = [
        {text: getI18NString('Pan Mode'), value: Q.Consts.INTERACTION_MODE_DEFAULT},
        {text: getI18NString('Rectangle Select'), value: Q.Consts.INTERACTION_MODE_SELECTION}
      ];
      for (var i = 0, l = interactons.length; i < l; i++) {
        var mode = interactons[i];
        if (mode.value == currentMode) {
          mode.selected = true;
        }
        mode.action = function (evt, item) {
          graph.interactionMode = item.value;
        };
        items.push(mode)
      }
      items.push(Q.PopupMenu.Separator);
      items.push({html: '<a href="http://qunee.com" target="_blank">Qunee' + ' - ' + Q.version + '</a>'});
      return items;
    }
  }
  Object.defineProperties(PopupMenu.prototype, {
    items: {
      get: function () {
        return this._items;
      },
      set: function (v) {
        this._items = v;
        this._invalidateFlag = true;
      }
    }
  });

  var _contextmenuListener = {
    onstart: function (evt, graph) {
      graph._popupmenu.hide();
    }
  }
  function getPageXY(evt) {
    if (evt.touches && evt.touches.length) {
      evt = evt.touches[0];
    }
    return {x: evt.pageX, y: evt.pageY};
  }

  function showMenu(evt, graph) {
    var menu = graph.popupmenu;
    var xy = getPageXY(evt);
    var x = xy.x, y = xy.y;

    var items = menu.getMenuItems(graph, graph.getElement(evt), evt);

    if(!items){
      return;
    }
    menu.items = items;
    menu.showAt(x, y);

    Q.stopEvent(evt);
  }
  if(Q.isTouchSupport){
    _contextmenuListener.onlongpress = function (evt, graph) {
      showMenu(evt, graph);
    }
  }

  Object.defineProperties(Q.Graph.prototype, {
    popupmenu: {
      get: function(){
        return this._popupmenu;
      },
      set: function(v){
        if(this._popupmenu == v){
          return;
        }
        this._popupmenu = v;

        if(!this._contextmenuListener){
          this._contextmenuListener = _contextmenuListener;
          this.addCustomInteraction(this._contextmenuListener);
          this.html.oncontextmenu = function (evt) {
            showMenu(evt, this);
          }.bind(this);
        }
      }
    }
  });
  Q.PopupMenu = PopupMenu;
})(Q, jQuery);

!function (Q) {
    ///editors
    function StringEditor(property, parent, getter, setter, scope) {
        this.getter = getter;
        this.setter = setter;
        this.scope = scope;
        this.property = property;

        this.createHtml(parent);
    }

    StringEditor.prototype = {
        _getValue: function () {
            return this.getter.call(this.scope);
        },
        update: function () {
            this.value = this._getValue();
        },
        setValue: function (v) {
            this.input.value = valueToString(v, this.property.type);
        },
        getValue: function(){
            return stringToValue(this.input.value, this.property.type);
        },
        createHtml: function (parent) {
            var property = this.property;
            var input = Q.createElement({
                tagName: 'input',
                class: "form-control",
                parent: parent
            });
            this.input = input;

            if(property.readonly){
                input.setAttribute('readonly', 'readonly');
            }
            this.update();
            $(input).on('input', function (evt) {
                if (this.ajdusting) {
                    return;
                }
                this.setter.call(this.scope, this);
            }.bind(this));
        }
    }

    Object.defineProperties(StringEditor.prototype, {
        value: {
            get: function () {
                return this.getValue();
            },
            set: function (v) {
                this.ajdusting = true;
                this.setValue(v);
                this.ajdusting = false;
            }
        }
    })

    function BooleanEditor() {
        Q.doSuperConstructor(this, BooleanEditor, arguments);
    }

    BooleanEditor.prototype = {
        setValue: function (v) {
            this.input.setAttribute('checked', v ? 'checked' : false);
        },
        getValue: function(){
            return stringToValue(this.input.checked, this.property.type);
        },
        createHtml: function (parent) {
            var property = this.property;
            var input = Q.createElement({
                tagName: 'input',
                parent: parent
            });
            input.setAttribute('type', 'checkbox');
            this.input = input;

            if(property.readonly){
                input.setAttribute('readonly', 'readonly');
            }
            this.update();
            $(input).on('click', function (evt) {
                if (this.ajdusting) {
                    return;
                }
                this.setter.call(this.scope, this);
            }.bind(this));
        }
    }

    Q.extend(BooleanEditor, StringEditor);

    function ColorEditor() {
        Q.doSuperConstructor(this, ColorEditor, arguments);
    }

    ColorEditor.prototype = {
        createHtml: function (parent) {
            var input = Q.createElement({
                tagName: 'input',
                class: "form-control",
                parent: parent
            });
            Q.createElement({tagName: 'span', parent: parent, class: "input-group-addon", html: '<i></i>'});
            this.input = input;

            this.update();

            $(parent).colorpicker().on('changeColor.colorpicker', function (evt) {
                if (this.ajdusting) {
                    return;
                }
                this.setter.call(this.scope, this);
            }.bind(this));
        }
    }
    Q.extend(ColorEditor, StringEditor);

    var elementProperties = [{name: 'name', displayName: 'Name'}, {
        style: Q.Styles.LABEL_FONT_SIZE,
        type: 'number',
        displayName: 'Font Size'
    }, {style: Q.Styles.LABEL_COLOR, type: 'color', displayName: 'Label Color'}, {
        style: Q.Styles.RENDER_COLOR,
        type: 'color',
        displayName: 'Render Color'
    }, {style: Q.Styles.LABEL_POSITION, displayName: 'Label Position'}, {style: Q.Styles.LABEL_ANCHOR_POSITION, displayName: 'Label Anchor Position'}];
    var nodeProperties = [{name: 'size', type: 'size', displayName: 'Size'}, {
        name: 'location',
        type: 'point',
        displayName: 'Location'
    }, {name: 'rotate', type: 'number', displayName: 'Rotate'}, {
        style: Q.Styles.BORDER,
        type: 'number',
        displayName: 'Border'
    }, {
        style: Q.Styles.BORDER_COLOR,
        type: 'color',
        displayName: 'Border Color'
    }, {
        client: 'status',
        type: 'string',
        displayName: '状态'
    }];
    var shapeProperties = [{
        style: Q.Styles.SHAPE_STROKE_STYLE,
        type: 'color',
        displayName: 'Stroke Color'
    }, {
        style: Q.Styles.SHAPE_STROKE,
        type: 'number',
        displayName: 'Stroke'
    }];
    var edgeProperties = [{name: 'angle', type: 'degree'},{style: Q.Styles.BORDER, display: 'none'}, {
        style: Q.Styles.EDGE_WIDTH,
        type: 'number',
        displayName: 'Edge Width'
    }, {style: Q.Styles.EDGE_COLOR, type: 'color', displayName: 'Edge Color'}, {style: Q.Styles.ARROW_TO, type: 'boolean', displayName: 'Arrow To'}];
    var textProperties = [{name: 'size', display: 'none'}, {
        style: Q.Styles.LABEL_SIZE,
        type: 'size',
        displayName: 'Size'
    }, {
        style: Q.Styles.RENDER_COLOR,
        display: 'none'
    }, {style: Q.Styles.LABEL_BACKGROUND_COLOR, type: 'color', displayName: 'Background Color'}];

    //var propertiesMap = {
    //    'Q.Element': {
    //        class: Q.Element,
    //        properties: {
    //            name: {name: 'name'},
    //            'S:edge.width': {name: 'edge.width', type: 'number', propertyType: 'style'},
    //            'S:edge.color': {name: 'edge.color', type: 'color', propertyType: 'style'}
    //        }
    //    }
    //};
    var propertiesMap = {};

    var classIndex = 0;

    function getPropertiesByType(clazz, create) {
        var name = clazz._classPath || clazz._tempName;
        if (!name) {
            name = clazz._tempName = 'class-' + classIndex++;
        }
        if (!create) {
            return propertiesMap[name];
        }
        return propertiesMap[name] = {class: clazz, properties: {}};
    }

    function getPropertyKey(name, propertyType) {
        if (propertyType == Q.Consts.PROPERTY_TYPE_STYLE) {
            return 'S:' + name;
        }
        if (propertyType == Q.Consts.PROPERTY_TYPE_CLIENT) {
            return 'C:' + name;
        }
        return name;
    }

    //var className = 0;
    function registerProperties(clazz, properties, groupName) {
        var propertyMap = getPropertiesByType(clazz, true);
        properties.forEach(function (property) {
            var key;
            if (property.style) {
                property.propertyType = Q.Consts.PROPERTY_TYPE_STYLE;
                property.name = property.style;
            } else if (property.client) {
                property.propertyType = Q.Consts.PROPERTY_TYPE_CLIENT;
                property.name = property.client;
            } else if (property.name) {
                property.propertyType = Q.Consts.PROPERTY_TYPE_ACCESSOR;
            } else {
                return;
            }
            var key = property.key = getPropertyKey(property.name, property.propertyType);
            if (!property.groupName) {
                property.groupName = groupName || 'Element';
            }
            propertyMap.properties[key] = property;
        })
    }

    registerProperties(Q.Element, elementProperties, 'Element');
    registerProperties(Q.Node, nodeProperties, 'Node');
    registerProperties(Q.Edge, edgeProperties, 'Edge');
    registerProperties(Q.Text, textProperties, 'Text');
    registerProperties(Q.ShapeNode, shapeProperties, 'Shape');

    function getProperties(data) {
        var properties = {};
        for (var name in propertiesMap) {
            if (!(data instanceof propertiesMap[name].class)) {
                continue;
            }
            var map = propertiesMap[name].properties;
            for (var key in map) {
                var p = map[key];
                if (p.display == 'none') {
                    delete properties[key];
                } else {
                    properties[key] = p;
                }
            }
        }
        return new PropertyGroup(properties);
    }

    function PropertyGroup(properties) {
        this.properties = properties;
        var groups = {};
        for (var key in properties) {
            var groupName = properties[key].groupName;
            var group = groups[groupName];
            if (!group) {
                group = groups[groupName] = {};
            }
            group[key] = properties[key];
        }
        this.group = groups;
    }

    PropertyGroup.prototype = {
        contains: function (name, propertyType) {
            var key = getPropertyKey(name, propertyType);
            return this.properties[key];
        }

    }

    var createCellEditor = function (item, parent, getter, setter, scope) {
        var type = item.type;
        if (type == 'color') {
            return new ColorEditor(item, parent, getter, setter, scope);
        }
        if (type == 'boolean') {
            return new BooleanEditor(item, parent, getter, setter, scope);
        }
        return new StringEditor(item, parent, getter, setter, scope);
    }

    function getElementProperty(graph, element, name, type) {
        if (!type || type == Q.Consts.PROPERTY_TYPE_ACCESSOR) {
            return element[name];
        }
        if (type == Q.Consts.PROPERTY_TYPE_STYLE) {
            return graph.getStyle(element, name);
        }
        if (type == Q.Consts.PROPERTY_TYPE_CLIENT) {
            return element.get(name);
        }
    }

    function setElementProperty(value, element, name, type) {
        if (!type || type == Q.Consts.PROPERTY_TYPE_ACCESSOR) {
            return element[name] = value;
        }
        if (type == Q.Consts.PROPERTY_TYPE_STYLE) {
            return element.setStyle(name, value);
        }
        if (type == Q.Consts.PROPERTY_TYPE_CLIENT) {
            return element.set(name, value);
        }
    }

    function PropertyPane(graph, parent, options) {
        this._formItems = [];

        this.html = parent;
        this.form = Q.createElement({class: 'form-horizontal', parent: parent, tagName: 'form'});

        this.graph = graph;

        graph.dataPropertyChangeDispatcher.addListener(function (evt) {
            this.onDataPropertyChange(evt);
        }.bind(this));
        graph.selectionChangeDispatcher.addListener(function (evt) {
            this.datas = this.graph.selectionModel.toDatas();
        }.bind(this));

    }

    function numberToString(number) {
        return number | 0;
        //return number.toFixed(2);
    }

    function valueToString(value, type) {
        if (!value) {
            return value;
        }
        if (type == 'point') {
            return numberToString(value.x) + ',' + numberToString(value.y);
        }
        if (type == 'size') {
            return numberToString(value.width) + ',' + numberToString(value.height);
        }
        if(type == 'degree'){
            return '' + (value * 180 / Math.PI) | 0;
        }
        return value.toString();
    }

    var positions = {};
    for (var name in Q.Position) {
        var p = Q.Position[name];
        if (name == "random" || !(p instanceof Q.Position)) {
            continue;
        }
        positions[p.toString()] = p;
    }
    function stringToValue(string, type) {
        if(type == 'position'){
            return positions[string];
        }
        if (type == 'number') {
            return parseFloat(string) || 0;
        }
        if (type == 'boolean') {
            return string ? true : false;
        }
        if (type == 'point') {
            var xy = string.split(',');
            if (xy.length == 2) {
                return {x: parseFloat(xy[0] || 0), y: parseFloat(xy[1]) || 0};
            }
            return;
        }
        if (type == 'size') {
            var xy = string.split(',');
            if (xy.length == 2) {
                var w = parseFloat(xy[0]) || 0;
                var h = parseFloat(xy[1]) || 0;
                if (w && h) {
                    return {width: w, height: h};
                }
            }
            return;
        }
        if(type == 'degree'){
            return parseInt(string) * Math.PI / 180
        }
        return string;
    }

    PropertyPane.prototype = {
        _formItems: null,
        onValueChange: function (value, item) {
            this.setValue(value, item);
        },
        adjusting: false,
        _containsElement: function (data) {
            for (var d in this.datas) {
                if (d == data) {
                    return true;
                }
            }
        },
        _containsProperty: function (name, type) {
            return this.propertyGroup && this.propertyGroup.contains(name, type);
        },
        _cellEditors: null,
        _getCellEditors: function (name, propertyType) {
            if (!this._cellEditors) {
                return;
            }
            var key = getPropertyKey(name, propertyType);
            return this._cellEditors[key];
        },
        onDataPropertyChange: function (evt) {
            if (this.adjusting) {
                return;
            }
            if (!this.datas || !this.datas.length) {
                return null;
            }
            var data = evt.source;
            if (!this._containsElement(data)) {
                var editors = this._getCellEditors(evt.kind, evt.propertyType);
                if (!editors) {
                    return;
                }
                if (!Q.isArray(editors)) {
                    editors = [editors];
                }
                editors.forEach(function (editor) {
                    editor.update();
                })
            }
        },
        clear: function () {
            $('.colorpicker-element').colorpicker('hide');
            this.form.innerHTML = '';
            this._formItems = [];
            this._cellEditors = null;
            this.form.style.display = 'none';
            //this.html.style.display = 'none';
        },
        createItem: function (parent, property) {
            var formItem = Q.createElement({class: 'form-group', parent: parent});
            var label = Q.createElement({
                parent: formItem,
                tagName: 'label',
                class: 'col-sm-6 control-label font-small',
                html: getI18NString(property.displayName || property.name)
            });
            var inputDIV = Q.createElement({parent: formItem, class: "input-group input-group-sm col-sm-6"});

            var cellEditor = createCellEditor(property, inputDIV, function () {
                return this.getValue(property);
            }.bind(this), function (editor) {
                this.onValueChange(editor.value, property);
            }.bind(this));

            var key = getPropertyKey(property.name, property.propertyType);
            if (!this._cellEditors) {
                this._cellEditors = {};
            }
            var editors = this._cellEditors[key];
            if (!editors) {
                this._cellEditors[key] = [cellEditor];
            } else {
                editors.push(cellEditor);
            }
            return formItem;
        },
        setValue: function (value, property) {
            if (!this.datas || !this.datas.length) {
                return null;
            }
            this.adjusting = true;

            if (property.type && property.type != 'string' && Q.isString(value)) {
                value = stringToValue(value, property.type);
            }

            this.datas.forEach(function (data) {
                var old = getElementProperty(this.graph, data, property.name, property.propertyType);
                if (old === value) {
                    return;
                }
                setElementProperty(value, data, property.name, property.propertyType);
            }, this)

            this.adjusting = false;

        },
        getValue: function (property) {
            if (!this.datas || !this.datas.length) {
                return null;
            }
            if (this.datas.length == 1) {
                return getElementProperty(this.graph, this.datas[0], property.name, property.propertyType) || '';
            }
        },
        /**
         *
         <form class="form-horizontal" style="">
         <div class="class-group">
         <h4>Element</h4>
         <div class="form-group">
         <label class="col-sm-6 control-label font-small">Name</label>
         <div class="input-group input-group-sm col-sm-6">
         <input type="text" value="" onchange="onvaluechange(event)" class="form-control"/>
         </div>
         </div>
         <div class="form-group">
         <label class="col-sm-6 control-label font-small" >Background Color</label>
         <div class="input-group input-group-sm color-picker col-sm-6">
         <input type="text" value="#EEE" class="form-control"/>
         <span class="input-group-addon"><i></i></span>
         </div>
         </div>
         <div class="form-group">
         <label class="col-sm-6 control-label font-small">Line Width</label>
         <div class="input-group input-group-sm col-sm-6">
         <input class="form-control" type="number" value="1" min="1" max="10"/>
         </div>
         </div>
         </div>
         </form>
         * @param name
         * @param properties
         */
        createItemGroup: function (name, properties) {
            var group = Q.createElement({class: 'class-group', parent: this.form});
            Q.createElement({tagName: 'h4', parent: group, html: name});
            for (var name in properties) {
                this.createItem(group, properties[name]);
            }
        }

    }
    Object.defineProperties(PropertyPane.prototype, {
        datas: {
            get: function () {
                return this._datas;
            },
            set: function (datas) {
                if (this._datas == datas) {
                    return;
                }
                if (datas && !Q.isArray(datas)) {
                    datas = [datas];
                }
                this._datas = datas;
                this.clear();
                if (!datas.length) {
                    return;
                }
                if (datas.length == 1) {
                    this.form.style.display = '';
                    this.propertyGroup = getProperties(datas[0]);
                    var group = this.propertyGroup.group;
                    for (var groupName in group) {
                        this.createItemGroup(groupName, group[groupName]);
                    }
                }
            }
        }
    })

    Q.PropertyPane = PropertyPane;
}(Q)
;
(function (Q, $) {
    function createButtonGroup(info, toolbar, scope, vertical, togglable) {
        var buttonGroup = document.createElement("div");
        buttonGroup.className = vertical ? "btn-group-vertical" : "btn-group";
        if (togglable) {
            buttonGroup.setAttribute("data-toggle", "buttons");
        }
        for (var i = 0, l = info.length; i < l; i++) {
            if (!info[i].type && togglable) {
                info[i].type = 'radio';
            }
            buttonGroup.appendChild(createGraphButton(info[i], scope)).info = info[i];
        }
        toolbar.appendChild(buttonGroup);
    }

    function createGraphButton(info, scope) {
        if (info.type == "search") {
            var div = document.createElement("div");
            div.style.display = "inline-block";
            div.style.verticalAlign = "middle";
            div.style.width = '170px';
            div.innerHTML = '<div class="input-group input-group-sm" >\
            <input type="text" class="form-control" placeholder="' + (info.placeholder || '') + '">\
                <span class="input-group-btn">\
                    <div class="btn btn-default" type="button"></div>\
                </span>\
            </div>';
            var input = div.getElementsByTagName("input")[0];
            if (info.id) {
                input.id = info.id;
            }
            var button = $(div).find('.btn')[0];
            if (info.iconClass) {
                var icon = document.createElement('div');
                $(icon).addClass(info.iconClass);
                button.appendChild(icon);
            } else if (info.name) {
                button.appendChild(document.createTextNode(" " + info.name));
            }
            info.input = input;
            if (info.search) {
                var clear = function () {
                    info.searchInfo = null;
                }
                var doSearch = function (prov) {
                    var value = input.value;
                    if (!value) {
                        clear();
                        return;
                    }
                    if (!info.searchInfo || info.searchInfo.value != value) {
                        var result = info.search(value, info);
                        if (!result || !result.length) {
                            clear();
                            return;
                        }
                        info.searchInfo = {value: value, result: result};
                    }
                    doNext(prov);
                }
                var doNext = function (prov) {
                    if (!(info.select instanceof Function) || !info.searchInfo || !info.searchInfo.result || !info.searchInfo.result.length) {
                        return;
                    }
                    var searchInfo = info.searchInfo;
                    var result = info.searchInfo.result;
                    if (result.length == 1) {
                        info.select(result[0], 0);
                        return;
                    }
                    if (searchInfo.index === undefined) {
                        searchInfo.index = 0;
                    } else {
                        searchInfo.index += prov ? -1 : 1;
                        if (searchInfo.index < 0) {
                            searchInfo.index += result.length;
                        }
                        searchInfo.index %= result.length;
                    }
                    if (info.select(result[searchInfo.index], searchInfo.index) === false) {
                        info.searchInfo = null;
                        doSearch();
                    }
                    ;
                }
                input.onkeydown = function (evt) {
                    if (evt.keyCode == 27) {
                        clear();
                        input.value = "";
                        Q.stopEvent(evt);
                        return;
                    }
                    if (evt.keyCode == 13) {
                        doSearch(evt.shiftKey);
                    }
                }
                button.onclick = function (evt) {
                    doSearch();
                }
            }
            return div;
        }
        if (info.type == 'file') {
            var label = document.createElement('span');
            var input = document.createElement('input');
            label.className = 'file-input btn btn-default btn-sm btn-file';
            input.setAttribute('type', 'file');
            input.className = 'btn-file';
            if (info.action) {
                input.onchange = function (evt) {
                    var input = $(this),
                        files = input.get(0).files;
                    label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
                    if (files.length) {
                        info.action.call(scope, files, label, evt);
                    }
                };
            }
            label.appendChild(input);

            if (info.icon) {
                var icon = document.createElement('img');
                icon.src = info.icon;
                label.appendChild(icon);
            } else if (info.iconClass) {
                var icon = document.createElement('div');
                $(icon).addClass(info.iconClass);
                label.appendChild(icon);
            } else if (info.name) {
                label.appendChild(document.createTextNode(" " + info.name));
            }
            if (info.name) {
                label.setAttribute("title", info.name);
            }
            return label;
        }
        if (info.type == "input") {
            var div = document.createElement("div");
            div.style.display = "inline-block";
            div.style.verticalAlign = "middle";
            div.innerHTML = '<div class="input-group input-group-sm" style="width: 150px;">\
            <input type="text" class="form-control">\
                <span class="input-group-btn">\
                    <button class="btn btn-default" type="button"></button>\
                </span>\
            </div>';
            var input = div.getElementsByTagName("input")[0];
            var button = div.getElementsByTagName("button")[0];
            button.innerHTML = info.name;
            info.input = input;
            if (info.action) {
                button.onclick = function (evt) {
                    info.action.call(scope || window.graph, evt, info);
                }
            }
            return div;
        } else if (info.type == "select") {
            var div = document.createElement("select");
            div.className = "form-control";
            var options = info.options;
            options.forEach(function (v) {
                var option = document.createElement("option");
                option.innerHTML = v;
                option.value = v;
                div.appendChild(option);
            });
            div.value = info.value;
            if (info.action) {
                div.onValueChange = function (evt) {
                    info.action.call(scope || window.graph, evt, info);
                }
            }
            return div;
        }
        if (!info.type) {
            var label = document.createElement("div");
        } else {
            var label = document.createElement("label");
            var button = document.createElement("input");
            info.input = button;
            button.setAttribute('type', info.type);
            label.appendChild(button);
            if (info.selected) {
                button.setAttribute('checked', 'checked');
                if (info.type == 'radio') {
                    label.className += "active";
                }
            }
        }
        label.className += "btn btn-default btn-sm";
        if (info.icon) {
            var icon = document.createElement('img');
            icon.src = info.icon;
            label.appendChild(icon);
        } else if (info.iconClass) {
            var icon = document.createElement('div');
            $(icon).addClass(info.iconClass);
            label.appendChild(icon);
        } else if (info.name) {
            label.appendChild(document.createTextNode(" " + info.name));
        }
        if (info.name) {
            label.setAttribute("title", info.name);
        }
        if (info.action) {
            (button || label).onclick = function (evt) {
                info.action.call(scope || window.graph, evt, info);
            }
        }
        return label;
    }

    function createToolbar(graph, toolbar, customButtons) {
        function getGraph() {
            return toolbar.graph;
        }

        toolbar.setGraph = function(graph){
            var old = this.graph;
            if(old){
                old.propertyChangeDispatcher.removeListener(onInteractionModeChange, this);
            }
            this.graph = graph;
            updateButtonStatus();
            if(graph){
                graph.propertyChangeDispatcher.addListener(onInteractionModeChange, this);
            }
        }

        function updateButtonStatus() {
            var g = getGraph();
            var mode = g ? g.interactionMode : null;
            $(toolbar).find('.btn').each(function (index, btn) {
                if (mode && btn.info && btn.info.interactionMode == mode) {
                    Q.appendClass(btn, 'active');
                } else {
                    Q.removeClass(btn, 'active');
                }
            })
        }

        function onInteractionModeChange(evt) {
            if (evt.kind == 'interactionMode') {
                updateButtonStatus();
            }
        }

        function setInteractionMode(evt, info, interactionProperties) {
            var g = getGraph();
            if(!g){
                return;
            }
            g.interactionMode = info.value;
            g.interactionProperties = interactionProperties || info;
        }

        var buttons = {
            interactionModes: [
                {
                    name: '默认模式',
                    interactionMode: Q.Consts.INTERACTION_MODE_DEFAULT,
                    selected: true,
                    iconClass: 'q-icon toolbar-default'
                },
                {
                    name: '框选模式',
                    interactionMode: Q.Consts.INTERACTION_MODE_SELECTION,
                    iconClass: 'q-icon toolbar-rectangle_selection'
                },
                {
                    name: '浏览模式',
                    interactionMode: Q.Consts.INTERACTION_MODE_VIEW,
                    iconClass: 'q-icon toolbar-pan'
                }
            ],
            zoom: [
                {
                    name: '放大', iconClass: 'q-icon toolbar-zoomin', action: function () {
                    getGraph().zoomIn()
                }
                },
                {
                    name: '缩小', iconClass: 'q-icon toolbar-zoomout', action: function () {
                    getGraph().zoomOut()
                }
                },
                {
                    name: '1:1', iconClass: 'q-icon toolbar-zoomreset', action: function () {
                    getGraph().scale = 1;
                }
                },
                {
                    name: '纵览', iconClass: 'q-icon toolbar-overview', action: function () {
                    getGraph().zoomToOverview()
                }
                }
            ],
            editor: [
                {
                    name: '创建连线',
                    interactionMode: Q.Consts.INTERACTION_MODE_CREATE_EDGE,
                    iconClass: 'q-icon toolbar-edge'
                },
                //{
                //  name: '创建曲线',
                //  interactionMode: Q.Consts.INTERACTION_MODE_CREATE_SIMPLE_EDGE,
                //  iconClass: 'q-icon toolbar-edge_flex',
                //  uiClass: FlexEdgeUI
                //},
                {
                    name: '创建L型连线',
                    interactionMode: Q.Consts.INTERACTION_MODE_CREATE_SIMPLE_EDGE,
                    iconClass: 'q-icon toolbar-edge_VH',
                    edgeType: Q.Consts.EDGE_TYPE_VERTICAL_HORIZONTAL
                },
                {
                    name: '创建多边形',
                    interactionMode: Q.Consts.INTERACTION_MODE_CREATE_SHAPE,
                    iconClass: 'q-icon toolbar-polygon'
                },
                {
                    name: '创建线条',
                    interactionMode: Q.Consts.INTERACTION_MODE_CREATE_LINE,
                    iconClass: 'q-icon toolbar-line'
                }
            ],
            search: {
                name: 'Find', placeholder: 'Name', iconClass: 'q-icon toolbar-search', type: 'search', id: 'search_input',
                search: function (name, info) {
                    var result = [];
                    var reg = new RegExp(name, 'i');
                    getGraph().forEach(function (e) {
                        if (e.name && reg.test(e.name)) {
                            result.push(e.id);
                        }
                    });
                    return result;
                }, select: function (item) {
                    item = getGraph().graphModel.getById(item);
                    if (!item) {
                        return false;
                    }
                    getGraph().setSelection(item);
                    getGraph().sendToTop(item);
                    var bounds = getGraph().getUIBounds(item);
                    if (bounds) {
                        getGraph().centerTo(bounds.cx, bounds.cy, Math.max(2, getGraph().scale), true);
                    }
                }
            },
            exportImage: {
                name: '导出图片', iconClass: 'q-icon toolbar-print', action: function () {
                    Q.showExportPanel(getGraph());
                }
            }
        };
        if (customButtons) {
            for (var n in customButtons) {
                buttons[n] = customButtons[n];
            }
        }
        function createButtons(buttons, toolbar, scope, vertical, togglable) {
            for (var n in buttons) {
                var info = buttons[n];
                if (Q.isArray(info)) {
                    info.forEach(function (item) {
                        if (item.interactionMode) {
                            item.value = item.interactionMode;
                            item.action = setInteractionMode;
                        }
                    })
                    createButtonGroup(info, toolbar, scope, vertical, togglable);
                    continue;
                }
                if (info.interactionMode) {
                    info.value = info.interactionMode;
                    info.action = setInteractionMode;
                }
                toolbar.appendChild(createGraphButton(info, scope)).info = info;
            }
        }
        createButtons(buttons, toolbar, this, false, false);

        toolbar.setGraph(graph);
        return toolbar;
    }

    Q.createToolbar = createToolbar;
    Q.createButtonGroup = createButtonGroup;
    Q.createButton = createGraphButton;

})(Q, jQuery);

!function (Q, $) {
    var createElement = function (className, parent, tag, html) {
        var element = document.createElement(tag || 'div');
        element.className = className;
        $(element).html(html);
        if (parent) {
            parent.appendChild(element);
        }
        return element;
    }

    var forEach = function (object, call, scope) {
        if (Array.isArray(object)) {
            return object.forEach(function (v) {
                call.call(this, v);
            }, scope);
        }
        for (var name in object) {
            call.call(scope, object[name], name);
        }
    }
    var defaultImageStyles = {
        fillColor: '#EEE',
        lineWidth: 1,
        strokeStyle: '#2898E0',
        padding: {left: 1, top: 1, right: 5, bottom: 5},
        shadowColor: '#888',
        shadowOffsetX: 2,
        shadowOffsetY: 2,
        shadowBlur: 3
    }
    var nodeImageStyles = {};
    nodeImageStyles[Q.Styles.RENDER_COLOR] = 'renderColor';
    nodeImageStyles[Q.Styles.RENDER_COLOR_BLEND_MODE] = 'renderColorBlendMode';
    nodeImageStyles[Q.Styles.SHAPE_FILL_COLOR] = 'fillColor';
    nodeImageStyles[Q.Styles.SHAPE_STROKE_STYLE] = 'strokeStyle';
    nodeImageStyles[Q.Styles.SHAPE_LINE_DASH] = 'borderLineDash';
    nodeImageStyles[Q.Styles.SHAPE_LINE_DASH_OFFSET] = 'borderLineDashOffset';
    //nodeImageStyles[Q.Styles.SHAPE_FILL_GRADIENT] = 'fillGradient';
    nodeImageStyles[Q.Styles.SHAPE_OUTLINE] = 'outline';
    nodeImageStyles[Q.Styles.SHAPE_OUTLINE_STYLE] = 'outlineStyle';
    nodeImageStyles[Q.Styles.LINE_CAP] = 'lineGap';
    nodeImageStyles[Q.Styles.LINE_JOIN] = 'lineJoin';
    nodeImageStyles[Q.Styles.BACKGROUND_COLOR] = 'backgroundColor';
    nodeImageStyles[Q.Styles.BACKGROUND_GRADIENT] = 'backgroundGradient';
    nodeImageStyles[Q.Styles.BORDER] = 'border';
    nodeImageStyles[Q.Styles.BORDER_COLOR] = 'borderColor';
    nodeImageStyles[Q.Styles.BORDER_LINE_DASH] = 'borderLineDash';
    nodeImageStyles[Q.Styles.BORDER_LINE_DASH_OFFSET] = 'borderLineDashOffset';
    //Styles.IMAGE_BACKGROUND_COLOR = "image.background.color";
    //Styles.IMAGE_BACKGROUND_GRADIENT = "image.background.gradient";
    //Styles.IMAGE_BORDER = "image.border.width";
    //Styles.IMAGE_BORDER_STYLE = Styles.IMAGE_BORDER_COLOR = "image.border.style";
    //Styles.IMAGE_BORDER_LINE_DASH = "image.border.line.dash";
    //Styles.IMAGE_BORDER_LINE_DASH_OFFSET = "image.border.line.dash.offset";
    //Styles.IMAGE_RADIUS = Styles.IMAGE_BORDER_RADIUS = "image.radius";
    //Styles.IMAGE_PADDING = "image.padding";

    //var imageUI = new Q.ImageUI();
    //var imageProperties = {};
    //for(var name in imageUI){
    //    if(name[0] == '_' || name.indexOf('$invalidate') == 0 || imageUI[name] instanceof Function){
    //        continue;
    //    }
    //    if(name[0] == '$'){
    //        name = name.substring(1);
    //    }
    //    imageProperties[name] = imageUI[name];
    //}
    //Q.log(JSON.stringify(imageProperties, null, '\t'));

    function mixStyles(styles) {
        if (!styles) {
            return defaultImageStyles;
        }
        var result = {};
        for (var name in defaultImageStyles) {
            result[name] = defaultImageStyles[name];
        }
        for (var name in styles) {
            var propertyName = nodeImageStyles[name];
            if (propertyName) {
                result[propertyName] = styles[name];
            }
        }
        return result;
    }

    var onGroupTitleClick = function (evt) {
        var parent = evt.target.parentNode;
        while (parent && !$(parent).hasClass('group')) {
            parent = parent.parentNode;
        }
        closeGroup(parent);
    }
    function closeGroup(parent, open){
        if (!parent) {
            return;
        }
        if(open === undefined){
            open = $(parent).hasClass('group--closed');
        }
        if (open) {
            $(parent).removeClass('group--closed');
        } else {
            $(parent).addClass('group--closed');
        }
    }

    function isImage(image) {
        return Q.isString(image) || image.draw instanceof Function;
    }

    var ToolBox = function (graph, html, groups) {
        this.graph = graph;
        this.html = html;
        this.init(groups);
    }
    ToolBox.prototype = {
        loadButton: null,
        imageWidth: 40,
        imageHeight: 40,
        loadImageBoxes: function (groups) {
            if (Q.isArray(groups)) {
                forEach(groups, function (group) {
                    this.loadImageBox(group);
                }, this);
                return;
            }
            this.loadImageBox(groups);
        },
        loadImageBox: function (json, insert) {
            if (Q.isString(json)) {
                json = JSON.parse(json);
            }
            if (insert) {
                var firstGroup = this.html.getElementsByClassName('group').item(0);
                if (firstGroup) {
                    this.html.insertBefore(this._createGroup(json, json.prefix), firstGroup);
                    return;
                }
            }
            return this.html.appendChild(this._createGroup(json, json.prefix));
        },
        //加载图元库文件
        loadImageBoxFile: function (files) {
            if (!files[0]) {
                return;
            }
            Q.readerSingleFile(files[0], 'json', function (json) {
                if (json) {
                    this.loadImageBox(json, true);
                }
            }.bind(this));
        },
//初始化拖拽节点列表
        hideButtonBar: function(show){
            this.buttonBar.style.display = show ? '' : 'none';
        },
        init: function (groups) {
            var toolbox = this.html, graph = this.graph;

            Q.appendClass(toolbox, 'graph-editor__toolbox');
            var buttonBar = this.buttonBar = createElement('graph-editor__toolbox-buttonBar', toolbox);
            var button = this.loadButton = Q.createButton({
                type: 'file',
                name: getI18NString('Load Images...'),
                iconClass: 'q-icon toolbar-add',
                action: this.loadImageBoxFile.bind(this)
            }, this);
            buttonBar.appendChild(button);
            this.hideButtonBar();

            var basicNodes = [{
                label: 'Node',
                image: 'Q-node'
            }, {
                type: 'Text',
                label: 'Text',
                html: '<span style="background-color: #2898E0; color:#FFF; padding: 3px 5px;">' + getI18NString('Text') + '</span>',
                styles: {
                    'label.background.color': '#2898E0',
                    'label.color': '#FFF',
                    'label.padding': new Q.Insets(3, 5)
                }
            }, {
                type: 'Group',
                label: 'Group',
                image: 'Q-group'
            }, {
                label: 'SubNetwork',
                image: 'Q-subnetwork',
                properties: {enableSubNetwork: true}
            }];

            var innerGroups = [{prefix: 'Q-', name: 'basic.nodes', displayName: getI18NString('Basic Nodes'), images: basicNodes}, {
                prefix: 'Q-',
                name: 'register.images',
                displayName: getI18NString('Register Images'),
                images: Q.getAllImages(),
                close: true
            }, {
                name: 'default.shapes',
                displayName: getI18NString('Default Shapes'),
                prefix: 'Q-',
                images: Q.Shapes.getAllShapes(this.imageWidth, this.imageHeight),
                close: true
            }];
            this.loadImageBoxes(innerGroups);
            if (groups) {
                this.loadImageBoxes(groups);
            }
            Q.Shapes.getShape(Q.Consts.SHAPE_CIRCLE, 100, 100)
        },
        _index: 0,
        _getGroup: function(name){
            return this._groups[name];
            //return $(this.html).find('#' + name);
        },
        hideDefaultGroups: function(){
            this.hideGroup('basic.nodes');
            this.hideGroup('register.images');
            this.hideGroup('default.shapes');
        },
        hideGroup: function(name){
            var group = this._getGroup(name);
            if(group){
                group.style.display = 'none';
            }
        },
        showGroup: function(name){
            var group = this._getGroup(name);
            if(group){
                group.style.display = '';
            }
        },
        _groups: {},
        _createGroup: function (groupInfo) {
            var name = groupInfo.name;
            var root = groupInfo.root;
            var images = groupInfo.images;
            var close = groupInfo.close;
            var displayName = groupInfo.displayName || name;

            var group = createElement('group');
            group.id = name;
            this._groups[name] = group;

            var title = createElement('group__title', group);
            title.onclick = onGroupTitleClick;
            createElement(null, title, 'span', displayName);
            createElement('q-icon group-expand toolbar-expand', title, 'span');
            var items = createElement('group__items', group);
            var clearDiv = document.createElement('div');
            clearDiv.style.clear = 'both';
            group.appendChild(clearDiv);
            if(close){
                closeGroup(group);
            }

            if (!images) {
                return group;
            }

            //var images = [{
            //    type: '图元类型',
            //    label: '图元文本',
            //    image: '图元图片',
            //    imageName: '图片名称',
            //    styles: '图元样式',
            //    properties: '图元属性',
            //    clientProperties: '图元client属性',
            //    html: '拖拽html内容'
            //}, 'a.png', {draw: function(g){}}];
            //var group = {
            //    name: '分组名称',
            //    root: '根目录',
            //    imageWidth: '',
            //    imageHeight: '',
            //    size: 'q-icon size',
            //    images: images//'拖拽图片信息'
            //}

            var imageWidth = groupInfo.imageWidth || this.imageWidth;
            var imageHeight = groupInfo.imageHeight || this.imageHeight;
            var showLabel = groupInfo.showLabel;

            forEach(images, function (imageInfo, name) {
                if (name == '_classPath' || name == '_className') {
                    return;
                }
                var image;
                if (isImage(imageInfo)) {
                    image = imageInfo;
                } else {
                    image = imageInfo.image;
                }
                var imageDiv, tooltip;
                if (image) {
                    var imageName;
                    if (Q.isString(image)) {
                        imageName = image;
                        if (!Q.hasImage(image) && root) {
                            imageName = image = root + image;
                        }
                    } else {
                        imageName = imageInfo.imageName || imageInfo.name || name || 'drawable-' + this._index++;
                    }
                    if (!Q.hasImage(imageName)) {
                        Q.registerImage(imageName, image);
                    }
                    imageDiv = Q.createCanvas(imageWidth, imageHeight, true);
                    Q.drawImage(imageName, imageDiv, mixStyles(imageInfo.styles));
                    if (isImage(imageInfo)) {
                        imageInfo = {image: imageName};
                    } else {
                        imageInfo.image = imageName;
                    }
                    if(groupInfo.size){
                        if(!imageInfo.properties){
                            imageInfo.properties = {}
                        }
                        if(!imageInfo.properties.size){
                            imageInfo.properties.size = groupInfo.size;
                        }
                    }

                    tooltip = imageName;
                } else if (imageInfo.html) {
                    var imageDiv = document.createElement('div');
                    imageDiv.style.width = imageWidth + 'px';
                    imageDiv.style.height = imageHeight + 'px';
                    imageDiv.style.lineHeight = imageHeight + 'px';
                    imageDiv.style.overflow = 'hidden';
                    imageDiv.innerHTML = imageInfo.html;
                } else {
                    return;
                }
                tooltip = imageInfo.tooltip || imageInfo.label || tooltip || name;
                imageDiv.setAttribute('title', tooltip);
                var item = createElement('group__item', items);
                Q.appendDNDInfo(imageDiv, imageInfo);
                item.appendChild(imageDiv);

                if(imageInfo.br){
                    var br = document.createElement('br');
                    items.appendChild(br);
                }
                if(tooltip && (showLabel || imageInfo.showLabel)){
                    var sortName = tooltip;
                    var sortLength = 10;
                    if(sortName.length > sortLength){
                        sortName = '...' + sortName.substring(sortName.length - sortLength + 2)
                    }
                    var label = document.createElement('div');
                    label.style.lineHeight = '1em';
                    label.style.overFlow = 'hide'
                    label.style.marginTop = '0px'
                    label.textContent = sortName;
                    item.appendChild(label);
                }

            }, this)
            return group;
        }
    }

    Q.ToolBox = ToolBox;

}(Q, jQuery)