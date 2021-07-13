/* email: luan@gmail.com pass: 123 */
<template>
  <Page actionBarHidden="true">
    <ActionBar id="bar">
      <Label text="Facebook" />
    </ActionBar>
    <StackLayout id="box">
      <Image id="img" src="~/assets/facebook.png" stretch="none" />
      <TextField id="input" v-model="email" hint="Email or Phone" />
      <TextField id="input" v-model="pass" hint="Password" secure="true" />
      <Button id="btn" text="LOG IN" @tap="Login()" />
      <Label text="Sign Up for Facebook" />
      <Label text="Forgot Password" />
    </StackLayout>
  </Page>
</template>
<script>
import Home from "./Home.vue";
export default {
  components: { Home },
  data() {
    return {
      user: {
        email: "luan@gmail.com",
        pass: "123",
        name: "Van Luan",
        background:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBlFTviO--CJrEViVYUvxkLDTppUI5cwcFzfNxwYrJ9Fvc3wLMniQqAzl4FipyMkJBGX8&usqp=CAU",
        avatar: "~/assets/avatar_luan.png",

        brithday: "09/04/2001",
        hometower: "Ninh Thuận",
        study: "Trường CNTT"
      },
      email: "luan@gmail.com",
      pass: "123"
    };
  },
  methods: {
    Login() {
      if (
        this.email === this.user["email"] &&
        this.pass === this.user["pass"]
      ) {
        this.$navigateTo(Home, {
          props: { obj: this.user },
          animated: true,
          transition: {
            name: "slideLeft",
            duration: 250,
            curve: "easeIn"
          }
        });
      } else {
        alert({
          title: "Error",
          message: "Wrong email or password",
          okButtonText: "Ok"
        }).then(() => {
          console.log("Alert dialog closed");
        });
      }
    }
  }
};
</script>
<style scoped>
#box {
  width: 100%;
  height: 100%;
  background-color: #3d84b8;
  padding-top: 100;
}
TextField {
  color: #ffffff;
}
#input {
  font-size: 18;
  margin-bottom: 30;
}
#bar {
  background-color: #3d84b8;
  font-size: 54;
  font-weight: bold;
}
#img {
  height: 100;
  width: 150;
  margin-bottom: 50;
}
#btn {
  color: white;
  background-color: rgb(177, 216, 238);
  font-size: 18;
  font-weight: bold;
}
label {
  text-align: center;
  margin-top: 20;
  font-size: 12;
}
</style>
