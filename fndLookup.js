module.exports = (sequelize, DataTypes) => {
    const lookupvalue = sequelize.define('lookupvalue', {
        lookup_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false },
        org_id        : { type: DataTypes.INTEGER },
        lookup_code   : { type: DataTypes.INTEGER },
        enable_flag   : { type: DataTypes.BOOLEAN },
        created_by    : { type: DataTypes.UUID },
        updated_by    : { type: DataTypes.UUID }
    },
    {
        freezeTableName: true,
    });

    return lookupvalue;
};

