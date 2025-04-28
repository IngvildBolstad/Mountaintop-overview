module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define(
        'User',
        {
            Email: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false
            },
            EncryptedPassword: {
                type: Sequelize.DataTypes.BLOB,
                allowNull: false
            },
            Salt: {
                type: Sequelize.DataTypes.BLOB,
                allowNull: false
            },
            FirstName: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false
            },
            LastName: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false
            },
            DateOfBirth: {
                type: Sequelize.DataTypes.DATEONLY,
                allowNull: false
            },
            Motherland: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false
            }
        },

    )

    // SET UP ASSOCIATIONS

    return User
}