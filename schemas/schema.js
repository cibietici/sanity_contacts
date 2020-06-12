import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'
export default createSchema({
  name: 'Person',
  types: schemaTypes.concat([
    {
      title: "Person",
      name: "person",
      type: "document",
      fields: [
        {
          title: "ID",
          name: "id",
          type: "string",
        },
        {
          title: "Name",
          name: "name",
          type: "string",
        },
        {
          title: "Surname",
          name: "surname",
          type: "string",
        },
        {
          title: "Profile photo",
          name: "profile_photo",
          type: "image",
        }
      ]
    }
    
  ])
})
