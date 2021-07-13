<template>
  <Page actionBarHidden="true" backgroundColor="gray">
    <StackLayout>
      <!-- actionbar -->
      <StackLayout
        id="box1"
        orientation="horizontal"
        backgroundColor="white"
        height="70"
      >
        <Image :src="obj.avatar" width="50" height="50" />
        <Label :text="obj.name" id="text" />
      </StackLayout>
      <!-- content chat -->
      <!-- dk1 if chat ==0 show icon -->
      <StackLayout
        backgroundColor="white"
        height="75%"
        v-if="obj['chat'].length === 0"
      >
        <Image
          src="~/assets/hand.png"
          horizontalAlignment="center"
          width="100"
          height="100"
        />
      </StackLayout>
      <!-- else -->
      <StackLayout backgroundColor="white" height="75%" v-else>
        <ListView for="item_chat in obj['chat']" separatorColor="white">
          <v-template>
            <StackLayout>
              <!-- setting user is Luan -->
              <StackLayout v-if="item_chat.name === 'Luan'">
                <StackLayout
                  class="container"
                  horizontalAlignment="right"
                  orientation="horizontal"
                >
                  <Label :text="item_chat.message" />
                  <Image :src="item_chat.img" width="50" height="50" />
                </StackLayout>
              </StackLayout>
              <!-- user khac -->
              <StackLayout v-else>
                <StackLayout
                  class="container"
                  horizontalAlignment="left"
                  orientation="horizontal"
                >
                  <Image :src="item_chat.img" width="50" height="50" />
                  <Label :text="item_chat.message" />
                </StackLayout>
              </StackLayout>
            </StackLayout>
          </v-template>
        </ListView>
      </StackLayout>
      <!-- textfile -->
      <StackLayout backgroundColor="white">
        <StackLayout orientation="horizontal">
          <TextField
            :text="textFieldValue"
            hint="message"
            id="text"
            width="60%"
          />
          <Button text="Send" @tap="onButtonTap" width="20%" id="btn" />
        </StackLayout>
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
  padding: 10;
}
image {
  border-radius: 25;
}
#text {
  margin-left: 20;
  margin-top: 18%;
  font-size: 16;
  font-weight: bold;
}
.container {
  border: 2 solid #dedede;
  background-color: #f1f1f1;
  border-radius: 5;
  margin-top: 5;
}

/* Darker chat container */
.darker {
  border-color: #ccc;
  background-color: #ddd;
  border-radius: 5;
  padding: 10;
  margin: 10 0;
}

/* Style the right image */
.right {
  margin-left: 0;
  margin-right: -50;
}
.left {
  margin-right: 10;
  margin-left: 0;
}

#text {
  font-size: 16;
  background-color: whitesmoke;
  padding: 10;
  border-radius: 5;
}
#btn {
  background-color: #3d84b8;
  color: black;
  font-size: 16;
}
</style>
