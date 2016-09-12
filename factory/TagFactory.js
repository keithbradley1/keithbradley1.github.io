angular.module("myApp")
  .factory("TagFactory", (FirebaseFactory, AuthFactory) => {
    let currentPostId = null;

    return {
      setPostId: postId => currentPostId = postId,
      listenTags: listener => FirebaseFactory.listenTags(tags => {
        for(const tid in tags) {
          if(tags[tid].postdid !== currentPostId) {
            delete tags[tid];
          }
        }
        listener(tags);
      }),
      createTag: (newTag) =>
        FirebaseFactory.postTag(Object.assign(newTag, {uid:AuthFactory.user(), postdid:currentPostId})),

      deleteTag: id => FirebaseFactory.deleteTag(id),
      updateTag: (id, data) => db.ref(`tags/${id}`).update(data)
    };
  });
