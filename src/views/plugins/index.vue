<template>
  <div class="app-container">
    <dl v-for="item in list">
	    <dt>{{item.title}}</dt>
	    <dd v-for="v in item.val">
	      	<a class="des" :href="v.href" target="_blank">{{v.des}}</a>
	    </dd>
  	</dl>
  </div>
</template>

<style rel="stylesheet/scss" lang="scss" scoped>
	dl{
      margin-top: 30px;
      dt{
        font-size: 20px;
        font-weight: bold;
        color: #f33232;
        margin-bottom: 5px;
      }
      dd{
        line-height: 1.6;
        margin-bottom: 10px;
        .des{
          font-size: 16px;
          color: #0072ff;
        }
      }
      
    }
</style>
<script>

export default {
  data() {
    return {
    	list: [
        {
          title:'jquery相关',
          val:[
            {
              des:'dragMove',
              href:'https://github.com/vcxiaohan/jquery-plugins/tree/master/dragMove'    
            },
            {
              des:'价格格式化',
              href:'https://github.com/price-format/Jquery-Price-Format'    
            },
            {
              des:'时间选择（daterangepicker）',
              href:'http://www.daterangepicker.com/'    
            },
            {
              des:'',
              href:''    
            },
            {
              des:'',
              href:''    
            },
            {
              des:'',
              href:''    
            },
          ]
      	},
      	{
          title:'bootstrap相关',
          val:[
            {
              des:'bootstrap-select',
              href:'https://developer.snapappointments.com/bootstrap-select/'    
            },
            {
              des:'bootstrap-table',
              href:'https://bootstrap-table.com/'    
            },
            {
              des:'x-editable',
              href:'https://vitalets.github.io/x-editable/docs.html'    
            },
            {
              des:'bootstrap-file-input',
              href:'https://plugins.krajee.com/file-input'    
            },
            {
              des:'bootstrap-datetimepicker',
              href:'https://www.bootcss.com/p/bootstrap-datetimepicker/'    
            },
            {
              des:'bootstrap-table-examples',
              href:'https://github.com/wenzhixin/bootstrap-table-examples/tree/master/extensions'    
            },
          ]
      	},
      	// {
       //    title:'D3相关',
       //    val:[
       //      {
       //        des:'Echarts',
       //        href:'https://www.echartsjs.com/'    
       //      },
       //      {
       //        des:'D3',
       //        href:'https://d3js.org/'    
       //      },
       //      {
       //        des:'Antv',
       //        href:'https://antv.vision/zh'    
       //      },
       //      {
       //        des:'Highcharts',
       //        href:'https://www.highcharts.com/'    
       //      },
            
       //    ]
      	// },
      	{
          title:'vue相关',
          val:[
            {
              des:'vue-element-admin',
              href:'https://github.com/PanJiaChen/vue-element-admin'    
            },
            {
              des:'element-ui',
              href:'https://element.eleme.io/#/zh-CN'    
            },
            {
              des:'awesome-vue',
              href:'https://github.com/rumengkai/awesome-vue'    
            },
            
          ]
      	},
      	{
          title:'node相关',
          val:[
            {
              des:'',
              href:''    
            },
            {
              des:'',
              href:''    
            },
            {
              des:'',
              href:''    
            },
            
          ]
      	},
      	{
          title:'chrome扩展',
          val:[
            {
              des:'allow-cors-access-control',
              href:'https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf'    
            },
            {
              des:'axure-rp-extension',
              href:'https://chrome.google.com/webstore/detail/axure-rp-extension-for-ch/dogkpdfcklifaemcdfbildhcofnopogp'    
            },
            {
            	des:'fehelper前端助手',
            	href:'https://chrome.google.com/webstore/detail/fehelper%E5%89%8D%E7%AB%AF%E5%8A%A9%E6%89%8B/pkgccpejnmalmdinmhkkfafefagiiiad'
            },
            {
            	des:'livereload',
            	href:'https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei'
            },
            {
            	des:'postman',
            	href:'https://chrome.google.com/webstore/detail/postman-interceptor/aicmkgpgakddgnaphhhpliifpcfhicfo'
            },
            {
            	des:'proxy-switchyomega',
            	href:'https://chrome.google.com/webstore/detail/proxy-switchyomega/padekgcemlokbadohgkifijomclgjgif'
            },
            {
            	des:'set-character-encoding',
            	href:'https://chrome.google.com/webstore/detail/set-character-encoding/bpojelgakakmcfmjfilgdlmhefphglae'
            },
            {
            	des:'great-suspender',
            	href:'https://chrome.google.com/webstore/detail/the-great-suspender/klbibkeccnjlkjkiokjodocebajanakg'
            },
            {
            	des:'二维码qr码生成器',
            	href:'https://chrome.google.com/webstore/detail/%E4%BA%8C%E7%BB%B4%E7%A0%81qr%E7%A0%81%E7%94%9F%E6%88%90%E5%99%A8qr-code-generato/pflgjjogbmmcmfhfcnlohagkablhbpmg'
            },
            {
            	des:'划词翻译',
            	href:'https://chrome.google.com/webstore/detail/%E5%88%92%E8%AF%8D%E7%BF%BB%E8%AF%91/ikhdkkncnoglghljlkmcimlnlhkeamad'
            },
            {
            	des:'',
            	href:''
            },
            {
            	des:'',
            	href:''
            },
          ]
      	},
      	{
          title:'其他',
          val:[
            {
              des:'下拉框（select2）',
              href:'https://select2.org/'
            },
            {
              des:'',
              href:''    
            },
          ]
      	},
      	]
    };
  },
  methods: {}
};
</script>
