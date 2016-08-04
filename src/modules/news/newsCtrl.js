'use strict';

/* Controllers */

angular.module('app.news', [])
  .controller('NewsController', ['$scope', function($scope) {

    $scope.data = [{
      title: 'Pokemon Go Latam',
      title2: 'Lorem ipsum Ullamco commodo Excepteur.',
      date: 'Aug 04, 2016',
      img: true,
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis asperiores assumenda eius fugiat officiis sequi provident temporibus impedit cum, atque esse autem laboriosam odit vel beatae. Maxime ipsum, eos assumenda!',
      likes: 10,
      watched: false
    }, {
      title: 'New Ipad',
      title2: 'Lorem ipsum Ullamco commodo Excepteur.',
      date: 'Feb 22, 2016',
      description: 'Lorem ipsum Eu deserunt dolore sed. Lorem ipsum Id velit in amet commodo deserunt pariatur reprehenderit dolore in exercitation dolore in culpa ex.',
      likes: 100,
      watched: false
    }, {
      title: 'Asus Zenfone2',
      title2: 'Lorem ipsum Ullamco commodo Excepteur.',
      date: 'Jan 22, 2016',
      img: true,
      description: 'Lorem ipsum Magna culpa eu anim quis nulla laborum exercitation officia ut minim ut est officia qui reprehenderit mollit in magna minim.',
      likes: 60,
      watched: false
    }, {
      title: 'Learn PostCss',
      title2: 'Lorem ipsum Ullamco commodo Excepteur.',
      date: 'Feb 14, 2016',
      img: true,
      description: 'Lorem ipsum In minim exercitation ut exercitation ullamco aliqua dolor ullamco nulla eiusmod Ut Duis Duis deserunt est ad in eu ex nisi anim veniam quis labore aute Excepteur nisi id. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla incidunt modi cupiditate sint. Impedit inventore natus hic quae iure dolores neque excepturi, rerum fugit corporis in, eos non repudiandae ab.',
      likes: 20,
      watched: true
    }, {
      title: 'Web future',
      title2: 'Lorem ipsum Ullamco commodo Excepteur.',
      date: 'May 01, 2015',
      img: true,
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi adipisci nihil nobis labore ratione sed ut obcaecati sunt doloribus cupiditate explicabo iste officiis saepe tempora, nostrum nemo animi et quaerat!',
      likes: 4,
      watched: false
    }, {
      title: 'Javasript is the presen and future',
      title2: 'Lorem ipsum Ullamco commodo Excepteur.',
      date: 'Jun 01, 2016',
      img: true,
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui ipsa, quos architecto recusandae exercitationem autem animi quas laudantium ab odit perspiciatis nulla, molestiae hic excepturi sed asperiores placeat perferendis dignissimos.',
      likes: 200,
      watched: false
    }];

  }]);
