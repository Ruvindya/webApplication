

module.exports = (sequelize,DataTypes) =>{

    const posts = Sequelize.define("posts", {
        title:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        postText:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        userName:{
            type:DataTypes.STRING,
            allowNull:false,
        }
    }

    )
}