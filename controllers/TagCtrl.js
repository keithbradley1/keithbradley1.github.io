angular.module("myApp")
  .controller("TagCtrl", function(TagFactory, $timeout, PostFactory) {
    const tags = this;

    tags.editing = false;
    let editKey = null;

    TagFactory.listenTags(data => {
      tags.list = data;
      $timeout();
    });

    tags.submit = () => TagFactory.createTag(tags.newTag).then(() => tags.newTag = null);
    tags.delete = (key) => TagFactory.deleteTag(key).then(() => tags.newTag = null);
    tags.update = () => TagFactory.updateTag(editKey, tags.newTag);
    tags.edit = (key, tag) => {
      tags.editing = true;
      editKey = key;
      tags.newTag = tag;
      TagFactory.deleteTag(key);
    };


  });
