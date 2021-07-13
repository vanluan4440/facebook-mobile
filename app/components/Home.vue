<!-- Tab Home done  7/4/2021
      - button Like, Comment, Share done
      - function amount like, comments,share done
    --comment page done

    Tab Freind --- done, tap img show profile
      data:
        - name: friends, data(name,avatar,btn_add:true,)

    Tab chat --done
      data:{
        name: chat
        data:{
          name,avater
          chat line new
        }
      }
    Tab search done

    tab profile done


-->
<template>
  <Page actionBarHidden="true">
    <ActionBar title="My App" />
    <StackLayout id="box" backgroundColor="#3d84b8">
      <TabView
        :selectedIndex="selectedIndex"
        iosIconRenderingMode="alwaysOriginal"
        tabBackgroundColor="#3d84b8"
      >
        <!-- Home tab -->
        <TabViewItem iconSource="~/assets/home-icon.png">
          <StackLayout>
            <ScrollView
              orientation="horizontal"
              scrollBarIndicatorVisible="false"
            >
              <ListView
                for="item in listOfItems"
                @itemTap="onItemTap"
                separatorColor="white"
                backgroundColor="white"
              >
                <v-template>
                  <card-view radius="2" width="338" height="250">
                    <stack-layout>
                      <StackLayout orientation="horizontal">
                        <Image :src="item.avatar" id="img-avatar" />
                        <Label :text="item.name" id="title" />
                      </StackLayout>
                      <Label :text="item.status" fontSize="14" />
                      <!--  <Image id="card-img" :src="item.img" stretch="none" /> -->
                      <StackLayout :backgroundImage="item.img" id="card-img">
                        <!-- img -->
                      </StackLayout>
                      <StackLayout orientation="horizontal">
                        <Label :text="'like: ' + Likes(item)" />
                        <Label :text="'comments: ' + Comments(item)" />
                        <Label :text="'shares: ' + Shares(item)" />
                      </StackLayout>
                      <StackLayout id="stack-bottom" orientation="horizontal">
                        <Button
                          :isEnabled="item.btnLike"
                          id="btn-card"
                          text="Like"
                          width="80"
                          @tap="Like(item)"
                        />
                        <Button
                          id="btn-card"
                          text="Comment"
                          width="100"
                          @tap="Comment(item)"
                        />
                        <Button
                          id="btn-card"
                          text="Share"
                          width="80"
                          @tap="Share(item)"
                        />
                      </StackLayout>
                    </stack-layout>
                  </card-view>
                  <!-- Shows the list item label in the default color and style. -->
                </v-template>
              </ListView>
            </ScrollView>
          </StackLayout>
        </TabViewItem>
        <!-- Frenid tab -->
        <TabViewItem iconSource="~/assets/checked-icon.png">
          <ScrollView orientation="horizontal">
            <ListView for="item in friends" @itemTap="onItemTap">
              <v-template>
                <StackLayout>
                  <StackLayout orientation="horizontal">
                    <Image :src="item.avatar" id="img-avatar" />
                    <Label :text="item.name" id="title" />
                  </StackLayout>
                  <StackLayout orientation="horizontal">
                    <Button text="Agree" id="btn_agreen" @tap="onButtonTap" />
                    <Button text="Remove" id="btn_remove" @tap="onButtonTap" />
                  </StackLayout>
                </StackLayout>
              </v-template>
            </ListView>
          </ScrollView>
        </TabViewItem>
        <!-- chat tab -->
        <TabViewItem iconSource="~/assets/chat-icon.png">
          <ScrollView orientation="horizontal">
            <ListView for="item_chat in chat">
              <v-template>
                <StackLayout>
                  <StackLayout orientation="horizontal" @tap="Chat(item_chat)">
                    <Image :src="item_chat.avatar" id="img-avatar" />
                    <Label :text="item_chat.name" id="title" />
                  </StackLayout>
                </StackLayout>
              </v-template>
            </ListView>
          </ScrollView>
        </TabViewItem>
        <!-- search tab -->
        <TabViewItem iconSource="~/assets/search-icon.png">
          <ScrollView orientation="horizontal">
            <StackLayout>
              <!-- searchbar -->
              <TextField
                :text="textFieldValue"
                hint="Search"
                id="search_input"
              />

              <ListView for="item in friends" @itemTap="onItemTap">
                <v-template>
                  <StackLayout>
                    <StackLayout orientation="horizontal">
                      <Image :src="item.avatar" id="img-avatar" />
                      <Label :text="item.name" id="title" />
                    </StackLayout>
                    <StackLayout orientation="horizontal">
                      <Button text="Agree" id="btn_agreen" @tap="onButtonTap" />
                      <Button
                        text="Remove"
                        id="btn_remove"
                        @tap="onButtonTap"
                      />
                    </StackLayout>
                  </StackLayout>
                </v-template>
              </ListView>
            </StackLayout>
          </ScrollView>
        </TabViewItem>
        <!-- profile tab -->
        <TabViewItem iconSource="~/assets/user-icon.png">
          <StackLayout backgroundColor="white">
            <Image :src="obj.background" />
            <Image :src="obj.avatar" width="150" heigth="150" id="avater_img" />
            <Label :text="obj.name" id="name_user" />
            <StackLayout id="content1">
              <Label id="p" :text="'Ngày sinh: ' + obj.brithday" />
              <Label id="p" :text="'Quê quán: ' + obj.hometower" />
              <Label id="p" :text="'Đang học tại: ' + obj.study" />
            </StackLayout>
          </StackLayout>
        </TabViewItem>
      </TabView>
    </StackLayout>
  </Page>
