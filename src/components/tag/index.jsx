import style from './tag.module.scss'


function Tag({ tag }) {
    return (
        <div className={ style.tag }>
            <span>{ tag }</span>
        </div>
    )
}

export default Tag