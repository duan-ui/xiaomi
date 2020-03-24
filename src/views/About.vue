<template>
  <div class="about">
    <!-- <van-pull-refresh v-model="isLoading" @refresh="getJoks(2)">
    <div class="pannel" v-for="item in joks" :key="item.docid">
        <h3>{{item.title}}</h3>
        <p>{{item.summary}}</p>
    </div>
    </van-pull-refresh>
    <div style="margin:15px;">
      <van-button type="primary" block @click="getJoks(1)">加载更多</van-button>
    </div> -->
    <h3 v-for="(item,index) in movies" :key="index">
      {{item.MovieName}}  --票房:{{item.amount}}万
    </h3>
      <input type="file" ref="file"> <button @click="upImg">上传</button>
      <img :src="pic" v-if="pic" width="200" alt="">
      <h1>{{add}}</h1>
      <h3 v-for="(item,index) in feiyan" :key="index">{{item.one_level_area}} {{item.sure_cnt}}</h3>
  </div> 
</template>
<style>
  .pannel{
    margin: 15px;
    box-shadow: 0 3px 6px #eee;
    border-radius: 8px;
    overflow: hidden;
  }
  .pannel h3{
    line-height: 44px;
    padding: 0 15px;
    font-size: 16px;
    font-weight: normal;
    background-color: #f0f0f0;
  }
  .pannel p{
    line-height: 1.8;
    font-size: 14px;
    color: #777;
    padding: 15px;
  }
</style>
<script>
import jsonp from '../assets/js/jsonp'
export default {
  data(){return {
    joks:[],
    page:1,
    isLoading:false,
    movies:[],
    pic:'',
    add:'',
    feiyan:'',
    }},
  created(){
    this.getJoks();
    this.getMovies();
    this.getAdd();
    this.getFeiyan();
  },
  methods:{
    getFeiyan(){
      // this.$http.get("http://localhost:8080/special.json")
      this.$http.get("http://localhost:8080/feiyan/special?uc_param_str=pccplomi&feiyan=1&district=1&tabStart=0&tabEnd=1&tabBrief=1&aid=3804775841868884355")
      .then(res=>{
        this.feiyan = res.data.data.feiyan.cities
        .filter(item=>item.country!="中国")
        .sort((a,b)=>a.sure_cnt>b.sure_cnt?-1:1);
      })
      .catch(err=>{
        console.log("err",err);
      })
    },
    getAdd(){
      jsonp("http://api.map.baidu.com/location/ip?ak=I5p02PxH5e459CAk9vt4elbXNTkgfxde",{},
      (err,data)=>{
        this.add = data.content.address;
      })
    },
    upImg(){
      let file = this.$refs.file.files[0];
      let data = new FormData();
      data.append('file',file);
      let configs = {
        headers:{'Content-Type':'multipart/form-data'}
      }
      this.$http({
        method:'post',
        url:'/ajax/file.php',
        data,
        configs
      })
      .then(res=>{
        console.log(res);
        if(res.data.error==0){
          this.pic = 'http://www.520mg.com'+res.data.pic;
          this.$refs.file.value='';
        }
      })
    },
    getMovies(){
      this.$http.post(
      "http://www.endata.com.cn/API/GetData.ashx", 
      "MethodName=BoxOffice_GetPcHomeList",
        {headers:{"Content-Type":"application/x-www-form-urlencoded"}}
      )
      .then(res=>{
        console.log(res.data);
        this.movies = res.data.Data.Table1.sort((a,b)=>{return a.amount>b.amount?-1:1})
      })
      .catch(err=>{
        console.log(err)
      })
    },
    getJoks(type=1){
      if(type==2){
        this.isLoading = true;
      }
      this.$http.get("http://www.520mg.com/mi/list.php?page="+this.page)
      .then(res=>{
        if(type==1){
          this.joks = this.joks.concat(res.data.result.filter(item=>item.title));
        }else if(type==2){
         this.joks = res.data.result.filter(item=>item.title).concat(this.joks);
        }
        
        this.page++;
        this.isLoading = false;
      })
      .catch(err=>{
        console.log(err);
      })
    }
  }
}
</script>
