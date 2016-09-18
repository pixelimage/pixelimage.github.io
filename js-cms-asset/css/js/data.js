
var datas = [];

datas.h1 = {
	id:"h1",
	selector:"h1",
	name:"タイトル &lt;h1&gt;",
	text:'<h1 class="_CLASSNAME_">タイトル <span class="cms-h-sub">サブテキスト</span></h1>',
	size:{ ss:24, s:28, m:32, l:36, ll:42 },
	list:[
		{
			label:"基本",
			list:[
				/* ---------- 01 ---------- ---------- */
				[
					"_CLASS_{_FS_;}",
					"_CLASS_{margin: _1.0_ 0 _1.0_ 0;}",
					"_ICON_",
					"_CLASS_ .cms-h-sub{font-size:14px; float:right; color: rgba(0,0,0,0.5); font-weight: normal; margin:0 0.2em 0 0;}",
				],
				[
					"_CLASS_{_FS_;}",
					"_CLASS_{margin: _1.0_ 0 _1.0_ 0;padding:0 _1.5_ 0 _1.5_;}",
					"_ICON_",
					"_CLASS_{position:relative;display:inline-block;}",
					"_CLASS_:before { content: \"“\"; font-size: 2em; line-height: 0em; color: #ddd; position: absolute; left: 0; top: 0; z-index: 2;}",
					"_CLASS_:before { font-family: 'Times New Roman',sans-serif;}",
					"_CLASS_:after { content: \"”\"; font-size: 2em; line-height: 0em; color: #ddd; position: absolute; right: 0; bottom: -5px; z-index: 2;}",
					"_CLASS_:after { font-family: 'Times New Roman',sans-serif;}",
					"_CLASS_ .cms-h-sub{font-size:14px; color: rgba(0,0,0,0.5); font-weight: normal; margin:0 0 0 0.2em;}",
				],
				[
					"_CLASS_{_FS_;}",
					"_CLASS_{margin: _1.0_ 0 _1.0_ 0;padding:_0.5_ _1.5_ _0.5_ _1.5_;}",
					"_ICON_",
					"_CLASS_{position:relative;display:inline-block;}",
					"_CLASS_:before { content: \"\"; }",
					"_CLASS_:before { display:block;width:_0.5_;height:_1.0_;border-left: 2px solid #ddd;border-top: 2px solid #ddd;}",
					"_CLASS_:before { position: absolute; left: 0; top: 0; z-index: 2;}",
					"_CLASS_:after { content: \"\"; }",
					"_CLASS_:after { display:block;width:_0.5_;height:_1.0_;border-right: 2px solid #ddd;border-bottom: 2px solid #ddd;}",
					"_CLASS_:after { position: absolute; right: 0; bottom: 0; z-index: 2;}",
					"_CLASS_ .cms-h-sub{font-size:14px; color: rgba(0,0,0,0.5); font-weight: normal; margin:0 0 0 0.2em;}",
				],
				[
					"_CLASS_{_FS_;}",
					"_CLASS_{margin: _1.0_ 0 _1.0_ 0;padding:_0.5_ _1.5_ _0.5_ _1.5_;}",
					"_ICON_",
					"_CLASS_{position:relative;display:inline-block;}",
					"_CLASS_:before { content: \"\"; }",
					"_CLASS_:before { display:block;width:_0.5_;height:_1.5_;border-left: 2px solid #ddd;border-top: 2px solid #ddd;border-bottom: 2px solid #ddd;}",
					"_CLASS_:before { position: absolute; left: 0; top: 0; z-index: 2;}",
					"_CLASS_:after { content: \"\"; }",
					"_CLASS_:after { display:block;width:_0.5_;height:_1.5_;border-right: 2px solid #ddd;border-top: 2px solid #ddd;border-bottom: 2px solid #ddd;}",
					"_CLASS_:after { position: absolute; right: 0; top: 0; z-index: 2;}",
					"_CLASS_ .cms-h-sub{font-size:14px; color: rgba(0,0,0,0.5); font-weight: normal; margin:0 0 0 0.2em;}",
				],
				[
					"_CLASS_{_FS_;}",
					"_CLASS_{position:relative;margin: _1.0_ 0 _1.0_ 0;padding:0 0 0 30px;}",
					"_ICON_",
					"_CLASS_ .cms-h-sub{font-size:14px; float:right; color: rgba(0,0,0,0.5); font-weight: normal; margin:0 0.2em 0 0;}",
					"_CLASS_:before {content:'';position: absolute; top: -5px; left: 0; width: 12px; height: 12px; border: 3px solid #000; }",
					"_CLASS_:after {content:'';position: absolute; top: 0px; left:5px; width: 12px; height: 12px; border: 3px solid rgba(0,0,0,0.2); }",
				],
				[
					"_CLASS_{_FS_;}",
					"_CLASS_{position:relative;margin: 1em 0 1em 0;padding:0 0 0 30px;}",
					"_ICON_",
					"_CLASS_ .cms-h-sub{font-size:14px; float:right; color: rgba(0,0,0,0.5); font-weight: normal; margin:0 0.2em 0 0;}",
					"_CLASS_:before {content:'';position: absolute; top: -5px; left: 0; width: 12px; height: 12px; border: 3px solid #000; border-radius:50%;}",
					"_CLASS_:after {content:'';position: absolute; top: 0px; left:5px; width: 12px; height: 12px; border: 3px solid rgba(0,0,0,0.2);border-radius:50%;}",
				],
			]
		},
		{
			label:"塗り",
			list:[
				[
					"_CLASS_{_FS_;_FWB_;_RAD_;color: #fff;background: _BGC_;}",
					"_CLASS_{padding: _1.0_;margin: _1.0_ 0 _1.0_ 0;}",
					"_ICON_",
					"_CLASS_ .cms-h-sub{color: #fff;font-size:14px; float:right; font-weight: normal; margin:0 0.2em 0 0;}",
				],
				[
					"_CLASS_{_FS_;_FWB_;_RAD_;color: #fff;background: _BGC_;}",
					"_CLASS_{position:relative;padding: _1.0_ _1.5_ _1.0_ _1.0_;margin: _1.0_ 0 _1.0_ 0;}",
					"_ICON_",
					"_CLASS_:after {content: \'\';  position: absolute; top: 0; right: 0; width: 0; border-width: 0 16px 16px 0; border-style: solid; border-color: #fff #fff #ddd #ddd; box-shadow: -1px 1px 2px rgba(0, 0, 0, .1); }",
					"_CLASS_ .cms-h-sub{color: #fff;font-size:14px; float:right;font-weight: normal; margin:0 0.2em 0 0;}",
				],
				[
					"_CLASS_{_FS_;_FWB_;_RAD_;color: #fff;background: _BGC_;}",
					"_CLASS_{position:relative;padding: _1.0_;margin: _1.0_ 0 _1.0_ 0;}",
					"_ICON_",
					"_CLASS_:after{ content: \"\"; position: absolute; bottom: -10px; left: 10%; z-index: 90; margin-left: -10px; border-top: 10px solid _BGC_; border-left: 10px solid transparent; border-right: 10px solid transparent; border-bottom: 0; }",
					"_CLASS_ .cms-h-sub{color: #fff;font-size:14px; float:right;font-weight: normal; margin:0 0.2em 0 0;}",
				],
				[
					"_CLASS_{_FS_;_FWB_;_RAD_;_GRAD_;}",
					"_CLASS_{padding: _1.0_;margin: _1.0_ 0 _1.0_ 0;}",
					"_ICON_",
					"_CLASS_ .cms-h-sub{color: #fff;font-size:14px; float:right; color: rgba(0,0,0,0.5); font-weight: normal; margin:0 0.2em 0 0;}",
				]
			]
		},
		{
			label:"線",
			list:[
				[
					"_CLASS_{_FS_;_FWB_;_RAD_;border: 1px dashed _BGC_;background: _BGC[0.05]_;}",
					"_CLASS_{padding: _1.0_;margin: _1.0_ 0 _1.0_ 0;}",
					"_ICON_",
					"_CLASS_ .cms-h-sub{font-size:14px; float:right; color: rgba(0,0,0,0.5); font-weight: normal; margin:0 0.2em 0 0;}",
				],
				[
					"_CLASS_{_FS_;_FWB_;_RAD_;border: 1px solid _BGC_;background: _BGC[0.05]_;}",
					"_CLASS_{padding: _1.0_;margin: _1.0_ 0 _1.0_ 0;}",
					"_ICON_",
					"_CLASS_ .cms-h-sub{font-size:14px; float:right; color: rgba(0,0,0,0.5); font-weight: normal; margin:0 0.2em 0 0;}",
				],
				[
					"_CLASS_{_FS_;_FWB_;_RAD_;border: 2px solid _BGC_;background: _BGC[0.05]_;}",
					"_CLASS_{padding: _1.0_;margin: _1.0_ 0 _1.0_ 0;}",
					"_ICON_",
					"_CLASS_ .cms-h-sub{font-size:14px; float:right; color: rgba(0,0,0,0.5); font-weight: normal; margin:0 0.2em 0 0;}",
				],
				
			]
		},
		{
			label:"下線",
			list:[
				[
					"_CLASS_{_FS_;_FWB_;_RAD_;border-bottom: 1px dashed _BGC_;}",
					"_CLASS_{padding: _1.0_ 0 _1.0_ 0;margin: _1.0_ 0 _1.0_ 0;}",
					"_ICON_",
					"_CLASS_ .cms-h-sub{font-size:14px; float:right; color: rgba(0,0,0,0.5); font-weight: normal; margin:0 0.2em 0 0;}",
				],
				[
					"_CLASS_{_FS_;_FWB_;_RAD_;border-bottom: 2px solid _BGC_;}",
					"_CLASS_{padding: _1.0_ 0 _1.0_ 0;margin: _1.0_ 0 _1.0_ 0;}",
					"_ICON_",
					"_CLASS_ .cms-h-sub{font-size:14px; float:right; color: rgba(0,0,0,0.5); font-weight: normal; margin:0 0.2em 0 0;}",
			],
				[
					"_CLASS_{_FS_;_FWB_;_RAD_;border: 1px solid #eee;border-bottom: 2px solid _BGC_;}",
					"_CLASS_{padding: _1.0_;margin: _1.0_ 0 _1.0_ 0;}",
					"_ICON_",
					"_CLASS_ .cms-h-sub{font-size:14px; float:right; color: rgba(0,0,0,0.5); font-weight: normal; margin:0 0.2em 0 0;}",
			],
				[
					"_CLASS_{_FS_;_FWB_;_RAD_;border: 1px solid #eee;border-bottom: 2px solid _BGC_;}",
					"_CLASS_{box-shadow:0px 1px 5px rgba(0,0,0,0.2);}",
					"_CLASS_{padding: _1.0_;margin: _1.0_ 0 _1.0_ 0;}",
					"_ICON_",
					"_CLASS_ .cms-h-sub{font-size:14px; float:right; color: rgba(0,0,0,0.5); font-weight: normal; margin:0 0.2em 0 0;}",
				],
				[
					"_CLASS_{_FS_;_FWB_;_RAD_;background: _BGC[0.05]_;border: 1px solid #eee;border-bottom: 2px solid _BGC_;}",
					"_CLASS_{padding: _1.0_;margin: _1.0_ 0 _1.0_ 0;}",
					"_ICON_",
					"_CLASS_ .cms-h-sub{font-size:14px; float:right; color: rgba(0,0,0,0.5); font-weight: normal; margin:0 0.2em 0 0;}",
			],
				[
					"_CLASS_{_FS_;_FWB_;_RAD_;_GRAD_;border: 1px solid #eee;border-bottom: 2px solid _BGC_;}",
					"_CLASS_{padding: _1.0_;margin: _1.0_ 0 _1.0_ 0;}",
					"_ICON_",
					"_CLASS_ .cms-h-sub{font-size:14px; float:right; color: rgba(0,0,0,0.5); font-weight: normal; margin:0 0.2em 0 0;}",
			],
				[
					"_CLASS_{_FS_;_FWB_;_RAD_;_GRAD2_;border: 1px solid #eee;border-bottom: 2px solid _BGC_;}",
					"_CLASS_{padding: _1.0_;margin: _1.0_ 0 _1.0_ 0;}",
					"_ICON_",
					"_CLASS_ .cms-h-sub{font-size:14px; float:right; color: rgba(0,0,0,0.5); font-weight: normal; margin:0 0.2em 0 0;}",
				],
				//
			]
		}
	]
}
datas.h2 = {
	id:"h2",
	selector:"h2",
	name:"大見出し &lt;h2&gt;",
	text:'<h2 class="_CLASSNAME_">大見出し <span class="cms-h-sub">サブテキスト</span></h2>',
	size:{ ss:16, s:18, m:22, l:28, ll:32 },
	list:datas.h1.list
}
datas.h3 = {
	id:"h3",
	selector:"h3",
	name:"中見出し &lt;h3&gt;",
	text:'<h3 class="_CLASSNAME_">中見出し <span class="cms-h-sub">サブテキスト</span></h3>',
	size:{ ss:12, s:14, m:16, l:20, ll:24 },
	list:datas.h1.list
}
datas.h4 = {
	id:"h4",
	selector:"h4",
	name:"小見出し &lt;h4&gt;",
	text:'<h3 class="_CLASSNAME_">小見出し <span class="cms-h-sub">サブテキスト</span></h3>',
	size:{ ss:11, s:12, m:14, l:16, ll:20 },
	list:datas.h1.list
}
datas.p = {
	id:"p",
	selector:".cms-p",
	name:"文書 &lt;p&gt;",
	text:'<p class="_CLASSNAME_">サンプルの文書ですので、ご注意ください。サンプルの文書ですので、ご注意ください。サンプルの文書ですので、ご注意ください。サンプルの文書ですので、ご注意ください。サンプルの文書ですので、ご注意ください。</p>',
	size:{ ss:12, s:14, m:16, l:20, ll:34 },
	list:[
		{
			label:"基本",
			list:[
				[
					"_CLASS_{_FS_;_RAD_;}",
					"_CLASS_{margin: _1.0_ 0 _1.0_ 0;line-height: 1.8;}",
				],
				[
					"_CLASS_{_FS_;_RAD_;border: 1px solid #eee;}",
					"_CLASS_{margin: _1.0_ 0;padding:_1.0_;line-height: 1.8;}",
				],
				[
					"_CLASS_{_FS_;_RAD_;background:#f2f2f2;}",
					"_CLASS_{margin: _1.0_ 0;padding:_1.0_;line-height: 1.8;}",
				],
				[
					"_CLASS_{_FS_;_RAD_;background:_BGC_;color:#fff;}",
					"_CLASS_{margin: _1.0_ 0;padding:_1.0_;line-height: 1.8;}",
				]
			]
		}
	]
}
datas.table = {
	id:"table",
	selector:".cms-table",
	name:"テーブル &lt;table&gt;",
	text:'<table class="_CLASSNAME_"><tbody><tr><th>項目</th><th>項目</th></tr><tr><th>社名</th><td>株式会社 example company</td></tr><tr><th>沿革</th><td>2000年設立</td></tr><tr><th>URL</th><td>http://www.yahoo.com</td></tr><tr><th>住所</th><td>〒565-0816 大阪府大阪市北区012-3456</td></tr></tbody></table>',
	size:{ ss:10, s:12, m:14, l:16, ll:20 },
	list:[
		{
			label:"基本",
			list:[
				[
					"_CLASS_ {margin: _1.0_ 0 _1.0_ 0; border-top: 1px solid #ddd;}",
					"_CLASS_ th,",
					"_CLASS_ td{_FS_;line-height: 1.8;padding:_1.0_;}",
					"_CLASS_ th {white-space: nowrap;_FWB_; border-bottom: 1px solid #ddd;}",
					"_CLASS_ td {width: auto; border-bottom: 1px solid #ddd;}",
				],
				[
					"_CLASS_ {margin: _1.0_ 0 _1.0_ 0; border-top: 1px solid #ddd;}",
					"_CLASS_ th,",
					"_CLASS_ td{_FS_;line-height: 1.8;padding:_1.0_;}",
					"_CLASS_ th {white-space: nowrap; background: _BGC[0.05]_; border-bottom: 1px solid #ddd;}",
					"_CLASS_ td {width: auto; background: #fff; border-bottom: 1px solid #ddd;}",
				],
				[
					"_CLASS_ {margin: _1.0_ 0 _1.0_ 0; border-top: 1px solid #ddd;}",
					"_CLASS_ th,",
					"_CLASS_ td{_FS_;line-height: 1.8;padding:_1.0_;}",
					"_CLASS_ th {white-space: nowrap; background: _BGC[0.1]_; border-bottom: 1px solid #ddd;}",
					"_CLASS_ td {width: auto; background: #fff; border-bottom: 1px solid #ddd;}",
				],
				[
					"_CLASS_ {margin: _1.0_ 0 _1.0_ 0; }",
					"_CLASS_ th,",
					"_CLASS_ td{_FS_;line-height: 1.8;padding:_1.0_;}",
					"_CLASS_ th {white-space: nowrap; _FWB_;background: _BGC[0.05]_; border-bottom: 2px solid #fff;}",
					"_CLASS_ td {width: auto; background: _BGC[0.05]_; border-bottom: 2px solid #fff;}",
				],
				[
					"_CLASS_ {margin: _1.0_ 0 _1.0_ 0; }",
					"_CLASS_ th,",
					"_CLASS_ td{_FS_;line-height: 1.8;padding:_1.0_;}",
					"_CLASS_ th {white-space: nowrap; _FWB_;background: _BGC[0.05]_; border-bottom: 2px solid #fff;}",
					"_CLASS_ td {width: auto; background: _BGC[0.05]_; border-bottom: 2px solid #fff;}",
					"_CLASS_ tr:nth-child(odd) th{background: _BGC[0.1]_;}",
					"_CLASS_ tr:nth-child(odd) td{background: _BGC[0.1]_;}"
				],
				[
					"_CLASS_ {margin: _1.0_ 0 _1.0_ 0; }",
					"_CLASS_ th,",
					"_CLASS_ td{_FS_;line-height: 1.8;padding:_1.0_;}",
					"_CLASS_ th {white-space: nowrap; background: _BGC_;color:#fff; border-bottom: 1px solid #fff;}",
					"_CLASS_ td {width: auto; border-bottom: 1px solid #ccc;}",
				],
				[
					"_CLASS_ {margin: _1.0_ 0 _1.0_ 0; }",
					"_CLASS_ th,",
					"_CLASS_ td{_FS_;line-height: 1.8;padding:_1.0_;background: _BGC_;color:#fff;}",
					"_CLASS_ th {white-space: nowrap;  border-bottom: 1px solid #fff;}",
					"_CLASS_ td {width: auto; border-bottom: 1px solid #fff;}",
				],
			]
		}
	]
}

