import Modal from './../src/index';

export default new Modal({
	id: 'modalId', // 所创建弹窗的id 不传可自动生成id（modal + 时间戳 + 100以内的随机数）
	zIndex: 100, // modal的层级关系，默认100
	emBase: 12, // 基准像素 parent Dom’s fontsize
	animation: {
		from: 'bottom',
		duration: '2s'
	}, // 启用动画 默认true
	parentId: 'indom', // modal的创建位置，默认创建在body下
	closable: false, // modal是否可关闭 默认true
	shouldCloseOnOverlayClick: true, // 点击背景层关闭弹窗 默认false
	style: { // 定义modal样式 {overlay: 覆盖层, content: 内容区, close: 关闭按钮}
		overlay: {
			backgroundColor: 'rgba(0,0,0,0.5)'
		},
		content: {
			backgroundColor: 'rgba(100, 100, 100, 0.2)',
			width: '19em',
			// padding: '120px',
			// 设置内容的层级关系
			zIndex: 107
		},
		close: {
			backgroundColor: 'rgba(0, 0, 0, 1)',
			width: '1em',
			height: '1em',
			top: '-3em',
			left: '50%'
		},
		// modify(修饰层)层级按照zIndex（modal的层级）以2为步值递增
		modify: [
			{
				backgroundColor: 'rgba(0, 0, 255, 0.4)',
				width: '120%',
				left: '-10%',
				height: '200px',
				border: '1px solid rgba(0, 0, 255, 0.6)',
				top: '-5em'
			},
			{
				backgroundColor: 'rgba(0, 0, 255, 0.4)',
				width: '130%',
				left: '-15%',
				height: '200px',
				border: '1px solid rgba(0, 0, 255, 0.6)',
				top: '-4em'
			}
		]
	}
});