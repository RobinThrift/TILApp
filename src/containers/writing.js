// @flow
import {connect} from 'react-redux'
import {Writing as WritingComp} from '../components/writing'
import {updateDraft, addPost} from '../actions/posts'

let mapStateToProps = state => ({
    ...state.posts
})

let mapActionsToProps = {
    updateDraft,
    addPost
}

export const Writing = connect(mapStateToProps, mapActionsToProps)(WritingComp)