datas.ul = {
	id:"ul",
	selector:".cms-ul",
	name:"リスト &lt;ul&gt;",
	text:'<ul class="_CLASSNAME_ clearfix"><li>サンプルの文書ですので、ご注意ください。サンプルの文書ですので、ご注意ください。</li><li>サンプルの文書ですので、ご注意ください。サンプルの文書ですので、ご注意ください。サンプルの文書ですので、ご注意ください。サンプルの文書ですので、ご注意ください。</li><li>ご注意ください。サンプルの文書ですので、ご注意ください。</li></ul>',
	size:{ ss:10, s:12, m:14, l:16, ll:20 },
	list:[
		{
			label:"基本",
			list:[
				[
					"_CLASS_ { _FS_; line-height: 1.8;}",
					"_CLASS_ { margin: _1.0_ 0 2em 0; padding: 0 0 0 3em;}",
					"_CLASS_ li { margin: 0.75em 0;list-style-type: disc; }",
				],
				[
					"_CLASS_ { _FS_; line-height: 1.8;}",
					"_CLASS_ { margin: _1.0_ 0 2em 0; padding: 0 0 0 3em;}",
					"_CLASS_ li { margin: 0.75em 0;list-style-type: decimal; }",
				],
				[
					"_CLASS_ { _FS_; line-height: 1.8;}",
					"_CLASS_ { margin: _1.0_ 0 _2.0_ 0; border-bottom: 1px solid #ddd;}",
					"_CLASS_ li { margin: 0.25em 0;padding: _1.0_; border-top: 1px solid #ddd; }",
				],
				[
					"_CLASS_ { _FS_; line-height: 1.8;}",
					"_CLASS_ { margin: _1.0_ 0 _2.0_ 0; }",
					"_CLASS_ li { margin: 0.25em 0;padding: _1.0_;_RAD_; background: _BGC[0.1]_; }",
				],
				[
					"_CLASS_ { _FS_;color: #fff; line-height: 1.8;}",
					"_CLASS_ { margin: _1.0_ 0 _2.0_ 0; }",
					"_CLASS_ li { margin: 0.25em 0;padding: _1.0_;_RAD_; background: _BGC_; }",
				]
			]
		}
	]
}