</template>

<script>
import Comment from "./Comment.vue";
import Chat from "./Chat.vue";
export default {
  props: ["obj"],
  data() {
    //data with:avatar,name,status, img,
    return {
      listOfItems: [
        {
          avatar:
            "data:image/png;base64,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",
          name: "Linda",
          status: "Good day",
          img:
            "https://images.unsplash.com/photo-1563630381190-77c336ea545a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80",
          comment: [
            {
              user: "Linka",
              img: "~/assets/user-icon.png",
              content: "Good day to"
            },
            {
              user: "Kevin",
              img: "~/assets/user-icon.png",
              content: "How are you?"
            }
          ],
          like: 12,
          share: 4,
          btnLike: "true"
        },
        {
          avatar:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYHYatK3If9pIyokNqd4HQzpUaoyE5b142_w&usqp=CAU",
          name: "Amania",
          status: "Fashion boy",
          img:
            "https://www.thefashionspot.com/assets/uploads/gallery/top-10-models-of-fashion-month_1/emmy_rappe__kane_rs16_1495.jpg",
          comment: [
            {
              user: "Linka",
              img: "~/assets/user-icon.png",
              content: "Fashion new"
            },
            {
              user: "Kevin",
              img: "~/assets/user-icon.png",
              content: "I love you <- ..->"
            }
          ],
          like: 9,
          share: 12,
          btnLike: "true"
        },
        {
          avatar:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPhVRl9XB2zQxs_1uodlMk0d0B3CAenxa2_A&usqp=CAU",
          name: "Master boy",
          status: "I am student",
          img:
            "https://images.unsplash.com/photo-1503756234508-e32369269deb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTl8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80",
          comment: [
            {
              user: "Linka",
              img: "~/assets/user-icon.png",
              content: "Me too"
            },
            {
              user: "Kevin",
              img: "~/assets/user-icon.png",
              content: "Sala is my girld Kkkk"
            },
            {
              user: "Kevin",
              img: "~/assets/user-icon.png",
              content: "Sala is my girld Kkkk"
            },
            {
              user: "Kevin",
              img: "~/assets/user-icon.png",
              content: "Sala is my girld Kkkk"
            },
            {
              user: "Kevin",
              img: "~/assets/user-icon.png",
              content: "Sala is my girld Kkkk"
            },
            {
              user: "Kevin",
              img: "~/assets/user-icon.png",
              content: "Sala is my girld Kkkk"
            },
            {
              user: "Kevin",
              img: "~/assets/user-icon.png",
              content: "Sala is my girld Kkkk"
            }
          ],
          like: 106,
          share: 3,
          btnLike: "true"
        }
      ],
      friends: [
        {
          avatar:
            "https://png.pngtree.com/png-clipart/20190903/original/pngtree-couple-boy-cute-avatar-png-image_4445471.jpg",
          name: "Talyer",
          btn_add: "true"
        },
        {
          avatar:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc4KyvjGZZH0aKk5GvAogfrj0nVGxENeh_ZXD7zYiALWoSzfdHIPrdENPEnM0AxqRnsmo&usqp=CAU",
          name: "Computer",
          btn_add: "true"
        },
        {
          avatar:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp1nRXU0udj1gSCJOMn7LBiCV7shWmhanpj0bdj22Mpfk8_WJHKsAyqJgkUTq_VnLS2k0&usqp=CAU",
          name: "Laptop",
          btn_add: "true"
        },
        {
          avatar:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWF4XIZkoRlXRYcbPBd0ANd_H3whGblRS5f5Uznr5-xYz9L3sx65jMozmAJnK9neWr3_Q&usqp=CAU",
          name: "Notro",
          btn_add: "true"
        },
        {
          avatar:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7p5kCrgQzh7_nZINW18mBo9FXa8l0gz7jZA&usqp=CAU",
          name: "Kali",
          btn_add: "true"
        },
        {
          avatar:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRALZAcoGIUr4WMJpsN3PqonWdIMd1oGXpbow&usqp=CAU",
          name: "Kevin",
          btn_add: "true"
        },
        {
          avatar:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStLwFTU6Hy8WifCD5z2sGzFqFYhr02I8659A&usqp=CAU",
          name: "Doremon",
          btn_add: "true"
        }
      ],
      chat: [
        {
          avatar:
            "https://png.pngtree.com/png-clipart/20190903/original/pngtree-couple-boy-cute-avatar-png-image_4445471.jpg",
          name: "Talyer",
          chat: [
            //user1 and user2
            {
              name: "Talyer",
              img:
                "https://png.pngtree.com/png-clipart/20190903/original/pngtree-couple-boy-cute-avatar-png-image_4445471.jpg",
              message: "Hello"
            },
            {
              name: "Talyer",
              img:
                "https://png.pngtree.com/png-clipart/20190903/original/pngtree-couple-boy-cute-avatar-png-image_4445471.jpg",
              message: "How are you"
            },
            {
              name: "Talyer",
              img:
                "https://png.pngtree.com/png-clipart/20190903/original/pngtree-couple-boy-cute-avatar-png-image_4445471.jpg",
              message: "Hi man"
            },
            {
              name: "Luan",
              img:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc4KyvjGZZH0aKk5GvAogfrj0nVGxENeh_ZXD7zYiALWoSzfdHIPrdENPEnM0AxqRnsmo&usqp=CAU",
              message: "Sorry man, I am busy"
            },
            {
              name: "Talyer",
              img:
                "https://png.pngtree.com/png-clipart/20190903/original/pngtree-couple-boy-cute-avatar-png-image_4445471.jpg",
              message: "Oke man"
            },
            {
              name: "Luan",
              img:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc4KyvjGZZH0aKk5GvAogfrj0nVGxENeh_ZXD7zYiALWoSzfdHIPrdENPEnM0AxqRnsmo&usqp=CAU",
              message: "Can you help me"
            },
            {
              name: "Luan",
              img:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc4KyvjGZZH0aKk5GvAogfrj0nVGxENeh_ZXD7zYiALWoSzfdHIPrdENPEnM0AxqRnsmo&usqp=CAU",
              message: "I have problem about computer."
            }
          ]
        },
        {
          avatar:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc4KyvjGZZH0aKk5GvAogfrj0nVGxENeh_ZXD7zYiALWoSzfdHIPrdENPEnM0AxqRnsmo&usqp=CAU",
          name: "Computer",
          btn_add: "true",
          chat: []
        },
        {
          avatar:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp1nRXU0udj1gSCJOMn7LBiCV7shWmhanpj0bdj22Mpfk8_WJHKsAyqJgkUTq_VnLS2k0&usqp=CAU",
          name: "Laptop",
          btn_add: "true",
          chat: []
        },
        {
          avatar:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWF4XIZkoRlXRYcbPBd0ANd_H3whGblRS5f5Uznr5-xYz9L3sx65jMozmAJnK9neWr3_Q&usqp=CAU",
          name: "Notro",
          btn_add: "true",
          chat: []
        },
        {
          avatar:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7p5kCrgQzh7_nZINW18mBo9FXa8l0gz7jZA&usqp=CAU",
          name: "Kali",
          btn_add: "true",
          chat: []
        },
        {
          avatar:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRALZAcoGIUr4WMJpsN3PqonWdIMd1oGXpbow&usqp=CAU",
          name: "Kevin",
          btn_add: "true",
          chat: []
        },
        {
          avatar:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStLwFTU6Hy8WifCD5z2sGzFqFYhr02I8659A&usqp=CAU",
          name: "Doremon",
          btn_add: "true",
          chat: []
        }
      ]
    };
  },

  components: { Comment, Chat },
  methods: {
    //Router
    Comment(value) {
      this.$navigateTo(Comment, {
        props: { obj: value },
        animated: true,
        transition: {
          name: "slideLeft",
          duration: 250,
          curve: "easeIn"
        }
      });
    },
    Chat(value) {
      this.$navigateTo(Chat, {
        props: { obj: value },
        animated: true,
        transition: {
          name: "slideLeft",
          duration: 250,
          curve: "easeIn"
        }
      });
    },

    //function
    Likes(item) {
      return item["like"];
    },
    Comments(item) {
      var i = 0;
      item["comment"].forEach(element => {
        i += 1;
      });
      return i;
    },
    Shares(item) {
      return item["share"];
    },
    //button action
    Like(item) {
      item["like"] += 1;
      item["btnLike"] = "false";
    },
    Share(item) {
      alert({
        title: "Share Post",
        message: "You have successfully shared the post of " + item["name"],
        okButtonText: "Ok"
      }).then(() => {
        console.log("Alert dialog closed");
      });
      item["share"] += 1;
    }
  }
};
</script>

