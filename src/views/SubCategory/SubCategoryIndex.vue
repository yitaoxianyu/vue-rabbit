<script setup>
import { onMounted, ref,reactive } from 'vue'
import { useRoute } from 'vue-router'
import { getSubCategoryAPI,getSubCategoryGoodsAPI } from '@/apis/categroy'
import GoodsItem from '../Home/components/GoodsItem.vue'
//面包屑数据
const route = useRoute()
const subCategoryData = ref({})
const data = reactive({
  categoryId : route.params.id,
  pageSize : 20,
  page : 1,
  sortField : 'publishTime',
})
const goodsList = ref([])
const disabled = ref(false)
onMounted(async () => {
  const res = await getSubCategoryAPI(route.params.id)
  subCategoryData.value = res.result
})

onMounted(async () => {
  const res = await getSubCategoryGoodsAPI(data)
  goodsList.value = res.result.items
})

const handleTabChange = async() => {
  data.page = 1;
  const res = await getSubCategoryGoodsAPI(data)
  goodsList.value = res.result.items
}
const handleInfiniteScroll = async() => {
  data.page ++;
  const res = await getSubCategoryGoodsAPI(data)
  if(res.result.items.length === 0){
    disabled.value = true;
  }else{
    goodsList.value = [...goodsList.value,...res.result.items]
  }
}


</script>

<template>
  <div class="container">
    <!-- 面包屑 -->
    <div class="bread-container">
      <el-breadcrumb separator=">">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: `/category/${subCategoryData.parentId}` }"
          >{{ subCategoryData.parentName }}
        </el-breadcrumb-item>
        <el-breadcrumb-item>{{ subCategoryData.name }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="sub-container">
      <el-tabs v-model="data.sortField" @tab-change="handleTabChange">
        <el-tab-pane label="最新商品" name="publishTime"></el-tab-pane>
        <el-tab-pane label="最高人气" name="orderNum"></el-tab-pane>
        <el-tab-pane label="评论最多" name="evaluateNum"></el-tab-pane>
      </el-tabs>
      <div class="body" v-infinite-scroll="handleInfiniteScroll" v-infinite-disable="disabled">
        <GoodsItem v-for="good in goodsList" :key="good.id" :goods="good"></GoodsItem>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bread-container {
  padding: 25px 0;
  color: #666;
}

.sub-container {
  padding: 20px 10px;
  background-color: #fff;

  .body {
    display: flex;
    flex-wrap: wrap;
    padding: 0 10px;
  }

  .goods-item {
    display: block;
    width: 220px;
    margin-right: 20px;
    padding: 20px 30px;
    text-align: center;

    img {
      width: 160px;
      height: 160px;
    }

    p {
      padding-top: 10px;
    }

    .name {
      font-size: 16px;
    }

    .desc {
      color: #999;
      height: 29px;
    }

    .price {
      color: $priceColor;
      font-size: 20px;
    }
  }

  .pagination-container {
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }
}
</style>