datas.blockquote = {
	id:"blockquote",
	selector:".cms-bq",
	name:"引用 &lt;blockquote&gt;",
 	text:'<blockquote class="_CLASSNAME_">文書が入ります。文書が入ります。文書が入ります。文書が入ります。文書が入ります。文書が入ります。文書が入ります。文書が入ります。<br> <small>文書が入ります。文書が入ります。文書が入ります。</small></blockquote> ',
	size:{ ss:10, s:12, m:14, l:16, ll:20 },
	list:[
		{
			label:"基本",
			list:[
				[
					"_CLASS_ { _FS_; line-height: 1.8; margin: _1.0_ 0;display: block;}",
					"_CLASS_ { padding: 1.5em 0 1.5em 100px;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEoAAAA/CAYAAABHP14DAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAAAWdEVYdENyZWF0aW9uIFRpbWUAMTUvMDYvMDM8LcY/AAAEPklEQVR4nO2bb0/UQBCHHz04wsHpxVMSUJSAit//2xg1acBwgXjmIn8OTy/4YttYuO7uzHa39EWf5IKRXvvjt9vZ2ZkWOjo6OtpLr4HzvwEOgZ/AMvH1fPRyLbsYPXeaL6ZiCHwAngFP858qcZEZAcfAAFgHtoCp9MupjNoDDh6cXy0uEj3gHfAaM2AFG/lnJj1JbFGHwCvL71XiIjAA3mNms+33C2DuO1FMo/rAR8wt52KAiVXXEa9dRXHr9z3HjYArjGFWYhk1AD4JRBU8RziSgYyBI+7fai5GwC/gj+0A6YlcDDAzSWP6knQr4BgTHzU4ZxPAkyAp/wkxaQ5kwE3Na1cRYtIMo8c5cHWMCjXps09UICEmTTEmeVlTnrigx+ry72MKnJLGpAF6kzIUqUqoUUfApuJ48cgFUKy2GjKU+VxIMN/HnwKUSWkSmDxJM7MzApJerVFDYEdx/Bxzu6ViH93MnhC4M9AYVcQlKQvSBW7QD9oUOAu9mMaoPeQJJcA30lYLDhTH1p7ZUqO0o3dKmjypQDtoGTUHTWrUruKcl8BFgBYpfXSDNiHCoEmMGqJb5bIwKWL2kK9yC2rEpTISozSz6QLBvqkGfUwGLiWLdWGfUZrZtCTS6Dl4qTj2Mv9EwWeUJhbMSF8T1+iJGiddRvUxdRopqWfTGF1silpFdRmlMWlO2tgEOj3RS80uozTx4EddIR566IyK3sCwGdVHt4e6iqDFhcakBQmSXZtRmrwJ0mbhoNOTRIutHqURVm4QjDGjP+R+4F1i4saUsCU7RE/vgZ4yRbA/RxhbbUYNFML+5kIOsO+/CtFjjFGZVGD+Xc2+7gaTve9gXyWLbdAOJo04w5Pa2E70ViFsDdPwlC7dG5iFwtkeKrGNLhvfxswi6T52C9M+c7b7q06mmU0Q1hvsYcq3kmtpFhXQzb7yNY5x/C1VRqV+wqV8nQPBcaF1fS2bOPRUGaVd8eqwiYknvmOaoirwA3E6xXXxxZ+mZnhB5X6yDUZp95SpGVExOG0wCpq93SWs6GmLUU3GIQkrq3FbjGrbjNp++B9tMar1dEYJqTLqb+Mq3KQuCIqoMirV44KhtNao1LUlLa3QU2XUkuZH0VWjegyjViq2tmAerR8mxHW7L2h+4FYGx2ZUUw/MF/gG5tH1uIxqahSLMrGLJl8LqWzkuvKopsRJOro3NBcOKvW4jDonfYt8mV9HwiSlkBzr8wquWs8dcAu8SKEo5wT5OzELTLVzK5GWJfAFy+TwFcVuMc0AbR1dwhT9LLnGNALW48vhBEcjV1I9nBHfrNBHqu8w3ZLYZmV4YrK0zDoj3rSfUO/B05hmLYGvCNIP7bswvkani0vgO3EzbV+j04XqlZPQl4ZGpY9L5AJjUGgrXULxpMsYfwFwjnnyRp0n1n0NDczs2ij9uxDwWysmEjazmt6WdXR0dDTGP8kezGlFL6lqAAAAAElFTkSuQmCC) 10px 10px no-repeat; }",
				],
				[
					"_CLASS_ { _FS_; line-height: 1.8; margin: _1.0_ 0;display: block;}",
					"_CLASS_ { padding: 1.5em 0 1.5em 100px; _RAD_;background:_BGC[0.05]_ url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEoAAAA/CAYAAABHP14DAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAAAWdEVYdENyZWF0aW9uIFRpbWUAMTUvMDYvMDM8LcY/AAAEPklEQVR4nO2bb0/UQBCHHz04wsHpxVMSUJSAit//2xg1acBwgXjmIn8OTy/4YttYuO7uzHa39EWf5IKRXvvjt9vZ2ZkWOjo6OtpLr4HzvwEOgZ/AMvH1fPRyLbsYPXeaL6ZiCHwAngFP858qcZEZAcfAAFgHtoCp9MupjNoDDh6cXy0uEj3gHfAaM2AFG/lnJj1JbFGHwCvL71XiIjAA3mNms+33C2DuO1FMo/rAR8wt52KAiVXXEa9dRXHr9z3HjYArjGFWYhk1AD4JRBU8RziSgYyBI+7fai5GwC/gj+0A6YlcDDAzSWP6knQr4BgTHzU4ZxPAkyAp/wkxaQ5kwE3Na1cRYtIMo8c5cHWMCjXps09UICEmTTEmeVlTnrigx+ry72MKnJLGpAF6kzIUqUqoUUfApuJ48cgFUKy2GjKU+VxIMN/HnwKUSWkSmDxJM7MzApJerVFDYEdx/Bxzu6ViH93MnhC4M9AYVcQlKQvSBW7QD9oUOAu9mMaoPeQJJcA30lYLDhTH1p7ZUqO0o3dKmjypQDtoGTUHTWrUruKcl8BFgBYpfXSDNiHCoEmMGqJb5bIwKWL2kK9yC2rEpTISozSz6QLBvqkGfUwGLiWLdWGfUZrZtCTS6Dl4qTj2Mv9EwWeUJhbMSF8T1+iJGiddRvUxdRopqWfTGF1silpFdRmlMWlO2tgEOj3RS80uozTx4EddIR566IyK3sCwGdVHt4e6iqDFhcakBQmSXZtRmrwJ0mbhoNOTRIutHqURVm4QjDGjP+R+4F1i4saUsCU7RE/vgZ4yRbA/RxhbbUYNFML+5kIOsO+/CtFjjFGZVGD+Xc2+7gaTve9gXyWLbdAOJo04w5Pa2E70ViFsDdPwlC7dG5iFwtkeKrGNLhvfxswi6T52C9M+c7b7q06mmU0Q1hvsYcq3kmtpFhXQzb7yNY5x/C1VRqV+wqV8nQPBcaF1fS2bOPRUGaVd8eqwiYknvmOaoirwA3E6xXXxxZ+mZnhB5X6yDUZp95SpGVExOG0wCpq93SWs6GmLUU3GIQkrq3FbjGrbjNp++B9tMar1dEYJqTLqb+Mq3KQuCIqoMirV44KhtNao1LUlLa3QU2XUkuZH0VWjegyjViq2tmAerR8mxHW7L2h+4FYGx2ZUUw/MF/gG5tH1uIxqahSLMrGLJl8LqWzkuvKopsRJOro3NBcOKvW4jDonfYt8mV9HwiSlkBzr8wquWs8dcAu8SKEo5wT5OzELTLVzK5GWJfAFy+TwFcVuMc0AbR1dwhT9LLnGNALW48vhBEcjV1I9nBHfrNBHqu8w3ZLYZmV4YrK0zDoj3rSfUO/B05hmLYGvCNIP7bswvkani0vgO3EzbV+j04XqlZPQl4ZGpY9L5AJjUGgrXULxpMsYfwFwjnnyRp0n1n0NDczs2ij9uxDwWysmEjazmt6WdXR0dDTGP8kezGlFL6lqAAAAAElFTkSuQmCC) 10px 10px no-repeat;}",
				],
				[
					"_CLASS_ { _FS_; line-height: 1.8; margin: _1.0_ 0;display: block;}",
					"_CLASS_ { padding: _1.0_;background:_BGC[0.05]_;_RAD_; }",
				],
				[
					"_CLASS_ { color:#fff; line-height: 1.8; margin: _1.0_ 0;display: block;}",
					"_CLASS_ { padding: _1.0_;background:_BGC_;_RAD_; }",
				],
				[
					"_CLASS_ { _FS_; line-height: 1.8; margin: _1.0_ 0;display: block;}",
					"_CLASS_ { padding: _1.0_;margin: _1.0_ _2.0_ _1.0_ _2.0_;border: 2px solid #888;_RAD_; }",
				],
			]
		}
	]
}
datas.code = {
	id:"code",
	selector:".cms-code",
	name:"コード &lt;code&gt;",
 	text:'<code class="_CLASSNAME_">var s = "hello world!";</code>',
	size:{ ss:10, s:12, m:14, l:16, ll:20 },
	list:[
		{
			label:"基本",
			list:[
				[
					"_CLASS_ { _FS_; line-height: 1.8; margin: _1.0_ 0;display: block;font-family: Consolas, 'Courier New', Courier, Monaco, monospace;}",
					"_CLASS_ { padding: _1.0_; background: _BGC_; color: #fff; _RAD_;}",
					"_CLASS_ .tag { width:20px; display:inline-block;}",
				],
				[
					"_CLASS_ { _FS_; line-height: 1.8; margin: _1.0_ 0;display: block;font-family: Consolas, 'Courier New', Courier, Monaco, monospace;}",
					"_CLASS_ { padding: _1.0_; background: _BGC[0.05]_; _RAD_;}",
					"_CLASS_ .tag { width:20px; display:inline-block;}",
				],
				[
					"_CLASS_ { _FS_; line-height: 1.8; margin: _1.0_ 0;display: block;font-family: Consolas, 'Courier New', Courier, Monaco, monospace;}",
					"_CLASS_ { padding: _1.0_ ; margin: _1.0_ _2.0_ _1.0_ _2.0_; border: 2px solid #888; _RAD_;}",
					"_CLASS_ .tag { width:20px; display:inline-block;}",
				]
			]
		}
	]
}

