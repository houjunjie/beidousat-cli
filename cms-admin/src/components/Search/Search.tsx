import * as React from 'react'
// import * as ReactDOM from 'react-dom'
// import PropTypes from 'prop-types'
import { Input, Select, Button, Icon } from 'antd'
import styles from 'components/Search/Search.less'

interface Istate {
  clearVisible: boolean,
  selectValue: any,
  searchInputValue: string
}
interface Iprops {
  size: any,
  select: boolean,
  selectProps: any,
  onSearch: any,
  selectOptions: any[],
  style: any,
  keyword: string
}
// Search.propTypes = {
//   size: PropTypes.string,
//   select: PropTypes.bool,
//   selectProps: PropTypes.object,
//   onSearch: PropTypes.func,
//   selectOptions: PropTypes.array,
//   style: PropTypes.object,
//   keyword: PropTypes.string,
// }
class Search extends React.Component<Iprops, Istate> {
  public state = {
    clearVisible: false,
    searchInputValue: '',
    selectValue: (this.props.select && this.props.selectProps) ? this.props.selectProps.defaultValue : '',
  }
  public handleSearch = () => {
    const data: any = {
      keyword: this.state.selectValue
    }
    if (this.props.select) {
      data.field = this.state.selectValue
    }
    if (this.props.onSearch) {this.props.onSearch(data)}
  }
  public handleInputChange = (e: any) => {
    this.setState({
      ...this.state,
      clearVisible: e.target.value !== '',
      searchInputValue: e.target.value
    })
  }
  public handleSelectChange = (value: any) => {
    this.setState({
      ...this.state,
      selectValue: value,
    })
  }
  public handleClearInput = () => {
    // ReactDOM.findDOMNode<HTMLInputElement>(this.refs['searchInput']).value = ''
    this.setState({
      clearVisible: false,
      searchInputValue: ''
    })
    this.handleSearch()
  }
  public render () {
    const {
      size, select, selectOptions, selectProps, style, keyword,
    } = this.props
    const { clearVisible } = this.state
    return (
      <Input.Group compact={true} size={size} className={styles.search} style={style}>
        {select && <Select onChange={this.handleSelectChange} size={size} {...selectProps}>
          {selectOptions && selectOptions.map((item, key) => <Select.Option value={item.value} key={key}>{item.name || item.value}</Select.Option>)}
        </Select>}
        <Input size={size} onChange={this.handleInputChange} onPressEnter={this.handleSearch} defaultValue={keyword} />
        <Button size={size} type="primary" onClick={this.handleSearch}>搜索</Button>
        {clearVisible && <Icon type="cross" onClick={this.handleClearInput} />}
      </Input.Group>
    )
  }
}


// Search.propTypes = {
//   size: PropTypes.string,
//   select: PropTypes.bool,
//   selectProps: PropTypes.object,
//   onSearch: PropTypes.func,
//   selectOptions: PropTypes.array,
//   style: PropTypes.object,
//   keyword: PropTypes.string,
// }

export default Search
