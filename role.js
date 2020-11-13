module.exports = (sequelize, DataTypes) => {

  const role = sequelize.define('role', {
    role_id         : { type : DataTypes.UUID,primaryKey: true },
    rolename        : { type : DataTypes.STRING },
    createdAt       : { type : DataTypes.DATE,field :"date_created" },
    updatedAt       : { type : DataTypes.DATE,field :"date_modified" },
    created_by      : { type : DataTypes.UUID },
    updated_by      : { type : DataTypes.UUID }
  },{
    freezeTableName: true,
  });

  return role;
};