datas.markdown = {
	id:"markdown",
	selector:".cms-markdown",
	name:"フリーテキスト &lt;div&gt;",
	text:'<div class="_CLASSNAME_"><h1>タイトル</h1><h2>大見出し</h2><p>文書が入ります。文書が入ります。文書が入ります。文書が入ります。文書が入ります。文書が入ります。文書が入ります。文書が入ります。文書が入ります。文書が入ります。文書が入ります。</p><h3>中見出し</h3><p>文書が入ります。文書が入ります。文書が入ります。文書が入ります。</p><h4>小見出し</h4><p>文書が入ります。文書が入ります。文書が入ります。</p><ul><li>項目1</li><li>項目2</li><li>項目3</li></ul></div>',
	size:{ ss:10, s:12, m:14, l:16, ll:20 },
	list:[
		{
			label:"基本",
			list:[
				[
					"_CLASS_ {_FS_; line-height: 1.8; }",
					"_CLASS_ h1 { font-size:36px;line-height: 1.1; font-weight: bold; margin: 0 0 0.75em 0; }",
					"_CLASS_ h2 { font-size:24px;line-height: 1.1; font-weight: bold; margin: 2em 0 1em 0;}",
					"_CLASS_ h3 { font-size:18px;line-height: 1.1; font-weight: bold; margin: 2em 0 1em 0;}",
					"_CLASS_ h4 { line-height: 1.1; font-weight: bold; margin: 2em 0 1em 0;}",
					"_CLASS_ h5 { line-height: 1.1; font-weight: bold; margin: 2em 0 1em 0;}",
					"_CLASS_ h6 { line-height: 1.1; font-weight: bold; margin: 2em 0 1em 0;}",
					"_CLASS_ p { margin: 0.5em 0 0.5em 0;}",
					"_CLASS_ ul { list-style-type : disc; margin: 1em 0 1em 4em;}",
					"_CLASS_ ol { list-style-type : decimal; margin: 1em 0 1em 4em;}",
					"_CLASS_ li { line-height: 1.8; margin: 0.5em 0;}",
					"_CLASS_ blockquote { margin: 1em;padding: 1em;background: #f7f7f7;}",
					"_CLASS_ strong {font-weight: bold;}",
					"_CLASS_ hr { margin: 2em 0; height: 12px; border: 0; box-shadow: inset 0 12px 12px -12px rgba(0,0,0,0.2);}",
					"_CLASS_ em {font-weight: bold;}",
					"_CLASS_ em.red {color: red;}",
					"_CLASS_ em.blue {color: blue;}",
					"_CLASS_ em.yellow {background: yellow;}",
					"_CLASS_ strong {font-weight: bold;background: rgba(255,255,0,0.2);}",
				],
				[
					"_CLASS_ {_FS_; line-height: 1.8; }",
					"_CLASS_ h1 { font-size:36px;line-height: 1.1; font-weight: bold; margin: 0 0 0.75em 0; }",
					"_CLASS_ h2 { font-size:24px;line-height: 1.1; font-weight: bold; margin: 2em 0 1em 0;padding:10px 0;border-bottom: 2px solid #333;}",
					"_CLASS_ h3 { font-size:18px;line-height: 1.1; font-weight: bold; margin: 2em 0 1em 0;padding:10px;background:_BGC[0.05]_}",
					"_CLASS_ h4 { line-height: 1.1; font-weight: bold; margin: 2em 0 1em 0;padding:5px 0;border-bottom: 2px solid #ccc;}",
					"_CLASS_ h5 { line-height: 1.1; font-weight: bold; margin: 2em 0 1em 0;}",
					"_CLASS_ h6 { line-height: 1.1; font-weight: bold; margin: 2em 0 1em 0;}",
					"_CLASS_ p { margin: 0.5em 0 0.5em 0;}",
					"_CLASS_ ul { list-style-type : disc; margin: 1em 0 1em 4em;}",
					"_CLASS_ ol { list-style-type : decimal; margin: 1em 0 1em 4em;}",
					"_CLASS_ li { line-height: 1.8; margin: 0.5em 0;}",
					"_CLASS_ blockquote { margin: 1em;padding: 1em;background: #f7f7f7;}",
					"_CLASS_ strong {font-weight: bold;}",
					"_CLASS_ hr { margin: 2em 0; height: 12px; border: 0; box-shadow: inset 0 12px 12px -12px rgba(0,0,0,0.2);}",
					"_CLASS_ em {font-weight: bold;}",
					"_CLASS_ em.red {color: red;}",
					"_CLASS_ em.blue {color: blue;}",
					"_CLASS_ em.yellow {background: yellow;}",
					"_CLASS_ strong {font-weight: bold;background: rgba(255,255,0,0.2);}",
				]
			]
		}
	]
}
datas.news = {
	id:"news",
	selector:".cms-news",
	name:"ニュースリスト &lt;div&gt;",
	text:'<div class="_CLASSNAME_"><div class="news-row clearfix"> <div class="news-cell-date"><span class="news-date">2013/02/25</span></div> <div class="news-cell-text"> <div class="news-title"><a href="{{SITE_DIR}}index.html">会社案内ページを更新しました。</a> <span class="news-date2">( 2013/02/25)</span> </div> </div> </div> <div class="news-row clearfix"> <div class="news-cell-date"><span class="news-date">2013/03/25</span></div> <div class="news-cell-text"> <div class="news-title"><a href="{{SITE_DIR}}index.html">製品ページを更新しました。</a> <span class="news-date2">( 2013/03/25)</span> </div> <div class="news-body">製品ページを更新しました。新製品のお知らせや、開発中の製品のプレビューもご覧いただけます。</div> </div> </div> <div class="news-row clearfix"> <div class="news-cell-date"><span class="news-date">2013/01/25</span></div> <div class="news-cell-text"> <div class="news-title">ホームページを公開しました。 <span class="news-date2">( 2013/01/25)</span> </div> <div class="news-body">ホームページを公開しました。今後ともよろしくお願いいたします。</div> </div> </div> </div> ',
	size:{ ss:10, s:12, m:14, l:16, ll:20 },
	list:[
		{
			label:"基本",
			list:[
				[
					"_CLASS_ {_FS_;width: 100%; margin: _1.0_ 0 _2.0_ 0;line-height: 1.4;border-top: 1px solid #ddd;}",
					"_CLASS_ .news-title:before{font-family: 'FontAwesome'; content: '\\f0da';margin: 0 0.5em 0 0}",
					"_CLASS_ .news-title{margin: 0 0 0.5em 0 ;}",
					"_CLASS_ .news-body{margin: 0.5em 0 0 0;}",
					"_CLASS_ .news-date2 { display: none; }",
					"_CLASS_ .news-row { border-bottom: 1px solid #ddd;padding: _1.0_ 0 _1.0_ 0; }",
					"_CLASS_ .news-cell-date { float:left; width: 7em; }",
					"_CLASS_ .news-cell-category { float:left;width:7em; }",
					"_CLASS_ .news-cell-text {  margin-left: 7em; }",
					"@media screen and (max-width:760px) {",
					"	_CLASS_ .news-row { padding: 0.75em 1em 1em 1em; }",
					"	_CLASS_ .news-cell-date { display: inline-block;float:none; width: auto; margin: 0.5em 0;}",
					"	_CLASS_ .news-cell-category {display: inline-block; float:none; width:auto;margin: 0.5em 0; }",
					"	_CLASS_ .news-cell-text { margin-left: 0; }",
					"}"
				],
				[
					"_CLASS_ {_FS_;width: 100%; margin: _1.0_ 0 _2.0_ 0;line-height: 1.4;border-top: 1px solid #ddd;}",
					"_CLASS_ .news-title:before{font-family: 'FontAwesome'; content: '\\f0da';margin: 0 0.5em 0 0}",
					"_CLASS_ .news-title{margin: 0 0 0.5em 0 ;}",
					"_CLASS_ .news-body{margin: 0.5em 0 0 0;}",
					"_CLASS_ .news-date2 { display: none; }",
					"_CLASS_ .news-row { border-bottom: 1px solid #ddd;padding: _1.0_ 0 _1.0_ 0; }",
					"_CLASS_ .news-cell-date { display: none; }",
					"_CLASS_ .news-cell-category { display: none; }",
					"_CLASS_ .news-cell-text { }",
					"_CLASS_ .news-date2 {  display: inline; }",
					"@media screen and (max-width:760px) {",
					"	_CLASS_ .news-row { padding: 0.75em 1em 1em 1em; }",
					"	_CLASS_ .news-cell-date { display: inline-block;float:none; width: auto; margin: 0.5em 0;}",
					"	_CLASS_ .news-cell-category {display: inline-block; float:none; width:auto;margin: 0.5em 0; }",
					"	_CLASS_ .news-cell-text { margin-left: 0; }",
					"}"
				],
				[
					"_CLASS_ {_FS_;width: 100%; margin: _1.0_ 0 _2.0_ 0;line-height: 1.4;}",
					"_CLASS_ .news-title:before{font-family: 'FontAwesome'; content: '\\f0da';margin: 0 0.5em 0 0}",
					"_CLASS_ .news-title{margin: 0 0 0.5em 0 ;}",
					"_CLASS_ .news-body{margin: 0.5em 0 0 0;}",
					"_CLASS_ .news-date2 { display: none; }",
					"_CLASS_ { background: #f7f7f7; }",
					"_CLASS_ .news-row {border-bottom: 2px solid #fff; margin: 2px 0;padding: _1.0_ _0.5_ _1.0_ _0.5_; }",
					"_CLASS_ .news-cell-date { float:left;	width: 7em; }",
					"_CLASS_ .news-cell-category { float:left;	width:7em; }",
					"_CLASS_ .news-cell-text {  margin-left: 7em; }",
					"@media screen and (max-width:760px) {",
					"	_CLASS_ .news-row { padding: 0.75em 1em 1em 1em; }",
					"	_CLASS_ .news-cell-date { display: inline-block;float:none; width: auto; margin: 0.5em 0;}",
					"	_CLASS_ .news-cell-category {display: inline-block; float:none; width:auto;margin: 0.5em 0; }",
					"	_CLASS_ .news-cell-text { margin-left: 0; }",
					"}"
				],
				[
					"_CLASS_ {_FS_;color:#fff;width: 100%; margin: _1.0_ 0 _2.0_ 0;line-height: 1.4;}",
					"_CLASS_ .news-title:before{font-family: 'FontAwesome'; content: '\\f0da';margin: 0 0.5em 0 0}",
					"_CLASS_ .news-title{margin: 0 0 0.5em 0 ;}",
					"_CLASS_ .news-body{margin: 0.5em 0 0 0;}",
					"_CLASS_ .news-date2 { display: none; }",
					"_CLASS_ { background: _BGC_;}",
					"_CLASS_ .news-row {border-bottom: 2px solid #fff; margin: 2px 0;padding: _1.0_ _0.5_ _1.0_ _0.5_; }",
					"_CLASS_ .news-cell-date { float:left;	width: 7em; }",
					"_CLASS_ .news-cell-category { float:left;	width:7em; }",
					"_CLASS_ .news-cell-text {  margin-left: 7em; }",
					"_CLASS_ a { color:#fff; }",
					"@media screen and (max-width:760px) {",
					"	_CLASS_ .news-row { padding: 0.75em 1em 1em 1em; }",
					"	_CLASS_ .news-cell-date { display: inline-block;float:none; width: auto; margin: 0.5em 0;}",
					"	_CLASS_ .news-cell-category {display: inline-block; float:none; width:auto;margin: 0.5em 0; }",
					"	_CLASS_ .news-cell-text { margin-left: 0; }",
					"}"
				],
			]
		}
	]
}
datas.newsB = {
	id:"newsB",
	selector:".cms-newsB",
	name:"ニュースリスト(カテゴリ) &lt;div&gt;",
	text:'<div class="_CLASSNAME_"><div class="news-row clearfix"> <div class="news-cell-date"><span class="news-date">2013/02/25</span></div> <div class="news-cell-category "><span class="news-a">会社情報</span></div> <div class="news-cell-text"> <div class="news-title"><a href="{{SITE_DIR}}index.html">会社案内ページを更新しました。</a> <span class="news-date2">( 2013/02/25)</span> </div> </div> </div> <div class="news-row clearfix"> <div class="news-cell-date"><span class="news-date">2013/03/25</span></div> <div class="news-cell-category "><span class="news-b">製品情報</span></div> <div class="news-cell-text"> <div class="news-title"><a href="{{SITE_DIR}}index.html">製品ページを更新しました。</a> <span class="news-date2">( 2013/03/25)</span> </div> <div class="news-body">製品ページを更新しました。新製品のお知らせや、開発中の製品のプレビューもご覧いただけます。</div> </div> </div> <div class="news-row clearfix"> <div class="news-cell-date"><span class="news-date">2013/01/25</span></div> <div class="news-cell-category "><span class="news-c">お知らせ</span></div> <div class="news-cell-text"> <div class="news-title">ホームページを公開しました。 <span class="news-date2">( 2013/01/25)</span> </div> <div class="news-body">ホームページを公開しました。今後ともよろしくお願いいたします。</div> </div> </div> </div>',
	size:{ ss:10, s:12, m:14, l:16, ll:20 },
	list:[
		{
			label:"基本",
			list:[
				[
					"_CLASS_ {_FS_;width: 100%; margin: _1.0_ 0 _2.0_ 0;line-height: 1.4;border-top: 1px solid #ddd;}",
					"_CLASS_ .news-row { border-bottom: 1px solid #ddd;padding: _1.0_ 0 _1.0_ 0; }",
					"_CLASS_ .news-cell-date { float:left; width: 7em; }",
					"_CLASS_ .news-cell-category { float:left; width:7em; }",
					"_CLASS_ .news-cell-text { margin-left: 15em; }",
					"@media screen and (max-width:760px) {",
					"	_CLASS_ .news-row { padding:0.75em 1em 1em 1em; }",
					"	_CLASS_ .news-cell-date { display: inline-block;float:none;	width: auto; margin: 0.5em 0;}",
					"	_CLASS_ .news-cell-category {display: inline-block; float:none;	width:auto;margin: 0.5em 0; }",
					"	_CLASS_ .news-cell-text {  margin-left: 0; }",
					"}",
				],
				[
					"_CLASS_ {_FS_;width: 100%; margin: _1.0_ 0 _2.0_ 0;line-height: 1.4;border-top: 1px solid #ddd;}",
					"_CLASS_ .news-row { border-bottom: 1px solid #ddd;padding: _1.0_ 0 _1.0_ 0; }",
					"_CLASS_ .news-cell-date { display: none; }",
					"_CLASS_ .news-cell-category { float:left; width:7em; }",
					"_CLASS_ .news-cell-text { margin-left: 8em; }",
					"_CLASS_ .news-date2 { display: inline; }",
					"@media screen and (max-width:760px) {",
					"	_CLASS_ .news-row { padding: 0.75em 1em 1em 1em; }",
					"	_CLASS_ .news-cell-date { display: inline-block;float:none;	width: auto; margin: 0.5em 0;}",
					"	_CLASS_ .news-cell-category {display: inline-block; float:none;	width:auto;margin: 0.5em 0; }",
					"	_CLASS_ .news-cell-text {  margin-left: 0; }",
					"}",
				],
				[
					"_CLASS_ {_FS_; background: #f7f7f7;margin: _1.0_ 0 _2.0_ 0;line-height: 1.4;}",
					"_CLASS_ .news-row {border-bottom: 2px solid #fff; margin: 2px 0;padding: _1.0_ _0.5_ _1.0_ _1.0_; }",
					"_CLASS_ .news-cell-date { float:left; width: 7em; }",
					"_CLASS_ .news-cell-category { float:left; width:7em; }",
					"_CLASS_ .news-cell-text { margin-left: 15em; }",
					"@media screen and (max-width:760px) {",
					"	_CLASS_ .news-row { padding: 0.75em 1em 1em 1em; }",
					"	_CLASS_ .news-cell-date { display: inline-block;float:none;	width: auto; margin: 0.5em 0;}",
					"	_CLASS_ .news-cell-category {display: inline-block; float:none;	width:auto;margin: 0.5em 0; }",
					"	_CLASS_ .news-cell-text {  margin-left: 0; }",
					"}",
				],
				[
					"_CLASS_ {_FS_; background:_BGC_;color:#fff;margin: _1.0_ 0 _2.0_ 0;line-height: 1.4; }",
					"_CLASS_ a{ color:#fff; }",
					"_CLASS_ .news-row {border-bottom: 2px solid #fff; margin: 2px 0;padding: 1em 0.4em 1em 0.8em; }",
					"_CLASS_ .news-cell-date { float:left; width: 7em; }",
					"_CLASS_ .news-cell-category { float:left; width:7em; }",
					"_CLASS_ .news-cell-text { margin-left: 15em; }",
					"@media screen and (max-width:760px) {",
					"	_CLASS_ .news-row { padding: 0.75em 1em 1em 1em; }",
					"	_CLASS_ .news-cell-date { display: inline-block;float:none;	width: auto; margin: 0.5em 0;}",
					"	_CLASS_ .news-cell-category {display: inline-block; float:none;	width:auto;margin: 0.5em 0; }",
					"	_CLASS_ .news-cell-text {  margin-left: 0; }",
					"}",
				]
			]
		}
	]
}
datas.dl = {
	id:"dl",
	selector:".cms-qa",
	name:"Q&Aリスト &lt;dl&gt;",
	text:'<dl class="_CLASSNAME_"> <dt>Q.サンプルの文書です？</dt> <dd>サンプルの文書ですので、ご注意ください。サンプルの文書ですので、ご注意ください。サンプルの文書ですので、ご注意ください。サンプルの文書ですので、ご注意ください。サンプルの文書ですので、ご注意ください。<br><a href="#" target="_blank" class="btn_lightglay btn_size_S ">さらに詳しく <i class="fa fa-arrow-right"></i></a></dd> <dt>Q.サンプルの文書ですので、ご注意ください。？</dt> <dd>サンプルの文書ですので、ご注意ください。サンプルの文書ですので、ご注意ください。</dd> <dt>Q.サンプルの文書ですので、ご注意ください。サンプルの文書ですので、ご注意ください。？</dt> <dd>サンプルの文書ですので、ご注意ください。サンプルの文書ですので、ご注意ください。サンプルの文書ですので、ご注意ください。サンプルの文書ですので、ご注意ください。サンプルの文書ですので、ご注意ください。</dd> <dt>Q.サンプルの文書ですので、ご注意ください。？</dt> <dd>サンプルの文書ですので、ご注意ください。サンプルの文書ですので、ご注意ください。サンプルの文書ですので、ご注意ください。</dd> </dl>',
	size:{ ss:10, s:12, m:14, l:16, ll:20 },
	list:[
		{
			label:"基本",
			list:[
				[
					"_CLASS_ {_FS_; line-height: 1.8; margin: _1.0_ 0 _2.0_ 0;}",
					"_CLASS_ dt { clear: both;}",
					"_CLASS_ dt { font-weight: bold; margin: _0.5_ 0 0 0; border-bottom: 2px solid #ddd; padding: _0.5_ 0 _0.5_ 0;}",
					"_CLASS_ dd { padding: _1.0_ 0 0 _2.0_; margin: 0 0 _2.0_ 0;}",
					"_CLASS_ dd:before { font-family: 'FontAwesome'; content: '\\f061'; margin: 0 0.5em 0 -1.5em;}",
				],
				[
					"_CLASS_ {_FS_; line-height: 1.8; margin: _1.0_ 0 _2.0_ 0;}",
					"_CLASS_ dt { font-weight: bold; margin: _0.5_ 0 0 0; border-bottom: 2px solid #ddd; padding: _1.0_; background: #f7f7f7;}",
					"_CLASS_ dd { padding: _1.0_ 0 0 _2.0_; margin: 0 0 _2.0_ 0;}",
					"_CLASS_ dd:before { font-family: 'FontAwesome'; content: '\\f061'; margin: 0 4px 0 -1.5em;}",
				],
				[
					"_CLASS_ {_FS_; line-height: 1.8; margin: _1.0_ 0 _2.0_ 0;}",
					"_CLASS_ dt { font-weight: bold; margin: _0.5_ 0 0 0; padding:_1.0_; background: _BGC_; color: #fff; border-radius: 5px 5px 0 0;}",
					"_CLASS_ dd { padding: _1.0_; margin: 0 0 _1.0_ 0; background: _BGC[0.05]_; border-radius: 0 0 5px 5px;}",
				],
				[
					"_CLASS_ {_FS_; line-height: 1.8; margin: _1.0_ 0 _2.0_ 0;}",
					"_CLASS_ dt { font-weight: bold; margin: _0.5_ 0 0 0; padding: _1.0_; border: 1px solid #ddd; border-bottom: 1px solid #ddd; border-radius: 5px 5px 0 0;}",
					"_CLASS_ dd { padding: _1.0_; margin: 0 0 _1.0_ 0; border: 1px solid #ddd; border-top: none; border-radius: 0 0 5px 5px;}",
				],
				[
					"_CLASS_ {_FS_; line-height: 1.8; margin: _1.0_ 0 _2.0_ 0;}",
					"_CLASS_ a{color:#fff;}",
					"_CLASS_ dt { background: _BGC_; color:#fff; font-weight: bold; margin: _0.5_ 0 0 0; padding: _1.0_; border-bottom: 1px solid #ddd; border-radius: 5px 5px 0 0;}",
					"_CLASS_ dd { background: _BGC_; color:#fff; padding: _1.0_; margin: 0 0 _1.0_ 0; border-radius: 0 0 5px 5px;}",
				],
			]
		}
	]
}
datas.tab = {
	id:"tab",
	selector:".cms-tab",
	name:"タブリスト &lt;ul&gt;",
	text:'<ul class="_CLASSNAME_ clearfix"> <li style="" data="tab01" class="active _btn_default ">タブ01</li> <li style="" data="tab02" class="_btn_default ">タブ02</li> <li style="" data="tab03" class="_btn_default ">タブ03</li> </ul>',
	size:{ ss:10, s:12, m:14, l:16, ll:20 },
	list:[
		{
			label:"基本",
			list:[
				[
					"_CLASS_ {_FS_; border-bottom: 1px solid #999;margin: _1.0_ 0 _1.0_ 0; }",
					"_CLASS_ li { display: inline-block; padding: _1.0_ _2.0_; margin: 2px 2px 0 0; margin-bottom: -1px; border-bottom: none; background: #f7f7f7; border-bottom: 1px solid #999; border-radius: 5px 5px 0 0; }",
					"_CLASS_ .active { background: #fff; border: 1px solid #999; border-bottom: 1px solid #fff; }",
				],
				[
					"_CLASS_ {_FS_;background:_BGC_;padding:10px 10px 0 10px;margin: _1.0_ 0 _1.0_ 0;border-radius: 5px 5px 0 0; }",
					"_CLASS_ li { display: inline-block; padding: _1.0_ _2.0_; margin: 2px 2px 0 0; color:#fff;border-radius: 5px 5px 0 0;}",
					"_CLASS_ .active {color:#000; background: #fff; }",
				],
				[
					"_CLASS_ {_FS_; border-bottom: 1px solid #999;margin: _1.0_ 0 _1.0_ 0; }",
					"_CLASS_ { border: none;margin: _1.0_ 0 _1.0_ 0; }",
					"_CLASS_ li { display: inline-block; padding: _1.0_ _2.0_; margin: 2px 2px 0 0; background: #f7f7f7; _RAD_; }",
					"_CLASS_ .active { background: _BGC_; color: #fff; }",
				],
				[
					"_CLASS_ {_FS_;border-bottom: 1px solid #999;margin: _1.0_ 0 _1.0_ 0; }",
					"_CLASS_ { border: none; margin: _1.0_ 0 _1.0_ 0;}",
					"_CLASS_ li { display: inline-block; padding: _1.0_ _2.0_; margin: 2px 2px 0 0; background: _BGC_; color: #fff; _RAD_; }",
					"_CLASS_ .active { background: #f7f7f7; color: #333; }",
				],
			]
		}
	]
}
datas.talk = {
	id:"talk",
	selector:".cms-talk",
	name:"インタビュー &lt;div&gt;",
	text:'<table class="_CLASSNAME_"> <tr> <th><img src="" class="cms_mock_image " alt="" data-src="width:50,height:50">田中</th> <td>サンプルの文書ですので、ご注意ください。サンプルの文書ですので、ご注意ください。サンプルの文書ですので、ご注意ください。サンプルの文書ですので、ご注意ください。サンプルの文書ですので、ご注意ください。サンプルの文書ですので、ご注意ください。</td> </tr> <tr> <th><img src="" class="cms_mock_image " alt="" data-src="width:50,height:50">田中</th> <td>サンプルの文書ですので、ご注意ください。サンプルの文書ですので、ご注意ください。サンプルの文書ですので、ご注意ください。サンプルの文書ですので、ご注意ください。</td> </tr> <tr> <th><img src="" class="cms_mock_image " alt="" data-src="width:50,height:50">長谷川</th> <td>サンプルの文書ですので、ご注意ください。サンプルの文書ですので、ご注意ください。サンプルの文書ですので、ご注意ください。サンプルの文書ですので、ご注意ください。<br><br>サンプルの文書ですので、ご注意ください。サンプルの文書ですので、ご注意ください。サンプルの文書ですので、ご注意ください。サンプルの文書ですので、ご注意ください。サンプルの文書ですので、ご注意ください。サンプルの文書ですので、ご注意ください。サンプルの文書ですので、ご注意ください。サンプルの文書ですので、ご注意ください。</td> </tr> <tr> <th><img src="" class="cms_mock_image " alt="" data-src="width:50,height:50">田中</th> <td>サンプルの文書ですので、ご注意ください。サンプルの文書ですので、ご注意ください。</td> </tr> </table> ',
	size:{ ss:10, s:12, m:14, l:16, ll:20 },
	list:[
		{
			label:"基本",
			list:[
				[
					"_CLASS_ {_FS_;line-height: 1.8 ;margin: _1.0_ 0 _2.0_ 0;}",
					"_CLASS_ th { width: 4em; padding: 0 0 _1.0_ 0; text-align: center; }",
					"_CLASS_ th img { display: block; margin: 0 auto 5px auto; }",
					"_CLASS_ td { padding: 0 0 _1.0_ _1.0_ }",
				],
				[
					"_CLASS_ {_FS_;line-height: 1.8 ;margin: _1.0_ 0 _2.0_ 0;}",
					"_CLASS_ th { width: 4em; font-weight: bold; padding: _1.0_ 0 _1.0_ 0; border-top: 2px solid #ddd; }",
					"_CLASS_ th img { display: none }",
					"_CLASS_ td { padding: _1.0_ 0 _1.0_ _1.0_; border-top: 2px solid #ddd; }",
				],
				[
					"_CLASS_ {_FS_;line-height: 1.8 ;margin: _1.0_ 0 _2.0_ 0;}",
					"_CLASS_ th { width: 4em; font-weight: bold; padding: _1.0_ 0 _1.0_ _1.0_; border-top: 2px solid #fff; background: #f7f7f7; border-radius: 10px 0 0 10px;}",
					"_CLASS_ th img { display: none }",
					"_CLASS_ td { padding: _1.0_ ; border-top: 2px solid #fff; background: #f7f7f7; border-radius: 0 10px 10px 0;}",
				],
			]
		}
	]
}

