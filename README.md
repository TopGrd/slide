# slide
响应式轮播插件

#使用方法： 
在页面中写入  

  ````
  <div class="slide">    
      <ul class="slide-container">    
          <li>    
              <a href=""><img src="img/1.png" alt=""></a>  
          </li>    
          <li>    
              <a href=""><img src="img/2.png" alt=""></a>  
          </li>    
          <li>    
              <a href=""><img src="img/3.png" alt=""></a>  
          </li>   
          <li>  
              <a href=""><img src="img/4.png" alt=""></a>  
          </li>  
      </ul>  
  </div>
  ````  
并在js中启动

    	/**
		 * 设置
		 * start: true or false 默认开始
		 * speed：2000 轮播速度 默认2000 单位：ms
		 * 
		 */
    $('.slide').slide({
          start:true,
          speed:2000
      });
