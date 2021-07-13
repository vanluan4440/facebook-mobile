<!-- List commment with user, content, avatar ---done 5/7/2021 , textfile---data from HOme[props: obj]-->
<template>
  <Page actionBarHidden="true" backgroundColor="gray">
    <StackLayout>
      <!-- stacklayout 01 -->
      <StackLayout height="85%" id="box1" backgroundColor="white">
        <ListView
          for="item in obj.comment"
          @itemTap="onItemTap"
          verticalAlignment="top"
          separatorColor="black"
        >
          <v-template>
            <StackLayout backgroundColor="white" id="list_item">
              <StackLayout orientation="horizontal" backgroundColor="white">
                <Image :src="item.img" height="25" width="25" />
                <Label :text="item.user" fontWeight="bold" />
              </StackLayout>
              <Label :text="item.content" height="70" backgroundColor="white" />
            </StackLayout>
          </v-template>
        </ListView>
      </StackLayout>
      <!-- stacklayout 02 -->
      <StackLayout
        height="10%"
        orientation="horizontal"
        backgroundColor="white"
      >
        <TextField
          :text="textFieldValue"
          hint="Comment"
          backgroundColor="gray"
          verticalAlignment="bottom"
        />
      </StackLayout>
    </StackLayout>
  </Page>
</template>
<script>
export default {
  props: ["obj"]
};
</script>
<style scoped>
#box1 {
  margin-top: 30;
}
TextField {
  padding: 10;
  border-radius: 3;
  width: 90%;
  font-size: 16;
}
#list_item {
  font-size: 16;
  height: 100;
}
</style>