datas.layout = {
	id:"layout",
	selector:".cms-layout",
	name:"コンテナ &lt;div&gt;",
	text:'',
	size:{  },
	list:[ { label:"基本", list:[
		
		] } ]
}
datas.cols = {
	id:"cols",
	selector:".cms-layout-table",
	name:"段組み &lt;table&gt;",
	text:'',
	size:{  },
	list:[ { label:"基本", list:[] } ]
}
datas.btn = {
	id:"btn",
	selector:".cms-btn",
	name:"ボタン &lt;div&gt;",
	text:'',
	size:{  },
	list:[ { label:"基本", list:[] } ]
}
datas.btns = {
	id:"btns",
	selector:".cms-btns",
	name:"ボタンリスト &lt;div&gt;",
	text:'',
	size:{  },
	list:[ { label:"基本", list:[] } ]
}
datas.img = {
	id:"img",
	selector:".cms-img",
	name:"画像 &lt;img&gt;",
	text:'',
	size:{  },
	list:[ { label:"基本", list:[] } ]
}
datas.images = {
	id:"images",
	selector:".cms-images",
	name:"画像リスト &lt;div&gt;",
	text:'',
	size:{  },
	list:[ { label:"基本", list:[] } ]
}

datas.socials = {
	id:"socials",
	selector:".cms-socials",
	name:"シェアボタン",
	text:'',
	size:{  },
	list:[ { label:"基本", list:[] } ]
}
datas.feed = {
	id:"feed",
	selector:".cms-feed",
	name:"RSSフィード",
	text:'',
	size:{  },
	list:[ { label:"基本", list:[] } ]
}

