module.exports = (sequelize, DataTypes) => {

  const accountuser = sequelize.define('accountuser', {
    user_id         : { type : DataTypes.UUID,primaryKey: true },
    emailId         : { type : DataTypes.STRING },
    org_id          : { type: DataTypes.INTEGER },
    createdAt       : { type : DataTypes.DATE,field :"date_created" },
    updatedAt       : { type : DataTypes.DATE,field :"date_modified" },
    created_by      : { type : DataTypes.UUID },
    updated_by      : { type : DataTypes.UUID }
  },{
    freezeTableName: true,
  }); 
  return accountuser;
};