<style scoped>
#bar {
  background-color: #3d84b8;
  width: 100%;
  padding: 0;
}
#box {
  margin-top: 30;
}

Page {
  background-color: rgb(202, 209, 209);
}

ScrollView {
  background-color: white;
}
#title {
  font-size: 18;
  font-weight: bold;
}
#card-img {
  height: 350;
  margin-top: 10;

  border-radius: 2;
  background-size: 100%;
  background-repeat: no-repeat;
  background-origin: border-box;
}
card-view {
  margin-bottom: 10;
  margin: 2;
}
#stack-bottom {
  background-color: #3c495e;
  height: 60;
  border-radius: 3;
  margin-bottom: 5;
}
#btn-card {
  margin-left: 6;
}
#img-avatar {
  height: 50;
  width: 50;
  border-radius: 25;
  padding: 1;
  background-color: black;
}
#btn_agreen {
  background-color: #3d84b8;
  width: 135;
  color: white;
  font-size: 16;
  font-weight: bold;
}
#btn_remove {
  width: 135;
  background-color: red;
  color: black;
  font-size: 16;
  font-weight: bold;
}
#background {
  background-repeat: no-repeat;
}
#avater_img {
  margin-top: -90;
}
#name_user {
  margin-top: 10;
  text-align: center;
  font-size: 24;
  font-weight: bold;
  border-radius: 75;
}
#p {
  text-align: center;
  font-size: 18;
  padding: 20;
  margin-top: 10;
  border-style: solid;
  background-color: #bccde7;
  border-radius: 5;
}
#content1 {
  padding: 10;
}
#search_input {
  height: 25;
  background: #bccde7;
  border-radius: 5;
}
</style>