datas.slider = {
	id:"slider",
	selector:".cms-slider-simple",
	name:"スライド-シンプル",
	text:'',
	size:{  },
	list:[ { label:"基本", list:[] } ]
}
datas.carrousel = {
	id:"carrousel",
	selector:".cms-slider-carrousel",
	name:"カルーセル",
	text:'',
	size:{  },
	list:[ { label:"基本", list:[] } ]
}
datas.formmail = {
	id:"formmail",
	selector:".cms-form-mail",
	name:"メールフォーム",
	text:'',
	size:{  },
	list:[ { label:"基本", list:[] } ]
}
datas.navi = {
	id:"navi",
	selector:".cms-navi",
	name:"ナビゲーション",
	text:'',
	size:{  },
	list:[ { label:"基本", list:[] } ]
}
/*
datas._test = {
	id:"_test",
	selector:".cms-test",
	name:"TEST &lt;table&gt;",
	text:'<div>_CLASSNAME_</div>',
	size:{ ss:10, s:12, m:14, l:16, ll:20 },
	list:[
		{
			label:"基本",
			list:[
				[
					"_CLASS_ {margin: _1.0_ 0 _1.0_ 0; border-top: 1px solid #ddd;}",
				],
				[
					"_CLASS_ {margin: _1.0_ 0 _1.0_ 0; }",
				],
			]
		}
	]
}*/


for (var n in datas) {
	datas[n].hasData = (datas[n].list[0].list.length > 0) ? true:false;
}
/*
_FS_;_RAD_
*/