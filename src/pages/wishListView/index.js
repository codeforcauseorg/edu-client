import React from 'react'
import WishlistCard from '../../components/wishlistCard'
import { List, ListItem, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  ul: {
    padding: "0 0 3rem 0"
  },
  li: {
    padding: '1rem 0px'
  }
}))

const WishListView = () => {
  const classes = useStyles();

  return <List className={classes.ul}>
    {[1, 2, 3].map((item, index) => {
      return <ListItem key={index} className={classes.li} >
        <WishlistCard />
    </ListItem>
  })}
      
  </List >
}

export default WishListView;